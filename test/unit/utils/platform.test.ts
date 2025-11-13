import { posixPlatform } from '../../../src/utils/platform';
import os from 'os';

describe('unit/utils/platform', () => {
  // Store and restore env vars to ensure test isolation
  const originalEnv = { ...process.env };

  afterEach(() => {
    process.env = { ...originalEnv };
  });

  describe('runCommand', () => {
    it('should resolve with stdout and code 0 on successful execution', async () => {
      const result = await posixPlatform.runCommand('echo "hello world"');
      expect(result.stdout.trim()).toBe('hello world');
      expect(result.stderr).toBe('');
      expect(result.code).toBe(0);
    });

    it('should capture stderr and a non-zero exit code on command failure', async () => {
      // Using a command that is very likely to fail in a predictable way
      const result = await posixPlatform.runCommand('ls non_existent_dir_12345');
      expect(result.stdout).toBe('');
      expect(result.stderr).toContain('non_existent_dir_12345');
      expect(result.code).not.toBe(0);
    });
  });

  describe('getTmpDir', () => {
    it('should prioritize TMPDIR environment variable', () => {
      process.env.TMPDIR = '/tmp/tmpdir_test';
      process.env.TEMP = '/tmp/temp_test';
      expect(posixPlatform.getTmpDir()).toBe('/tmp/tmpdir_test');
    });

    it('should fall back to TEMP if TMPDIR is not set', () => {
      delete process.env.TMPDIR;
      process.env.TEMP = '/tmp/temp_test';
      expect(posixPlatform.getTmpDir()).toBe('/tmp/temp_test');
    });

    it('should fall back to TMP if TEMP is not set', () => {
      delete process.env.TMPDIR;
      delete process.env.TEMP;
      process.env.TMP = '/tmp/tmp_test';
      expect(posixPlatform.getTmpDir()).toBe('/tmp/tmp_test');
    });

    it('should fall back to os.tmpdir() as a last resort', () => {
      delete process.env.TMPDIR;
      delete process.env.TEMP;
      delete process.env.TMP;
      // This will return the actual OS temp dir, which is correct behavior.
      expect(posixPlatform.getTmpDir()).toBe(os.tmpdir());
    });
  });

  describe('commandExists', () => {
    it('should return true for a command that exists', async () => {
      // 'node' is guaranteed to exist since we are running tests with it.
      const exists = await posixPlatform.commandExists('node');
      expect(exists).toBe(true);
    });

    it('should return false for a command that does not exist', async () => {
      const exists = await posixPlatform.commandExists('nonexistentcommand1234567890');
      expect(exists).toBe(false);
    });
  });
});