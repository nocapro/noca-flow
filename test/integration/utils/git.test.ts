import { getGitLog } from '../../../src/utils/git';
import { setupTestDirectory, initGitRepo } from '../../test.util';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';

const promisedExec = promisify(exec);

describe('integration/utils/git', () => {
  let cleanup: () => Promise<void>;
  let testDir: string;

  beforeEach(async () => {
    const { cleanup: c, testDir: td } = await setupTestDirectory();
    cleanup = c;
    testDir = td;
    await initGitRepo();
  });

  afterEach(async () => {
    await cleanup();
  });

  it('should parse commits with worktree information', async () => {
    const worktreeName = 'my-feature-wt';
    const worktreePath = path.join(testDir, '..', worktreeName);
    await promisedExec(`git worktree add ${worktreePath}`);

    const originalCwd = process.cwd();
    process.chdir(worktreePath);
    await fs.writeFile('feature.txt', 'data');
    await promisedExec('git add .');
    await promisedExec('git commit -m "feat: commit from worktree"');
    process.chdir(originalCwd);

    const log = await getGitLog(5);
    const wtCommit = log.find(c => c.message === 'feat: commit from worktree');

    expect(wtCommit).toBeDefined();
    expect(wtCommit?.worktree).toBe(worktreeName);

    // Cleanup worktree
    await promisedExec(`git worktree remove ${worktreeName}`);
  });

  it('should handle commits not associated with a worktree', async () => {
    await fs.writeFile('main.txt', 'data');
    await promisedExec('git add .');
    await promisedExec('git commit -m "feat: commit from main"');

    const log = await getGitLog(5);
    const mainCommit = log.find(c => c.message === 'feat: commit from main');

    expect(mainCommit).toBeDefined();
    expect(mainCommit?.worktree).toBeNull();
  });

  it('should respect the commit limit', async () => {
    for (let i = 0; i < 5; i++) {
      await promisedExec(`git commit --allow-empty -m "commit ${i + 1}"`);
    }

    const log = await getGitLog(3);
    expect(log).toHaveLength(3);
  });

  it('should return an empty array for a repository with no commits', async () => {
    // Need a separate setup that doesn't create an initial commit.
    await cleanup();
    const { cleanup: c2 } = await setupTestDirectory();
    await promisedExec('git init');

    const log = await getGitLog(5);
    expect(log).toEqual([]);

    await c2(); // Use the new cleanup function
  });

  it('should handle commit messages with special characters', async () => {
    const complexMessage = `feat: handle '|' "quotes" and 'apostrophes'\n\nwith a body.`;
    await promisedExec(`git commit --allow-empty -m "${complexMessage}"`);

    const log = await getGitLog(1);

    expect(log).toHaveLength(1);
    expect(log[0].message).toBe(complexMessage);
  });

  it('should return an empty array if not in a git repository', async () => {
    // This requires a non-git directory.
    await cleanup(); // Get rid of the git repo from beforeEach
    const { cleanup: c2 } = await setupTestDirectory();

    const log = await getGitLog(5);
    expect(log).toEqual([]);

    await c2(); // Use the new cleanup function
  });
});