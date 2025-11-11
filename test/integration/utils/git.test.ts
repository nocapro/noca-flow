import { getGitLog } from '../../../src/utils/git';
import { setupTestDirectory, initGitRepo } from '../../test.util';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';

const promisedExec = promisify(exec);

describe('integration/utils/git', () => {
  let cleanup: () => Promise<void>;

  beforeEach(async () => {
    // TODO: part-int-git-setup - Set up a clean directory and initialize a git repo.
    // INSTRUCTIONS:
    // 1. Use `setupTestDirectory()` to create a temporary, isolated directory.
    // 2. Use `initGitRepo()` to initialize a git repository inside it.
    const { cleanup: c } = await setupTestDirectory();
    cleanup = c;
    await initGitRepo();
  });

  afterEach(async () => {
    // TODO: part-int-git-cleanup - Clean up the temporary directory.
    // INSTRUCTIONS:
    // 1. Call the `cleanup()` function.
    await cleanup();
  });

  it('should parse commits with worktree information', async () => {
    // TODO: part-int-git-worktree - Test parsing of commits from a git worktree.
    // INSTRUCTIONS:
    // 1. Create a new worktree using `git worktree add ../my-feature-wt`.
    // 2. In the new worktree directory, create a file and commit it with a specific message.
    // 3. Call `getGitLog(5)`.
    // 4. Find the commit from the worktree in the results.
    // 5. Assert that its `worktree` property is `my-feature-wt` (or similar).
  });

  it('should handle commits not associated with a worktree', async () => {
    // TODO: part-int-git-mainline - Test parsing of commits not in a worktree.
    // INSTRUCTIONS:
    // 1. In the main worktree, create a file and commit it.
    // 2. Call `getGitLog(5)`.
    // 3. Find the new commit in the results.
    // 4. Assert that its `worktree` property is `null`.
  });

  it('should respect the commit limit', async () => {
    // TODO: part-int-git-limit - Test that the `limit` parameter is respected.
    // INSTRUCTIONS:
    // 1. Create more commits than the limit (e.g., 5 commits).
    // 2. Call `getGitLog(3)`.
    // 3. Assert that the length of the returned array is exactly 3.
  });

  it('should return an empty array for a repository with no commits', async () => {
    // TODO: part-int-git-no-commits - Test behavior with a fresh repo.
    // INSTRUCTIONS:
    // 1. Use a separate setup that only calls `git init` but does not create an initial commit.
    // 2. Call `getGitLog(5)`.
    // 3. Assert that the result is an empty array.
  });

  it('should handle commit messages with special characters', async () => {
    // TODO: part-int-git-special-chars - Test parsing of complex commit messages.
    // INSTRUCTIONS:
    // 1. Create a commit with a message containing characters like `|`, `'`, `"`, and newlines.
    // 2. Call `getGitLog(1)`.
    // 3. Assert that the `message` property of the returned commit object is the full, unmodified commit message.
  });

  it('should return an empty array if not in a git repository', async () => {
    // TODO: part-int-git-no-repo - Test behavior when run outside a git repository.
    // INSTRUCTIONS:
    // 1. This test needs a separate setup. Use `setupTestDirectory` but DO NOT call `initGitRepo`.
    // 2. Call `getGitLog(5)`.
    // 3. Assert that the result is an empty array.
    // 4. Remember to call the cleanup function.
  });
});