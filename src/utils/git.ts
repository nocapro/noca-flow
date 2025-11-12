import { promisify } from 'util';
import { exec as execCallback } from 'child_process';

export interface GitCommit {
  hash: string;
  worktree: string | null;
  message: string;
}

const exec = promisify(execCallback);

/**
 * @description Executes 'git log' to get recent commit history across all worktrees.
 * @param limit - The maximum number of commits to return.
 * @returns A list of recent git commits.
 */
export const getGitLog = async (limit: number): Promise<GitCommit[]> => {
  const getWorktreeMap = async (): Promise<Map<string, string>> => {
    const map = new Map<string, string>();
    try {
      const { stdout } = await exec('git worktree list --porcelain');
      const entries = stdout.trim().split('\n\n');
      for (const entry of entries) {
        const branchMatch = entry.match(/^branch refs\/heads\/(.*)/m);
        if (branchMatch) {
          const branchName = branchMatch[1];
          // Assuming worktree branch name is the worktree name we want to display
          map.set(branchName, branchName);
        }
      }
    } catch (error) {
      // Not a git repo or no worktrees, map will be empty.
    }
    return map;
  };

  try {
    const worktreeMap = await getWorktreeMap();
    const { stdout: logOutput } = await exec(`git log --all -n ${limit} --pretty=format:"%H|%D|%s"`);
    if (!logOutput) return [];

    return logOutput.trim().split('\n').map(line => {
      const parts = line.split('|');
      const hash = parts[0] || '';
      const refs = parts[1] || '';
      const message = parts.slice(2).join('|'); // Robustly handle '|' in commit message
      
      let worktree: string | null = null;
      for (const branchName of worktreeMap.keys()) {
        if (refs.includes(branchName)) {
          worktree = worktreeMap.get(branchName) || null;
          break;
        }
      }
      return { hash, worktree, message };
    });
  } catch (error) {
    return []; // Git not installed or not a git repo.
  }
};