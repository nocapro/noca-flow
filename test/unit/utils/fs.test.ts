import { getPhaseStats, getFailedReports, readPlan } from '../../../src/utils/fs';
import fs from 'fs/promises';
import yaml from 'js-yaml';
import dayjs from 'dayjs';
import { Plan } from '../../../src/models/plan';

// TODO: Mock the 'fs/promises' module to control filesystem operations.
jest.mock('fs/promises');
const mockedFs = fs as jest.Mocked<typeof fs>;

describe('utils/fs', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getPhaseStats', () => {
    // TODO: Test case where .nocaflow directory exists with plans.
    // It should correctly count plans in todo, doing, done, etc., for each phase.
    // 1. Mock `mockedFs.readdir` to resolve with different arrays of filenames for different paths.
    //    - e.g., for path `.../initialization/plans/todo`, resolve `['a.yml', 'b.yml']`.
    //    - e.g., for path `.../development/plans/done`, resolve `['c.yml']`.
    //    - Use `mockResolvedValue` for simple cases or `mockImplementation` for path-dependent logic.
    // 2. Call `getPhaseStats()`.
    // 3. Assert `stats.initialization.todo` is 2 and `stats.development.done` is 1.
    // 4. Assert `total` is calculated correctly for each phase.
    it('should correctly count plans across different statuses and phases', async () => {});

    // TODO: Test case where a phase directory is missing.
    // It should handle the error gracefully and count as 0.
    // 1. Mock `mockedFs.readdir` to throw an ENOENT error for any path under `.../development/...`.
    //    - `const error: NodeJS.ErrnoException = new Error('...'); error.code = 'ENOENT';`
    //    - `mockImplementation(path => path.includes('development') ? Promise.reject(error) : Promise.resolve([]))`
    // 2. Call `getPhaseStats()`.
    // 3. Assert all counts for `development` are 0.
    it('should return 0 for a missing phase directory', async () => {});

    // TODO: Test case where a status directory is missing (e.g., no 'review' plans).
    // It should count that status as 0.
    // 1. Mock `mockedFs.readdir` to throw an ENOENT error for a specific path like `.../initialization/plans/review`.
    // 2. Call `getPhaseStats()`.
    // 3. Assert `stats.initialization.review` is 0.
    it('should return 0 for a missing status directory', async () => {});

    // TODO: Test case with an empty .nocaflow directory.
    // All counts should be 0.
    // 1. Mock `mockedFs.readdir` to resolve `[]` for all status directories.
    // 2. Call `getPhaseStats()`.
    // 3. Assert all counts for all phases are 0.
    it('should return all zeros for an empty directory structure', async () => {});
  });

  describe('getFailedReports', () => {
    // TODO: Test case with recent and old failure reports.
    // It should only return reports within the specified `hours` lookback period.
    // 1. Mock `mockedFs.readdir` to resolve `['recent.report.md', 'old.report.md']`.
    // 2. Mock `mockedFs.stat` to return a recent `birthtime` for one and an old `birthtime` for the other.
    //    - `mockedFs.stat.mockResolvedValueOnce({ birthtime: dayjs().subtract(1, 'hour').toDate() } as fs.Stats)`
    //    - `mockedFs.stat.mockResolvedValueOnce({ birthtime: dayjs().subtract(48, 'hour').toDate() } as fs.Stats)`
    // 3. Mock `mockedFs.readFile` to resolve with content for the recent file.
    // 4. Call `getFailedReports(24)`.
    // 5. Assert the result contains only the recent report and has a length of 1.
    it('should only return reports within the lookback period', async () => {});

    // TODO: Test case where report files have correctly formatted names and content.
    // It should correctly parse planId, partId, and summary from the filename and content.
    // 1. Mock `mockedFs.readdir` to resolve `['plan1.partA.report.md']`.
    // 2. Mock `mockedFs.stat` to resolve a recent `birthtime`.
    // 3. Mock `mockedFs.readFile` to resolve markdown `## Summary\nThis is the reason.`.
    // 4. Call `getFailedReports(24)`.
    // 5. Assert `result[0].planId` is 'plan1', `partId` is 'partA', and `reason` is 'This is the reason.'.
    it('should correctly parse report details', async () => {});

    // TODO: Test case with no report files.
    // It should return an empty array.
    // 1. Mock `mockedFs.readdir` to resolve `[]`.
    // 2. Call `getFailedReports(24)`.
    // 3. Assert the result is an empty array.
    it('should return an empty array when no reports are found', async () => {});

    // TODO: Test case where a report file is malformed (e.g., no "## Summary" section).
    // It should handle the parsing error gracefully.
    // 1. Mock `mockedFs.readdir` and `mockedFs.stat` for a recent report.
    // 2. Mock `mockedFs.readFile` to return content *without* a `## Summary` section.
    // 3. Call `getFailedReports(24)`.
    // 4. Assert the `reason` field has a sensible fallback, like 'Could not parse summary.'.
    it('should handle malformed report content', async () => {});
  });

  describe('readPlan', () => {
    // TODO: Test case with a valid YAML plan file.
    // It should correctly parse the YAML into a Plan object.
    // 1. Define a valid YAML string.
    // 2. Mock `mockedFs.readFile` to resolve with the YAML string.
    // 3. Call `readPlan('path/to/plan.yml')`.
    // 4. Assert that the returned object matches the parsed structure of the YAML.
    it('should parse a valid plan file', async () => {});

    // TODO: Test case with a non-existent file path.
    // It should throw a file-not-found error.
    // 1. Mock `mockedFs.readFile` to reject with an ENOENT error.
    // 2. Call `readPlan` and assert that it throws, e.g., `await expect(readPlan(...)).rejects.toThrow()`.
    it('should throw an error for a non-existent file', async () => {});

    // TODO: Test case with an invalid YAML file.
    // It should throw a YAML parsing error.
    // 1. Mock `mockedFs.readFile` to resolve with a string of invalid YAML syntax (e.g., `key: - invalid:`).
    // 2. Call `readPlan` and assert that it throws an error that can be identified as a YAMLException.
    it('should throw an error for invalid YAML', async () => {});
  });
});