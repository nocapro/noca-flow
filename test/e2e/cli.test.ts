import { runCli, setupTestDirectory, createDummyPlanFile, createDummyFailedReport, initGitRepo } from '../test.util';
import fs from 'fs/promises';
import { exec as execCallback } from 'child_process';
import path from 'path';
import { promisify } from 'util';
import { platform } from '../../src/utils/platform';

const promisedExec = promisify(execCallback);


describe('e2e/cli', () => {
  let cleanup: () => Promise<void>;
  let testDir: string;

  beforeAll(async () => {
    try {
      await promisedExec('npm run build');
    } catch (e) {
      console.error('Failed to build project for E2E tests:', e);
      process.exit(1);
    }
  }, 60000);

  beforeEach(async () => {
    const { cleanup: c, testDir: td } = await setupTestDirectory();
    cleanup = c;
    testDir = td;
  });

  afterEach(async () => {
    if (cleanup) {
      await cleanup();
    }
  });

  describe('init command', () => {
    it('should initialize a new project structure', async () => {
      const { stderr, code } = await runCli('init');

      expect(stderr).toContain('nocaflow project initialized successfully');
      expect(code).toBe(0);

      const expectedFile = path.join(testDir, '.nocaflow/initialization/plans/todo/.gitkeep');
      await expect(fs.access(expectedFile)).resolves.toBeUndefined();
    });

    it('should show a warning if the project is already initialized', async () => {
      await runCli('init'); // Run once to initialize
      const { stderr, code } = await runCli('init');

      expect(stderr).toContain("'.nocaflow' directory already exists. Initialization skipped.");
      expect(code).toBe(0); // Graceful exit on warning
    });
  });

  describe('state command', () => {
    it('should display the project state in an initialized directory', async () => {
      await runCli('init');
      await createDummyPlanFile('initialization', 'todo', 'e2e001.plan.yml');

      const { stdout, code } = await runCli('state');

      expect(stdout).toContain('== nocaflow State');
      expect(stdout).toContain('Phase Progress');
      expect(stdout).toContain('Current Phase: initialization');
      expect(stdout).toContain('todo: 1');
      expect(code).toBe(0);
    });

    it('should display a complex, multi-faceted state correctly', async () => {
      await runCli('init');
      await initGitRepo();

      // Setup: Create various artifacts
      await createDummyPlanFile('initialization', 'doing', 'e2e002.plan.yml');
      await createDummyPlanFile('development', 'done', 'e2e003.plan.yml');
      await createDummyFailedReport('initialization', 'f01e01', 'abcdef', 'Test failure');

      const logDir = '.nocaflow/development/agent-log';
      await fs.mkdir(logDir, { recursive: true });
      const logContent = `2023-10-27T10:00:00.000Z [DONE|DEV|agent-abc] plan:plan-e2e - Log message`;
      await fs.writeFile(path.join(logDir, 'test.log'), logContent);

      const tmuxSessionName = 'dev-e2e-part-xyz';
      const canRunTmux = await platform.commandExists('tmux');
      if (canRunTmux) {
        await platform.runCommand(`tmux new-session -d -s ${tmuxSessionName} "sleep 15"`);
      }

      // Act: Run the state command
      let stdout: string, code: number;
      try {
        const result = await runCli('state');
        stdout = result.stdout;
        code = result.code;
      } finally {
        // Teardown: ensure tmux session is killed
        if (canRunTmux) {
          await platform.runCommand(`tmux kill-session -t ${tmuxSessionName} || true`);
        }
      }

      expect(code).toBe(0);
      // Assert on all sections
      expect(stdout).toContain('Current Phase: development');
      expect(stdout).toContain('[INITIALIZATION]'.padEnd(18) + '[--------------------] (0/1 plans done)');
      expect(stdout).toContain('[DEVELOPMENT]'.padEnd(18) + '[▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇] (1/1 plans done)');
      if (canRunTmux) {
        expect(stdout).toContain('part:e2e-part-xyz');
      }
      expect(stdout).toContain('plan:plan-e2e - Log message');
      expect(stdout).toContain('plan:f01e01 part:abcdef - "Test failure"');
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
      const { stderr } = await runCli('');
      expect(stderr).toContain('Commands:');
      expect(stderr).toContain('init');
      expect(stderr).toContain('state');
      expect(stderr).toContain('You need at least one command before moving on');
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