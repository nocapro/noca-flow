import { runCli, setupTestDirectory, createDummyPlanFile, createDummyFailedReport, initGitRepo } from '../test.util';
import fs from 'fs/promises';
import { exec as execCallback } from 'child_process';
import path from 'path';
import { promisify } from 'util';

const promisedExec = promisify(execCallback);


describe('e2e/cli', () => {
  let cleanup: () => Promise<void>;
  let testDir: string;

  beforeAll(async () => {
    jest.setTimeout(30000); // Give tsc time to build
    try {
      await promisedExec('npm run build');
    } catch (e) {
      console.error('Failed to build project for E2E tests:', e);
      process.exit(1);
    }
  });

  beforeEach(async () => {
    const { cleanup: c, testDir: td } = await setupTestDirectory();
    cleanup = c;
    testDir = td;
  });

  afterEach(async () => {
    await cleanup();
  });

  describe('init command', () => {
    it('should initialize a new project structure', async () => {
      const { stdout, code } = await runCli('init');

      expect(stdout).toContain('nocaflow project initialized successfully');
      expect(code).toBe(0);

      const expectedFile = path.join(testDir, '.nocaflow/initialization/plans/todo/.gitkeep');
      await expect(fs.access(expectedFile)).resolves.toBeUndefined();
    });

    it('should show a warning if the project is already initialized', async () => {
      await fs.mkdir('.nocaflow'); // Manually create the directory
      const { stdout, code } = await runCli('init');

      expect(stdout).toContain('directory already exists. Initialization skipped.');
      expect(code).toBe(0); // Graceful exit on warning
    });
  });

  describe('state command', () => {
    it('should display the project state in an initialized directory', async () => {
      await runCli('init');
      await createDummyPlanFile('initialization', 'todo', 'plan1.yml');

      const { stdout, code } = await runCli('state');

      expect(stdout).toContain('== nocaflow State');
      expect(stdout).toContain('Phase Progress');
      expect(stdout).toContain('Current Phase: initialization');
      expect(stdout).toContain('todo: 1');
      expect(code).toBe(0);
    });

    it('should display a complex state with active agents and failed reports', async () => {
      await runCli('init');
      await initGitRepo();
      await createDummyPlanFile('initialization', 'doing', 'p1.yml');
      await createDummyPlanFile('development', 'done', 'p2.yml');
      await createDummyFailedReport('initialization', 'f01', 'pA', 'Test failure');

      const { stdout, code } = await runCli('state');

      expect(code).toBe(0);
      expect(stdout).toContain('Active Agents (tmux)');
      expect(stdout).toContain('Stalled / Failed');
      expect(stdout).toContain('plan:f01 part:pA - "Test failure"');
      expect(stdout).toContain('Recent Git Commits');
      expect(stdout).toContain('Initial commit');
    });

    it('should show a zero-state when run in a non-initialized directory', async () => {
      const { stdout, stderr, code } = await runCli('state');
      
      expect(stderr).toBe('');
      expect(code).toBe(0);
      expect(stdout).toContain('Current Phase: initialization');
      expect(stdout).toContain('(0/0 plans done)');
      expect(stdout).toContain('No active agents.');
      expect(stdout).toContain('No recent activity.');
      expect(stdout).toContain('No failed reports in the last 24 hours.');
    });
  });

  describe('no command', () => {
    it('should display help when no command is provided', async () => {
      const { stdout } = await runCli('');
      expect(stdout).toContain('Commands:');
      expect(stdout).toContain('init');
      expect(stdout).toContain('state');
      expect(stdout).toContain('You need at least one command before moving on');
    });

    it('should display help when --help flag is used', async () => {
      const generalHelp = await runCli('--help');
      expect(generalHelp.stdout).toContain('Show help');

      const stateHelp = await runCli('state --help');
      expect(stateHelp.stdout).toContain('Display the current state of the nocaflow project');
    });

    it('should show an error for an unknown command', async () => {
      const { stderr } = await runCli('nonexistent-command');
      expect(stderr).toContain('Unknown argument: nonexistent-command');
    });
  });
});