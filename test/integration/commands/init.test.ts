import { handleInitCommand } from '../../../src/commands/init';
import { setupTestDirectory, initGitRepo } from '../../test.util';
import fs from 'fs/promises';
import { isGitRepository } from '../../../src/utils/git';

describe('integration/commands/init', () => {
  let cleanup: () => Promise<void>;

  beforeEach(async () => {
    const { cleanup: c } = await setupTestDirectory();
    cleanup = c;
  });

  afterEach(async () => {
    await cleanup();
  });

  it('should initialize a git repo if not already present', async () => {
    expect(await isGitRepository()).toBe(false);
    await handleInitCommand({});
    expect(await isGitRepository()).toBe(true);
  });

  it('should skip git init if already in a git repo', async () => {
    await initGitRepo();
    expect(await isGitRepository()).toBe(true);

    // This command should be idempotent and not fail if a repo exists.
    await handleInitCommand({});

    // Verify the repo is still valid.
    expect(await isGitRepository()).toBe(true);
  });

  it('should create the full .nocaflow directory and file structure on a fresh run', async () => {
    await handleInitCommand({});

    const dirsToCheck = [
      '.nocaflow/initialization/plans/todo',
      '.nocaflow/initialization/plans/doing',
      '.nocaflow/initialization/plans/review',
      '.nocaflow/initialization/plans/done',
      '.nocaflow/initialization/plans/failed/report',
      '.nocaflow/initialization/agent-log',
      '.nocaflow/development/plans/todo',
      '.nocaflow/development/plans/doing',
      '.nocaflow/development/plans/review',
      '.nocaflow/development/plans/done',
      '.nocaflow/development/plans/failed/report',
      '.nocaflow/development/agent-log',
    ];
    const filesToCheck = [
      '.nocaflow/manager.agent.md',
      '.nocaflow/plan.agent.md',
      '.nocaflow/qa.agent.md',
      '.nocaflow/suffix.global.prompt.md',
      '.nocaflow/initialization/init.agent-swarm.md',
      '.nocaflow/initialization/init.phase.rule.md',
      '.nocaflow/initialization/scaffolder.agent.md',
      '.nocaflow/development/dev.agent-swarm.md',
      '.nocaflow/development/dev.phase.rule.md',
      'user.prompt.md',
    ];

    for (const dir of dirsToCheck) {
      await expect(fs.access(dir)).resolves.toBeUndefined();
    }
    for (const file of filesToCheck) {
      await expect(fs.access(file)).resolves.toBeUndefined();
    }

    const managerContent = await fs.readFile('.nocaflow/manager.agent.md', 'utf-8');
    expect(managerContent).toContain('You are manager.agent. The orchestrator.');
  });
});