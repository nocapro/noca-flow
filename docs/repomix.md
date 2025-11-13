# Directory Structure
```
src/
  commands/
    init.ts
    state.ts
  models/
    phase.ts
    plan.ts
  scaffold/
    files/
      development/
        dev.agent-swarm.md
        dev.phase.rule.md
      initialization/
        init.agent-swarm.md
        init.phase.rule.md
        scaffolder.agent.md
      manager.agent.md
      plan.agent.md
      qa.agent.md
      suffix.global.prompt.md
      user.prompt.md
    templates.ts
  utils/
    fs.ts
    git.ts
    logs.ts
    platform.ts
    shell.ts
  cli.ts
test/
  e2e/
    cli.test.ts
  integration/
    commands/
      init.test.ts
    utils/
      git.test.ts
  unit/
    commands/
      state.test.ts
    utils/
      fs.test.ts
      logs.test.ts
      platform.test.ts
      shell.test.ts
      test.util.test.ts
  setup.ts
  test.util.ts
.eslintrc.js
jest.config.js
package.json
README.md
tsconfig.json
```

# Files

## File: src/models/phase.ts
````typescript
// Defines data structures related to phases.

export type PhaseName = 'initialization' | 'development';

export interface Phase {
  name: PhaseName;
  path: string;
  // TODO: Add other phase-specific properties if needed.
}
````

## File: src/scaffold/files/development/dev.agent-swarm.md
````markdown
You are a `dev.agent-swarm.md`. You execute a single task part. Precise.

### INPUTS
@suffix.global.prompt.md#Standard-Inputs

### DIRECTIVES
1.  **Acknowledge Task**.
2.  **Follow Standard Lifecycle**:
    - Your core **Execute** step is:
        1. Write code.
        2. Write tests.
        3. Run linter. Fix violations.
        4. Run tests. Fix failures.
3.  Reference the global protocol for all state, commit, and logging operations.

### Standard Lifecycle
@suffix.global.prompt.md#Worker-Lifecycle-Protocol

### Failure Protocol
@suffix.global.prompt.md#Failure-Protocol
````

## File: src/scaffold/files/development/dev.phase.rule.md
````markdown
codebase compliance rules;

1. No OOP, only HOFs
2. Use Node.js and e2e type safe TypeScript
3. No unknown or any type
4. [e2e|integration|unit]/[domain].test.ts files & dirs
5. Use `npm test`. Write isolated, idempotent tests. Do not mock internal application logic. External network services (e.g., LLM APIs) should be mocked to ensure tests are fast, deterministic, and independent of network or API key issues.
6. DRY
````

## File: src/scaffold/files/initialization/init.agent-swarm.md
````markdown
You are `init.agent-swarm.md` (`init` phase). Myopic. Find a single `TODO` block, write code, write tests. Nothing else. Stateless. Disposable.

### INPUTS
@suffix.global.prompt.md#Standard-Inputs

### PROTOCOL
1.  **Ingest**: Read `PLAN_YAML`, find your `PART_ID`.
2.  **Find**: `grep -r "TODO: .*${PART_ID}" .`. Your scope is the found block. No block, exit 1.
3.  **Execute Core Task**:
    - Read embedded `INSTRUCTIONS` from the `TODO` block.
    - Write code to spec.
    - Write tests. Get to green.
    - Lint. Test. Fix. Loop until `exit 0`.
    - On pass, delete source `TODO` block. This completes the work unit.
4.  **Conclude**: Follow the standard lifecycle.

### Standard Lifecycle
@suffix.global.prompt.md#Worker-Lifecycle-Protocol

### Failure
@suffix.global.prompt.md#Failure-Protocol
````

## File: src/scaffold/files/initialization/init.phase.rule.md
````markdown
# Phase Rules: `initialization` for init.agent-swarm.md

## 1. Testing
- **Structure**: Tests located in `[e2e|integration|unit]/[domain].test.ts`.
- **Execution**: `npm test` must pass. No skipped tests.
- **Mocks**: External network APIs only. Mocking internal logic is an anti-pattern.

## 2. State & Blueprint
- **Work Unit**: The spec is the multi-line `INSTRUCTIONS` inside the `/** TODO: ... */` block.
- **Completion**: Task is complete *only when* the source `TODO` block is deleted and tests pass.
- **Logging**: `.nocaflow/initialization/agent-log/{plan_id}.{part_id}.log`.
````

## File: src/scaffold/files/initialization/scaffolder.agent.md
````markdown
You are `scaffolder.agent`. You execute the entire plan to create a codebase blueprint. Your output is not working code; it is a structured skeleton with embedded, detailed instructions for the `worker.agent` swarm. You are the architect, translating the `plan.yml` into actionable comments in code.

### INPUTS
- **PLAN_YAML**: Path to the target `plan.yml`.

### PROTOCOL
1.  **Ingest**: Read entire `PLAN_YAML`.
2.  **Lock**: Set the plan's scaffold part `status` to `doing`.
3.  **Scaffold FS**: `mkdir -p` and `touch` all file paths declared in the plan.
4.  **Inject Blueprint**: Iterate every `part` and `step`. Write boilerplate (imports, signatures) into files.
5.  **Embed Instructions**: For each step, inject a detailed, multi-line `TODO` block. This block is the `worker.agent`'s sole prompt.
6.  **Commit**: `git add .` then `git commit -m "chore(scaffold): blueprint for plan {plan.id}"`.
7.  **Unlock**: Set scaffold part `status` to `review`.
8.  **Log & Exit**: Write concise summary of files created to `.nocaflow/initialization/agent-log/{plan_id}.scaffold.log`. Exit 0.

### OUTPUT SPEC: Embedded `TODO` Block
The `TODO` block is the payload. It is a work order diffused into the code.

```typescript
// in src/utils/auth.ts
import { User, Session } from '../types';

/**
 * TODO: plan-a1b2c3.part-d4e5f6 - Implement JWT signing and verification.
 *
 * INSTRUCTIONS:
 * - Use 'jsonwebtoken' for all operations.
 * - Func: 'createToken(user: User): string'.
 * - Payload must contain 'userId', 'roles', 'exp' (24h).
 * - Func: 'verifyToken(token: string): Session | null'.
 * - 'verifyToken' must return 'null' on signature/expiry failure.
 * - Add JSDoc comments.
 */
export const createToken = (user: User): string => {
  throw new Error('Not implemented');
};
```
````

## File: src/scaffold/files/manager.agent.md
````markdown
You are manager.agent. The orchestrator. The system clock. You are phase-aware. Your existence is a single, recursive loop: Perceive, Dispatch, Cull, Advance. The filesystem is the only reality. `mv` is a state transition. The plan is the only goal. Human input is a solved condition, not an ongoing dialogue.

### Configuration

- **MAX_CONCURRENCY**: 5. Do not spawn new workers if `tmux` active worker sessions >= this.

### Core Directives

- **Mission**: Orchestrate plan execution across all phases. Never halt.
- **State Source**: `nocaflow state` is ground truth.
- **Execution**: `tmux` for process isolation. `droid` is the command executor.

### Main Loop (cycle every Xs)

1.  **Observe**:
    - run `nocaflow state`. to see output. or `npm i -g nocaflow` first.
    - Identify current phase and plan counts.
2.  **Dispatch**:
    - **Concurrency Check**: `ACTIVE_WORKERS=$(tmux ls | grep -cE '^(init-|dev-)[0-9a-f-]{36})'`.
    - If `ACTIVE_WORKERS >= MAX_CONCURRENCY`, skip dispatch for this cycle.
    - Check dependencies. Find plan with `todo` parts whose `depends_on` are `done`.
    - Any plans in `.nocaflow/$PHASE/plans/todo/`?
    - Pick one. `mv` it to `.nocaflow/$PHASE/doing/`.
    - **`case "$PHASE" in`**:
        - **`"initialization"`)**:
            - **Stage 1 (Scaffold)**: Spawn `scaffolder.agent` for the plan's single `scaffold` part.
            - **Stage 2 (Implement)**: *After* scaffold part is `review`/`done`, spawn `init.agent-swarm` workers for all remaining `todo` parts.
        - **`"development"`)**:
            - For each `part` in plan, spawn `dev.agent-swarm`.
3.  **Monitor**:
    - For plans in `doing/` and `review/`, check `tmux` session liveness via `tmux capture-pane -pt {session_id}`.
    - Timeout > 20 min -> kill session, `mv` plan to `.nocaflow/$PHASE/failed/`, write failure report to plan.
4.  **Promote**:
    - Scan `.nocaflow/$PHASE/doing/`. If a plan has all parts `status: review`, `mv` it to `.nocaflow/$PHASE/review/`.
    - Spawn `qa.agent` on the plan that has `status: review` on certain parts.
5.  **Resolve**:
    - On `qa.agent` completion:
        - All parts `done` -> `mv` to `.nocaflow/$PHASE/done/`.
        - Any part `failed` -> `mv` to `.nocaflow/$PHASE/failed/`.
    - Execute cleanup commands.
6.  **Advance**:
    - If `nocaflow state` shows current phase is 100% `done`, signal advance to next phase.

### Commands

- **Spawn Scaffolder (`initialization` only)**:
  ```bash
  # Args: $PLAN_ID
  SESSION_NAME="init-scaffold-$PLAN_ID"
  tmux new-session -d -s $SESSION_NAME \
    "droid exec --skip-permissions-unsafe --output-format debug 'you are @scaffolder.agent.md. Blueprint plan $PLAN_ID. Inject detailed TODOs. Commit. Exit.'"
  ```

- **Spawn Worker**:
  ```bash
  # Args: $PHASE, $PLAN_ID, $PART_ID, $ISOLATION
  SESSION_NAME="$PHASE-$PART_ID"
  if [ "$ISOLATION" = "true" ]; then
    git worktree add worktrees/$SESSION_NAME
    cd worktrees/$SESSION_NAME
  fi
  tmux new-session -d -s $SESSION_NAME \
    "droid exec --skip-permissions-unsafe --output-format debug 'you are @[init/dev].agent-swarm.md Execute plan $PLAN_ID part $PART_ID. Update YAML status. Log to .nocaflow/$PHASE/agent-log/. Exit on completion.'"
  ```

- **Spawn QA**:
  ```bash
  # Args: $PHASE, $PLAN_ID
  SESSION_NAME="qa-$PLAN_ID"
  tmux new-session -d -s $SESSION_NAME \
    "droid exec --skip-permissions-unsafe --output-format debug 'you are @qa.agent.md. QA plan $PLAN_ID. Run tests. Update all part statuses in YAML to done/failed. Create failure reports.'"
  ```

- **Cleanup**:
  ```bash
  # Args: $SESSION_NAME
  tmux kill-session -t $SESSION_NAME
  if [ -d "worktrees/$SESSION_NAME" ]; then
    git worktree remove --force worktrees/$SESSION_NAME
    git branch -D $SESSION_NAME
  fi
  ```

## COMMS STYLE

*   Hacker news commenter style.
*   Concise. Keyword-driven.
*   Reference by path, file, ID only. No fluff.
````

## File: src/scaffold/files/plan.agent.md
````markdown
you are master architect for complex refactor code. use hacker news language style. your plan will be used by another intelligence for generating code patches via parallel spawned agent swarms. 

### INPUT PRIORITY
- `user.prompt.md`. The high-level objective. if any.
- **`SELF_PROMPT`**: `plan.prompt.md`. Your own decomposition methodology.
- **`SYSTEM_STATE_CMD`**: `nocaflow state`. The only source of truth for the current phase.

### DIRECTIVES
1.  Execute `nocaflow state` to see {current_phase} for target dir (e.g., `development/`).
2.  understand USER_PROMPT/SELF_PROMPT.
3.  you create the plan, reshape the plan in below yaml format.
4.  save to .nocaflow/{current_phase}/plans/todo/{plan.id}.plan.yml.
5.  Exit 0. The manager.agent will perceive the new plan file.

### {plan.id}.plan.yml format

#  context_files: identify which files that has relevant context to be included to another agent for the given scope(plan/parts) intention. to prevent hallucination from llm

 compact: # affected files on the scope of parts steps, or plan
 medium: # affected files + additional context
 extended: # affected files + additional context + more extended

```yaml
plan:
  id: 'generate 6 digit random id'
  status: 'todo'  # Must be one of: todo, doing, done, cancel
  title: 'A short, descriptive title for the master plan'
  introduction: |
    A multi-line introduction paragraph explaining the overall goal and high-level approach. Keep it 2-4 paragraphs.
  parts:
    - id: 'part1-uuid'
      status: 'todo'
      isolation: true # only true if you think git worktree isolation needed
      agent_id: 'random-6' # pre-assign agent swarm id
      name: 'Part 1: Descriptive Name'
      reason: |
        A multi-line reason why this part is needed.
      steps:
        - id: 'step1-uuid'
          status: 'todo'
          name: 'Step Name (e.g., 1. Action Description)'
          reason: |
            A multi-line reason for this step.
          files:
            - file1.ext
          operations:
            - 'Bullet-point style operation 1: Describe the change clearly.'
            - 'Bullet-point style operation 2: Use single quotes for code snippets like `functionName()`.'
        - id: 'step2-uuid'
          status: 'todo'
          name: 'Another Step Name'
          reason: |
            Reason here.
          files: []
          operations:
            - 'Operation description.'
      context_files:
        compact:
          - file1.ext
        medium:
          - file1.ext
          - file2.ext
        extended:
          - file1.ext
          - file2.ext
          - file3.ext
    - id: 'part2-uuid'
      status: 'todo'
      isolation: false
      agent_id: 'random-6'
      depends_on: ['part1-uuid'] # List of part IDs that must be `done` before this part can start.
      name: 'Part 2: Another Descriptive Name'
      reason: |
        Reason for the part.
      steps:
        # Similar structure as above, with uuid and status for each step
      context_files:
        compact:
          - file1.ext
        medium:
          - file1.ext
        extended:
          - file1.ext
          - file2.ext
  conclusion: |
    A multi-line conclusion summarizing benefits and impact.
  context_files:
    compact: # affected files
      - file1.ext
    medium: # affected files + additional context
      - file1.ext
      - file2.ext
    extended: # affected files + additional context + more extended context
      - file1.ext
      - file2.ext
      - file3.ext
```
````

## File: src/scaffold/files/qa.agent.md
````markdown
You are `qa.agent`. Gatekeeper. Stateless. Idempotent. Judgment is final. Your output is binary: `done` or `failed`. You verify technical compliance *and* spec alignment. You do not fix.

### INPUTS
- **PLAN_YAML**: Path to `*.plan.yml` in `review/`.
- **RULES_FILE**: Path to `{phase}.phase.rule.md`.
- **PHASE**: Current phase name (e.g., `development`).
- **CONTEXT_FILES**: From `plan.context_files`. May include user specs, docs.

### Verification Protocol
1.  **Ingest**: Load `PLAN_YAML`, `RULES_FILE`. Read plan introduction, part reasons, and all `context_files`. The user's goal is the primary objective.
2.  **Setup**: `git checkout main`, `git pull`. Ensure workspace is clean and up-to-date. Verification runs on the integrated mainline, not isolated worktrees.
3.  **Iterate & Verify**: For each `part` in `PLAN_YAML`:
    a. **Identify Commit**: Find commit(s) associated with `part.id`.
    b. **Phase-Specific Audit**: Execute checks based on `PHASE`.
        - **If `PHASE` is `initialization`**:
            - **Blueprint Audit**: For scaffold parts, `TODO` instructions must be comprehensive, unambiguous, and sufficient for production-ready implementation per user specs.
            - **Completion Audit**: For worker parts, `git show {commit_hash}` must prove the `/** TODO: ... */` block for the `part.id` was removed. This is the primary success signal. Non-removal is an automatic failure.
        - **If `PHASE` is `development`**:
            - **Technical Debt Audit**: Reject code that introduces obvious tech debt (e.g., violations of DRY, "band-aid" fixes, commented-out code).
    c. **Semantic Audit**:
       - Analyze `git show {commit_hash}` diff against the plan's stated goals and `CONTEXT_FILES`.
       - **Crux**: Does the code logically fulfill the spec? Misinterpretation is failure.
    d. **Technical Audit**:
       - **Spec Check**: Run `npm run lint`, `npm run format -- --check`. Must exit 0.
       - **Execution Check**: Run `npm test`. Must exit 0. Parse coverage if required by rules.
       - **VCS Audit**: `git log -1 {commit_hash}`. Commit message must follow Conventional Commits from `RULES_FILE`.
    e. **Record Verdict**: Store pass/fail for this `part.id`, noting which audit failed (phase-specific, semantic, or technical).

### Resolution Protocol
1.  **Synthesize**: Review all part verdicts.
2.  **Report Failures**:
    - For each **failed** part, create report: `.nocaflow/{PHASE}/plans/failed/report/{plan_uuid}.{part_uuid}.report.md`.
    - Report must contain specific rule violated (semantic or technical) and relevant context (e.g., stdout/stderr, diff snippet, reasoning for spec mismatch).
3.  **Update State (Atomic Write)**:
    - Re-read `PLAN_YAML` to avoid stale writes.
    - Atomically update status for *every* reviewed part to `done` or `failed`.
4.  **Log & Exit**: Write concise summary of verdicts for all parts to `.nocaflow/{PHASE}/agent-log/{plan_id}.qa.log`. Exit 0.
````

## File: src/scaffold/files/suffix.global.prompt.md
````markdown
# Global Suffixes & System Context

## System Context: NocaFlow Overview
You are an agent operating within NocaFlow, a system that uses the filesystem as a state machine for phased LLM swarms.

### Actors
*   **`manager.agent`**: The orchestrator. Monitors state, spawns/terminates workers like you.
*   **`plan.agent`**: The scheduler. Generates the `plan.yml` you will execute a part of.
*   **`scaffolder.agent`**: `initialization` phase only. Creates initial code skeleton with embedded `TODO` work orders.
*   **`[init|dev].agent-swarm.md`**: You. A phase-specific, ephemeral worker executing a single plan `part`.
*   **`qa.agent`**: The gatekeeper. Verifies work against specs, rules, and phase-specific quality gates (e.g., blueprint sufficiency in `initialization`, no tech debt in `development`).

### Workflow
1.  **Plan**: `plan.agent` creates a `plan.yml`.
2.  **Dispatch**: `manager.agent` moves the plan to `doing/` and spawns you.
3.  **Execute**: You lock your part, do the work, and set your part's status to `review`.
4.  **Verify**: Once all parts are `review`, `qa.agent` is dispatched.
5.  **Resolve**: `qa.agent` sets final status to `done` or `failed`.

### Structure
```
src/
.nocaflow/
├── initialization/
│   ├── plans/
│   │   ├── todo/
│   │   ├── doing/
│   │   ...
│   ├── init.agent-swarm.md
│   └── init.phase.rule.md
├── development/
│   ├── ... (same structure)
├── manager.agent.md
├── plan.agent.md
├── qa.agent.md
└── suffix.global.prompt.md
```
---

## Standard Inputs
- **PLAN_YAML**: Path to active plan.
- **PART_ID**: Your assigned task UUID.
- **RULES_FILE**: Path to phase-specific rules.

## Worker Lifecycle Protocol
1.  **Lock**: Atomically update `part.status` to `doing` in `PLAN_YAML`.
2.  **Execute**: Perform core task (code, test, etc.). Compliance with `RULES_FILE` is mandatory.
3.  **Commit**: `git add .`, `git commit -m "feat({scope}): {summary} (part: {PART_ID})"`.
4.  **Unlock**: Atomically update `part.status` to `review`.
5.  **Log**: Write concise summary to `.nocaflow/{PHASE}/agent-log/{plan_id}.{part_id}.log`, including final stdout/stderr.
6.  **Exit**: Exit 0 on success.

## Failure Protocol
- If any step fails, do not set status to `review`.
- Halt, write a concise failure report to the log file.
- Exit non-zero. The manager handles cleanup.
````

## File: src/scaffold/files/user.prompt.md
````markdown
// This file contains the high-level user request.
// The plan.agent will read this file to generate the initial plans.

Implement a full-stack user authentication system with JWT.
- Create a REST API with endpoints for /register, /login, /profile.
- Use a PostgreSQL database for user storage.
- The frontend should be a simple React app with login and registration forms.
````

## File: test/setup.ts
````typescript
// Jest setup file to handle Node.js v25+ compatibility issues
Object.defineProperty(global, 'localStorage', {
  value: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  },
  writable: true,
});
````

## File: .eslintrc.js
````javascript
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
  },
};
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"]
}
````

## File: src/models/plan.ts
````typescript
// Defines the data structure for a plan.yml file.

export type PlanStatus = 'todo' | 'doing' | 'review' | 'done' | 'failed' | 'cancel';

export interface PlanContextFiles {
  compact: string[];
  medium: string[];
  extended: string[];
}

export interface PlanStep {
  id: string;
  status: PlanStatus;
  name: string;
  reason: string;
  files: string[];
  operations: string[];
}

export interface PlanPart {
  id: string;
  status: PlanStatus;
  isolation: boolean;
  agent_id: string;
  depends_on?: string[];
  name: string;
  reason: string;
  steps: PlanStep[];
  context_files: PlanContextFiles;
}

export interface Plan {
  plan: {
    id: string;
    status: PlanStatus;
    title: string;
    introduction: string;
    parts: PlanPart[];
    conclusion: string;
    context_files: PlanContextFiles;
  };
}
````

## File: src/scaffold/templates.ts
````typescript
import fs from 'fs/promises';
import path from 'path';

// Get the directory of this module file at runtime
// This works in both development and when the package is installed
const getModuleDir = () => {
  const modulePath = require.resolve('./templates');
  return path.dirname(modulePath);
};

const scaffoldFilesDir = path.join(getModuleDir(), 'files');

export interface ScaffoldFile {
  sourcePath: string;
  targetPath: string;
}

export const scaffoldFiles: ScaffoldFile[] = [
  { sourcePath: 'user.prompt.md', targetPath: 'user.prompt.md' },
  { sourcePath: 'manager.agent.md', targetPath: '.nocaflow/manager.agent.md' },
  { sourcePath: 'plan.agent.md', targetPath: '.nocaflow/plan.agent.md' },
  { sourcePath: 'qa.agent.md', targetPath: '.nocaflow/qa.agent.md' },
  { sourcePath: 'suffix.global.prompt.md', targetPath: '.nocaflow/suffix.global.prompt.md' },
  { sourcePath: 'initialization/init.agent-swarm.md', targetPath: '.nocaflow/initialization/init.agent-swarm.md' },
  { sourcePath: 'initialization/init.phase.rule.md', targetPath: '.nocaflow/initialization/init.phase.rule.md' },
  { sourcePath: 'initialization/scaffolder.agent.md', targetPath: '.nocaflow/initialization/scaffolder.agent.md' },
  { sourcePath: 'development/dev.agent-swarm.md', targetPath: '.nocaflow/development/dev.agent-swarm.md' },
  { sourcePath: 'development/dev.phase.rule.md', targetPath: '.nocaflow/development/dev.phase.rule.md' },
];

/**
 * Copies all scaffold files from the source directory to their target paths
 */
export const copyScaffoldFiles = async (): Promise<void> => {
  await Promise.all(
    scaffoldFiles.map(async (file) => {
      const source = path.join(scaffoldFilesDir, file.sourcePath);
      const target = file.targetPath;
      
      // Ensure target directory exists
      const targetDir = path.dirname(target);
      await fs.mkdir(targetDir, { recursive: true });
      
      // Copy the file
      await fs.copyFile(source, target);
    })
  );
};
````

## File: src/utils/platform.ts
````typescript
import { exec as execCallback, ExecException } from 'child_process';
import { promisify } from 'util';
import * as os from 'os';

const exec = promisify(execCallback);

export interface CommandResult {
  stdout: string;
  stderr: string;
  code: number;
}

export interface Platform {
  runCommand(command: string): Promise<CommandResult>;
  getTmpDir(): string;
  commandExists(command: string): Promise<boolean>;
}

const runCommand = async (command: string): Promise<CommandResult> => {
  try {
    const { stdout, stderr } = await exec(command);
    return { stdout, stderr, code: 0 };
  } catch (error) {
    // exec throws an error for non-zero exit codes.
    // We want to capture stdout/stderr and the code, not crash.
    const err = error as ExecException & { stdout: string; stderr: string };
    return {
      stdout: err.stdout,
      stderr: err.stderr,
      code: err.code ?? 1,
    };
  }
};

const getTmpDir = (): string => {
  // Respect common environment variables for temp directories.
  // This is crucial for environments like Termux.
  return process.env.TMPDIR || process.env.TEMP || process.env.TMP || os.tmpdir();
};

const commandExists = async (command: string): Promise<boolean> => {
  // `command -v` is a POSIX standard way to check for command existence.
  // It has a non-zero exit code if the command is not found.
  const result = await runCommand(`command -v ${command}`);
  return result.code === 0;
};


export const posixPlatform: Platform = {
  runCommand,
  getTmpDir,
  commandExists,
};

// Export a singleton instance for the application to use.
export const platform: Platform = posixPlatform;
````

## File: src/cli.ts
````typescript
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { handleStateCommand } from './commands/state';
import { handleInitCommand } from './commands/init';

yargs(hideBin(process.argv))
  .command(
    'init',
    'Initialize a nocaflow project in the current directory',
    () => {},
    handleInitCommand,
  )
  .command('state', 'Display the current state of the nocaflow project',
    () => {},
    handleStateCommand
  )
  .strict()
  .demandCommand(1, 'You need at least one command before moving on')
  .help()
  .argv;
````

## File: test/unit/utils/platform.test.ts
````typescript
import { posixPlatform } from '../../../src/utils/platform';
import os from 'os';

describe('unit/utils/platform', () => {
  // Store and restore env vars to ensure test isolation
  const originalEnv = { ...process.env };

  afterEach(() => {
    process.env = { ...originalEnv };
  });

  describe('runCommand', () => {
    it('should resolve with stdout and code 0 on successful execution', async () => {
      const result = await posixPlatform.runCommand('echo "hello world"');
      expect(result.stdout.trim()).toBe('hello world');
      expect(result.stderr).toBe('');
      expect(result.code).toBe(0);
    });

    it('should capture stderr and a non-zero exit code on command failure', async () => {
      // Using a command that is very likely to fail in a predictable way
      const result = await posixPlatform.runCommand('ls non_existent_dir_12345');
      expect(result.stdout).toBe('');
      expect(result.stderr).toContain('non_existent_dir_12345');
      expect(result.code).not.toBe(0);
    });
  });

  describe('getTmpDir', () => {
    it('should prioritize TMPDIR environment variable', () => {
      process.env.TMPDIR = '/tmp/tmpdir_test';
      process.env.TEMP = '/tmp/temp_test';
      expect(posixPlatform.getTmpDir()).toBe('/tmp/tmpdir_test');
    });

    it('should fall back to TEMP if TMPDIR is not set', () => {
      delete process.env.TMPDIR;
      process.env.TEMP = '/tmp/temp_test';
      expect(posixPlatform.getTmpDir()).toBe('/tmp/temp_test');
    });

    it('should fall back to TMP if TEMP is not set', () => {
      delete process.env.TMPDIR;
      delete process.env.TEMP;
      process.env.TMP = '/tmp/tmp_test';
      expect(posixPlatform.getTmpDir()).toBe('/tmp/tmp_test');
    });

    it('should fall back to os.tmpdir() as a last resort', () => {
      delete process.env.TMPDIR;
      delete process.env.TEMP;
      delete process.env.TMP;
      // This will return the actual OS temp dir, which is correct behavior.
      expect(posixPlatform.getTmpDir()).toBe(os.tmpdir());
    });
  });

  describe('commandExists', () => {
    it('should return true for a command that exists', async () => {
      // 'node' is guaranteed to exist since we are running tests with it.
      const exists = await posixPlatform.commandExists('node');
      expect(exists).toBe(true);
    });

    it('should return false for a command that does not exist', async () => {
      const exists = await posixPlatform.commandExists('nonexistentcommand1234567890');
      expect(exists).toBe(false);
    });
  });
});
````

## File: test/unit/utils/test.util.test.ts
````typescript
import {
  setupTestDirectory,
  initGitRepo,
  createDummyPlanFile,
  createDummyFailedReport,
} from '../../test.util';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';

const promisedExec = promisify(exec);

describe('unit/utils/test.util', () => {
  describe('setupTestDirectory', () => {
    it('should create a temp dir, chdir into it, and clean up properly', async () => {
      const originalCwd = process.cwd();
      const { testDir, cleanup } = await setupTestDirectory();

      // Check that we are in the new directory
      expect(process.cwd()).toBe(testDir);
      expect(testDir).not.toBe(originalCwd);

      // Check that the directory exists
      await expect(fs.access(testDir)).resolves.toBeUndefined();

      await cleanup();

      // Check that we are back in the original directory
      expect(process.cwd()).toBe(originalCwd);

      // Check that the directory has been removed
      await expect(fs.access(testDir)).rejects.toThrow();
    });
  });

  describe('initGitRepo', () => {
    let cleanup: () => Promise<void>;

    beforeEach(async () => {
      const { cleanup: c } = await setupTestDirectory();
      cleanup = c;
    });

    afterEach(async () => {
      await cleanup();
    });

    it('should initialize a git repository and make an initial commit', async () => {
      await initGitRepo();

      // Check for .git directory
      await expect(fs.access('.git')).resolves.toBeUndefined();

      // Check for initial commit
      const { stdout } = await promisedExec('git log -1 --pretty=%s');
      expect(stdout.trim()).toBe('Initial commit');
    });
  });

  describe('file creators', () => {
    let cleanup: () => Promise<void>;
    let testDir: string;

    beforeEach(async () => {
      const { cleanup: c, testDir: td } = await setupTestDirectory();
      cleanup = c;
      testDir = td;
    });

    afterEach(async () => {
      await cleanup();
    });

    it('should create a dummy plan file in the correct location', async () => {
      const planPath = path.join(testDir, '.nocaflow/development/plans/todo/dummy.yml');
      await createDummyPlanFile('development', 'todo', 'dummy.yml');

      await expect(fs.access(planPath)).resolves.toBeUndefined();
      const content = await fs.readFile(planPath, 'utf-8');
      expect(content).toBe('# dummy plan');
    });

    it('should create a dummy failed report with correct content', async () => {
      const summary = 'This is a test summary.';
      const reportPath = await createDummyFailedReport('initialization', 'plan1', 'partA', summary);

      const expectedPath = path.join(
        testDir,
        '.nocaflow/initialization/plans/failed/report/plan1.partA.report.md',
      );
      expect(reportPath).toBe(expectedPath);

      await expect(fs.access(reportPath)).resolves.toBeUndefined();
      const content = await fs.readFile(reportPath, 'utf-8');
      expect(content).toBe(`## Summary\n\n${summary}`);
    });
  });
});
````

## File: jest.config.js
````javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/test/**/*.test.ts'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
};
````

## File: test/unit/commands/state.test.ts
````typescript
import { renderProgressBar } from '../../../src/commands/state';

describe('unit/commands/state', () => {
  describe('renderProgressBar', () => {
    it('should render an empty bar for 0% progress', () => {
      const result = renderProgressBar(0, 10, 10);
      expect(result).toBe('[----------] (0/10 plans done)');
    });

    it('should render a half-filled bar for 50% progress', () => {
      const result = renderProgressBar(5, 10, 10);
      expect(result).toBe('[▇▇▇▇▇-----] (5/10 plans done)');
    });

    it('should render a full bar for 100% progress', () => {
      const result = renderProgressBar(10, 10, 10);
      expect(result).toBe('[▇▇▇▇▇▇▇▇▇▇] (10/10 plans done)');
    });

    it('should handle different bar lengths', () => {
      const result = renderProgressBar(1, 2, 20);
      // 50% of 20 is 10 filled characters
      const bar = result.substring(result.indexOf('[') + 1, result.indexOf(']'));
      expect(bar).toHaveLength(20);
      expect(bar).toBe('▇'.repeat(10) + '-'.repeat(10));
    });

    it('should round to the nearest character for fractional progress', () => {
      // 1/3 of 10 is 3.33, which should round to 3
      const result1 = renderProgressBar(1, 3, 10);
      expect(result1).toContain('[▇▇▇-------]');

      // 2/3 of 10 is 6.66, which should round to 7
      const result2 = renderProgressBar(2, 3, 10);
      expect(result2).toContain('[▇▇▇▇▇▇▇---]');
    });

    it('should handle a total of 0 gracefully', () => {
      const result = renderProgressBar(0, 0, 10);
      expect(result).toBe('[----------] (0/0 plans done)');
    });
  });
});
````

## File: src/utils/logs.ts
````typescript
import path from 'path';
import fs from 'fs/promises';

 export interface LogEntry {
  status: 'DONE' | 'FAIL' | 'INFO';
  phase: 'INIT' | 'DEV' | 'QA';
  agentId: string;
  planId: string;
  message: string;
  timestamp: Date;
}

/**
 * @description Reads the agent log files and returns the most recent entries.
 * @param limit - The maximum number of log entries to return.
 * @returns A list of recent log entries, sorted newest first.
 */
export const getRecentLogs = async (limit: number): Promise<LogEntry[]> => {
  const logDirs = ['.nocaflow/initialization/agent-log', '.nocaflow/development/agent-log'];
  const allEntries: LogEntry[] = [];
  const logRegex =
    /^(?<timestamp>.*?) \[(?<status>\w+)\|(?<phase>\w+)\|(?<agentId>.*?)\] plan:(?<planId>\S+) - (?<message>.*)$/;

  for (const dir of logDirs) {
    try {
      const files = await fs.readdir(dir);
      for (const file of files.filter(f => f.endsWith('.log'))) {
        const content = await fs.readFile(path.join(dir, file), 'utf-8');
        for (const line of content.split('\n')) {
          const match = line.match(logRegex);
          if (match?.groups) {
            const { timestamp, status, phase, agentId, planId, message } = match.groups;
            allEntries.push({
              timestamp: new Date(timestamp),
              status: status as LogEntry['status'],
              phase: phase as LogEntry['phase'],
              agentId,
              planId,
              message,
            });
          }
        }
      }
    } catch (error) {
      // dir may not exist
    }
  }

  allEntries.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  return allEntries.slice(0, limit);
};
````

## File: test/integration/utils/git.test.ts
````typescript
import { getGitLog, isGitRepository } from '../../../src/utils/git';
import { setupTestDirectory, initGitRepo } from '../../test.util';
import { exec as execCallback } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import { simpleGit } from 'simple-git';

const promisedExec = promisify(execCallback);

describe('isGitRepository', () => {
  let cleanup: () => Promise<void>;

  beforeEach(async () => {
    const { cleanup: c } = await setupTestDirectory();
    cleanup = c;
  });

  afterEach(async () => {
    await cleanup();
  });

  it('should return false in a non-git directory and true after init', async () => {
    expect(await isGitRepository()).toBe(false);
    await initGitRepo();
    expect(await isGitRepository()).toBe(true);
  });
});

describe('integration/utils/git', () => {
  let cleanup: () => Promise<void>;
  let testDir: string;

  beforeEach(async () => {
    const { cleanup: c, testDir: td } = await setupTestDirectory();
    cleanup = c;
    testDir = td;
    await initGitRepo();
  });

  afterEach(async () => {
    await cleanup();
  });

  it('should parse commits with worktree information', async () => {
    const worktreeName = 'my-feature-wt';
    const worktreePath = path.join(testDir, worktreeName);
    const branchName = 'my-feature-branch';
    
    await promisedExec(`git worktree add -b ${branchName} ${worktreePath}`);
    
    const originalCwd = process.cwd();
    process.chdir(worktreePath);

    const wtGit = simpleGit();
    await fs.writeFile('feature.txt', 'data');
    await wtGit.add('.');
    await wtGit.commit('feat: commit from worktree');
    process.chdir(originalCwd);

    const log = await getGitLog(5);
    const wtCommit = log.find(c => c.message === 'feat: commit from worktree');

    expect(wtCommit).toBeDefined();
    expect(wtCommit?.worktree).toBe(worktreeName);

    // Cleanup worktree
    await promisedExec(`git worktree remove --force ${worktreeName}`);
  });

  it('should handle commits not associated with a worktree', async () => {
    const git = simpleGit();
    await fs.writeFile('main.txt', 'data');
    await git.add('.');
    await git.commit('feat: commit from main');

    const log = await getGitLog(5);
    const mainCommit = log.find(c => c.message === 'feat: commit from main');

    expect(mainCommit).toBeDefined();
    expect(mainCommit?.worktree).toBeNull();
  });

  it('should respect the commit limit', async () => {
    const git = simpleGit();
    for (let i = 0; i < 5; i++) {
      await git.commit(`commit ${i + 1}`, { '--allow-empty': null });
    }

    const log = await getGitLog(3);
    expect(log).toHaveLength(3); // 3 + initial commit
  });

  it('should return an empty array for a repository with no commits other than initial', async () => {
    await cleanup();
    const { cleanup: c2 } = await setupTestDirectory();
    const git = simpleGit();
    await git.init();
    await git.addConfig('user.email', 'test@example.com');
    await git.addConfig('user.name', 'Test User');

    const log = await getGitLog(5);
    expect(log).toEqual([]);

    await c2();
  });

  it('should handle commit messages with special characters and multiple lines', async () => {
    const complexMessage = `feat: handle '|' "quotes" and 'apostrophes'\n\nwith a body.`;
    await simpleGit().commit(complexMessage, { '--allow-empty': null });

    const log = await getGitLog(1);

    expect(log).toHaveLength(1);
    expect(log[0].message).toBe(complexMessage);
  });

  it('should return an empty array if not in a git repository', async () => {
    await cleanup();
    const { cleanup: c2 } = await setupTestDirectory();

    const log = await getGitLog(5);
    expect(log).toEqual([]);

    await c2();
  });
});
````

## File: src/commands/init.ts
````typescript
import fs from 'fs/promises';
import path from 'path';
import chalk from 'chalk';
import { EOL } from 'os';
import { simpleGit } from 'simple-git';
import { platform } from '../utils/platform';
import { isGitRepository } from '../utils/git';
import { copyScaffoldFiles, scaffoldFiles } from '../scaffold/templates';

/**
 * @description Handles the logic for the 'init' command.
 */
export const handleInitCommand = async (_argv: Record<string, unknown>): Promise<void> => {
  // 1. Prerequisite checks
  const requiredCommands = ['git', 'tmux'];
  for (const cmd of requiredCommands) {
    const exists = await platform.commandExists(cmd);
    if (!exists) {
      console.error(chalk.red(`Error: ${cmd} is not installed. NocaFlow requires git and tmux.`));
      process.exit(1);
    }
  }

  // 2. Check for existing .nocaflow directory
  const rootDir = '.nocaflow';
  try {
    await fs.access(rootDir);
    console.warn(chalk.yellow(`Warning: '${rootDir}' directory already exists. Initialization skipped.`));
    process.exit(0);
  } catch (error) {
    // Directory does not exist, proceed.
  }

  // 3. Initialize git repository if needed
  try {
    const isGitRepo = await isGitRepository();
    if (!isGitRepo) {
      console.log('No git repository found. Initializing...');
      await simpleGit().init();
      console.log(chalk.green('Git repository initialized.'));
    } else {
      console.log('Existing git repository found.');
    }
  } catch (error) {
    console.error(chalk.red('Failed to initialize git repository:'), EOL, error);
    process.exit(1);
  }

  // 4. Create directory structure
  const phases = ['initialization', 'development'];
  const planSubDirs = ['todo', 'doing', 'review', 'done', 'failed/report'];
  const agentLogDir = 'agent-log';
  const dirsToCreate: string[] = [];
  const gitkeepFiles: string[] = [];

  for (const phase of phases) {
    const phaseBase = path.join(rootDir, phase);
    const agentLogPath = path.join(phaseBase, agentLogDir);
    dirsToCreate.push(agentLogPath);
    gitkeepFiles.push(path.join(agentLogPath, '.gitkeep'));

    const plansBase = path.join(phaseBase, 'plans');
    for (const subDir of planSubDirs) {
      const dirPath = path.join(plansBase, subDir);
      dirsToCreate.push(dirPath);
      gitkeepFiles.push(path.join(dirPath, '.gitkeep'));
    }
  }

  try {
    await Promise.all(dirsToCreate.map(dir => fs.mkdir(dir, { recursive: true })));
    await Promise.all(gitkeepFiles.map(file => fs.writeFile(file, '')));

    // 5. Scaffold agent and rule files
    await copyScaffoldFiles();

    console.log(chalk.green(' nocaflow project initialized successfully. ✨'));
    console.log(
      `Created ${chalk.bold(rootDir)} directory structure and ${chalk.bold(
        scaffoldFiles.length,
      )} agent/rule files.`,
    );
  } catch (error) {
    console.error(chalk.red('Failed to initialize nocaflow project:'), EOL, error);
    process.exit(1);
  }
};
````

## File: src/utils/fs.ts
````typescript
import path from 'path';
import fs from 'fs/promises';
import yaml from 'js-yaml';
import dayjs from 'dayjs';
import { Plan } from '../models/plan';

export interface PhaseStats {
  [phaseName: string]: {
    todo: number;
    doing: number;
    review: number;
    failed: number;
    done: number;
    total: number;
  };
}

export interface FailedReport {
  planId: string;
  partId: string | undefined;
  reason: string;
  reportPath: string;
}

/**
 * @description Reads all plan files from all phases and aggregates stats.
 * @returns An object containing plan counts for each status in each phase.
 */
export const getPhaseStats = async (): Promise<PhaseStats> => {
  const phases = ['initialization', 'development'];
  const statuses: (keyof PhaseStats[string])[] = [
    'todo',
    'doing',
    'review',
    'failed',
    'done',
  ];
  const stats: PhaseStats = {};

  for (const phase of phases) {
    stats[phase] = { todo: 0, doing: 0, review: 0, failed: 0, done: 0, total: 0 };
    for (const status of statuses) {
      const dirPath = path.join('.nocaflow', phase, 'plans', status);
      try {
        const files = await fs.readdir(dirPath);
        // A plan is represented by its .yml file. This counts plans in each state directory.
        const count = files.filter(f => f.endsWith('.yml')).length;
        stats[phase][status] = count;
        stats[phase].total += count;
      } catch (error) {
        // Directory likely doesn't exist, count is 0.
      }
    }
  }
  return stats;
};

/**
 * @description Scans the failed reports directory for recent failures.
 * @param hours - The lookback period in hours.
 * @returns A list of failed report details.
 */
export const getFailedReports = async (hours: number): Promise<FailedReport[]> => {
  const phases = ['initialization', 'development'];
  const reports: FailedReport[] = [];
  const since = dayjs().subtract(hours, 'hour');

  for (const phase of phases) {
    const reportDir = path.join('.nocaflow', phase, 'plans', 'failed', 'report');
    try {
      const files = await fs.readdir(reportDir);
      for (const file of files) {
        if (!file.endsWith('.report.md')) continue;
        const filePath = path.join(reportDir, file);
        const stats = await fs.stat(filePath);
        if (dayjs(stats.mtime).isAfter(since)) {
          const content = await fs.readFile(filePath, 'utf-8');
          const summaryMatch = content.match(/## Summary\s*\n\s*([\s\S]*?)(?=\n##|$)/);
          const reason = summaryMatch ? summaryMatch[1].trim() : 'Could not parse summary.';
          const parts = file.split('.');
          const planId = parts[0] || '';
          const partId =
            parts.length >= 4 && parts[parts.length - 2] === 'report' ? parts[1] : undefined;
          reports.push({ planId, partId, reason, reportPath: filePath });
        }
      }
    } catch (error) {
      // dir may not exist
    }
  }
  return reports;
};

/**
 * @description Reads and parses a YAML plan file.
 * @param filePath - The path to the plan.yml file.
 * @returns The parsed Plan object.
 */
export const readPlan = async (filePath: string): Promise<Plan> => {
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const plan = yaml.load(fileContent) as Plan;
  return plan;
};
````

## File: test/unit/utils/logs.test.ts
````typescript
import { getRecentLogs } from '../../../src/utils/logs';
import { setupTestDirectory } from '../../test.util';
import fs from 'fs/promises';
import path from 'path';

describe('unit/utils/logs', () => {
  let cleanup: () => Promise<void>;

  beforeEach(async () => {
    const { cleanup: c } = await setupTestDirectory();
    cleanup = c;
  });

  afterEach(async () => {
    await cleanup();
  });

  it('should aggregate logs from all phase directories', async () => {
    const initLogDir = '.nocaflow/initialization/agent-log';
    const devLogDir = '.nocaflow/development/agent-log';
    await fs.mkdir(initLogDir, { recursive: true });
    await fs.mkdir(devLogDir, { recursive: true });

    const log1 = `2023-01-01T10:00:00.000Z [DONE|INIT|agent1] plan:planA - Init log`;
    const log2 = `2023-01-01T11:00:00.000Z [INFO|DEV|agent2] plan:planB - Dev log`;
    await fs.writeFile(path.join(initLogDir, 'init.log'), log1);
    await fs.writeFile(path.join(devLogDir, 'dev.log'), log2);

    const logs = await getRecentLogs(10);
    expect(logs).toHaveLength(2);
    expect(logs.some(l => l.message === 'Init log')).toBe(true);
    expect(logs.some(l => l.message === 'Dev log')).toBe(true);
  });

  it('should return the correct number of recent, sorted log entries', async () => {
    const logDir = '.nocaflow/initialization/agent-log';
    await fs.mkdir(logDir, { recursive: true });
    const logContent = [
      `2023-01-01T10:00:00.000Z [DONE|INIT|a] plan:p1 - msg1`,
      `2023-01-01T12:00:00.000Z [DONE|INIT|b] plan:p2 - msg3`,
      `2023-01-01T11:00:00.000Z [DONE|INIT|c] plan:p3 - msg2`,
      `2023-01-01T14:00:00.000Z [DONE|INIT|d] plan:p4 - msg5`,
      `2023-01-01T13:00:00.000Z [DONE|INIT|e] plan:p5 - msg4`,
    ].join('\n');
    await fs.writeFile(path.join(logDir, 'test.log'), logContent);

    const logs = await getRecentLogs(3);
    expect(logs).toHaveLength(3);
    expect(logs[0].message).toBe('msg5');
    expect(logs[1].message).toBe('msg4');
    expect(logs[2].message).toBe('msg3');
  });

  it('should correctly parse valid log lines and skip invalid ones', async () => {
    const logDir = '.nocaflow/initialization/agent-log';
    await fs.mkdir(logDir, { recursive: true });
    const logContent = [
      `2023-01-01T10:00:00.000Z [DONE|INIT|agent1] plan:planA - Valid message`,
      `This is a malformed line`,
      `2023-01-01T11:00:00.000Z [FAIL|QA|qa-agent] plan:planB - Another valid one`,
      `[FAIL|QA|qa-agent] plan:planB - Missing timestamp`,
    ].join('\n');
    await fs.writeFile(path.join(logDir, 'mixed.log'), logContent);

    const logs = await getRecentLogs(10);
    expect(logs).toHaveLength(2);
    expect(logs[0].message).toBe('Another valid one');
    expect(logs[1].message).toBe('Valid message');
  });

  it('should correctly parse log lines with varied content', async () => {
    const logDir = '.nocaflow/development/agent-log';
    await fs.mkdir(logDir, { recursive: true });
    const logContent = `2023-01-01T10:00:00.000Z [INFO|DEV|agent-with-dashes_123] plan:plan.id.with.dots - Message with | and other chars`;
    await fs.writeFile(path.join(logDir, 'varied.log'), logContent);

    const logs = await getRecentLogs(1);
    expect(logs).toHaveLength(1);
    expect(logs[0].agentId).toBe('agent-with-dashes_123');
    expect(logs[0].planId).toBe('plan.id.with.dots');
    expect(logs[0].message).toBe('Message with | and other chars');
  });

  it('should handle empty log files gracefully', async () => {
    const logDir = '.nocaflow/initialization/agent-log';
    await fs.mkdir(logDir, { recursive: true });
    await fs.writeFile(path.join(logDir, 'empty.log'), '');

    const logs = await getRecentLogs(5);
    expect(logs).toEqual([]);
  });

  it('should return an empty array if log directories are missing', async () => {
    const logs = await getRecentLogs(5);
    expect(logs).toEqual([]);
  });

  it('should ignore files that do not end with .log', async () => {
    const logDir = '.nocaflow/initialization/agent-log';
    await fs.mkdir(logDir, { recursive: true });
    const logContent = `2023-01-01T10:00:00.000Z [DONE|INIT|agent1] plan:planA - Real log`;
    const bakContent = `2023-01-01T11:00:00.000Z [DONE|INIT|agent2] plan:planB - Backup log`;
    await fs.writeFile(path.join(logDir, 'agent.log'), logContent);
    await fs.writeFile(path.join(logDir, 'agent.log.bak'), bakContent);

    const logs = await getRecentLogs(5);
    expect(logs).toHaveLength(1);
    expect(logs[0].message).toBe('Real log');
  });
});
````

## File: package.json
````json
{
  "name": "nocaflow",
  "version": "0.0.1",
  "description": "Filesystem-as-State for Phased LLM Swarms.",
  "main": "dist/index.js",
  "bin": {
    "nocaflow": "dist/cli.js"
  },
  "scripts": {
    "start": "node dist/cli.js",
    "build": "node node_modules/typescript/lib/tsc.js",
    "dev": "node node_modules/ts-node/dist/bin.js src/cli.ts",
    "test": "node node_modules/jest/bin/jest.js",
    "lint": "node node_modules/eslint/bin/eslint.js 'src/**/*.ts' 'test/**/*.ts'"
  },
  "keywords": [
    "llm",
    "swarm",
    "agent",
    "orchestration"
  ],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chalk": "^4.1.2",
    "dayjs": "^1.11.10",
    "js-yaml": "^4.1.0",
    "simple-git": "^3.22.0",
    "yargs": "^17.7.2"
  },
  "devDependencies": {
    "@types/js-yaml": "^4.0.9",
    "@types/node": "^20.10.4",
    "@types/yargs": "^17.0.32",
    "@types/jest": "^29.5.11",
    "@typescript-eslint/eslint-plugin": "^6.14.0",
    "@typescript-eslint/parser": "^6.14.0",
    "eslint": "^8.55.0",
    "jest": "^29.7.0",
    "ts-jest": "^29.1.1",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3"
  }
}
````

## File: test/e2e/cli.test.ts
````typescript
import { runCli, setupTestDirectory, createDummyPlanFile, createDummyFailedReport, initGitRepo } from '../test.util';
import fs from 'fs/promises';
import { exec as execCallback } from 'child_process';
import path from 'path';
import { promisify } from 'util';
import { platform } from '../src/utils/platform';

const promisedExec = promisify(execCallback);


describe('e2e/cli', () => {
  let cleanup: () => Promise<void>;
  let testDir: string;

  beforeAll(async () => {
    try {
      await promisedExec('npm run build');
    } catch (e) {
      console.error('Failed to build project for E2E tests:', e);
      process.exit(1);
    }
  }, 60000);

  beforeEach(async () => {
    const { cleanup: c, testDir: td } = await setupTestDirectory();
    cleanup = c;
    testDir = td;
  });

  afterEach(async () => {
    if (cleanup) {
      await cleanup();
    }
  });

  describe('init command', () => {
    it('should initialize a new project structure', async () => {
      const { stdout, code } = await runCli('init');

      expect(stdout).toContain('nocaflow project initialized successfully');
      expect(code).toBe(0);

      const expectedFile = path.join(testDir, '.nocaflow/initialization/plans/todo/.gitkeep');
      await expect(fs.access(expectedFile)).resolves.toBeUndefined();
    });

    it('should show a warning if the project is already initialized', async () => {
      await fs.mkdir('.nocaflow'); // Manually create the directory
      const { stderr, code } = await runCli('init');

      expect(stderr).toContain("Warning: '.nocaflow' directory already exists. Initialization skipped.");
      expect(code).toBe(0); // Graceful exit on warning
    });
  });

  describe('state command', () => {
    it('should display the project state in an initialized directory', async () => {
      await runCli('init');
      await createDummyPlanFile('initialization', 'todo', 'plan1.yml');

      const { stdout, code } = await runCli('state');

      expect(stdout).toContain('== nocaflow State');
      expect(stdout).toContain('Phase Progress');
      expect(stdout).toContain('Current Phase: initialization');
      expect(stdout).toContain('todo: 1');
      expect(code).toBe(0);
    });

    it('should display a complex, multi-faceted state correctly', async () => {
      await runCli('init');
      await initGitRepo();

      // Setup: Create various artifacts
      await createDummyPlanFile('initialization', 'doing', 'p1.yml');
      await createDummyPlanFile('development', 'done', 'p2.yml');
      await createDummyFailedReport('initialization', 'f01', 'pA', 'Test failure');

      const logDir = '.nocaflow/development/agent-log';
      await fs.mkdir(logDir, { recursive: true });
      const logContent = `2023-10-27T10:00:00.000Z [DONE|DEV|agent-abc] plan:plan-e2e - Log message`;
      await fs.writeFile(path.join(logDir, 'test.log'), logContent);

      const tmuxSessionName = 'dev-e2e-part-xyz';
      const canRunTmux = await platform.commandExists('tmux');
      if (canRunTmux) {
        await platform.runCommand(`tmux new-session -d -s ${tmuxSessionName} "sleep 15"`);
      }

      // Act: Run the state command
      let stdout: string, code: number;
      try {
        const result = await runCli('state');
        stdout = result.stdout;
        code = result.code;
      } finally {
        // Teardown: ensure tmux session is killed
        if (canRunTmux) {
          await platform.runCommand(`tmux kill-session -t ${tmuxSessionName} || true`);
        }
      }

      expect(code).toBe(0);
      // Assert on all sections
      expect(stdout).toContain('Current Phase: development');
      expect(stdout).toContain('[INITIALIZATION]'.padEnd(18) + '[----------] (0/1 plans done)');
      expect(stdout).toContain('[DEVELOPMENT]'.padEnd(18) + '[▇▇▇▇▇▇▇▇▇▇] (1/1 plans done)');
      if (canRunTmux) {
        expect(stdout).toContain('id:e2e-part-xyz');
      }
      expect(stdout).toContain('plan:plan-e2e - Log message');
      expect(stdout).toContain('plan:f01 part:pA - "Test failure"');
      expect(stdout).toContain('Initial commit');
    });

    it('should show a zero-state when run in a non-initialized directory', async () => {
      const { stdout, stderr, code } = await runCli('state');
      
      expect(stderr).toBe('');
      expect(code).toBe(0);
      expect(stdout).toContain('Current Phase: initialization');
      expect(stdout).toContain('(0/0 plans done)');
      expect(stdout).toContain('No active agents.');
      expect(stdout).toContain('No recent activity.');
      expect(stdout).toContain('No failed reports in the last 24 hours.');
    });
  });

  describe('no command', () => {
    it('should display help when no command is provided', async () => {
      const { stderr } = await runCli('');
      expect(stderr).toContain('Commands:');
      expect(stderr).toContain('init');
      expect(stderr).toContain('state');
      expect(stderr).toContain('You need at least one command before moving on');
    });

    it('should display help when --help flag is used', async () => {
      const generalHelp = await runCli('--help');
      expect(generalHelp.stdout).toContain('Show help');

      const stateHelp = await runCli('state --help');
      expect(stateHelp.stdout).toContain('Display the current state of the nocaflow project');
    });

    it('should show an error for an unknown command', async () => {
      const { stderr } = await runCli('nonexistent-command');
      expect(stderr).toContain('Unknown argument: nonexistent-command');
    });
  });
});
````

## File: test/unit/utils/fs.test.ts
````typescript
import { getPhaseStats, getFailedReports, readPlan } from '../../../src/utils/fs';
import { setupTestDirectory } from '../../test.util';
import fs from 'fs/promises';
import path from 'path';

describe('unit/utils/fs', () => {
  let cleanup: () => Promise<void>;

  beforeEach(async () => {
    const { cleanup: c } = await setupTestDirectory();
    cleanup = c;
  });

  afterEach(async () => {
    await cleanup();
  });

  describe('getPhaseStats', () => {
      it('should correctly count plans across different statuses and phases', async () => {
        await fs.mkdir('.nocaflow/initialization/plans/todo', { recursive: true });
        await fs.mkdir('.nocaflow/initialization/plans/doing', { recursive: true });
        await fs.mkdir('.nocaflow/development/plans/done', { recursive: true });

        await fs.writeFile('.nocaflow/initialization/plans/todo/a.yml', '');
        await fs.writeFile('.nocaflow/initialization/plans/todo/b.yml', '');
        await fs.writeFile('.nocaflow/initialization/plans/doing/c.yml', '');
        await fs.writeFile('.nocaflow/development/plans/done/d.yml', '');

        const stats = await getPhaseStats();

        expect(stats.initialization.todo).toBe(2);
        expect(stats.initialization.doing).toBe(1);
        expect(stats.initialization.done).toBe(0);
        expect(stats.initialization.total).toBe(3);

        expect(stats.development.done).toBe(1);
        expect(stats.development.total).toBe(1);
      });

      it('should return all zeros for an empty directory structure', async () => {
        await fs.mkdir('.nocaflow/initialization/plans', { recursive: true });
        await fs.mkdir('.nocaflow/development/plans', { recursive: true });

        const stats = await getPhaseStats();

        expect(stats.initialization.total).toBe(0);
        expect(stats.development.total).toBe(0);
      });

      it('should handle missing status subdirectories gracefully', async () => {
        await fs.mkdir('.nocaflow/initialization/plans/todo', { recursive: true });
        await fs.writeFile('.nocaflow/initialization/plans/todo/a.yml', '');

        const stats = await getPhaseStats();

        expect(stats.initialization.todo).toBe(1);
        expect(stats.initialization.doing).toBe(0);
        expect(stats.initialization.done).toBe(0);
        expect(stats.initialization.total).toBe(1);
      });

      it('should handle a missing phase directory gracefully', async () => {
        await fs.mkdir('.nocaflow/initialization/plans/todo', { recursive: true });
        await fs.writeFile('.nocaflow/initialization/plans/todo/a.yml', '');

        const stats = await getPhaseStats();

        expect(stats.initialization.total).toBe(1);
        expect(stats.development.total).toBe(0);
      });

      it('should ignore non-YAML files', async () => {
        await fs.mkdir('.nocaflow/development/plans/todo', { recursive: true });
        await fs.writeFile('.nocaflow/development/plans/todo/plan1.yml', '');
        await fs.writeFile('.nocaflow/development/plans/todo/notes.txt', '');

        const stats = await getPhaseStats();

        expect(stats.development.todo).toBe(1);
        expect(stats.development.total).toBe(1);
      });
    });

    describe('getFailedReports', () => {
      it('should only return reports within the lookback period', async () => {
        const reportDir = '.nocaflow/initialization/plans/failed/report';
        await fs.mkdir(reportDir, { recursive: true });

        const recentReportPath = path.join(reportDir, 'plan1.partA.report.md');
        const oldReportPath = path.join(reportDir, 'plan2.partB.report.md');
        await fs.writeFile(recentReportPath, '## Summary\n\nRecent failure.');
        await fs.writeFile(oldReportPath, '## Summary\n\nOld failure.');

        const twoDaysAgo = new Date();
        twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
        await fs.utimes(oldReportPath, twoDaysAgo, twoDaysAgo);

        const reports = await getFailedReports(24);

        expect(reports).toHaveLength(1);
        expect(reports[0].planId).toBe('plan1');
      });

      it('should correctly parse report details from filename and content', async () => {
        const reportDir = '.nocaflow/development/plans/failed/report';
        await fs.mkdir(reportDir, { recursive: true });
        const reportPath = path.join(reportDir, 'plan1.partA.report.md');
        await fs.writeFile(reportPath, '## Summary\n\nThis is the reason.');

        const reports = await getFailedReports(1);

        expect(reports).toHaveLength(1);
        expect(reports[0].planId).toBe('plan1');
        expect(reports[0].partId).toBe('partA');
        expect(reports[0].reason).toBe('This is the reason.');
        expect(reports[0].reportPath).toBe(reportPath);
      });

      it('should handle report files with no summary section', async () => {
        const reportDir = '.nocaflow/initialization/plans/failed/report';
        await fs.mkdir(reportDir, { recursive: true });
        const reportPath = path.join(reportDir, 'plan1.partA.report.md');
        await fs.writeFile(reportPath, 'Some content without a summary header.');

        const reports = await getFailedReports(1);

        expect(reports).toHaveLength(1);
        expect(reports[0].reason).toBe('Could not parse summary.');
      });

      it('should return an empty array if the report directory does not exist', async () => {
        const reports = await getFailedReports(24);
        expect(reports).toEqual([]);
      });

      it('should gracefully handle malformed report filenames', async () => {
        const reportDir = '.nocaflow/development/plans/failed/report';
        await fs.mkdir(reportDir, { recursive: true });
        const reportPath = path.join(reportDir, 'malformed.report.md');
        await fs.writeFile(reportPath, '## Summary\n\nReason.');

        const reports = await getFailedReports(1);

        expect(reports).toHaveLength(1);
        expect(reports[0].planId).toBe('malformed');
        expect(reports[0].partId).toBeUndefined();
      });

      it('should ignore non-markdown report files', async () => {
        const reportDir = '.nocaflow/initialization/plans/failed/report';
        await fs.mkdir(reportDir, { recursive: true });
        await fs.writeFile(path.join(reportDir, 'plan1.partA.report.md'), '## Summary\n\nReport');
        await fs.writeFile(path.join(reportDir, 'notes.txt'), 'some notes');

        const reports = await getFailedReports(1);
        expect(reports).toHaveLength(1);
        expect(reports[0].planId).toBe('plan1');
      });
    });

    describe('readPlan', () => {
      it('should parse a valid plan file', async () => {
        const planContent = `
  plan:
    id: 'test-plan'
    status: 'todo'
    title: 'Test Plan'
    introduction: 'Intro'
    parts: []
    conclusion: 'Conclusion'
    context_files: { compact: [], medium: [], extended: [] }
  `;
        await fs.writeFile('plan.yml', planContent);
        const plan = await readPlan('plan.yml');
        expect(plan.plan.id).toBe('test-plan');
        expect(plan.plan.title).toBe('Test Plan');
      });

      it('should throw an error for a non-existent file', async () => {
        await expect(readPlan('non-existent-plan.yml')).rejects.toThrow();
      });

      it('should throw an error for invalid YAML', async () => {
        await fs.writeFile('bad-plan.yml', 'key: [a, b,');
        await expect(readPlan('bad-plan.yml')).rejects.toThrow();
      });
  });
});
````

## File: test/test.util.ts
````typescript
import { exec as execCallback, ExecException } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import { simpleGit } from 'simple-git';
import { platform } from '../src/utils/platform';

const promisedExec = promisify(execCallback);

export const runCli = async (
  args: string,
): Promise<{ stdout: string; stderr: string; code: number }> => {
  const cliPath = path.join(__dirname, '..', 'dist', 'cli.js');
  try {
    const { stdout, stderr } = await promisedExec(`FORCE_COLOR=0 node ${cliPath} ${args}`);
    return { stdout, stderr, code: 0 };
  } catch (error) {
    const err = error as ExecException & { stdout: string; stderr: string };
    return {
      stdout: err.stdout,
      stderr: err.stderr,
      code: err.code || 1,
    };
  }
};

export const setupTestDirectory = async (): Promise<{
  testDir: string;
  cleanup: () => Promise<void>;
}> => {
  const originalCwd = process.cwd();
  const testDir = await fs.mkdtemp(path.join(platform.getTmpDir(), 'nocaflow-test-'));
  process.chdir(testDir);

  const cleanup = async (): Promise<void> => {
    process.chdir(originalCwd);
    await fs.rm(testDir, { recursive: true, force: true });
  };

  return { testDir, cleanup };
};

export const initGitRepo = async (): Promise<void> => {
  const git = simpleGit();
  await git.init();
  await git.addConfig('user.email', 'test@example.com');
  await git.addConfig('user.name', 'Test User');
  await git.commit('Initial commit', { '--allow-empty': null });
};

export const createDummyPlanFile = async (
  phase: 'initialization' | 'development',
  status: 'todo' | 'doing' | 'done' | 'review' | 'failed',
  fileName: string,
): Promise<void> => {
  const dirPath = path.join('.nocaflow', phase, 'plans', status);
  await fs.mkdir(dirPath, { recursive: true });
  await fs.writeFile(path.join(dirPath, fileName), '# dummy plan');
};

export const createDummyFailedReport = async (
  phase: 'initialization' | 'development',
  planId: string,
  partId: string,
  summary: string,
): Promise<string> => {
  const reportDir = path.join('.nocaflow', phase, 'plans', 'failed', 'report');
  await fs.mkdir(reportDir, { recursive: true });
  const reportPath = path.join(reportDir, `${planId}.${partId}.report.md`);
  const content = `## Summary\n\n${summary}`;
  await fs.writeFile(reportPath, content);
  return path.resolve(reportPath);
};
````

## File: src/commands/state.ts
````typescript
import chalk from 'chalk';
import { getPhaseStats, PhaseStats, getFailedReports, FailedReport } from '../utils/fs';
import { getActiveAgents, AgentInfo } from '../utils/shell';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { getRecentLogs, LogEntry } from '../utils/logs';
import { getGitLog, GitCommit } from '../utils/git';

dayjs.extend(relativeTime as any);

/**
 * @description Renders a progress bar.
 * @param current - The current progress value.
 * @param total - The total value for 100%.
 * @param length - The character length of the bar.
 * @returns A string representing the progress bar.
 */
export const renderProgressBar = (current: number, total: number, length: number = 20): string => {
  const percent = total > 0 ? current / total : 0;
  const filledLength = Math.round(length * percent);
  const emptyLength = length - filledLength;
  const filledBar = '▇'.repeat(filledLength);
  const emptyBar = '-'.repeat(emptyLength);
  const bar = `[${filledBar}${emptyBar}]`;
  const text = `(${current}/${total} plans done)`;

  return `${bar} ${text}`;
};

/**
 * @description Displays the full state report to the console.
 */
export const handleStateCommand = async (_argv: Record<string, unknown>): Promise<void> => {
  const phaseStats: PhaseStats = await getPhaseStats();
  const activeAgents: AgentInfo[] = await getActiveAgents();
  const recentLogs: LogEntry[] = await getRecentLogs(5);
  const failedReports: FailedReport[] = await getFailedReports(24);
  const gitCommits: GitCommit[] = await getGitLog(10);
  const currentPhase = phaseStats.development?.total > 0 ? 'development' : 'initialization';

  // Header
  console.log(chalk.bold(`== nocaflow State [${dayjs().format('YYYY-MM-DD HH:mm:ss')}] ==`));
  console.log(`Current Phase: ${chalk.cyan(currentPhase)}`);
  
  // Phase Progress
  console.log(chalk.bold('\n== Phase Progress =='));
  for (const phaseName in phaseStats) {
    const stats = phaseStats[phaseName];
    const progressBar = renderProgressBar(stats.done, stats.total);
    console.log(`[${chalk.yellow(phaseName.toUpperCase())}]`.padEnd(18) + progressBar);
  }

  // Phase Stats
  console.log(chalk.bold('\n== Phase Stats (Plans) =='));
  for (const phaseName in phaseStats) {
    const stats = phaseStats[phaseName];
    if (stats.total === 0) continue;
    const statsString = `todo: ${stats.todo}, doing: ${stats.doing}, review: ${stats.review}, failed: ${stats.failed}, done: ${stats.done}`;
    console.log(`[${chalk.yellow(phaseName.toUpperCase())}]`.padEnd(18) + statsString);
  }

  // Active Agents
  console.log(chalk.bold('\n== Active Agents (tmux) =='));
  if (activeAgents.length === 0) {
    console.log('No active agents.');
  } else {
    for (const agent of activeAgents) {
      console.log(`[${chalk.blue(agent.phase)}|${chalk.magenta(agent.pid)}]`.padEnd(18) + `id:${agent.id} (running ${agent.runtime})`);
    }
  }

  // Recent Agent Activity
  console.log(chalk.bold('\n== Recent Agent Activity (last 5) =='));
  if (recentLogs.length === 0) {
    console.log('No recent activity.');
  } else {
    for (const log of recentLogs) {
      const statusColor = log.status === 'DONE' ? chalk.green : log.status === 'FAIL' ? chalk.red : chalk.gray;
      const time = dayjs(log.timestamp).fromNow();
      console.log(`${statusColor(`[${log.status}|${log.phase}|${log.agentId}]`)} plan:${log.planId} - ${log.message} (${chalk.gray(time)})`);
    }
  }

  // Stalled / Failed
  console.log(chalk.bold('\n== Stalled / Failed (last 24h) =='));
  if (failedReports.length === 0) {
    console.log('No failed reports in the last 24 hours.');
  } else {
    for (const report of failedReports) {
      console.log(`${chalk.red('[FAILED]')} plan:${report.planId} part:${report.partId} - "${report.reason}"`);
      console.log(`         Report: ${report.reportPath}`);
    }
  }

  // Recent Git Commits
  console.log(chalk.bold('\n== Recent Git Commits (all worktrees) =='));
  if (gitCommits.length === 0) {
    console.log('No recent commits.');
  } else {
    for (const commit of gitCommits) {
      const worktreeInfo = commit.worktree ? `(${chalk.cyan(commit.worktree)}) ` : '';
      console.log(`${chalk.yellow(commit.hash.slice(0, 7))} ${worktreeInfo}${commit.message}`);
    }
  }
};
````

## File: src/utils/git.ts
````typescript
import { simpleGit } from 'simple-git';
import path from 'path';
import { platform } from './platform';

export interface GitCommit {
  hash: string;
  worktree: string | null;
  message: string;
}

interface WorktreeInfo {
  path: string;
  branch: string;
  commit: string;
}

/**
 * Get worktree information by parsing git worktree list output
 */
const getWorktreeList = async (): Promise<WorktreeInfo[]> => {
  try {
    const result = await platform.runCommand('git worktree list --porcelain');
    if (result.code !== 0) {
      return [];
    }

    const lines = result.stdout.trim().split('\n');
    const worktrees: WorktreeInfo[] = [];
    let currentWorktree: Partial<WorktreeInfo> = {};

    for (const line of lines) {
      if (line.startsWith('worktree ')) {
        if (currentWorktree.path) {
          worktrees.push(currentWorktree as WorktreeInfo);
        }
        currentWorktree = { path: line.substring(9) };
      } else if (line.startsWith('branch ')) {
        currentWorktree.branch = line.substring(7);
      } else if (line.startsWith('HEAD ')) {
        currentWorktree.commit = line.substring(5);
      }
    }

    if (currentWorktree.path) {
      worktrees.push(currentWorktree as WorktreeInfo);
    }

    return worktrees;
  } catch (error) {
    return [];
  }
};

/**
 * @description Executes 'git log' to get recent commit history across all worktrees.
 * @param limit - The maximum number of commits to return.
 * @returns A list of recent git commits.
 */
export const getGitLog = async (limit: number): Promise<GitCommit[]> => {
  try {
    const git = simpleGit();
    const isRepo = await git.checkIsRepo();
    if (!isRepo) return [];

    const worktrees = await getWorktreeList();
    const worktreeMap = new Map<string, string>();
    for (const wt of worktrees) {
      const branchNameMatch = wt.branch.match(/refs\/heads\/(.*)/);
      if (branchNameMatch && branchNameMatch[1]) {
        const branchName = branchNameMatch[1];
        // The main worktree is not a named worktree, so we only map auxiliary ones
        if (branchName !== 'main' && branchName !== 'master') {
          worktreeMap.set(branchName, path.basename(wt.path));
        }
      }
    }

    const logResult = await git.log({ '--all': null, maxCount: limit, format: { hash: '%H', refs: '%d' } });
    if (!logResult.all || logResult.total === 0) return [];

    const commits: GitCommit[] = [];
    for (const commit of logResult.all) {
      const fullMessageResult = await git.raw(['show', '--format=%B', '--no-patch', commit.hash]);
      const fullMessage = fullMessageResult.trim();

      let worktree: string | null = null;
      // commit.refs is like ' (HEAD -> my-feature, origin/my-feature)'
      for (const branchName of worktreeMap.keys()) {
        if (commit.refs.includes(branchName)) {
          worktree = worktreeMap.get(branchName) || null;
          break;
        }
      }

      commits.push({
        hash: commit.hash,
        worktree,
        message: fullMessage,
      });
    }
    return commits;
  } catch (error) {
    return []; // Git not installed, not a git repo, or other error.
  }
};

/**
 * @description Checks if the current directory is a git repository.
 * @returns {Promise<boolean>}
 */
export const isGitRepository = async (): Promise<boolean> => {
  try {
    const git = simpleGit();
    return await git.checkIsRepo();
  } catch (error) {
    return false;
  }
};
````

## File: src/utils/shell.ts
````typescript
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { platform } from './platform';

export interface AgentInfo {
  phase: 'INIT' | 'DEV' | 'QA' | 'SCAF';
  id: string; // part_id, plan_id for QA/Scaffold
  planId: string;
  partId: string; // Can be 'scaffold' or 'qa'
  runtime: string;
  pid: string;
}

dayjs.extend(relativeTime as any);

/**
 * @description Lists active tmux sessions and parses them to find agent info.
 * @returns A list of active agents.
 */
export const getActiveAgents = async (): Promise<AgentInfo[]> => {
  try {
    const { stdout } = await platform.runCommand(`tmux ls -F "#{session_name} #{pane_pid} #{session_activity}"`);
    if (!stdout) return [];

    const lines = stdout.trim().split('\n');
    const agents: AgentInfo[] = [];

    for (const line of lines) {
      const [sessionName, pid, activity] = line.split(' ');
      const runtime = dayjs().to(dayjs.unix(parseInt(activity, 10)), true);

      let match;
      if ((match = sessionName.match(/^init-scaffold-(.+)/))) {
        const planId = match[1];
        agents.push({
          phase: 'SCAF',
          id: planId,
          planId,
          partId: 'scaffold',
          runtime,
          pid,
        });
      } else if ((match = sessionName.match(/^qa-(.+)/))) {
        const planId = match[1];
        agents.push({ phase: 'QA', id: planId, planId, partId: 'qa', runtime, pid });
      } else if ((match = sessionName.match(/^(init|dev)-(?!scaffold-|qa-)(.+)/))) {
        const phase = match[1].toUpperCase() as 'INIT' | 'DEV';
        const partId = match[2];
        agents.push({
          phase,
          id: partId,
          planId: 'unknown', // Not available from session name
          partId: partId,
          runtime,
          pid,
        });
      }
    }
    return agents;
  } catch (error) {
    return []; // Tmux likely not running or has no sessions.
  }
};
````

## File: test/integration/commands/init.test.ts
````typescript
import { handleInitCommand } from '../../../src/commands/init';
import { setupTestDirectory, initGitRepo } from '../../test.util';
import fs from 'fs/promises';
import { isGitRepository } from '../../../src/utils/git';

describe('integration/commands/init', () => {
  let cleanup: () => Promise<void>;

  beforeEach(async () => {
    const { cleanup: c } = await setupTestDirectory();
    cleanup = c;
  });

  afterEach(async () => {
    await cleanup();
  });

  it('should initialize a git repo if not already present', async () => {
    expect(await isGitRepository()).toBe(false);
    await handleInitCommand({});
    expect(await isGitRepository()).toBe(true);
  });

  it('should skip git init if already in a git repo', async () => {
    await initGitRepo();
    expect(await isGitRepository()).toBe(true);

    // This command should be idempotent and not fail if a repo exists.
    await handleInitCommand({});

    // Verify the repo is still valid.
    expect(await isGitRepository()).toBe(true);
  });

  it('should create the full .nocaflow directory and file structure on a fresh run', async () => {
    await handleInitCommand({});

    const dirsToCheck = [
      '.nocaflow/initialization/plans/todo',
      '.nocaflow/initialization/plans/doing',
      '.nocaflow/initialization/plans/review',
      '.nocaflow/initialization/plans/done',
      '.nocaflow/initialization/plans/failed/report',
      '.nocaflow/initialization/agent-log',
      '.nocaflow/development/plans/todo',
      '.nocaflow/development/plans/doing',
      '.nocaflow/development/plans/review',
      '.nocaflow/development/plans/done',
      '.nocaflow/development/plans/failed/report',
      '.nocaflow/development/agent-log',
    ];
    const filesToCheck = [
      '.nocaflow/manager.agent.md',
      '.nocaflow/plan.agent.md',
      '.nocaflow/qa.agent.md',
      '.nocaflow/suffix.global.prompt.md',
      '.nocaflow/initialization/init.agent-swarm.md',
      '.nocaflow/initialization/init.phase.rule.md',
      '.nocaflow/initialization/scaffolder.agent.md',
      '.nocaflow/development/dev.agent-swarm.md',
      '.nocaflow/development/dev.phase.rule.md',
      'user.prompt.md',
    ];

    for (const dir of dirsToCheck) {
      await expect(fs.access(dir)).resolves.toBeUndefined();
    }
    for (const file of filesToCheck) {
      await expect(fs.access(file)).resolves.toBeUndefined();
    }

    const managerContent = await fs.readFile('.nocaflow/manager.agent.md', 'utf-8');
    expect(managerContent).toContain('You are manager.agent. The orchestrator.');
  });
});
````

## File: test/unit/utils/shell.test.ts
````typescript
import { getActiveAgents } from '../../../src/utils/shell';
import { platform } from '../../../src/utils/platform';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import * as crypto from 'crypto';

dayjs.extend(relativeTime as any);

describe('unit/utils/shell (integration)', () => {
  const testId = crypto.randomBytes(4).toString('hex');
  const sessionNames = [
    `init-part123-${testId}`,
    `dev-part456-${testId}`,
    `init-scaffold-plan789-${testId}`,
    `qa-planABC-${testId}`,
    `my-random-session-${testId}`,
  ];

  let canRun = false;

  beforeAll(async () => {
    canRun = await platform.commandExists('tmux');
    if (!canRun) {
      console.warn('`tmux` command not found. Skipping shell integration tests.');
    }
  });

  beforeEach(async () => {
    if (!canRun) return;
    // Start detached sessions that will self-terminate
    for (const name of sessionNames) {
      await platform.runCommand(`tmux new-session -d -s ${name} "sleep 10"`);
    }
    // Give tmux a moment to register all sessions
    await new Promise(resolve => setTimeout(resolve, 200));
  });

  afterEach(async () => {
    if (!canRun) return;
    for (const name of sessionNames) {
      // Use `|| true` to ignore errors if session has already terminated or been killed
      await platform.runCommand(`tmux kill-session -t ${name} || true`);
    }
  });

  describe('getActiveAgents', () => {
    const itif = (condition: boolean) => (condition ? it : it.skip);

    itif(canRun)('should parse all types of agent sessions and ignore non-agent sessions', async () => {
      const agents = await getActiveAgents();
      // Filter for agents created in this specific test run to ensure isolation
      const testAgents = agents.filter(
        a => a.partId.endsWith(testId) || a.planId.endsWith(testId),
      );

      expect(testAgents).toHaveLength(4);

      expect(testAgents).toContainEqual(
        expect.objectContaining({ phase: 'INIT', partId: `part123-${testId}` }),
      );
      expect(testAgents).toContainEqual(
        expect.objectContaining({ phase: 'DEV', partId: `part456-${testId}` }),
      );
      expect(testAgents).toContainEqual(
        expect.objectContaining({ phase: 'SCAF', planId: `plan789-${testId}` }),
      );
      expect(testAgents).toContainEqual(
        expect.objectContaining({ phase: 'QA', planId: `planABC-${testId}` }),
      );
    });

    itif(canRun)('should return an empty array if tmux has no sessions', async () => {
      // Kill the sessions from beforeEach to create an empty state
      for (const name of sessionNames) {
        await platform.runCommand(`tmux kill-session -t ${name} || true`);
      }

      const agents = await getActiveAgents();
      expect(agents).toEqual([]);
    });

    itif(canRun)('should correctly calculate agent runtime', async () => {
      const agents = await getActiveAgents();
      const devAgent = agents.find(a => a.partId === `part456-${testId}`);
      expect(devAgent).toBeDefined();
      // The runtime is short and non-deterministic, just check it exists.
      expect(devAgent?.runtime).toContain('a few seconds');
    });
  });
});
````

## File: README.md
````markdown
# NocaFlow: Filesystem-as-State for Phased LLM Swarms.

## Core Problem

Passing full history to parallel agents doesn't scale. It creates context rot and massive token overhead.

## The Fix: Phased, Durable State Machine on Disk

nocaflow treats the filesystem as the single source of truth. State changes are atomic file operations. Agents are stateless workers executing tasks defined in YAML. The system progresses through `initialization`, `development` phases, each with its own rules and plan queue. This is a job tracker built on `mv`, `flock`, and `git`.

## Installation

```bash
npm install -g nocaflow
```

## Getting Started

Initialize nocaflow in your existing project directory.

```bash
nocaflow init
```

This command:
1.  Checks for `git` and `tmux`. Fails if not installed.
2.  Runs `git init`
3.  Scaffolds the phase directories: `initialization/` and `development/`, including all necessary subdirectories (`plans/todo`, `agent-log`, etc.) and placeholder agent/rule files.

## Phases

A phase is a self-contained state machine. The manager only advances to the next phase when the current one is 100% `done`.

*   **`initialization/`**: Scaffolding, boilerplate, dependency setup. Low-isolation tasks.
*   **`development/`**: Core logic, tests, refactoring. Higher need for `git worktree` isolation.

## Actors

*   **`manager.agent`**: The orchestrator. Monitors state, spawns/terminates workers (`tmux`), and promotes plans.
*   **`plan.agent`**: The scheduler. Scans `user.prompt.md`, then generates `plan.yml` files into the current phase's `plans/todo/` directory.
*   **`scaffolder.agent`**: `initialization` phase only. Architect. Creates the initial code skeleton with embedded `TODO` work orders for the swarm.
*   **`[init|dev].agent-swarm.md`**: Phase-specific worker swarms. Ephemeral agents that execute a single plan `part` according to the phase's rules.
*   **`qa.agent`**: Gatekeeper. Verifies completed work against specs, tests, lint, and phase rules before a plan is marked `done`.

## Workflow

1.  **Plan**: `plan.agent` creates `.nocaflow/{phase}/plans/todo/{6digit-id}.plan.yml`.
2.  **Dispatch**: `manager.agent` moves plan to `doing/`, spawns `scaffolder` or `swarm` for each part.
3.  **Execute**: `manager.agent` reads the plan's part dependency graph. It spawns agents for parts with resolved dependencies (`depends_on` list is empty or all dependencies are `done`). Agent locks part, updates `status` (`todo` -> `doing`), performs work, logs to `.nocaflow/{phase}/agent-log/`, and updates `status` to `review`.
4.  **Verify**: Once all parts are `review`, manager moves plan to `review/` and dispatches to `qa.agent`.
5.  **Resolve**: `qa.agent` updates part statuses to `done` or `failed`.
    *   **On Failure**: It writes a `{plan-id}.{part-id}.report.md` in the `.nocaflow/{phase}/plans/failed/report/` directory, then updates status. Manager moves the plan to its final state.

## Directory & Naming Conventions

``` project root
src/
.nocaflow/
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
│   ├── init.phase.rule.md          # Rules governing this phase
│   └── scaffolder.agent.md         # Phase 1 blueprint creator
├── development/                    # PHASE 2: Core Logic
│   ├── plans/
│   │   ├── ... (same structure as above)
│   ├── agent-log/
│   ├── dev.agent-swarm.md
│   └── dev.phase.rule.md
├── manager.agent.md                # Global orchestrator
├── plan.agent.md                   # Global plan generator
├── qa.agent.md                     # Global QA gatekeeper
├── suffix.global.prompt.md         # Global prompt suffix
├── user.prompt.md
```

## State Representation (YAML)

Directory is coarse state. YAML is fine-grained truth.

```yaml
# located in: .nocaflow/development/plans/doing/c8a2b1.plan.yml
plan:
  id: 'c8a2b1'
  title: 'Implement user authentication endpoint'
  status: 'doing' # Coarse state (directory location)
  parts:
    - id: '9e7f8a'
      status: 'done' # Granular state, managed by worker
      isolation: false
      agent_id: '9e7f8a'
      depends_on: []
      name: 'Create JWT utility functions'
    - id: 'a1b2c3'
      status: 'doing' # This part is currently executing
      isolation: false
      agent_id: 'a1b2c3'
      depends_on: ['9e7f8a']
      name: 'Implement POST /login endpoint'
```

## Observability: `nocaflow state`

A non-intrusive CLI for monitoring system health.

```bash
$ nocaflow state

== nocaflow State [2023-10-27 11:30:00] ==
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

== Recent Agent Activity (last 5) ==
[DONE|INIT|9e7f8a] plan:c8a2b1f0 - Wrote 2 files, tests pass. (2m ago)
[DONE|INIT|scaffold] plan:f0e9d8c7 - Scaffolded 5 files. (15m ago)
[FAIL|QA|f0e9d8c7] plan:f0e9d8c7 - Coverage below 80%. (22m ago)

== Stalled / Failed (last 24h) ==
[FAILED] plan:f0e9d8c7 part:b5a4b3c2 - "Coverage below 80%"
         Report: .nocaflow/initialization/plans/failed/f0e9d8c7.b5a4b3c2.report.md

== Recent Git Commits (all worktrees) ==
a4e2c1f (wt-dev-995104) feat: add initial test harness for gitignore
c3b1a0d (wt-dev-995104) fix: handle nested .gitignore files correctly
8e7f6d5 (main) chore: update dependencies
... (7 more)
```

## FAQ

**Q: Which LLM coding agent does this support?**
A: Any agent that can execute shell commands. nocaflow is an orchestration layer, not an agent. The `*.agent.md` files are prompt templates for your chosen agent. The only requirement is that the agent can read/write files and execute commands like `mv` to signal state changes. It is framework-agnostic.

**Q: Why not a database for state?**
A: A filesystem is transparent, universally accessible, and versionable. Debugging is `ls` and `cat`. Rollback is `git reset`. A database adds complexity, dependencies, and an opaque layer. This system prioritizes simplicity and inspectability.

**Q: What are the platform requirements?**
A: NocaFlow is designed for POSIX-like environments and has two core runtime dependencies: `git` and `tmux`. It is tested and works on:
*   Linux
*   macOS
*   Windows Subsystem for Linux (WSL2)
*   Termux on Android (run `pkg install nodejs git tmux`)

It does not support native Windows (cmd.exe or PowerShell) due to its reliance on `tmux` and POSIX filesystem semantics.

## Tradeoffs

*   **Pro:**
    *   Massive token savings vs. full-context models.
    *   State is durable, auditable, and recoverable on disk.
    *   High parallelism for non-dependent tasks via `depends_on` graph.
*   **Con:**
    *   **I/O Bound**: Performance is limited by disk speed, not inference.
    *   **Manager is SPOF**: A dead manager halts all orchestration. Requires external process supervision.
    *   **Merge Conflicts**: The `depends_on` key creates a DAG, serializing dependent tasks to prevent some classes of conflicts. This trades parallelism for correctness. True merge resolution for independent-but-conflicting parts remains an external problem.
````
