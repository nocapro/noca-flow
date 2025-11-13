import { simpleGit, SimpleGit, LogResult } from 'simple-git';
import path from 'path';
import { platform } from './platform';

export interface GitCommit {
  hash: string;
  worktree: string | null;
  message: string;
}



interface WorktreeInfo {
  path: string;
  branch: string;
  commit: string;
}

/**
 * Get worktree information by parsing git worktree list output
 */
const getWorktreeList = async (): Promise<WorktreeInfo[]> => {
  try {
    const result = await platform.runCommand('git worktree list --porcelain');
    if (result.code !== 0) {
      return [];
    }

    const lines = result.stdout.trim().split('\n');
    const worktrees: WorktreeInfo[] = [];
    let currentWorktree: Partial<WorktreeInfo> = {};

    for (const line of lines) {
      if (line.startsWith('worktree ')) {
        // Save previous worktree if complete
        if (currentWorktree.path && currentWorktree.branch) {
          worktrees.push(currentWorktree as WorktreeInfo);
        }
        // Start new worktree
        currentWorktree = { path: line.substring(9) };
      } else if (line.startsWith('branch ')) {
        currentWorktree.branch = line.substring(7);
      } else if (line.startsWith('HEAD ')) {
        currentWorktree.commit = line.substring(5);
      }
    }

    // Add the last worktree if there is one
    if (currentWorktree.path) {
      worktrees.push(currentWorktree as WorktreeInfo);
    }

    return worktrees;
  } catch (error) {
    return [];
  }
};

/**
 * @description Executes 'git log' to get recent commit history across all worktrees.
 * @param limit - The maximum number of commits to return.
 * @returns A list of recent git commits.
 */
export const getGitLog = async (limit: number): Promise<GitCommit[]> => {
  try {
    const git = simpleGit();
    const isRepo = await git.checkIsRepo();
    if (!isRepo) return [];

    const worktrees = await getWorktreeList();
    const worktreeMap = new Map<string, string>();
    for (const wt of worktrees) {
      // Branch is like 'refs/heads/feature-branch', we want 'feature-branch'
      const branchNameMatch = wt.branch.match(/refs\/heads\/(.*)/);
      if (branchNameMatch && branchNameMatch[1]) {
        const branchName = branchNameMatch[1];
        if (branchName !== 'main' && branchName !== 'master') {
          worktreeMap.set(branchName, path.basename(wt.path));
        }
      }
    }

    // Get commit hashes first with basic format
    const basicLogResult = await git.log({ '--all': null, maxCount: limit });
    
    if (!basicLogResult.all || basicLogResult.total === 0) return [];

    const commits: GitCommit[] = [];
    
    for (const commit of basicLogResult.all) {
      // Get the full commit message using raw git command for each commit
      const fullMessageResult = await git.raw(['show', '--format=%B', '--no-patch', commit.hash]);
      const fullMessage = fullMessageResult.trim();
      
      let worktree: string | null = null;
      for (const branchName of worktreeMap.keys()) {
        if (commit.refs.includes(branchName)) {
          worktree = worktreeMap.get(branchName) || null;
          break;
        }
      }

      commits.push({
        hash: commit.hash,
        worktree,
        message: fullMessage,
      });
    }

    return commits;
  } catch (error) {
    return []; // Git not installed, not a git repo, or other error.
  }
};

/**
 * @description Checks if the current directory is a git repository.
 * @returns {Promise<boolean>}
 */
export const isGitRepository = async (): Promise<boolean> => {
  try {
    const git = simpleGit();
    return await git.checkIsRepo();
  } catch (error) {
    return false;
  }
};