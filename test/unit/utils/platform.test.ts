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