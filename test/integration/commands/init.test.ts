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

  // Note: The case for an existing .nocaflow directory is tested in e2e/cli.test.ts,
  // as it involves checking process exit codes, which is not suitable for an integration test
  // without mocking `process.exit`.
});