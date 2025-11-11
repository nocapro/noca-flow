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

    it('should handle a missing phase directory gracefully', async () => {
      // TODO: part-unit-fs-stats-missing-phase-dir - Test with a whole phase directory missing.
      // INSTRUCTIONS:
      // 1. Create a structure for `.nocaflow/initialization` with some plans.
      // 2. Do NOT create the `.nocaflow/development` directory at all.
      // 3. Call `getPhaseStats()`.
      // 4. Assert that the stats for `initialization` are correct.
      // 5. Assert that the stats for `development` are all zero and no error was thrown.
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
      // 3. Use `fs.utimes` or a similar method to modify the `mtime` of the old file to be outside the lookback window.
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

    it('should ignore non-markdown report files', async () => {
      // TODO: part-unit-fs-reports-ignore-files - Test that non-report files are ignored.
      // INSTRUCTIONS:
      // 1. Create a failed report directory.
      // 2. Create `plan1.partA.report.md` and `notes.txt`.
      // 3. Call `getFailedReports(1)`.
      // 4. Assert that the result array has a length of 1, containing only the report.
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