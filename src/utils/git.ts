import { platform } from './platform';

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
  const getWorktreeMap = async (): Promise<Map<string, string>> => {
    const map = new Map<string, string>();
    try {
      const { stdout } = await platform.runCommand('git worktree list --porcelain');
      const entries = stdout.trim().split('\n\n');
      for (const entry of entries) {
        const branchMatch = entry.match(/^branch refs\/heads\/(.*)/m);
        if (branchMatch) {
          const branchName = branchMatch[1];
          // Do not treat the main/master branch as a worktree indicator
          if (branchName !== 'main' && branchName !== 'master') {
            // Assuming worktree branch name is the worktree name we want to display
            map.set(branchName, branchName);
          }
        }
      }
    } catch (error) {
      // Not a git repo or no worktrees, map will be empty.
    }
    return map;
  };

  try {
    const worktreeMap = await getWorktreeMap();
    // Use non-printable characters as delimiters for robustness.
    // \x1f (unit separator) separates fields, \x00 (null) separates records.
    const { stdout: logOutput } = await platform.runCommand(`git log --all -n ${limit} --pretty=format:'%H%x1f%D%x1f%B%x00'`);
    if (!logOutput) return [];

    // Split by null byte and filter out any trailing empty string.
    return logOutput.split('\x00').filter(Boolean).map(line => {
      const parts = line.split('\x1f');
      const hash = parts[0] || '';
      const refs = parts[1] || '';
      const message = (parts[2] || '').trim();
      
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