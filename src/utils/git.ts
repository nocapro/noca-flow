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
  // TODO: part-git-get-log - Get recent git commits across all worktrees.
  // INSTRUCTIONS:
  // 1. Execute `git worktree list --porcelain` to get worktree info.
  //    - Parse the output to create a map: { 'worktrees/wt-name': 'wt-name' }.
  // 2. Execute `git log --all -n ${limit} --pretty=format:'%H|%s|%D'`.
  // 3. Process the log output line by line.
  // 4. For each line, parse hash, message, and refs.
  // 5. Match refs against the worktree map to find the worktree name.
  // 6. Create `GitCommit` objects and add to a results array.

  // const getWorktreeMap = async (): Promise<Map<string, string>> => {
  //   // const { stdout } = await exec('git worktree list --porcelain');
  //   // const map = new Map<string, string>();
  //   // parse stdout and populate map, e.g. extract 'worktrees/wt-...' and the final part as the name.
  //   // return map;
  // }

  // try {
  //   // const worktreeMap = await getWorktreeMap();
  //   // const { stdout: logOutput } = await exec(`...`);
  //   // const commits: GitCommit[] = logOutput.trim().split('\n').map(line => {
  //   //   // ... parse line ...
  //   //   // ... find worktree from refs using worktreeMap ...
  //   //   // return { hash, message, worktree };
  //   // });
  //   // return commits;
  // } catch (error) {
  //   return []; // Git not installed or not a git repo.
  // }
  throw new Error('Not implemented');
};