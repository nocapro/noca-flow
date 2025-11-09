# Noca-Flow: Filesystem-as-State for Phased LLM Swarms

## Core Problem

Context windows are volatile, expensive memory. Passing full history to parallel agents doesn't scale. It creates context rot and massive token overhead.

## The Fix: Phased, Durable State Machine on Disk

Noca-Flow treats the filesystem as the single source of truth. State changes are atomic file operations. Agents are stateless workers executing tasks defined in YAML. The system progresses through distinct phases (`initialization`, `development`), each with its own rules and plan queue. This is a job tracker built on `mv`, `flock`, and `git`.

## Installation

This is an NPM package. Install the CLI globally.

```bash
npm install -g noca-flow
```

## Phases

The project lifecycle is broken into isolated stages. A phase is a self-contained state machine. The manager only advances to the next phase when the current one is 100% `done`.

*   **`initialization/`**: Scaffolding, boilerplate, dependency setup. Low-isolation tasks.
*   **`development/`**: Core logic, tests, refactoring. Higher need for `git worktree` isolation.

## Actors

*   **`manager.agent`**: The orchestrator. Monitors state, spawns/terminates workers (`tmux`), and promotes plans.
*   **`plan.agent`**: The scheduler. Scans `user.prompt.md`, then generates `plan.yml` files into the current phase's `plans/todo/` directory.
*   **`worker.agent`**: Ephemeral agent spawned by the manager. Executes a single plan part, updates its status, and logs verbosely.
*   **`qa.agent`**: Specialized worker. Verifies completed work against specs, tests, lint and phase rules before a plan is marked `done`.

## Workflow

1.  **Plan**: `plan.agent` creates `{phase}/plans/todo/{6digit-id}.plan.yml`.
2.  **Dispatch**: `manager.agent` moves plan to `doing/`, spawns `worker.agent` for each part.
3.  **Execute**: Worker locks plan, updates part `status` (`todo` -> `doing`), performs work, logs to `agent-log/`, and updates `status` to `review`.
4.  **Verify**: Once all parts are `review`, manager moves plan to `review/` and dispatches to `qa.agent`.
5.  **Resolve**: `qa.agent` updates part statuses to `done` or `failed`.
    *   **On Failure**: It writes a `{plan-id}.{part-id}.report.md` in the `failed/report/` directory, then updates status. Manager moves the plan to its final state.

## Directory & Naming Conventions

```
noca-flow/
├── initialization/                 # PHASE 1: Scaffolding
│   ├── plans/
│   │   ├── todo/
│   │   ├── doing/
│   │   ├── review/
│   │   ├── done/
│   │   └── failed/
│   │       └── report/
│   ├── agent-log/
│   ├── init.agent-swarm.md         # Worker logic/prompt for this phase
│   └── init.phase.rule.md          # Rules governing this phase
├── development/                    # PHASE 2: Core Logic
│   ├── plans/
│   │   ├── ... (same structure as above)
│   ├── agent-log/
│   ├── dev.agent-swarm.md
│   └── dev.phase.rule.md
├── plan.agent.md                   # Global plan generator
├── plan.prompt.md                  # Global plan generator
├── manager.agent.md                # Global orchestrator
├── user.prompt.md
```

## State Representation (YAML)

Directory is coarse state. YAML is fine-grained truth.

```yaml
# located in initialization/plans/doing/c8a2b1f0.plan.yml
plan:
  uuid: 'c8a2b1f0'
  phase: 'initialization'
  status: 'doing' # Coarse state (directory location)
  parts:
    - uuid: '9e7f8a7b'
      status: 'done' # Granular state, managed by worker
      agent_id: '463462'
      name: 'Setup ESLint config'
    - uuid: 'a1b2c3d4'
      status: 'doing' # This part is currently executing
      agent_id: '823523'
      name: 'Install base dependencies'
      isolation: false
```

## Observability: `nocaflow state`

A non-intrusive CLI for monitoring system health.

```bash
$ nocaflow state

== Noca-Flow State [2023-10-27 11:30:00] ==
Current Phase: initialization

== Phase Progress ==
[INITIALIZATION]  ▇▇▇▇▇▇---- (6/10 plans done)
[DEVELOPMENT]     ---------- (0/25 plans done)

== Phase Stats (Plans) ==
[INITIALIZATION]  todo: 1, doing: 2, review: 1, failed: 0, done: 6
[DEVELOPMENT]     todo: 25, doing: 0, review: 0, failed: 0, done: 0

== Active Agents (tmux) ==
[INIT|463462] plan:c8a2b1f0 part:9e7f8a7b (running 12m)
[INIT|823523] plan:c8a2b1f0 part:a1b2c3d4 (running 2m)

== Stalled / Failed (last 24h) ==
[FAILED] plan:f0e9d8c7 part:b5a4b3c2 - "Coverage below 80%"
         Report: initialization/plans/failed/f0e9d8c7.b5a4b3c2.report.md

== Recent Git Commits (all worktrees) ==
a4e2c1f (wt-dev-995104) feat: add initial test harness for gitignore
c3b1a0d (wt-dev-995104) fix: handle nested .gitignore files correctly
8e7f6d5 (main) chore: update dependencies
... (7 more)
```

## Tradeoffs

*   **Pro:**
    *   Massive token savings vs. full-context models.
    *   State is durable, auditable, and recoverable on disk.
    *   High parallelism for non-dependent tasks.
*   **Con:**
    *   **I/O Bound**: Performance is limited by disk speed, not inference.
    *   **Manager is SPOF**: A dead manager halts all orchestration. Requires external process supervision.
    *   **Merge Conflicts**: `git worktrees` create isolation, but merging divergent work is a hard problem this system offloads to the agents or a final manual step.