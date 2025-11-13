import { getGitLog, isGitRepository } from '../../../src/utils/git';
import { setupTestDirectory, initGitRepo } from '../../test.util';
import { exec as execCallback } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import { simpleGit } from 'simple-git';

const promisedExec = promisify(execCallback);

describe('isGitRepository', () => {
  let cleanup: () => Promise<void>;

  // Separate setup because we need a non-git directory first.
  beforeEach(async () => {
    const { cleanup: c } = await setupTestDirectory();
    cleanup = c;
  });

  afterEach(async () => {
    await cleanup();
  });

  it('should return false in a non-git directory and true after init', async () => {
    expect(await isGitRepository()).toBe(false);
    await initGitRepo();
    expect(await isGitRepository()).toBe(true);
  });
});

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
    
    // Clean up any existing worktree directory first
    try {
      await promisedExec(`git worktree remove ${worktreePath} 2>/dev/null || true`);
      await fs.rm(worktreePath, { recursive: true, force: true });
    } catch (error) {
      // Ignore cleanup errors
    }
    
    // Use exec for worktree commands as simple-git support can be complex across versions
    await promisedExec(`git worktree add ${worktreePath}`);

    const originalCwd = process.cwd();
    process.chdir(worktreePath);

    const wtGit = simpleGit();
    await fs.writeFile('feature.txt', 'data');
    await wtGit.add('.');
    await wtGit.commit('feat: commit from worktree');
    process.chdir(originalCwd);

    const log = await getGitLog(5);
    const wtCommit = log.find(c => c.message === 'feat: commit from worktree');

    expect(wtCommit).toBeDefined();
    expect(wtCommit?.worktree).toBe(worktreeName);

    // Cleanup worktree
    await promisedExec(`git worktree remove ${worktreeName}`);
  });

  it('should handle commits not associated with a worktree', async () => {
    const git = simpleGit();
    await fs.writeFile('main.txt', 'data');
    await git.add('.');
    await git.commit('feat: commit from main');

    const log = await getGitLog(5);
    const mainCommit = log.find(c => c.message === 'feat: commit from main');

    expect(mainCommit).toBeDefined();
    expect(mainCommit?.worktree).toBeNull();
  });

  it('should respect the commit limit', async () => {
    const git = simpleGit();
    for (let i = 0; i < 5; i++) {
      await git.commit(`commit ${i + 1}`, { '--allow-empty': null });
    }

    const log = await getGitLog(3);
    expect(log).toHaveLength(3);
  });

  it('should return an empty array for a repository with no commits', async () => {
    // Need a separate setup that doesn't create an initial commit.
    await cleanup();
    const { cleanup: c2 } = await setupTestDirectory();
    await simpleGit().init();

    const log = await getGitLog(5);
    expect(log).toEqual([]);

    await c2(); // Use the new cleanup function
  });

  it('should handle commit messages with special characters', async () => {
    const complexMessage = `feat: handle '|' "quotes" and 'apostrophes'\n\nwith a body.`;
    await simpleGit().commit(complexMessage, { '--allow-empty': null });

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