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
initialization/
  init.agent-swarm.md
  init.phase.rule.md
  scaffolder.agent.md
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
test/
  e2e/
    cli.test.ts
  integration/
    commands/
      init.test.ts
  unit/
    commands/
      state.test.ts
    utils/
      fs.test.ts
      git.test.ts
      logs.test.ts
      shell.test.ts
  test.util.ts
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

## File: src/commands/init.ts
````typescript
import fs from 'fs/promises';
import path from 'path';
import chalk from 'chalk';

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

  const rootDir = '.nocaflow';
  const phases = ['initialization', 'development'];
  const planDirs = ['todo', 'doing', 'review', 'done', 'failed/report'];

  // Blueprint for directory structure
  const dirsToCreate: string[] = [];
  const gitkeepFiles: string[] = [];

  // 1. Check for rootDir existence.
  // fs.access(rootDir).then(() => { console.warn(...) and process.exit(0) }).catch(() => { /* continue */ });

  // 2 & 4. Loop phases and planDirs to populate dirsToCreate and gitkeepFiles.
  
  // 3 & 5. Loop through dirsToCreate/gitkeepFiles and call fs.mkdir/fs.writeFile.

  // 6. Log success message using chalk.green.

  throw new Error('Not implemented');
};
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

## File: user.prompt.md
````markdown
// This file contains the high-level user request.
// The plan.agent will read this file to generate the initial plans.

Implement a full-stack user authentication system with JWT.
- Create a REST API with endpoints for /register, /login, /profile.
- Use a PostgreSQL database for user storage.
- The frontend should be a simple React app with login and registration forms.
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
  // 1. Define phases: ['initialization', 'development'].
  // 2. Define statuses: ['todo', 'doing', 'review', 'failed', 'done'].
  // 3. Use `fs.readdir` to count the number of files in each subdirectory. Handle errors for non-existent directories (count should be 0).
  // 4. Aggregate the counts into a `PhaseStats` object.
  // 5. Calculate the `total` for each phase.
  // 6. Example structure for one phase:
  //    'initialization': { todo: 1, doing: 2, review: 1, failed: 0, done: 6, total: 10 }
  // 7. Return the final `PhaseStats` object.

  // const phases = ['initialization', 'development'];
  // const statuses = ['todo', 'doing', 'review', 'failed', 'done'];
  // const stats: PhaseStats = {};

  // for (const phase of phases) {
  //   stats[phase] = { todo: 0, doing: 0, review: 0, failed: 0, done: 0, total: 0 };
  //   for (const status of statuses) {
  //     const dirPath = path.join('.nocaflow', phase, 'plans', status);
  //     try {
  //       const files = await fs.readdir(dirPath);
  //       const count = files.filter(f => f.endsWith('.yml')).length;
  //       stats[phase][status as keyof typeof stats.phase] = count;
  //       stats[phase].total += count;
  //     } catch (error) {
  //       // Directory likely doesn't exist, count is 0.
  //     }
  //   }
  // }
  // return stats;

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
  // 1. Define phase directories to scan.
  // 2. Use `fs.readdir` to get all report files (ending in .md).
  // 3. For each file, get its stats using `fs.stat` to find the creation time (`birthtime`).
  // 4. Use `dayjs` to check if `birthtime` is within the last `hours`.
  // 5. If it is recent, read the file content.
  // 6. Parse the markdown content to extract the summary/reason. A simple regex or string search for a "Summary" section is sufficient.
  // 7. The filename typically follows the pattern `{planId}.{partId}.report.md`. Parse this to get IDs.
  // 8. Construct a `FailedReport` object and add it to a results array.
  // 9. Return the array of recent failed reports.

  // const phases = ['initialization', 'development'];
  // const reports: FailedReport[] = [];
  // const since = dayjs().subtract(hours, 'hour');

  // for (const phase of phases) {
  //   const reportDir = path.join('.nocaflow', phase, 'plans', 'failed', 'report');
  //   try {
  //     const files = await fs.readdir(reportDir);
  //     for (const file of files) {
  //       if (!file.endsWith('.report.md')) continue;
  //       const filePath = path.join(reportDir, file);
  //       const stats = await fs.stat(filePath);
  //       if (dayjs(stats.birthtime).isAfter(since)) {
  //         // const content = await fs.readFile(filePath, 'utf-8');
  //         // const summaryMatch = content.match(/## Summary\s*\n\s*(.*)/);
  //         // const reason = summaryMatch ? summaryMatch[1].trim() : 'Could not parse summary.';
  //         // const [planId, partId] = file.split('.').slice(0, 2);
  //         // reports.push({ planId, partId, reason, reportPath: filePath });
  //       }
  //     }
  //   } catch (error) { /* dir may not exist */ }
  // }
  // return reports;
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
    // 1. Use `fs.readFile` to read the content of `filePath` as 'utf-8'.
    // 2. Use `yaml.load()` from the 'js-yaml' library to parse the string content.
    // 3. Cast the result to the `Plan` type and return it.
    // 4. Include error handling for file-not-found and YAML parsing errors.

    // try {
    //   const fileContent = await fs.readFile(filePath, 'utf-8');
    //   const plan = yaml.load(fileContent) as Plan;
    //   return plan;
    // } catch (error) {
    //   // if (error.code === 'ENOENT') { ... }
    //   // else if (error instanceof YAMLException) { ... }
    //   // else { ... }
    //   throw error;
    // }
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
  // 1. Execute `git worktree list --porcelain` to get worktree info.
  //    - Parse the output to create a map: { 'worktrees/wt-name': 'wt-name' }.
  // 2. Execute `git log --all -n ${limit} --pretty=format:'%H|%s|%D'`.
  // 3. Process the log output line by line.
  // 4. For each line, parse hash, message, and refs.
  // 5. Match refs against the worktree map to find the worktree name.
  // 6. Create `GitCommit` objects and add to a results array.

  // const getWorktreeMap = async (): Promise<Map<string, string>> => {
  //   // const { stdout } = await exec('git worktree list --porcelain');
  //   // const map = new Map<string, string>();
  //   // parse stdout and populate map, e.g. extract 'worktrees/wt-...' and the final part as the name.
  //   // return map;
  // }

  // try {
  //   // const worktreeMap = await getWorktreeMap();
  //   // const { stdout: logOutput } = await exec(`...`);
  //   // const commits: GitCommit[] = logOutput.trim().split('\n').map(line => {
  //   //   // ... parse line ...
  //   //   // ... find worktree from refs using worktreeMap ...
  //   //   // return { hash, message, worktree };
  //   // });
  //   // return commits;
  // } catch (error) {
  //   return []; // Git not installed or not a git repo.
  // }
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

## File: test/test.util.ts
````typescript
import { exec as execCallback, ExecException } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';

const promisedExec = promisify(execCallback);

// TODO: part-test-util-run-cli - Implement a promisified exec for running the CLI.
// INSTRUCTIONS:
// 1. Create a function `runCli(args: string)` that returns a promise.
// 2. It should execute the compiled CLI from the `dist` folder.
// 3. The command should be `node <path-to-project-root>/dist/cli.js ${args}`.
// 4. It should return an object `{ stdout: string, stderr: string, code: number }`.
// 5. Handle non-zero exit codes gracefully by catching the error from `exec` and extracting details from it.
export const runCli = async (
  args: string,
): Promise<{ stdout: string; stderr: string; code: number }> => {
  throw new Error('Not implemented');
};

// TODO: part-test-util-setup-dir - Implement a test setup utility.
// INSTRUCTIONS:
// 1. Create a function `setupTestDirectory()` that returns a promise resolving to an object.
// 2. The function should create a unique temporary directory using `fs.mkdtemp` in `os.tmpdir()`.
// 3. It should store the original `process.cwd()` and then `process.chdir()` into the new temp directory.
// 4. The returned object should contain `testDir: string` (the path to the temp dir) and `cleanup: () => Promise<void>`.
// 5. The `cleanup` function should `process.chdir()` back to the original directory and remove the temp directory recursively.
export const setupTestDirectory = async (): Promise<{
  testDir: string;
  cleanup: () => Promise<void>;
}> => {
  throw new Error('Not implemented');
};

// TODO: part-test-util-git-init - Implement a utility to initialize a git repository.
// INSTRUCTIONS:
// 1. Create an async function `initGitRepo()`.
// 2. It should execute the necessary `git` commands using `promisedExec`.
// 3. Commands to run:
//    - `git init`
//    - `git config user.email "test@example.com"`
//    - `git config user.name "Test User"`
//    - `git commit --allow-empty -m "Initial commit"`
export const initGitRepo = async (): Promise<void> => {
  throw new Error('Not implemented');
};

// TODO: part-test-util-create-plan - Implement a utility to create a dummy plan file.
// INSTRUCTIONS:
// 1. Create an async function `createDummyPlanFile(phase: 'initialization' | 'development', status: 'todo' | 'doing' | 'done' | 'review' | 'failed', fileName: string)`.
// 2. The function should create the necessary directory structure inside the current test directory.
//    - e.g., `.nocaflow/${phase}/plans/${status}/`
// 3. It should write a minimal, empty YAML file to that path.
//    - e.g., `fs.writeFile(path.join(..., fileName), '# dummy plan')`.
export const createDummyPlanFile = async (
  phase: 'initialization' | 'development',
  status: 'todo' | 'doing' | 'done' | 'review' | 'failed',
  fileName: string,
): Promise<void> => {
  throw new Error('Not implemented');
};
````

## File: jest.config.js
````javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/test/**/*.test.ts'],
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
  // 1. Define phase directories to scan.
  // 2. Find all `.log` files in the `agent-log` subdirectories.
  // 3. Read content of each log file.
  // 4. For each line, use regex to parse. Example:
  //    /^(?<timestamp>.*?) \[(?<status>\w+)\|(?<phase>\w+)\|(?<agentId>.*?)\] plan:(?<planId>\S+) - (?<message>.*)$/
  // 5. Create `LogEntry` objects from matches. Convert timestamp string to a `Date`.
  // 6. Collect all entries.
  // 7. Sort entries by timestamp (descending).
  // 8. Return a slice of the array containing the top `limit` entries.

  // const logDirs = ['.nocaflow/initialization/agent-log', '.nocaflow/development/agent-log'];
  // let allEntries: LogEntry[] = [];
  // const logRegex = /^(?<timestamp>.*?) \[(?<status>\w+)\|(?<phase>\w+)\|(?<agentId>.*?)\] plan:(?<planId>\S+) - (?<message>.*)$/;

  // for (const dir of logDirs) {
  //   try {
  //     const files = await fs.readdir(dir);
  //     for (const file of files.filter(f => f.endsWith('.log'))) {
  //       // const content = await fs.readFile(path.join(dir, file), 'utf-8');
  //       // for (const line of content.split('\n')) {
  //       //   const match = line.match(logRegex);
  //       //   if (match?.groups) {
  //       //     // create LogEntry and push to allEntries
  //       //   }
  //       // }
  //     }
  //   } catch (error) { /* dir may not exist */ }
  // }

  // allEntries.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  // return allEntries.slice(0, limit);

  throw new Error('Not implemented');
};
````

## File: test/unit/commands/state.test.ts
````typescript
import { renderProgressBar } from '../../../src/commands/state';

describe('unit/commands/state', () => {
  describe('renderProgressBar', () => {
    it('should render an empty bar for 0% progress', () => {
      // TODO: part-unit-progress-bar-0 - Test rendering for 0% progress.
      // INSTRUCTIONS:
      // 1. Call `renderProgressBar(0, 10)`.
      // 2. Assert the output string is correct for an empty bar, e.g., `[----------] (0/10 plans done)`.
    });

    it('should render a half-filled bar for 50% progress', () => {
      // TODO: part-unit-progress-bar-50 - Test rendering for 50% progress.
      // INSTRUCTIONS:
      // 1. Call `renderProgressBar(5, 10)`.
      // 2. Assert the output string is correct for a half-filled bar, e.g., `[▇▇▇▇▇-----] (5/10 plans done)`.
    });

    it('should render a full bar for 100% progress', () => {
      // TODO: part-unit-progress-bar-100 - Test rendering for 100% progress.
      // INSTRUCTIONS:
      // 1. Call `renderProgressBar(10, 10)`.
      // 2. Assert the output string is correct for a full bar, e.g., `[▇▇▇▇▇▇▇▇▇▇] (10/10 plans done)`.
    });

    it('should handle different bar lengths', () => {
      // TODO: part-unit-progress-bar-length - Test that the length parameter is respected.
      // INSTRUCTIONS:
      // 1. Call `renderProgressBar(1, 2, 20)` to specify a bar length of 20.
      // 2. Assert the bar part of the string has 20 characters (`[▇...-...]`).
    });

    it('should round to the nearest character for fractional progress', () => {
      // TODO: part-unit-progress-bar-rounding - Test rounding logic.
      // INSTRUCTIONS:
      // 1. Call `renderProgressBar(1, 3, 10)`.
      // 2. 33.3% of 10 should round to 3 filled characters.
      // 3. Assert the output string reflects this, e.g., `[▇▇▇-------] (1/3 plans done)`.
    });

    it('should handle a total of 0 gracefully', () => {
      // TODO: part-unit-progress-bar-zero - Test the edge case where the total is 0.
      // INSTRUCTIONS:
      // 1. Call `renderProgressBar(0, 0)`.
      // 2. Assert it does not throw a "division by zero" error.
      // 3. Assert the output shows an empty bar with a (0/0) count.
    });
  });
});
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

## File: src/commands/state.ts
````typescript
import chalk from 'chalk';
import { getPhaseStats, PhaseStats, getFailedReports, FailedReport } from '../utils/fs';
import { getActiveAgents, AgentInfo } from '../utils/shell';
import dayjs from 'dayjs';
import { getRecentLogs, LogEntry } from '../utils/logs';
import { getGitLog, GitCommit } from '../utils/git';

/**
 * @description Renders a progress bar.
 * @param current - The current progress value.
 * @param total - The total value for 100%.
 * @param length - The character length of the bar.
 * @returns A string representing the progress bar.
 */
export const renderProgressBar = (current: number, total: number, length: number = 20): string => {
  // TODO: part-state-render-progress - Implement progress bar rendering logic.
  // INSTRUCTIONS:
  // 1. Calculate the percentage of `current` to `total`.
  // 2. Determine how many `length` characters should be filled (e.g., '▇').
  // 3. Determine how many `length` characters should be empty (e.g., '-').
  // 4. Return a string like `[▇▇▇▇----] (current/total plans done)`.
  // 5. If total is 0, return a string representing an empty bar `[----------] (0/0 plans done)`.

  // const percent = total > 0 ? current / total : 0;
  // const filledLength = Math.round(length * percent);
  // const emptyLength = length - filledLength;
  // const filledBar = '▇'.repeat(filledLength);
  // const emptyBar = '-'.repeat(emptyLength);
  // const bar = `[${filledBar}${emptyBar}]`;
  // const text = `(${current}/${total} plans done)`;

  // return `${bar} ${text}`;

  throw new Error('Not implemented');
};

/**
 * @description Displays the full state report to the console.
 */
export const handleStateCommand = async (argv: {}): Promise<void> => {
  // TODO: part-state-fetch-data - Fetch all necessary data using utility functions.
  // INSTRUCTIONS:
  // 2. Call `getPhaseStats()` to get statistics for all phases.
  // 3. Call `getActiveAgents()` to get a list of running agents.
  // 4. Call `getRecentLogs(5)` to get the last 5 log entries.
  // 5. Call `getFailedReports(24)` to get failures in the last 24 hours.
  // 6. Call `getGitLog(10)` to get the 10 most recent git commits.

  // const phaseStats: PhaseStats = await getPhaseStats();
  // const activeAgents: AgentInfo[] = await getActiveAgents();
  // const recentLogs: LogEntry[] = await getRecentLogs(5);
  // const failedReports: FailedReport[] = await getFailedReports(24);
  // const gitCommits: GitCommit[] = await getGitLog(10);
  // const currentPhase = phaseStats.development?.total > 0 ? 'development' : 'initialization';

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

  /*
  // Header
  console.log(chalk.bold(`== nocaflow State [${dayjs().format('YYYY-MM-DD HH:mm:ss')}] ==`));
  console.log(`Current Phase: ${chalk.cyan(currentPhase)}`);
  
  // Phase Progress
  console.log(chalk.bold('\n== Phase Progress =='));
  // for (const phaseName in phaseStats) { ... renderProgressBar(...) ... }

  // Phase Stats
  console.log(chalk.bold('\n== Phase Stats (Plans) =='));
  // for (const phaseName in phaseStats) { ... console.log(...) ... }

  // Active Agents
  console.log(chalk.bold('\n== Active Agents (tmux) =='));
  // if (activeAgents.length === 0) { console.log('No active agents.'); }
  // for (const agent of activeAgents) { ... console.log(...) ... }

  // Recent Agent Activity
  console.log(chalk.bold('\n== Recent Agent Activity (last 5) =='));
  // if (recentLogs.length === 0) { console.log('No recent activity.'); }
  // for (const log of recentLogs) { ... console.log with color based on log.status ... }

  // Stalled / Failed
  console.log(chalk.bold('\n== Stalled / Failed (last 24h) =='));
  // if (failedReports.length === 0) { console.log('No failed reports in the last 24 hours.'); }
  // for (const report of failedReports) { ... console.log(...) ... }

  // Recent Git Commits
  console.log(chalk.bold('\n== Recent Git Commits (all worktrees) =='));
  // if (gitCommits.length === 0) { console.log('No recent commits.'); }
  // for (const commit of gitCommits) { ... console.log(...) ... }
  */

  throw new Error('Not implemented');
};
````

## File: src/utils/shell.ts
````typescript
import { promisify } from 'util';
import { exec as execCallback } from 'child_process';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
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
dayjs.extend(relativeTime);

/**
 * @description Lists active tmux sessions and parses them to find agent info.
 * @returns A list of active agents.
 */
export const getActiveAgents = async (): Promise<AgentInfo[]> => {
  // TODO: part-shell-get-agents - List and parse active tmux sessions to find agent info.
  // INSTRUCTIONS:
  // 1. Execute `tmux ls -F "#{session_name} #{pane_pid} #{session_activity}"`.
  // 2. Handle errors (e.g., tmux not running). Return empty array on failure.
  // 3. Parse each line of stdout.
  // 4. Use regex on session name to determine agent type and extract IDs.
  //    - Worker: /^(init|dev)-(.+)/ -> { phase, partId }
  //    - Scaffolder: /^(init)-scaffold-(.+)/ -> { phase: 'SCAF', planId }
  //    - QA: /^qa-(.+)/ -> { phase: 'QA', planId }
  // 5. For worker agents, `planId` can be 'unknown' for this implementation.
  // 6. Calculate runtime from `session_activity` Unix timestamp using `dayjs().to(dayjs.unix(timestamp), true)`.
  // 7. Construct and return an array of `AgentInfo` objects.

  // try {
  //   const { stdout } = await exec(`tmux ls -F "#{session_name} #{pane_pid} #{session_activity}"`);
  //   if (!stdout) return [];
  //
  //   const lines = stdout.trim().split('\n');
  //   const agents: AgentInfo[] = [];
  //
  //   for (const line of lines) {
  //     const [sessionName, pid, activity] = line.split(' ');
  //     const runtime = dayjs().to(dayjs.unix(parseInt(activity, 10)), true);
  //
  //     let match;
  //     // if ((match = sessionName.match(/^(init|dev)-(.+)/))) { ... }
  //     // else if ((match = sessionName.match(/^init-scaffold-(.+)/))) { ... }
  //     // else if ((match = sessionName.match(/^qa-(.+)/))) { ... }
  //     //
  //     // In each block, construct an AgentInfo object and push to agents array.
  //   }
  //   return agents;
  // } catch (error) {
  //   return []; // Tmux likely not running or has no sessions.
  // }
  throw new Error('Not implemented');
};
````

## File: test/e2e/cli.test.ts
````typescript
import { runCli, setupTestDirectory } from '../test.util';
import fs from 'fs/promises';
import path from 'path';

describe('e2e/cli', () => {
  let cleanup: () => Promise<void>;

  beforeEach(async () => {
    // TODO: part-e2e-setup - Use the test utility to create a clean, isolated directory for each test.
    // INSTRUCTIONS:
    // 1. Call `setupTestDirectory()` to get the cleanup function.
    // 2. Store it in the `cleanup` variable.
    const { cleanup: c } = await setupTestDirectory();
    cleanup = c;
  });

  afterEach(async () => {
    // TODO: part-e2e-cleanup - Use the cleanup function from the test utility.
    // INSTRUCTIONS:
    // 1. Call the `cleanup()` function to restore the CWD and remove the temporary directory.
    await cleanup();
  });

  // TODO: part-e2e-build-step - Add a `beforeAll` hook to build the project.
  // INSTRUCTIONS:
  // 1. Add a `beforeAll` block.
  // 2. Inside, execute `npm run build` from the project root to ensure `dist/cli.js` is up-to-date.
  // 3. Use a long timeout for this hook (e.g., 30000 ms) as `tsc` can be slow.

  describe('init command', () => {
    it('should initialize a new project structure', async () => {
      // TODO: part-e2e-init-success - Test the `init` command in a clean directory.
      // INSTRUCTIONS:
      // 1. Run the CLI with the `init` command using `runCli('init')`.
      // 2. Assert that the command's stdout contains a success message.
      // 3. Assert that the command's exit code is 0.
      // 4. Use `fs.access` to verify that key directories and `.gitkeep` files have been created.
      //    - e.g., `.nocaflow/initialization/plans/todo/.gitkeep`
    });

    it('should show a warning if the project is already initialized', async () => {
      // TODO: part-e2e-init-exists - Test the `init` command in an already initialized directory.
      // INSTRUCTIONS:
      // 1. Manually create a `.nocaflow` directory.
      // 2. Run `runCli('init')`.
      // 3. Assert that the command's `stderr` contains a warning message.
      // 4. Assert that the command exits with a non-zero exit code.
    });
  });

  describe('state command', () => {
    it('should display the project state in an initialized directory', async () => {
      // TODO: part-e2e-state-success - Test the `state` command in a valid project.
      // INSTRUCTIONS:
      // 1. First, run `runCli('init')`.
      // 2. Create some dummy plan files (e.g., in `.nocaflow/initialization/plans/todo/`).
      // 3. Run `runCli('state')`.
      // 4. Assert that the stdout contains key headers like "== nocaflow State ==" and "Current Phase:".
      // 5. Assert that the command exits with code 0.
    });

    it('should display a complex state with active agents and failed reports', async () => {
      // TODO: part-e2e-state-complex - Test the `state` command with a rich project state.
      // INSTRUCTIONS:
      // 1. Run `init` and set up a git repo.
      // 2. Create multiple dummy plan files in various states (todo, doing, done).
      // 3. Create a dummy failed report file.
      // 4. (Challenge) If possible, mock `exec` to simulate `tmux` output for active agents. This is an exception to the "no mock" rule for `tmux`.
      // 5. Run `runCli('state')`.
      // 6. Assert that the output contains sections for "Active Agents" and "Stalled / Failed" with the dummy data.
    });

    it('should show an error when run in a non-initialized directory', async () => {
      // TODO: part-e2e-state-fail - Test the `state` command in a non-initialized directory.
      // INSTRUCTIONS:
      // 1. Run `runCli('state')` without running `init` first.
      // 2. Assert that the command's `stderr` contains an error message about `.nocaflow` not being found.
      // 3. Assert that the command exits with a non-zero code.
    });
  });

  describe('no command', () => {
    it('should display help when no command is provided', async () => {
      // TODO: part-e2e-no-command - Test running the CLI with no arguments.
      // INSTRUCTIONS:
      // 1. Run `runCli('')`.
      // 2. Assert that `stdout` contains the help message (e.g., "Commands:", "Options:").
    });

    it('should display help when --help flag is used', async () => {
      // TODO: part-e2e-help-flag - Test running the CLI with --help.
      // INSTRUCTIONS:
      // 1. Run `runCli('--help')`.
      // 2. Assert that `stdout` contains the help message.
      // 3. Run `runCli('state --help')`.
      // 4. Assert that `stdout` contains help information specific to the `state` command.
    });
  });
});
````

## File: test/integration/commands/init.test.ts
````typescript
import { handleInitCommand } from '../../../src/commands/init';
import { setupTestDirectory } from '../../test.util';
import fs from 'fs/promises';

describe('integration/commands/init', () => {
  let cleanup: () => Promise<void>;

  beforeEach(async () => {
    // TODO: part-int-init-setup - Use the test utility to create a clean, isolated directory.
    // INSTRUCTIONS:
    // 1. Call `setupTestDirectory()` to get the cleanup function.
    const { cleanup: c } = await setupTestDirectory();
    cleanup = c;
  });

  afterEach(async () => {
    // TODO: part-int-init-cleanup - Use the cleanup function from the test utility.
    // INSTRUCTIONS:
    // 1. Call the `cleanup()` function to restore the CWD and remove the temporary directory.
    await cleanup();
  });

  it('should create the full .nocaflow directory structure on a fresh run', async () => {
    // TODO: part-int-init-success - Test the successful creation of the directory structure.
    // INSTRUCTIONS:
    // 1. Call `handleInitCommand({})` directly.
    // 2. Use `fs.access` to verify that several key directories exist.
    //    - e.g., '.nocaflow/initialization/plans/todo'
    //    - e.g., '.nocaflow/development/plans/failed/report'
    // 3. Use `fs.access` to verify that several key `.gitkeep` files exist.
    //    - e.g., '.nocaflow/initialization/agent-log/.gitkeep'
  });

  it('should create the correct number of directories and .gitkeep files', async () => {
    // TODO: part-int-init-counts - Test the exact count of created items.
    // INSTRUCTIONS:
    // 1. Call `handleInitCommand({})`.
    // 2. Recursively read all created directory and file paths.
    // 3. Assert that the number of created directories matches the expected count (e.g., 2 phases * 5 plan subdirs + other dirs).
    // 4. Assert that the number of `.gitkeep` files matches the expected count for empty directories.
  });

  // Note: The case for an existing .nocaflow directory is tested in e2e/cli.test.ts,
  // as it involves checking process exit codes, which is not suitable for an integration test
  // without mocking `process.exit`.
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
    // TODO: part-unit-fs-setup - Use the test utility to create a clean, isolated directory.
    // INSTRUCTIONS:
    // 1. Call `setupTestDirectory()` to get the cleanup function.
    const { cleanup: c } = await setupTestDirectory();
    cleanup = c;
  });

  afterEach(async () => {
    // TODO: part-unit-fs-cleanup - Use the cleanup function from the test utility.
    // INSTRUCTIONS:
    // 1. Call the `cleanup()` function to restore the CWD and remove the temporary directory.
    await cleanup();
  });

  describe('getPhaseStats', () => {
    it('should correctly count plans across different statuses and phases', async () => {
      // TODO: part-unit-fs-stats-count - Test plan counting with a populated directory structure.
      // INSTRUCTIONS:
      // 1. Create a `.nocaflow` directory structure.
      //    - e.g., `fs.mkdir('.nocaflow/initialization/plans/todo', { recursive: true })`
      // 2. Create dummy plan files in various status directories.
      //    - e.g., `fs.writeFile('.nocaflow/initialization/plans/todo/a.yml', '')`
      //    - e.g., `fs.writeFile('.nocaflow/development/plans/done/b.yml', '')`
      // 3. Call `getPhaseStats()`.
      // 4. Assert that the returned stats object accurately reflects the file counts.
    });

    it('should return all zeros for an empty directory structure', async () => {
      // TODO: part-unit-fs-stats-empty - Test plan counting with an empty structure.
      // INSTRUCTIONS:
      // 1. Create the top-level `.nocaflow` directory and phase directories, but leave plan folders empty.
      // 2. Call `getPhaseStats()`.
      // 3. Assert that all counts in the returned stats object are 0.
    });

    it('should handle missing status subdirectories gracefully', async () => {
      // TODO: part-unit-fs-stats-missing-subdir - Test plan counting with some status dirs missing.
      // INSTRUCTIONS:
      // 1. Create a structure like `.nocaflow/initialization/plans/` but only create a `todo` subdirectory, not `doing`, `done`, etc.
      // 2. Create a plan file in the `todo` directory.
      // 3. Call `getPhaseStats()`.
      // 4. Assert that the stats for `initialization` show `todo: 1` and `doing: 0`, `done: 0`, etc., without throwing an error.
    });

    it('should ignore non-YAML files', async () => {
      // TODO: part-unit-fs-stats-ignore-files - Test that non-plan files are not counted.
      // INSTRUCTIONS:
      // 1. Create a `.nocaflow/development/plans/todo` directory.
      // 2. Create `plan1.yml` and `notes.txt` in that directory.
      // 3. Call `getPhaseStats()`.
      // 4. Assert that the `todo` count for `development` is 1, not 2.
    });
  });

  describe('getFailedReports', () => {
    it('should only return reports within the lookback period', async () => {
      // TODO: part-unit-fs-reports-time - Test that only recent reports are returned.
      // INSTRUCTIONS:
      // 1. Create the failed report directory structure.
      // 2. Create two report files: one recent, one old.
      // 3. Use `fs.utimes` to modify the `mtime` of the old file to be outside the lookback window.
      //    Note: `birthtime` cannot be easily changed, so tests must rely on `mtime` or `ctime`.
      // 4. Call `getFailedReports(24)` (for 24 hours).
      // 5. Assert that the result array contains only the recent report.
    });

    it('should correctly parse report details from filename and content', async () => {
      // TODO: part-unit-fs-reports-parse - Test parsing of report details.
      // INSTRUCTIONS:
      // 1. Create a report file named `plan1.partA.report.md`.
      // 2. Write markdown content to it, including a "## Summary" section.
      // 3. Call `getFailedReports(1)`.
      // 4. Assert that the returned `FailedReport` object has `planId: 'plan1'`, `partId: 'partA'`, and the correct `reason` text.
    });

    it('should return an empty array if the report directory does not exist', async () => {
      // TODO: part-unit-fs-reports-no-dir - Test behavior with no report directory.
      // INSTRUCTIONS:
      // 1. Do not create any failed report directories.
      // 2. Call `getFailedReports(24)`.
      // 3. Assert that the result is an empty array.
    });

    it('should gracefully handle malformed report filenames', async () => {
      // TODO: part-unit-fs-reports-bad-name - Test parsing of malformed report names.
      // INSTRUCTIONS:
      // 1. Create a report file named `malformed.report.md` (missing partId).
      // 2. Call `getFailedReports(1)`.
      // 3. Assert that the returned object has sensible defaults (e.g., `planId: 'malformed'`, `partId: undefined`).
    });
  });

  describe('readPlan', () => {
    it('should parse a valid plan file', async () => {
      // TODO: part-unit-fs-plan-read-success - Test reading a valid YAML plan.
      // INSTRUCTIONS:
      // 1. Define a valid plan object and serialize it to a YAML string.
      // 2. Write this string to a file, e.g., `plan.yml`.
      // 3. Call `readPlan('plan.yml')`.
      // 4. Assert that the returned object deeply equals the original plan object.
    });

    it('should throw an error for a non-existent file', async () => {
      // TODO: part-unit-fs-plan-read-no-file - Test behavior when file is missing.
      // INSTRUCTIONS:
      // 1. Call `readPlan('non-existent-plan.yml')`.
      // 2. Assert that the call rejects with an error (e.g., using `expect(...).rejects.toThrow()`).
    });

    it('should throw an error for invalid YAML', async () => {
      // TODO: part-unit-fs-plan-read-bad-yaml - Test behavior with a malformed YAML file.
      // INSTRUCTIONS:
      // 1. Write a string with invalid YAML syntax to a file.
      // 2. Call `readPlan()` with the path to that file.
      // 3. Assert that the call rejects with a YAML-specific parsing error.
    });
  });
});
````

## File: test/unit/utils/git.test.ts
````typescript
import { getGitLog } from '../../../src/utils/git';
import { setupTestDirectory, initGitRepo } from '../../test.util';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';

const promisedExec = promisify(exec);

describe('integration/utils/git', () => {
  let cleanup: () => Promise<void>;

  beforeEach(async () => {
    // TODO: part-int-git-setup - Set up a clean directory and initialize a git repo.
    // INSTRUCTIONS:
    // 1. Use `setupTestDirectory()` to create a temporary, isolated directory.
    // 2. Use `initGitRepo()` to initialize a git repository inside it.
    const { cleanup: c } = await setupTestDirectory();
    cleanup = c;
    await initGitRepo();
  });

  afterEach(async () => {
    // TODO: part-int-git-cleanup - Clean up the temporary directory.
    // INSTRUCTIONS:
    // 1. Call the `cleanup()` function.
    await cleanup();
  });

  it('should parse commits with worktree information', async () => {
    // TODO: part-int-git-worktree - Test parsing of commits from a git worktree.
    // INSTRUCTIONS:
    // 1. Create a new worktree using `git worktree add ../my-feature-wt`.
    // 2. In the new worktree directory, create a file and commit it with a specific message.
    // 3. Call `getGitLog(5)`.
    // 4. Find the commit from the worktree in the results.
    // 5. Assert that its `worktree` property is `my-feature-wt` (or similar).
  });

  it('should handle commits not associated with a worktree', async () => {
    // TODO: part-int-git-mainline - Test parsing of commits not in a worktree.
    // INSTRUCTIONS:
    // 1. In the main worktree, create a file and commit it.
    // 2. Call `getGitLog(5)`.
    // 3. Find the new commit in the results.
    // 4. Assert that its `worktree` property is `null`.
  });

  it('should respect the commit limit', async () => {
    // TODO: part-int-git-limit - Test that the `limit` parameter is respected.
    // INSTRUCTIONS:
    // 1. Create more commits than the limit (e.g., 5 commits).
    // 2. Call `getGitLog(3)`.
    // 3. Assert that the length of the returned array is exactly 3.
  });

  it('should handle commit messages with special characters', async () => {
    // TODO: part-int-git-special-chars - Test parsing of complex commit messages.
    // INSTRUCTIONS:
    // 1. Create a commit with a message containing characters like `|`, `'`, `"`, and newlines.
    // 2. Call `getGitLog(1)`.
    // 3. Assert that the `message` property of the returned commit object is the full, unmodified commit message.
  });

  it('should return an empty array if not in a git repository', async () => {
    // TODO: part-int-git-no-repo - Test behavior when run outside a git repository.
    // INSTRUCTIONS:
    // 1. This test needs a separate setup. Use `setupTestDirectory` but DO NOT call `initGitRepo`.
    // 2. Call `getGitLog(5)`.
    // 3. Assert that the result is an empty array.
    // 4. Remember to call the cleanup function.
  });
});
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
    // TODO: part-unit-logs-setup - Set up a clean directory for each test.
    // INSTRUCTIONS:
    // 1. Use `setupTestDirectory()` to create a temporary, isolated directory.
    const { cleanup: c } = await setupTestDirectory();
    cleanup = c;
  });

  afterEach(async () => {
    // TODO: part-unit-logs-cleanup - Clean up the temporary directory.
    // INSTRUCTIONS:
    // 1. Call the `cleanup()` function.
    await cleanup();
  });

  it('should aggregate logs from all phase directories', async () => {
    // TODO: part-unit-logs-aggregate - Test reading from both initialization and development log dirs.
    // INSTRUCTIONS:
    // 1. Create log directories for both phases, e.g., `.nocaflow/initialization/agent-log`.
    // 2. Create a log file in each directory with valid log entries.
    // 3. Call `getRecentLogs(10)`.
    // 4. Assert that the result contains log entries from both files.
  });

  it('should return the correct number of recent, sorted log entries', async () => {
    // TODO: part-unit-logs-limit-sort - Test the limit and sorting logic.
    // INSTRUCTIONS:
    // 1. Create a single log file.
    // 2. Write several (e.g., 10) valid log entries with timestamps that are *out of order*.
    // 3. Call `getRecentLogs(5)`.
    // 4. Assert that the result array has a length of 5.
    // 5. Assert that the entries in the array are sorted by timestamp in descending order.
  });

  it('should correctly parse valid log lines and skip invalid ones', async () => {
    // TODO: part-unit-logs-parse - Test the parsing logic for valid and invalid lines.
    // INSTRUCTIONS:
    // 1. Create a log file containing a mix of correctly formatted and malformed log lines.
    // 2. Call `getRecentLogs(10)`.
    // 3. Assert that the result only contains entries corresponding to the valid lines.
  });

  it('should handle empty log files gracefully', async () => {
    // TODO: part-unit-logs-empty-file - Test behavior with empty log files.
    // INSTRUCTIONS:
    // 1. Create a log directory and an empty `agent.log` file inside it.
    // 2. Call `getRecentLogs(5)`.
    // 3. Assert that the result is an empty array and no error was thrown.
  });

  it('should return an empty array if log directories are missing', async () => {
    // TODO: part-unit-logs-no-dir - Test behavior when log directories do not exist.
    // INSTRUCTIONS:
    // 1. Do not create any `.nocaflow` directories.
    // 2. Call `getRecentLogs(5)`.
    // 3. Assert that the result is an empty array.
  });
});
````

## File: test/unit/utils/shell.test.ts
````typescript
import { getActiveAgents } from '../../../src/utils/shell';
import { exec } from 'child_process';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// Note: This is an exception to the "no mock" rule. `tmux` is an external system
// dependency, not internal application logic. Mocking `exec` is the only reliable
// way to test the parsing logic in a CI environment without requiring `tmux` to be running.
jest.mock('child_process');
const mockedExec = exec as jest.Mock;
dayjs.extend(relativeTime);

describe('unit/utils/shell', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getActiveAgents', () => {
    it('should parse all types of agent sessions and ignore non-agent sessions', async () => {
      // TODO: part-unit-shell-parse-all - Test parsing of various valid tmux session names.
      // INSTRUCTIONS:
      // 1. Define a mock `stdout` string from `tmux ls` containing lines for init, dev, scaffold, and qa agents, plus a non-agent session.
      // 2. Mock `mockedExec` to return this `stdout` string.
      // 3. Call `getActiveAgents()`.
      // 4. Assert that the result array contains the correct number of agents (ignoring the non-agent session).
      // 5. Assert that each agent object has correctly parsed details (phase, planId, etc.).
    });

    it('should ignore session names that are similar to but not valid agent sessions', async () => {
      // TODO: part-unit-shell-parse-similar - Test that tricky but invalid names are ignored.
      // INSTRUCTIONS:
      // 1. Define mock `stdout` with sessions like `init-`, `dev-scaffold-123`, `qa`, `my-init-session`.
      // 2. Mock `mockedExec` to return this stdout.
      // 3. Call `getActiveAgents()`.
      // 4. Assert that the result is an empty array.
    });

    it('should return an empty array when there are no tmux sessions', async () => {
      // TODO: part-unit-shell-parse-empty - Test with empty output from tmux.
      // INSTRUCTIONS:
      // 1. Mock `mockedExec` to return an empty string for `stdout`.
      // 2. Call `getActiveAgents()`.
      // 3. Assert that the result is an empty array.
    });

    it('should return an empty array if the tmux command fails', async () => {
      // TODO: part-unit-shell-parse-fail - Test when the `exec` call fails.
      // INSTRUCTIONS:
      // 1. Mock `mockedExec` to simulate an error (e.g., have the callback pass an Error object).
      // 2. Call `getActiveAgents()`.
      // 3. Assert that the function catches the error and returns an empty array.
    });

    it('should correctly calculate agent runtime', async () => {
      // TODO: part-unit-shell-parse-runtime - Test the relative time calculation.
      // INSTRUCTIONS:
      // 1. Use `jest.spyOn(Date, 'now')` or `jest.useFakeTimers` to control the current time.
      // 2. Create a mock `stdout` with a session activity timestamp that is a known duration in the past (e.g., 5 minutes).
      // 3. Mock `mockedExec` to return this stdout.
      // 4. Call `getActiveAgents()`.
      // 5. Assert that the `runtime` string for the agent is the expected relative time (e.g., "5 minutes").
    });
  });
});
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
