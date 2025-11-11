import { exec } from 'child_process';

export interface GitCommit {
  hash: string;
  worktree: string | null;
  message: string;
}

/**
 * @description Executes 'git log' to get recent commit history across all worktrees.
 * @param limit - The maximum number of commits to return.
 * @returns A list of recent git commits.
 */
export const getGitLog = async (limit: number): Promise<GitCommit[]> => {
  // TODO: Execute 'git log --all ...' with a custom format.
  // TODO: May need to query for worktree information and associate it.
  // TODO: Parse the output and return a list of GitCommit objects.
  return [];
};