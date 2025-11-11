# Directory Structure
```
.nocaflow/
  development/
    agent-log/
      .gitkeep
    plans/
      doing/
        .gitkeep
      done/
        .gitkeep
      failed/
        report/
          .gitkeep
      review/
        .gitkeep
      todo/
        dev-plan-01.yml
        dev-plan-02.yml
        dev-plan-03.yml
        dev-plan-04.yml
        dev-plan-05.yml
        dev-plan-06.yml
        dev-plan-07.yml
        dev-plan-08.yml
        dev-plan-09.yml
        dev-plan-10.yml
        dev-plan-11.yml
        dev-plan-12.yml
        dev-plan-13.yml
        dev-plan-14.yml
        dev-plan-15.yml
        dev-plan-16.yml
        dev-plan-17.yml
        dev-plan-18.yml
        dev-plan-19.yml
        dev-plan-20.yml
        dev-plan-21.yml
        dev-plan-22.yml
        dev-plan-23.yml
        dev-plan-24.yml
        dev-plan-25.yml
  initialization/
    plans/
      doing/
        c8a2b1.plan.yml
        init-doing-2.yml
      done/
        init-done-1.yml
        init-done-2.yml
        init-done-3.yml
        init-done-4.yml
        init-done-5.yml
        init-done-6.yml
      failed/
        report/
          f0e9d8.b5a4b3.report.md
      review/
        init-review-1.yml
      todo/
        e5d6c7.plan.yml
development/
  dev.agent-swarm.md
  dev.phase.rule.md
e2e/
  .gitkeep
initialization/
  init.agent-swarm.md
  init.phase.rule.md
  scaffolder.agent.md
integration/
  .gitkeep
src/
  commands/
    init.ts
    state.ts
  models/
    phase.ts
    plan.ts
  utils/
    fs.ts
    git.ts
    logs.ts
    shell.ts
  cli.ts
unit/
  .gitkeep
worktrees/
  .gitkeep
.eslintrc.js
jest.config.js
manager.agent.md
package.json
plan.agent.md
qa.agent.md
README.md
suffix.global.prompt.md
tsconfig.json
user.prompt.md
```

# Files

## File: src/commands/init.ts
````typescript
import fs from 'fs/promises';
import path from 'path';

/**
 * @description Handles the logic for the 'init' command.
 */
export const handleInitCommand = async (argv: {}): Promise<void> => {
  // TODO: part-init-scaffold - Create the initial .nocaflow directory structure.
  // INSTRUCTIONS:
  // 1. Check if a `.nocaflow` directory already exists in the current working directory. If it does, log a warning message and exit the process to avoid overwriting existing state.
  // 2. Define an array of directory paths that need to be created. This should include all subdirectories for both 'initialization' and 'development' phases as seen in the project structure.
  //    - e.g., '.nocaflow/initialization/agent-log', '.nocaflow/initialization/plans/todo', etc.
  // 3. Iterate through the array and use `fs.mkdir` with the `{ recursive: true }` option to create each directory.
  // 4. Define an array of paths for `.gitkeep` files that should be placed in empty directories to ensure they are tracked by Git.
  //    - e.g., '.nocaflow/initialization/agent-log/.gitkeep', '.nocaflow/development/plans/todo/.gitkeep', etc.
  // 5. Iterate through the `.gitkeep` file paths and create each empty file using `fs.writeFile(filePath, '')`.
  // 6. After successfully creating the structure, log a confirmation message to the console.
  throw new Error('Not implemented');
};
````

## File: .nocaflow/development/plans/todo/dev-plan-01.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-02.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-03.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-04.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-05.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-06.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-07.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-08.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-09.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-10.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-11.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-12.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-13.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-14.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-15.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-16.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-17.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-18.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-19.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-20.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-21.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-22.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-23.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-24.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/development/plans/todo/dev-plan-25.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/initialization/plans/doing/c8a2b1.plan.yml
````yaml
plan:
  id: 'c8a2b1'
  status: 'doing'
  title: 'Implement user authentication endpoint'
  introduction: |
    This plan outlines the initial scaffolding and implementation for a JWT-based user authentication system.
    The goal is to create the core utility functions and the primary login endpoint, laying the groundwork for registration and profile management.
  parts:
    - id: 'scaf01'
      status: 'done' # The scaffolder has already run for this plan.
      isolation: false
      agent_id: 'scaffolder'
      name: 'Part 0: Scaffold Authentication Files'
      reason: 'To create the file structure for auth endpoints and utilities.'
      steps:
        - id: 'scfs1a'
          status: 'done'
          name: 'Scaffold JWT utils and auth routes'
          reason: 'To create placeholder files with TODOs.'
          files: ['src/utils/jwt.ts', 'src/routes/auth.ts', 'src/controllers/authController.ts']
          operations:
            - 'Created files and embedded instructions for implementation agents.'
      context_files:
        compact: []
        medium: []
        extended: []
    - id: '9e7f8a'
      status: 'done' # This implementation part is also completed.
      isolation: false
      agent_id: 'agnt8a'
      depends_on: ['scaf01']
      name: 'Part 1: Create JWT utility functions'
      reason: |
        To handle token creation and verification in a centralized, reusable module before any endpoints depend on it.
      steps:
        - id: 'jwtcr8'
          status: 'done'
          name: 'Implement createToken function'
          reason: 'To generate JWTs for authenticated users.'
          files: ['src/utils/jwt.ts']
          operations:
            - 'Create a function `createToken(user: User): string`.'
            - 'Use the `jsonwebtoken` library.'
            - 'The token payload must include `userId` and `roles`.'
            - 'Set token expiration to 24 hours.'
        - id: 'jwtvr5'
          status: 'done'
          name: 'Implement verifyToken function'
          reason: 'To validate tokens from incoming requests.'
          files: ['src/utils/jwt.ts']
          operations:
            - 'Create a function `verifyToken(token: string): Session | null`.'
            - 'It should return the decoded session payload on success.'
            - 'It must return `null` if the token is invalid or expired.'
      context_files:
        compact: ['src/utils/jwt.ts']
        medium: ['src/utils/jwt.ts', 'src/models/user.ts']
        extended: ['src/utils/jwt.ts', 'src/models/user.ts', 'package.json']
    - id: 'a1b2c3'
      status: 'doing' # This is the currently active implementation part.
      isolation: false
      agent_id: 'agntc3'
      depends_on: ['9e7f8a']
      name: 'Part 2: Implement POST /login endpoint'
      reason: |
        To allow users to authenticate and receive a JWT.
      steps:
        - id: 'lgnrt1'
          status: 'todo'
          name: 'Define the route and controller structure'
          reason: 'To handle incoming POST requests to /login.'
          files: ['src/routes/auth.ts', 'src/controllers/authController.ts']
          operations:
            - 'In `src/routes/auth.ts`, define a `POST /login` route.'
            - 'In `src/controllers/authController.ts`, create a `loginUser` function stub.'
            - 'The controller should validate request body for `email` and `password`.'
            - 'On successful validation, it should call a user service to verify credentials.'
            - 'Upon successful authentication, use the JWT utility to create a token and send it in the response.'
      context_files:
        compact: ['src/routes/auth.ts', 'src/controllers/authController.ts', 'src/utils/jwt.ts']
        medium: ['src/routes/auth.ts', 'src/controllers/authController.ts', 'src/utils/jwt.ts', 'src/services/userService.ts']
        extended: ['src/routes/auth.ts', 'src/controllers/authController.ts', 'src/utils/jwt.ts', 'src/services/userService.ts', 'src/models/user.ts']
  conclusion: |
    Upon completion, the system will have a secure and functional authentication entry point, ready for frontend integration.
  context_files:
    compact: ['src/utils/jwt.ts', 'src/routes/auth.ts']
    medium: ['src/utils/jwt.ts', 'src/routes/auth.ts', 'src/controllers/authController.ts']
    extended: ['src/utils/jwt.ts', 'src/routes/auth.ts', 'src/controllers/authController.ts', 'src/models/user.ts']
````

## File: .nocaflow/initialization/plans/doing/init-doing-2.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/initialization/plans/done/init-done-1.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/initialization/plans/done/init-done-2.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/initialization/plans/done/init-done-3.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/initialization/plans/done/init-done-4.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/initialization/plans/done/init-done-5.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/initialization/plans/done/init-done-6.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/initialization/plans/failed/report/f0e9d8.b5a4b3.report.md
````markdown
# QA Failure Report

**Plan ID**: `f0e9d8`
**Part ID**: `b5a4b3`
**Agent**: `qa.agent`
**Timestamp**: `2023-10-27T11:08:00Z`

## Summary
Test coverage for `src/utils/new-feature.ts` is 65%, which is below the required 80% threshold for the `initialization` phase.

## Details
`npm test --coverage` output:
```
...
-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------|---------|----------|---------|---------|-------------------
All files          |   78.57 |    66.67 |   83.33 |   78.26 |
 src/utils         |   65.00 |    50.00 |   60.00 |   65.00 |
  new-feature.ts   |   65.00 |    50.00 |   60.00 |   65.00 | 15-25
-------------------|---------|----------|---------|---------|-------------------
```

## Recommendation
Add unit tests for the edge cases in the `calculate` function in `src/utils/new-feature.ts`.
````

## File: .nocaflow/initialization/plans/review/init-review-1.yml
````yaml
# Empty plan file to match count for `nocaflow state`
````

## File: .nocaflow/initialization/plans/todo/e5d6c7.plan.yml
````yaml
plan:
  id: 'e5d6c7'
  status: 'todo'
  title: 'Setup Database Schema and User Model'
  introduction: |
    This plan will create the initial database migration for the users table and define the corresponding data model in the application.
    This is a foundational step before any user-related business logic can be implemented.
  parts:
    - id: 'scaf02'
      status: 'todo'
      isolation: false
      agent_id: 'scaffolder'
      name: 'Part 1: Scaffold Database Files'
      reason: |
        To create the file structure and boilerplate for the database migration and user model, with detailed TODOs for the implementation swarm.
      steps:
        - id: 'scfs2a'
          status: 'todo'
          name: 'Create migration file'
          reason: 'To define the users table schema.'
          files: ['src/db/migrations/001_create_users_table.ts']
          operations:
            - 'Create the file.'
            - 'Add boilerplate for a database migration script.'
            - 'Embed a TODO with instructions to define columns: id, email, password_hash, created_at.'
        - id: 'scfs2b'
          status: 'todo'
          name: 'Create user model file'
          reason: 'To provide a type-safe representation of a user.'
          files: ['src/models/user.ts']
          operations:
            - 'Create the file.'
            - 'Add a TypeScript interface `User`.'
            - 'Embed a TODO with instructions to add fields corresponding to the database schema.'
      context_files:
        compact: []
        medium: []
        extended: []
    - id: 'dbimpl'
      status: 'todo'
      isolation: false
      agent_id: 'agntd1'
      depends_on: ['scaf02']
      name: 'Part 2: Implement Database Migration and Model'
      reason: |
        To execute the instructions left by the scaffolder agent to build the actual database schema and user model.
      steps:
        - id: 'dbim1a'
          status: 'todo'
          name: 'Implement user migration'
          reason: 'To write the SQL or ORM code that creates the users table.'
          files: ['src/db/migrations/001_create_users_table.ts']
          operations:
            - 'Follow the instructions in the TODO block to define the table schema.'
        - id: 'dbim1b'
          status: 'todo'
          name: 'Implement user model'
          reason: 'To define the User type.'
          files: ['src/models/user.ts']
          operations:
            - 'Follow the instructions in the TODO block to define the User interface.'
      context_files:
        compact: ['src/db/migrations/001_create_users_table.ts', 'src/models/user.ts']
        medium: ['src/db/migrations/001_create_users_table.ts', 'src/models/user.ts']
        extended: ['src/db/migrations/001_create_users_table.ts', 'src/models/user.ts']
  conclusion: |
    After this plan is done, the application will have a solid, version-controlled database schema for users.
  context_files:
    compact: []
    medium: []
    extended: []
````

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
  partId: string;
  reason: string;
  reportPath: string;
}

/**
 * @description Reads all plan files from all phases and aggregates stats.
 * @returns An object containing plan counts for each status in each phase.
 */
export const getPhaseStats = async (): Promise<PhaseStats> => {
  // TODO: part-fs-get-phase-stats - Walk through .nocaflow/{phase}/plans/* directories and count plans.
  // INSTRUCTIONS:
  // 1. Define phase directories: ['.nocaflow/initialization', '.nocaflow/development'].
  // 2. For each phase, iterate through subdirectories: 'todo', 'doing', 'review', 'failed', 'done'.
  // 3. Use `fs.readdir` to count the number of files in each subdirectory. Handle errors for non-existent directories (count should be 0).
  // 4. Aggregate the counts into a `PhaseStats` object.
  // 5. Calculate the `total` for each phase.
  // 6. Example structure for one phase:
  //    'initialization': { todo: 1, doing: 2, review: 1, failed: 0, done: 6, total: 10 }
  // 7. Return the final `PhaseStats` object.
  throw new Error('Not implemented');
};

/**
 * @description Scans the failed reports directory for recent failures.
 * @param hours - The lookback period in hours.
 * @returns A list of failed report details.
 */
export const getFailedReports = async (hours: number): Promise<FailedReport[]> => {
  // TODO: part-fs-get-failed-reports - Scan failed report directories for recent failures.
  // INSTRUCTIONS:
  // 1. Define report directories to scan, e.g., '.nocaflow/initialization/plans/failed/report'.
  // 2. Use `fs.readdir` to get all report files (ending in .md).
  // 3. For each file, get its stats using `fs.stat` to find the creation time (`birthtime`).
  // 4. Use `dayjs` to check if `birthtime` is within the last `hours`.
  // 5. If it is recent, read the file content.
  // 6. Parse the markdown content to extract the summary/reason. A simple regex or string search for a "Summary" section is sufficient.
  // 7. The filename typically follows the pattern `{planId}.{partId}.report.md`. Parse this to get IDs.
  // 8. Construct a `FailedReport` object and add it to a results array.
  // 9. Return the array of recent failed reports.
  throw new Error('Not implemented');
};

/**
 * @description Reads and parses a YAML plan file.
 * @param filePath - The path to the plan.yml file.
 * @returns The parsed Plan object.
 */
export const readPlan = async (filePath: string): Promise<Plan> => {
    // TODO: part-fs-read-plan - Read file content and parse using js-yaml.
    // INSTRUCTIONS:
    // 1. Use `fs.readFile` to read the content of `filePath` as a UTF-8 string.
    // 2. Use `yaml.load()` from the 'js-yaml' library to parse the string content.
    // 3. Cast the result to the `Plan` type and return it.
    // 4. Include error handling for file-not-found and YAML parsing errors.
    throw new Error('Not implemented');
};
````

## File: src/utils/git.ts
````typescript
import { promisify } from 'util';
import { exec as execCallback } from 'child_process';

export interface GitCommit {
  hash: string;
  worktree: string | null;
  message: string;
}

const exec = promisify(execCallback);

/**
 * @description Executes 'git log' to get recent commit history across all worktrees.
 * @param limit - The maximum number of commits to return.
 * @returns A list of recent git commits.
 */
export const getGitLog = async (limit: number): Promise<GitCommit[]> => {
  // TODO: part-git-get-log - Get recent git commits across all worktrees.
  // INSTRUCTIONS:
  // 1. First, get a map of worktree paths to their names. Execute `git worktree list --porcelain`.
  //    Parse the output to create a map like: { '/path/to/worktrees/wt-name': 'wt-name' }.
  // 2. Execute `git log --all -n ${limit} --pretty=format:'%H|%s|%D'`. The `%D` ref names can help identify worktrees.
  //    The output for each commit will be like: `a4e2c1f|feat: some message|HEAD -> main, origin/main, worktrees/wt-dev-995104/HEAD`
  // 3. Split the log output by newline to process each commit.
  // 4. For each line, split by '|' to get hash, message, and ref names.
  // 5. In the ref names string, look for a worktree path (e.g., 'worktrees/wt-dev-995104'). Match this against the map from step 1 to find the worktree name.
  // 6. If no worktree is found, the `worktree` property should be `null`.
  // 7. Construct `GitCommit` objects and return them in an array.
  throw new Error('Not implemented');
};
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
  .demandCommand(1, 'You need at least one command before moving on')
  .help()
  .argv;
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

## File: jest.config.js
````javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
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

## File: user.prompt.md
````markdown
// This file contains the high-level user request.
// The plan.agent will read this file to generate the initial plans.

Implement a full-stack user authentication system with JWT.
- Create a REST API with endpoints for /register, /login, /profile.
- Use a PostgreSQL database for user storage.
- The frontend should be a simple React app with login and registration forms.
````

## File: src/commands/state.ts
````typescript
import chalk from 'chalk';
import { getPhaseStats, PhaseStats, getFailedReports, FailedReport } from '../utils/fs';
import { getActiveAgents, AgentInfo } from '../utils/shell';
import { getRecentLogs, LogEntry } from '../utils/logs';
import { getGitLog, GitCommit } from '../utils/git';

/**
 * @description Renders a progress bar.
 * @param current - The current progress value.
 * @param total - The total value for 100%.
 * @param length - The character length of the bar.
 * @returns A string representing the progress bar.
 */
const renderProgressBar = (current: number, total: number, length: number = 20): string => {
  // TODO: part-state-render-progress - Implement progress bar rendering logic.
  // INSTRUCTIONS:
  // 1. Calculate the percentage of `current` to `total`.
  // 2. Determine how many `length` characters should be filled (e.g., '▇').
  // 3. Determine how many `length` characters should be empty (e.g., '-').
  // 4. Return a string like `[▇▇▇▇----] (current/total plans done)`.
  // 5. If total is 0, return a string representing an empty bar `[----------] (0/0 plans done)`.
  throw new Error('Not implemented');
};

/**
 * @description Displays the full state report to the console.
 */
export const handleStateCommand = async (argv: {}): Promise<void> => {
  // TODO: part-state-fetch-data - Fetch all necessary data using utility functions.
  // INSTRUCTIONS:
  // 1. Determine the current phase. For now, this can be hardcoded or inferred. Assume 'initialization' then 'development'.
  // 2. Call `getPhaseStats()` to get statistics for all phases.
  // 3. Call `getActiveAgents()` to get a list of running agents.
  // 4. Call `getRecentLogs(5)` to get the last 5 log entries.
  // 5. Call `getFailedReports(24)` to get failures in the last 24 hours.
  // 6. Call `getGitLog(10)` to get the 10 most recent git commits.
  const phaseStats: PhaseStats = {} as PhaseStats;
  const activeAgents: AgentInfo[] = [];
  const recentLogs: LogEntry[] = [];
  const failedReports: FailedReport[] = [];
  const gitCommits: GitCommit[] = [];
  const currentPhase = 'initialization'; // Placeholder
  
  // TODO: part-state-render-output - Format and print the state report.
  // INSTRUCTIONS:
  // 1. Use `chalk` for all coloring to match the style in the project's README.md.
  // 2. Print a header with the current time.
  // 3. Print the current phase.
  // 4. Print phase progress using `renderProgressBar` for each phase found in `phaseStats`.
  // 5. Print detailed plan counts for each phase.
  // 6. Print a list of active agents, including their phase, IDs, and runtime.
  // 7. Print recent agent activity from `recentLogs`, color-coding by status (DONE, FAIL).
  // 8. Print any stalled or failed reports from `failedReports`.
  // 9. Print recent git commits, including hash, worktree (if any), and message.
  throw new Error('Not implemented');
};
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
  // TODO: part-logs-get-recent - Read and parse agent log files.
  // INSTRUCTIONS:
  // 1. Define log directories to scan: ['.nocaflow/initialization/agent-log', '.nocaflow/development/agent-log'].
  // 2. Recursively find all files ending in `.log` within these directories.
  // 3. Read the content of each log file. Each line is a potential log entry.
  // 4. For each line, use a regex to parse it. A good starting regex is:
  //    /^(?<timestamp>.*?) \[(?<status>\w+)\|(?<phase>\w+)\|(?<agentId>.*?)\] plan:(?<planId>\S+) - (?<message>.*)$/
  // 5. If a line matches, create a `LogEntry` object. Convert the timestamp string to a `Date` object.
  // 6. Collect all parsed log entries into a single array.
  // 7. Sort the array in descending order by timestamp (newest first).
  // 8. Return a slice of the array containing the top `limit` entries.
  throw new Error('Not implemented');
};
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
    "build": "tsc",
    "dev": "ts-node src/cli.ts",
    "test": "jest",
    "lint": "eslint 'src/**/*.ts'"
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

## File: development/dev.phase.rule.md
````markdown
codebase compliance rules;

1. No OOP, only HOFs
2. Use Node.js and e2e type safe TypeScript
3. No unknown or any type
4. [e2e|integration|unit]/[domain].test.ts files & dirs
5. Use `npm test`. Write isolated, idempotent tests. Do not mock internal application logic. External network services (e.g., LLM APIs) should be mocked to ensure tests are fast, deterministic, and independent of network or API key issues.
6. DRY
````

## File: initialization/init.agent-swarm.md
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

## File: initialization/scaffolder.agent.md
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

## File: src/utils/shell.ts
````typescript
import { promisify } from 'util';
import { exec as execCallback } from 'child_process';
import dayjs from 'dayjs';
import { Plan, PlanPart } from '../models/plan';

export interface AgentInfo {
  phase: 'INIT' | 'DEV' | 'QA' | 'SCAF';
  id: string; // part_id, plan_id for QA/Scaffold
  planId: string;
  partId: string; // Can be 'scaffold' or 'qa'
  runtime: string;
  pid: string;
}

const exec = promisify(execCallback);

/**
 * @description Lists active tmux sessions and parses them to find agent info.
 * @returns A list of active agents.
 */
export const getActiveAgents = async (): Promise<AgentInfo[]> => {
  // TODO: part-shell-get-agents - List and parse active tmux sessions to find agent info.
  // INSTRUCTIONS:
  // 1. Execute `tmux ls -F "#{session_name} #{pane_pid} #{session_activity}"`. Use `promisify(exec)`.
  // 2. Split the stdout by newline to get a list of active sessions.
  // 3. For each session string, parse it to extract name, PID, and activity timestamp.
  // 4. Use regex or string splitting on the session name to determine the agent type and IDs based on conventions from `manager.agent.md`:
  //    - Worker: /^(init|dev)-(.+)/ -> { phase, partId }
  //    - Scaffolder: /^(init)-scaffold-(.+)/ -> { phase: 'SCAF', planId }
  //    - QA: /^qa-(.+)/ -> { phase: 'QA', planId }
  // 5. For worker agents, you need to find the planId. This is tricky. A simplified approach is to assume the `partId` is unique and not try to look up the plan file. The `planId` can be set to 'unknown' or the partId. A better approach would be to scan `doing` directories for plans containing the partId. Let's stick to the simpler one for now.
  // 6. Calculate runtime: The `session_activity` is a Unix timestamp. Use `dayjs` to find the duration from that time to now (e.g., `dayjs().to(dayjs.unix(timestamp))`).
  // 7. Construct `AgentInfo` objects for each valid session.
  // 8. Return the list of `AgentInfo` objects.
  // 9. Handle the case where tmux is not running or there are no sessions (command might fail or return empty string).
  throw new Error('Not implemented');
};
````

## File: plan.agent.md
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

## File: development/dev.agent-swarm.md
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

## File: initialization/init.phase.rule.md
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

## File: suffix.global.prompt.md
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

## File: manager.agent.md
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
    - **Concurrency Check**: `ACTIVE_WORKERS=$(tmux ls | grep -cE '^(init-|dev-)[0-9a-f-]{36})`.
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

## File: qa.agent.md
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

**Q: Does it work on Windows?**
A: No. It relies on `tmux` and POSIX filesystem atomicity for core operations. Use WSL2.

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
