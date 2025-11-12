Here's the master plan to refactor the codebase into a production-ready state.

This is the battle plan. We're going from a skeleton of `// TODO` comments to a fully functional, tested CLI tool. The approach is layered: build the foundation, test it, build the next layer, test it. We start with test utilities, then core logic, then command handlers, and cap it all off with end-to-end tests.

No magic here, just solid engineering. Each part is a discrete chunk of work that builds on the last. When we're done, `npm test` will be our proof of quality, and `nocaflow state` will be our trophy. Let's ship it.

```yaml
plan:
  uuid: 'a4b1c2d3-e4f5-4a6b-8c7d-9e8f7a6b5c4d'
  status: 'todo'
  title: 'Full Codebase Implementation and Test Suite Finalization'
  introduction: |
    Alright, folks, listen up. We've got a solid blueprint here, but it's all scaffolding and `// TODO`s. It's time to turn this thing into a production-ready, battle-tested CLI tool. The goal is simple: implement every single pending `TODO` block across the codebase, from core utilities to the CLI command layer, and back it all up with a comprehensive test suite.

    The strategy is to build from the ground up. We'll start by forging the tools we need—our test utilities. Then, we'll implement the core data-gathering logic for filesystems, git, and tmux. With a solid, unit-tested foundation, we'll build out the command implementations and their respective tests. The final boss is a full end-to-end test suite that runs the compiled CLI like a real user would. No mocks for internal logic, just pure, unadulterated execution. When we're done, `npm test` should be green across the board, and `nocaflow state` should actually, you know, show the state.
  parts:
    - uuid: '1d2e3f4a-5b6c-4d7e-8f9a-0b1c2d3e4f5a'
      status: 'todo'
      name: 'Part 1: Forge Test Utilities'
      reason: |
        Can't build a house without a hammer. We need robust, reusable test helpers before we can write any meaningful integration or E2E tests. This part implements the functions in `test/test.util.ts` for creating isolated test environments, running the CLI, and setting up git repos.
      steps:
        - uuid: 'c1d2e3f4-a5b6-4c7d-8e9f-0a1b2c3d4e5f'
          status: 'todo'
          name: '1. Implement Test Utilities'
          reason: |
            To provide foundational helpers for CLI execution, temporary directory management, git repository initialization, and dummy file creation, which are essential prerequisites for all subsequent integration and E2E tests.
          files:
            - 'test/test.util.ts'
          operations:
            - 'Implement `runCli` to execute the compiled CLI from the `dist` folder and return its output, handling non-zero exit codes (corresponds to `part-test-util-run-cli`).'
            - 'Implement `setupTestDirectory` to create a unique temporary directory, change the CWD, and provide a cleanup function (corresponds to `part-test-util-setup-dir`).'
            - 'Implement `initGitRepo` to execute `git init` and configure a dummy user for test repositories (corresponds to `part-test-util-git-init`).'
            - 'Implement `createDummyPlanFile` to scaffold dummy plan files in the appropriate phase/status directory for testing filesystem logic (corresponds to `part-test-util-create-plan`).'
            - 'Implement `createDummyFailedReport` to generate markdown report files for testing failure-reporting logic (corresponds to `part-test-util-create-report`).'
      context_files:
        compact:
          - 'test/test.util.ts'
        medium:
          - 'test/test.util.ts'
          - 'package.json'
        extended:
          - 'test/test.util.ts'
          - 'package.json'
          - 'src/cli.ts'
    - uuid: 'b6c7d8e9-f0a1-4b2c-9d3e-4f5a6b7c8d9e'
      status: 'todo'
      name: 'Part 2: Implement Core Data-Gathering Utilities'
      reason: |
        The `state` command is useless without data. This part breathes life into the `src/utils` directory. We'll implement the functions that interact with the filesystem (`fs.ts`), git (`git.ts`), tmux (`shell.ts`), and log files (`logs.ts`). This is the engine of our observability tool.
      depends_on: ['1d2e3f4a-5b6c-4d7e-8f9a-0b1c2d3e4f5a']
      steps:
        - uuid: 'e9f0a1b2-c3d4-4e5f-8a6b-7c8d9e0f1a2b'
          status: 'todo'
          name: '1. Implement Filesystem Utilities'
          reason: 'To enable reading the project state from the `.nocaflow` directory structure.'
          files:
            - 'src/utils/fs.ts'
          operations:
            - 'Implement `getPhaseStats` to count plan files in all phase/status directories (corresponds to `part-fs-get-phase-stats`).'
            - 'Implement `getFailedReports` to scan for, parse, and filter recent failure reports (corresponds to `part-fs-get-failed-reports`).'
            - 'Implement `readPlan` to parse a YAML plan file into a typed object (corresponds to `part-fs-read-plan`).'
        - uuid: 'd8e9f0a1-b2c3-4d4e-9f5a-6b7c8d9e0f1a'
          status: 'todo'
          name: '2. Implement Git Utility'
          reason: 'To provide insights into recent repository activity across all worktrees.'
          files:
            - 'src/utils/git.ts'
          operations:
            - 'Implement `getGitLog` by executing and parsing `git worktree list` and `git log` to create a unified commit history (corresponds to `part-git-get-log`).'
        - uuid: 'c7d8e9f0-a1b2-4c3d-8e4f-5a6b7c8d9e0f'
          status: 'todo'
          name: '3. Implement Log Parsing Utility'
          reason: 'To read and parse agent activity logs for the state summary.'
          files:
            - 'src/utils/logs.ts'
          operations:
            - 'Implement `getRecentLogs` to read `.log` files, parse entries with regex, sort them by timestamp, and return a limited set (corresponds to `part-logs-get-recent`).'
        - uuid: 'b6c7d8e9-f0a1-4b2c-9d3e-4f5a6b7c8d9e'
          status: 'todo'
          name: '4. Implement Shell Utility for Agent Tracking'
          reason: 'To find and report on currently active agent processes running in tmux.'
          files:
            - 'src/utils/shell.ts'
          operations:
            - 'Implement `getActiveAgents` to execute `tmux ls`, parse the output, and extract details about active agent sessions (corresponds to `part-shell-get-agents`).'
      context_files:
        compact:
          - 'src/utils/fs.ts'
          - 'src/utils/git.ts'
          - 'src/utils/logs.ts'
          - 'src/utils/shell.ts'
        medium:
          - 'src/utils/fs.ts'
          - 'src/utils/git.ts'
          - 'src/utils/logs.ts'
          - 'src/utils/shell.ts'
          - 'src/models/plan.ts'
        extended:
          - 'src/utils/fs.ts'
          - 'src/utils/git.ts'
          - 'src/utils/logs.ts'
          - 'src/utils/shell.ts'
          - 'src/models/plan.ts'
          - 'src/models/phase.ts'
    - uuid: '3e4f5a6b-7c8d-49e0-b1a2-c3d4e5f6a7b8'
      status: 'todo'
      name: 'Part 3: Harden Utilities with Unit Tests'
      reason: |
        Untested code is broken code. Now that the utilities are written, we need to hammer them with unit tests to ensure they're reliable. This involves implementing all the test cases in `test/unit/utils/`. We'll cover everything from parsing tmux output to correctly counting YAML files and handling edge cases.
      depends_on: ['b6c7d8e9-f0a1-4b2c-9d3e-4f5a6b7c8d9e']
      steps:
        - uuid: 'a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d'
          status: 'todo'
          name: '1. Implement Unit Tests for Filesystem Utilities'
          reason: 'To verify the correctness of file counting, report parsing, and plan reading logic in `fs.ts`.'
          files:
            - 'test/unit/utils/fs.test.ts'
            - 'src/utils/fs.ts'
          operations:
            - 'Implement all test cases for `getPhaseStats` to handle various directory states (corresponds to `part-unit-fs-stats-*`).'
            - 'Implement all test cases for `getFailedReports` to verify time filtering and content parsing (corresponds to `part-unit-fs-reports-*`).'
            - 'Implement all test cases for `readPlan` to handle valid, invalid, and missing files (corresponds to `part-unit-fs-plan-read-*`).'
        - uuid: 'f6e5d4c3-b2a1-4f0e-9d8c-7b6a5f4e3d2c'
          status: 'todo'
          name: '2. Implement Unit Tests for Log Parsing Utility'
          reason: 'To ensure the log parsing regex and sorting logic in `logs.ts` are robust.'
          files:
            - 'test/unit/utils/logs.test.ts'
            - 'src/utils/logs.ts'
          operations:
            - 'Implement all test cases for `getRecentLogs` to verify aggregation, sorting, limiting, and parsing of varied log formats (corresponds to `part-unit-logs-*`).'
        - uuid: 'd4c3b2a1-f0e9-4d8c-7b6a-5f4e3d2c1b0a'
          status: 'todo'
          name: '3. Implement Unit Tests for Shell Utility'
          reason: 'To validate the parsing of `tmux ls` output for different agent types and edge cases in `shell.ts`.'
          files:
            - 'test/unit/utils/shell.test.ts'
            - 'src/utils/shell.ts'
          operations:
            - 'Implement all test cases for `getActiveAgents`, using mocks for the `exec` call to test the parsing logic in isolation (corresponds to `part-unit-shell-*`).'
      context_files:
        compact:
          - 'test/unit/utils/fs.test.ts'
          - 'test/unit/utils/logs.test.ts'
          - 'test/unit/utils/shell.test.ts'
          - 'src/utils/fs.ts'
          - 'src/utils/logs.ts'
          - 'src/utils/shell.ts'
        medium:
          - 'test/unit/utils/fs.test.ts'
          - 'test/unit/utils/logs.test.ts'
          - 'test/unit/utils/shell.test.ts'
          - 'src/utils/fs.ts'
          - 'src/utils/logs.ts'
          - 'src/utils/shell.ts'
          - 'test/test.util.ts'
        extended:
          - 'test/unit/utils/fs.test.ts'
          - 'test/unit/utils/logs.test.ts'
          - 'test/unit/utils/shell.test.ts'
          - 'src/utils/fs.ts'
          - 'src/utils/logs.ts'
          - 'src/utils/shell.ts'
          - 'test/test.util.ts'
          - 'jest.config.js'
    - uuid: '8d9e0f1a-2b3c-4d5e-6f7a-8b9c0d1e2f3a'
      status: 'todo'
      name: 'Part 4: Build CLI Command Logic'
      reason: |
        The utilities need a user-facing entry point. This part implements the application logic within `src/commands/init.ts` and `src/commands/state.ts`. It will wire up the data-gathering functions from Part 2 and format their output for the console.
      depends_on: ['3e4f5a6b-7c8d-49e0-b1a2-c3d4e5f6a7b8']
      steps:
        - uuid: 'a8b9c0d1-e2f3-4a5b-6c7d-8e9f0a1b2c3d'
          status: 'todo'
          name: '1. Implement `init` Command'
          reason: 'To provide the scaffolding functionality for a new nocaflow project.'
          files:
            - 'src/commands/init.ts'
          operations:
            - 'Implement `handleInitCommand` to create the full `.nocaflow` directory structure and `.gitkeep` files, with a check to prevent overwriting an existing setup (corresponds to `part-init-scaffold`).'
        - uuid: 'c0d1e2f3-a4b5-4c6d-7e8f-9a0b1c2d3e4f'
          status: 'todo'
          name: '2. Implement `state` Command'
          reason: 'To wire up all data-gathering utilities and present a comprehensive state report to the user.'
          files:
            - 'src/commands/state.ts'
          operations:
            - 'Implement `renderProgressBar` to create the visual progress bar string (corresponds to `part-state-render-progress`).'
            - 'In `handleStateCommand`, call all the necessary utility functions to fetch project state (corresponds to `part-state-fetch-data`).'
            - 'In `handleStateCommand`, use `chalk` to format and print the fetched data into a structured console report (corresponds to `part-state-render-output`).'
      context_files:
        compact:
          - 'src/commands/init.ts'
          - 'src/commands/state.ts'
        medium:
          - 'src/commands/init.ts'
          - 'src/commands/state.ts'
          - 'src/utils/fs.ts'
          - 'src/utils/shell.ts'
          - 'src/utils/logs.ts'
          - 'src/utils/git.ts'
        extended:
          - 'src/commands/init.ts'
          - 'src/commands/state.ts'
          - 'src/utils/fs.ts'
          - 'src/utils/shell.ts'
          - 'src/utils/logs.ts'
          - 'src/utils/git.ts'
          - 'src/cli.ts'
    - uuid: '5a6b7c8d-9e0f-4a1b-2c3d-4e5f6a7b8c9d'
      status: 'todo'
      name: 'Part 5: Lock Down Commands with Integration & Unit Tests'
      reason: |
        To ensure the command layer works as expected and integrates correctly with the utilities. We'll implement the tests in `test/integration/commands/init.test.ts`, `test/unit/commands/state.test.ts`, and the tricky integration tests for our git utility in `test/integration/utils/git.test.ts`.
      depends_on: ['8d9e0f1a-2b3c-4d5e-6f7a-8b9c0d1e2f3a']
      steps:
        - uuid: 'e5f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8a9b'
          status: 'todo'
          name: '1. Implement Unit Tests for `state` Command'
          reason: 'To verify the presentation logic of the `state` command, specifically the progress bar rendering.'
          files:
            - 'test/unit/commands/state.test.ts'
            - 'src/commands/state.ts'
          operations:
            - 'Implement all test cases for `renderProgressBar` to ensure it correctly displays progress for various inputs (corresponds to `part-unit-progress-bar-*`).'
        - uuid: 'a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c1d'
          status: 'todo'
          name: '2. Implement Integration Tests for `init` Command'
          reason: 'To verify that the `init` command correctly modifies the filesystem as expected.'
          files:
            - 'test/integration/commands/init.test.ts'
            - 'src/commands/init.ts'
          operations:
            - 'Implement all test cases in `init.test.ts` to confirm the creation of the correct directory structure and file counts (corresponds to `part-int-init-*`).'
        - uuid: 'c9d0e1f2-a3b4-4c5d-6e7f-8a9b0c1d2e3f'
          status: 'todo'
          name: '3. Implement Integration Tests for Git Utility'
          reason: 'To test the `git.ts` utility against a real git repository, covering worktrees and other edge cases.'
          files:
            - 'test/integration/utils/git.test.ts'
            - 'src/utils/git.ts'
          operations:
            - 'Implement all test cases in `git.test.ts`, which will involve creating real git worktrees and commits to test the parsing logic end-to-end (corresponds to `part-int-git-*`).'
      context_files:
        compact:
          - 'test/unit/commands/state.test.ts'
          - 'test/integration/commands/init.test.ts'
          - 'test/integration/utils/git.test.ts'
          - 'src/commands/state.ts'
          - 'src/commands/init.ts'
          - 'src/utils/git.ts'
        medium:
          - 'test/unit/commands/state.test.ts'
          - 'test/integration/commands/init.test.ts'
          - 'test/integration/utils/git.test.ts'
          - 'src/commands/state.ts'
          - 'src/commands/init.ts'
          - 'src/utils/git.ts'
          - 'test/test.util.ts'
        extended:
          - 'test/unit/commands/state.test.ts'
          - 'test/integration/commands/init.test.ts'
          - 'test/integration/utils/git.test.ts'
          - 'src/commands/state.ts'
          - 'src/commands/init.ts'
          - 'src/utils/git.ts'
          - 'test/test.util.ts'
          - 'jest.config.js'
    - uuid: 'f0a1b2c3-d4e5-4f6a-7b8c-9d0e1f2a3b4c'
      status: 'todo'
      name: 'Part 6: End-to-End Smoke Test'
      reason: |
        The final gate. We need to verify the *compiled* application works from start to finish. This part involves implementing the full E2E suite in `test/e2e/cli.test.ts`. It will build the project, run the CLI with various arguments (`init`, `state`, `--help`), and assert on the actual `stdout` and `stderr`. This proves the whole system is wired up correctly.
      depends_on: ['5a6b7c8d-9e0f-4a1b-2c3d-4e5f6a7b8c9d']
      steps:
        - uuid: '1f2a3b4c-5d6e-4f7a-8b9c-0d1e2f3a4b5c'
          status: 'todo'
          name: '1. Implement E2E Test Suite'
          reason: 'To test the compiled application as a black box, ensuring all components work together correctly from the command line.'
          files:
            - 'test/e2e/cli.test.ts'
          operations:
            - 'Implement the `beforeAll` hook to build the project and `beforeEach`/`afterEach` for test isolation (corresponds to `part-e2e-build-step`, `part-e2e-setup`, `part-e2e-cleanup`).'
            - 'Implement test cases for the `init` command, checking for success and handling of pre-existing directories (corresponds to `part-e2e-init-*`).'
            - 'Implement test cases for the `state` command in various scenarios, including complex states and non-initialized directories (corresponds to `part-e2e-state-*`).'
            - 'Implement test cases for general CLI behavior like handling no command, help flags, and unknown commands (corresponds to `part-e2e-no-command`, `part-e2e-help-flag`, `part-e2e-unknown-command`).'
      context_files:
        compact:
          - 'test/e2e/cli.test.ts'
          - 'src/cli.ts'
          - 'test/test.util.ts'
        medium:
          - 'test/e2e/cli.test.ts'
          - 'src/cli.ts'
          - 'test/test.util.ts'
          - 'src/commands/init.ts'
          - 'src/commands/state.ts'
        extended:
          - 'test/e2e/cli.test.ts'
          - 'src/cli.ts'
          - 'test/test.util.ts'
          - 'src/commands/init.ts'
          - 'src/commands/state.ts'
          - 'package.json'
          - 'tsconfig.json'
  conclusion: |
    Once this plan is executed, we'll have transformed a collection of commented-out blueprints into a functional and robust CLI tool. The `nocaflow` utility will be self-bootstrapping (`nocaflow init`) and provide critical observability (`nocaflow state`). The comprehensive, multi-layered test suite will give us the confidence to refactor and add new features down the line without breaking existing functionality. We're not just shipping features; we're shipping a stable, reliable foundation.
  context_files:
    compact:
      - 'src/commands/init.ts'
      - 'src/commands/state.ts'
      - 'src/utils/fs.ts'
      - 'src/utils/git.ts'
      - 'src/utils/logs.ts'
      - 'src/utils/shell.ts'
      - 'test/test.util.ts'
    medium:
      - 'src/commands/init.ts'
      - 'src/commands/state.ts'
      - 'src/utils/fs.ts'
      - 'src/utils/git.ts'
      - 'src/utils/logs.ts'
      - 'src/utils/shell.ts'
      - 'test/test.util.ts'
      - 'test/e2e/cli.test.ts'
      - 'test/integration/commands/init.test.ts'
      - 'test/unit/utils/fs.test.ts'
    extended:
      - 'src/commands/init.ts'
      - 'src/commands/state.ts'
      - 'src/utils/fs.ts'
      - 'src/utils/git.ts'
      - 'src/utils/logs.ts'
      - 'src/utils/shell.ts'
      - 'test/test.util.ts'
      - 'test/e2e/cli.test.ts'
      - 'test/integration/commands/init.test.ts'
      - 'test/unit/utils/fs.test.ts'
      - 'package.json'
      - 'tsconfig.json'
      - 'jest.config.js'
```