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

## File: src/utils/platform.ts
````typescript
import { exec as execCallback, ExecException } from 'child_process';
import { promisify } from 'util';
import os from 'os';

const exec = promisify(execCallback);

export interface CommandResult {
  stdout: string;
  stderr: string;
}

export interface Platform {
  runCommand(command: string): Promise<CommandResult>;
  getTmpDir(): string;
}

const runCommand = async (command: string): Promise<CommandResult> => {
  try {
    const { stdout, stderr } = await exec(command);
    return { stdout, stderr };
  } catch (error) {
    // exec throws an error for non-zero exit codes.
    // We want to capture stdout/stderr and the code, not crash.
    const err = error as ExecException & CommandResult;
    return {
      stdout: err.stdout,
      stderr: err.stderr,
    };
  }
};

const getTmpDir = (): string => {
  // Respect common environment variables for temp directories.
  // This is crucial for environments like Termux.
  return process.env.TMPDIR || process.env.TEMP || process.env.TMP || os.tmpdir();
};


export const posixPlatform: Platform = {
  runCommand,
  getTmpDir,
};

// Export a singleton instance for the application to use.
export const platform: Platform = posixPlatform;
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

## File: test/integration/utils/git.test.ts
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
    const worktreePath = path.join(testDir, '..', worktreeName);
    await promisedExec(`git worktree add ${worktreePath}`);

    const originalCwd = process.cwd();
    process.chdir(worktreePath);
    await fs.writeFile('feature.txt', 'data');
    await promisedExec('git add .');
    await promisedExec('git commit -m "feat: commit from worktree"');
    process.chdir(originalCwd);

    const log = await getGitLog(5);
    const wtCommit = log.find(c => c.message === 'feat: commit from worktree');

    expect(wtCommit).toBeDefined();
    expect(wtCommit?.worktree).toBe(worktreeName);

    // Cleanup worktree
    await promisedExec(`git worktree remove ${worktreeName}`);
  });

  it('should handle commits not associated with a worktree', async () => {
    await fs.writeFile('main.txt', 'data');
    await promisedExec('git add .');
    await promisedExec('git commit -m "feat: commit from main"');

    const log = await getGitLog(5);
    const mainCommit = log.find(c => c.message === 'feat: commit from main');

    expect(mainCommit).toBeDefined();
    expect(mainCommit?.worktree).toBeNull();
  });

  it('should respect the commit limit', async () => {
    for (let i = 0; i < 5; i++) {
      await promisedExec(`git commit --allow-empty -m "commit ${i + 1}"`);
    }

    const log = await getGitLog(3);
    expect(log).toHaveLength(3);
  });

  it('should return an empty array for a repository with no commits', async () => {
    // Need a separate setup that doesn't create an initial commit.
    await cleanup();
    const { cleanup: c2 } = await setupTestDirectory();
    await promisedExec('git init');

    const log = await getGitLog(5);
    expect(log).toEqual([]);

    await c2(); // Use the new cleanup function
  });

  it('should handle commit messages with special characters', async () => {
    const complexMessage = `feat: handle '|' "quotes" and 'apostrophes'\n\nwith a body.`;
    await promisedExec(`git commit --allow-empty -m ${JSON.stringify(complexMessage)}`);

    const log = await getGitLog(1);

    expect(log).toHaveLength(1);
    expect(log[0].message).toBe(complexMessage);
  });

  it('should return an empty array if not in a git repository', async () => {
    // This requires a non-git directory.
    await cleanup(); // Get rid of the git repo from beforeEach
    const { cleanup: c2 } = await setupTestDirectory();

    const log = await getGitLog(5);
    expect(log).toEqual([]);

    await c2(); // Use the new cleanup function
  });
});
````

## File: test/unit/utils/platform.test.ts
````typescript
import { posixPlatform } from '../../../src/utils/platform';
import { exec as execCallback, ExecException } from 'child_process';
import os from 'os';

jest.mock('child_process');
const mockedExec = execCallback as unknown as jest.Mock;

jest.mock('os');
const mockedOs = os as jest.Mocked<typeof os>;

describe('unit/utils/platform', () => {
  afterEach(() => {
    jest.resetAllMocks();
    // Clean up environment variables
    delete process.env.TMPDIR;
    delete process.env.TEMP;
    delete process.env.TMP;
  });

  describe('runCommand', () => {
    it('should resolve with stdout and stderr on successful execution', async () => {
      const command = 'ls -l';
      const expectedStdout = 'total 0';
      const expectedStderr = '';
      mockedExec.mockImplementation((_cmd, callback) => callback(null, { stdout: expectedStdout, stderr: expectedStderr }));
      
      const result = await posixPlatform.runCommand(command);
      
      expect(mockedExec).toHaveBeenCalledWith(command, expect.any(Function));
      expect(result.stdout).toBe(expectedStdout);
      expect(result.stderr).toBe(expectedStderr);
    });

    it('should capture stdout and stderr even when the command fails (non-zero exit code)', async () => {
      const command = 'git status';
      const expectedStdout = '';
      const expectedStderr = 'fatal: not a git repository';
      const error: ExecException & { stdout: string; stderr: string } = {
        name: 'Error',
        message: 'Command failed',
        code: 128,
        stdout: expectedStdout,
        stderr: expectedStderr,
      };
      mockedExec.mockImplementation((_cmd, callback) => callback(error, { stdout: expectedStdout, stderr: expectedStderr }));
      
      const result = await posixPlatform.runCommand(command);

      expect(result.stdout).toBe(expectedStdout);
      expect(result.stderr).toBe(expectedStderr);
    });
  });

  describe('getTmpDir', () => {
    it('should prioritize TMPDIR environment variable', () => {
      process.env.TMPDIR = '/tmp/tmpdir';
      process.env.TEMP = '/tmp/temp';
      mockedOs.tmpdir.mockReturnValue('/tmp/os');
      
      expect(posixPlatform.getTmpDir()).toBe('/tmp/tmpdir');
    });

    it('should fall back to TEMP if TMPDIR is not set', () => {
      process.env.TEMP = '/tmp/temp';
      mockedOs.tmpdir.mockReturnValue('/tmp/os');

      expect(posixPlatform.getTmpDir()).toBe('/tmp/temp');
    });

    it('should fall back to TMP if TEMP is not set', () => {
      process.env.TMP = '/tmp/tmp';
      mockedOs.tmpdir.mockReturnValue('/tmp/os');

      expect(posixPlatform.getTmpDir()).toBe('/tmp/tmp');
    });

    it('should fall back to os.tmpdir() as a last resort', () => {
      mockedOs.tmpdir.mockReturnValue('/tmp/os-fallback');
      
      expect(posixPlatform.getTmpDir()).toBe('/tmp/os-fallback');
    });
  });
});
````

## File: test/unit/utils/test.util.test.ts
````typescript
import {
  runCli,
  setupTestDirectory,
  initGitRepo,
  createDummyPlanFile,
  createDummyFailedReport,
} from '../../test.util';
import { exec as execCallback, ExecException } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';

// Mock child_process for most tests, but we'll need the real one for initGitRepo.
jest.mock('child_process');
const mockedExec = execCallback as unknown as jest.Mock;
const { exec: actualExec } = jest.requireActual('child_process');
const promisedActualExec = promisify(actualExec);


describe('unit/utils/test.util', () => {
  describe('runCli', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should resolve with stdout and code 0 on success', async () => {
      mockedExec.mockImplementation((_cmd, callback) => callback(null, { stdout: 'Success', stderr: '' }));
      const result = await runCli('state');
      expect(result.code).toBe(0);
      expect(result.stdout).toBe('Success');
      expect(result.stderr).toBe('');
    });

    it('should reject with stderr and a non-zero code on failure', async () => {
      const error: ExecException & { stdout: string; stderr: string } = {
        name: 'Error',
        message: 'Command failed',
        code: 127,
        stdout: '',
        stderr: 'Command not found',
      };
      mockedExec.mockImplementation((_cmd, callback) => callback(error, { stdout: '', stderr: 'Command not found' }));
      
      const result = await runCli('nonexistent');
      expect(result.code).toBe(127);
      expect(result.stdout).toBe('');
      expect(result.stderr).toBe('Command not found');
    });
  });

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
      // We need the real exec for this test.
      mockedExec.mockImplementation(actualExec);

      await initGitRepo();

      // Check for .git directory
      await expect(fs.access('.git')).resolves.toBeUndefined();

      // Check for initial commit
      const { stdout } = await promisedActualExec('git log -1 --pretty=%s');
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
      
      const expectedPath = path.join(testDir, '.nocaflow/initialization/plans/failed/report/plan1.partA.report.md');
      expect(reportPath).toBe(expectedPath);

      await expect(fs.access(reportPath)).resolves.toBeUndefined();
      const content = await fs.readFile(reportPath, 'utf-8');
      expect(content).toBe(`## Summary\n\n${summary}`);
    });
  });
});
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

## File: src/commands/init.ts
````typescript
import fs from 'fs/promises';
import path from 'path';
import chalk from 'chalk';
import { EOL } from 'os';

/**
 * @description Handles the logic for the 'init' command.
 */
export const handleInitCommand = async (_argv: Record<string, unknown>): Promise<void> => {
  const rootDir = '.nocaflow';
  try {
    await fs.access(rootDir);
    console.warn(chalk.yellow(`Warning: '${rootDir}' directory already exists. Initialization skipped.`));
    process.exit(0);
  } catch (error) {
    // Directory does not exist, proceed.
  }

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

    console.log(chalk.green(' nocaflow project initialized successfully. ✨'));
    console.log(`Created ${chalk.bold(rootDir)} directory structure with ${dirsToCreate.length} directories and ${gitkeepFiles.length} .gitkeep files.`);
  } catch (error) {
    console.error(chalk.red('Failed to initialize nocaflow project:'), EOL, error);
    process.exit(1);
  }
};
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

## File: src/utils/git.ts
````typescript
import { platform } from './platform';

export interface GitCommit {
  hash: string;
  worktree: string | null;
  message: string;
}

/**
 * @description Executes 'git log' to get recent commit history across all worktrees.
 * @param limit - The maximum number of commits to return.
 * @returns A list of recent git commits.
 */
export const getGitLog = async (limit: number): Promise<GitCommit[]> => {
  const getWorktreeMap = async (): Promise<Map<string, string>> => {
    const map = new Map<string, string>();
    try {
      const { stdout } = await platform.runCommand('git worktree list --porcelain');
      const entries = stdout.trim().split('\n\n');
      for (const entry of entries) {
        const branchMatch = entry.match(/^branch refs\/heads\/(.*)/m);
        if (branchMatch) {
          const branchName = branchMatch[1];
          // Do not treat the main/master branch as a worktree indicator
          if (branchName !== 'main' && branchName !== 'master') {
            // Assuming worktree branch name is the worktree name we want to display
            map.set(branchName, branchName);
          }
        }
      }
    } catch (error) {
      // Not a git repo or no worktrees, map will be empty.
    }
    return map;
  };

  try {
    const worktreeMap = await getWorktreeMap();
    const { stdout: logOutput } = await platform.runCommand(`git log --all -n ${limit} --pretty=format:"%H|%D|%s"`);
    if (!logOutput) return [];

    return logOutput.trim().split('\n').map(line => {
      const parts = line.split('|');
      const hash = parts[0] || '';
      const refs = parts[1] || '';
      const message = parts.slice(2).join('|'); // Robustly handle '|' in commit message
      
      let worktree: string | null = null;
      for (const branchName of worktreeMap.keys()) {
        if (refs.includes(branchName)) {
          worktree = worktreeMap.get(branchName) || null;
          break;
        }
      }
      return { hash, worktree, message };
    });
  } catch (error) {
    return []; // Git not installed or not a git repo.
  }
};
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

## File: test/test.util.ts
````typescript
import { exec as execCallback, ExecException } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import { platform } from '../src/utils/platform';

const promisedExec = promisify(execCallback);

export const runCli = async (
  args: string,
): Promise<{ stdout: string; stderr: string; code: number }> => {
  const cliPath = path.join(__dirname, '..', 'dist', 'cli.js');
  try {
    const { stdout, stderr } = await promisedExec(`node ${cliPath} ${args}`);
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
  await promisedExec('git init');
  await promisedExec('git config user.email "test@example.com"');
  await promisedExec('git config user.name "Test User"');
  await promisedExec('git commit --allow-empty -m "Initial commit"');
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

## File: src/commands/state.ts
````typescript
import chalk from 'chalk';
import { getPhaseStats, PhaseStats, getFailedReports, FailedReport } from '../utils/fs';
import { getActiveAgents, AgentInfo } from '../utils/shell';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { getRecentLogs, LogEntry } from '../utils/logs';
import { getGitLog, GitCommit } from '../utils/git';

dayjs.extend(relativeTime);

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

dayjs.extend(relativeTime);

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
      } else if ((match = sessionName.match(/^(init|dev)-(.+)/))) {
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

## File: test/e2e/cli.test.ts
````typescript
import { runCli, setupTestDirectory, createDummyPlanFile, createDummyFailedReport, initGitRepo } from '../test.util';
import fs from 'fs/promises';
import { exec as execCallback } from 'child_process';
import path from 'path';
import { promisify } from 'util';

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
      const { stdout, code } = await runCli('init');

      expect(stdout).toContain('directory already exists. Initialization skipped.');
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

    it('should display a complex state with active agents and failed reports', async () => {
      await runCli('init');
      await initGitRepo();
      await createDummyPlanFile('initialization', 'doing', 'p1.yml');
      await createDummyPlanFile('development', 'done', 'p2.yml');
      await createDummyFailedReport('initialization', 'f01', 'pA', 'Test failure');

      const { stdout, code } = await runCli('state');

      expect(code).toBe(0);
      expect(stdout).toContain('Active Agents (tmux)');
      expect(stdout).toContain('Stalled / Failed');
      expect(stdout).toContain('plan:f01 part:pA - "Test failure"');
      expect(stdout).toContain('Recent Git Commits');
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
      const { stdout } = await runCli('');
      expect(stdout).toContain('Commands:');
      expect(stdout).toContain('init');
      expect(stdout).toContain('state');
      expect(stdout).toContain('You need at least one command before moving on');
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

## File: test/integration/commands/init.test.ts
````typescript
import { handleInitCommand } from '../../../src/commands/init';
import { setupTestDirectory } from '../../test.util';
import fs from 'fs/promises';

describe('integration/commands/init', () => {
  let cleanup: () => Promise<void>;

  beforeEach(async () => {
    const { cleanup: c } = await setupTestDirectory();
    cleanup = c;
  });

  afterEach(async () => {
    await cleanup();
  });

  it('should create the full .nocaflow directory structure on a fresh run', async () => {
    await handleInitCommand({});

    const dirsToCheck = [
      '.nocaflow/initialization/plans/todo',
      '.nocaflow/development/plans/failed/report',
      '.nocaflow/initialization/agent-log',
    ];

    const filesToCheck = [
      '.nocaflow/initialization/plans/todo/.gitkeep',
      '.nocaflow/development/agent-log/.gitkeep',
      '.nocaflow/development/plans/failed/report/.gitkeep',
    ];

    for (const dir of dirsToCheck) {
      await expect(fs.access(dir)).resolves.toBeUndefined();
    }

    for (const file of filesToCheck) {
      await expect(fs.access(file)).resolves.toBeUndefined();
    }
  });

  it('should create the correct number of directories and .gitkeep files', async () => {
    await handleInitCommand({});

    const getAllFiles = async (dir: string): Promise<string[]> => {
        const dirents = await fs.readdir(dir, { withFileTypes: true });
        const files = await Promise.all(dirents.map((dirent) => {
            const res = `${dir}/${dirent.name}`;
            return dirent.isDirectory() ? getAllFiles(res) : res;
        }));
        return Array.prototype.concat(...files);
    };

    const allFiles = await getAllFiles('.nocaflow');
    const gitkeepCount = allFiles.filter(file => file.endsWith('.gitkeep')).length;

    // Expected: 2 phases * (1 agent-log dir + 5 plan sub-dirs) = 12 .gitkeeps
    expect(gitkeepCount).toBe(12);

    // Let's count the directories that contain a .gitkeep file.
    const allDirsWithGitkeep = new Set(allFiles.map(file => file.substring(0, file.lastIndexOf('/'))));
    expect(allDirsWithGitkeep.size).toBe(12);
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

## File: test/unit/utils/shell.test.ts
````typescript
import { getActiveAgents } from '../../../src/utils/shell';
import { platform } from '../../../src/utils/platform';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

jest.mock('../../../src/utils/platform');
const mockedPlatform = platform as jest.Mocked<typeof platform>;
dayjs.extend(relativeTime);

describe('unit/utils/shell', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getActiveAgents', () => {
    it('should parse all types of agent sessions and ignore non-agent sessions', async () => {
      const now = dayjs().unix();
      const stdout = [
        `init-part123 111 ${now}`,
        `dev-part456 222 ${now}`,
        `init-scaffold-plan789 333 ${now}`,
        `qa-planABC 444 ${now}`,
        `my-random-session 555 ${now}`,
      ].join('\n');
      mockedPlatform.runCommand.mockResolvedValue({ stdout, stderr: '' });

      const agents = await getActiveAgents();
      expect(agents).toHaveLength(4);

      expect(agents).toContainEqual(expect.objectContaining({ phase: 'INIT', partId: 'part123', pid: '111' }));
      expect(agents).toContainEqual(expect.objectContaining({ phase: 'DEV', partId: 'part456', pid: '222' }));
      expect(agents).toContainEqual(expect.objectContaining({ phase: 'SCAF', planId: 'plan789', pid: '333' }));
      expect(agents).toContainEqual(expect.objectContaining({ phase: 'QA', planId: 'planABC', pid: '444' }));
    });

    it('should ignore session names that are similar to but not valid agent sessions', async () => {
      const now = dayjs().unix();
      const stdout = [
        `init- 111 ${now}`,
        `dev-scaffold-123 222 ${now}`,
        `qa 333 ${now}`,
        `my-init-session 444 ${now}`,
      ].join('\n');
      mockedPlatform.runCommand.mockResolvedValue({ stdout, stderr: '' });

      const agents = await getActiveAgents();
      expect(agents).toEqual([]);
    });

    it('should return an empty array when there are no tmux sessions', async () => {
      mockedPlatform.runCommand.mockResolvedValue({ stdout: '', stderr: '' });
      const agents = await getActiveAgents();
      expect(agents).toEqual([]);
    });

    it('should return an empty array if the tmux command fails', async () => {
      mockedPlatform.runCommand.mockRejectedValue(new Error('tmux failed'));
      const agents = await getActiveAgents();
      expect(agents).toEqual([]);
    });

    it('should correctly calculate agent runtime', async () => {
      jest.useFakeTimers().setSystemTime(new Date('2023-01-01T12:00:00Z'));

      const fiveMinutesAgo = dayjs('2023-01-01T11:55:00Z').unix();
      const stdout = `dev-part123 111 ${fiveMinutesAgo}`;
      mockedPlatform.runCommand.mockResolvedValue({ stdout, stderr: '' });

      const agents = await getActiveAgents();

      expect(agents).toHaveLength(1);
      // dayjs relative time can be "a few seconds", "a minute", etc. so we check for a known value.
      // "5 minutes" is the expected output.
      expect(agents[0].runtime).toBe('5 minutes');

      jest.useRealTimers();
    });
  });
});
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
