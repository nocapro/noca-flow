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