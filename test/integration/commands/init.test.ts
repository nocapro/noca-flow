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
    // 2. Use `fs.access` to verify that a representative set of key directories exist.
    //    - e.g., '.nocaflow/initialization/plans/todo'
    //    - e.g., '.nocaflow/development/plans/failed/report'
    // 3. Use `fs.access` to verify that a representative set of key `.gitkeep` files exist.
    //    - e.g., check '.nocaflow/initialization/agent-log/.gitkeep'
  });

  it('should create the correct number of directories and .gitkeep files', async () => {
    // TODO: part-int-init-counts - Test the exact count of created items.
    // INSTRUCTIONS:
    // 1. Call `handleInitCommand({})`.
    // 2. Recursively read all created directory and file paths starting from `.nocaflow`.
    // 3. Assert that the number of created directories matches the expected count (e.g., 2 phases * 5 plan subdirs + other root dirs).
    // 4. Assert that the number of `.gitkeep` files matches the expected count for empty directories.
  });

  // Note: The case for an existing .nocaflow directory is tested in e2e/cli.test.ts,
  // as it involves checking process exit codes, which is not suitable for an integration test
  // without mocking `process.exit`.
});