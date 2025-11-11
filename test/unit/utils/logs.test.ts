import { getRecentLogs } from '../../../src/utils/logs';
import fs from 'fs/promises';

jest.mock('fs/promises');
const mockedFs = fs as jest.Mocked<typeof fs>;

describe('utils/logs', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getRecentLogs', () => {
    // TODO: Test case with multiple log files across different phases.
    // It should read from all relevant directories.
    // 1. Mock `fs.readdir` to return `['a.log']` for the init dir and `['b.log']` for the dev dir.
    // 2. Mock `fs.readFile` to return different log content for `a.log` and `b.log`.
    // 3. Call `getRecentLogs(10)`.
    // 4. Assert that the result contains parsed entries from both files.
    it('should aggregate logs from all phase directories', async () => {});

    // TODO: Test case with a log file containing valid and malformed lines.
    // It should parse valid lines and skip malformed ones.
    // 1. Mock `fs.readdir` to return one log file.
    // 2. Mock `fs.readFile` to return a string with one valid log line and one invalid line.
    // 3. Call `getRecentLogs(10)`.
    // 4. Assert that the result contains exactly one entry, corresponding to the valid line.
    it('should correctly parse valid log lines and skip invalid ones', async () => {});

    // TODO: Test case with more log entries than the specified limit.
    // It should return only the most recent 'limit' number of entries, sorted descending by timestamp.
    // 1. Mock `fs.readdir` and `fs.readFile` to produce 10 log entries with out-of-order timestamps.
    // 2. Call `getRecentLogs(5)`.
    // 3. Assert the result has a length of 5.
    // 4. Assert the timestamps in the result are in descending order.
    it('should return the correct number of recent, sorted log entries', async () => {});

    // TODO: Test case where log directories do not exist.
    // It should handle the error and return an empty array.
    // 1. Mock `fs.readdir` to throw an ENOENT error for all log directories.
    // 2. Call `getRecentLogs(5)`.
    // 3. Assert the result is an empty array.
    it('should return an empty array if log directories are missing', async () => {});

    // TODO: Test case with empty log files.
    // It should return an empty array.
    // 1. Mock `fs.readdir` to return log file names.
    // 2. Mock `fs.readFile` to return an empty string for all files.
    // 3. Call `getRecentLogs(5)`.
    // 4. Assert the result is an empty array.
    it('should return an empty array for empty log files', async () => {});
  });
});