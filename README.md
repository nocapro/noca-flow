# Noca-Flow: Doc-Focused Workflow for Anti-Context-Rot Agent Swarms

Context rot is the silent killer of parallel LLM agents. Feeding full history to every instance is a token tax that doesn't scale. Noca-Task fixes this with file-based IPC and strict structure.

## Core Idea

Agents live in docs, not context windows. They breathe YAML plans, write execution logs, and communicate via filesystem. Manager delegates by mentioning paths and 6-digit IDs. No more "wait, what was I doing?" hallucinations.

## Structure

```
noca-task/
├── initialization/    # Blueprint phase: boilerplate + todo comments
│   ├── plan/todo/463462.todo.plan.yml
│   ├── agent-log/463462.log.md
│   └── init.agent-swarms.md    # Self-manages plan/ and spawns agents
├── development/       # Production phase: tests green, linting zero
│   ├── plan/doing/2145365.doing.plan.yml
│   └── dev.agent-swarms.md
├── plan.agents.md     # Generates plans from user input
├── manager.agents.md  # Claims review/, spawns sub-agents
└──
```

## Workflow

1. **Plan**: `plan.agents.md` reads prompt → dumps YAML in `initialization/plan/todo/`
2. **Claim**: `init.agent-swarms.md` grabs plan, moves to `doing/`, spawns tmux session
3. **Execute**: Agent writes log, modifies files, updates plan status
4. **Review**: Manager moves to `review/` or `done/`; spawns new agents if needed
5. **Isolate**: When `plan.parts.isolation: true`, uses git worktree for clean state

## Comms Style

All dialogue in HN netizen style. Terse. No fluff. Example:

> "Part 1 step 2 fails on nested gitignore. Pushed fix to 463462.log.md. Moved plan to review."

## Plan Format

```yaml
plan:
  uuid: 'c8a2b1f0-4d5e-4b9c-8a7f-6e5d4c3b2a1f'
  status: 'todo'
  title: 'Fix recursive gitignore'
  parts:
    - uuid: '9e7f8a7b-6c5d-4a3b-2c1d-0e9f8a7b6c5d'
      status: 'todo'
      name: 'Implement true recursive handling'
      steps:
        - uuid: 'a1b2c3d4-e5f6-4a3b-8c7d-6e5f4a9b8c7d'
          status: 'todo'
          name: '1. Introduce createProjectIgnoreFilter'
          files: ['src/lib/gitignore-parser.ts']
          operations: ['Add simpleWalk helper', 'Parse all nested .gitignore files']
      context_files:
        compact: ['src/lib/gitignore-parser.ts']
        extended: ['src/lib/gitignore-parser.ts', 'tests/']
  conclusion: 'Hardens core filesystem logic. No more context pollution.'
```

## Rules

- **IDs**: 6-digit for humans, UUID for machines. Never guess.
- **Isolation**: `false` in init/dev phases. Worktrees are for plan parts only.
- **Logs**: Timestamped, agent-scoped, `.log.md` format.
- **State**: Single source of truth is the plan YAML, not agent memory.

## Tradeoffs

FS I/O overhead vs token savings. For swarms running >10 minutes, it's a no-brainer. You pay milliseconds on disk to save thousands in context.

Now go build something that doesn't rot.
