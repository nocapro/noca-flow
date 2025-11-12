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