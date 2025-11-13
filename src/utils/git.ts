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
    const { stdout: logOutput } = await platform.runCommand(`git log --all -n ${limit} --pretty=format:'%H%x1f%D%x1f%B%n%x00'`);
    if (!logOutput) return [];

    // Split by null byte and filter out any trailing empty string.
    return logOutput.split('\x00').filter(Boolean).map(line => {
      const parts = line.split('\x1f');
      const hash = parts[0] || '';
      const refs = parts[1] || '';
      // Process the message to convert literal \n sequences to actual newlines
      const rawMessage = (parts[2] || '').trim();
      const message = rawMessage.replace(/\\n/g, '\n');

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

/**
 * @description Checks if the current directory is a git repository.
 * @returns {Promise<boolean>}
 */
export const isGitRepository = async (): Promise<boolean> => {
  try {
    const { stdout, code } = await platform.runCommand('git rev-parse --is-inside-work-tree');
    return code === 0 && stdout.trim() === 'true';
  } catch (error) {
    return false;
  }
};