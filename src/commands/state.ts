import chalk from 'chalk';
import { getPhaseStats, PhaseStats, getFailedReports, FailedReport } from '../utils/fs';
import { getActiveAgents, AgentInfo } from '../utils/shell';
import dayjs from 'dayjs';
import { getRecentLogs, LogEntry } from '../utils/logs';
import { getGitLog, GitCommit } from '../utils/git';

/**
 * @description Renders a progress bar.
 * @param current - The current progress value.
 * @param total - The total value for 100%.
 * @param length - The character length of the bar.
 * @returns A string representing the progress bar.
 */
const renderProgressBar = (current: number, total: number, length: number = 20): string => {
  // TODO: part-state-render-progress - Implement progress bar rendering logic.
  // INSTRUCTIONS:
  // 1. Calculate the percentage of `current` to `total`.
  // 2. Determine how many `length` characters should be filled (e.g., '▇').
  // 3. Determine how many `length` characters should be empty (e.g., '-').
  // 4. Return a string like `[▇▇▇▇----] (current/total plans done)`.
  // 5. If total is 0, return a string representing an empty bar `[----------] (0/0 plans done)`.

  // const percent = total > 0 ? current / total : 0;
  // const filledLength = Math.round(length * percent);
  // const emptyLength = length - filledLength;
  // const filledBar = '▇'.repeat(filledLength);
  // const emptyBar = '-'.repeat(emptyLength);
  // const bar = `[${filledBar}${emptyBar}]`;
  // const text = `(${current}/${total} plans done)`;

  // return `${bar} ${text}`;

  throw new Error('Not implemented');
};

/**
 * @description Displays the full state report to the console.
 */
export const handleStateCommand = async (argv: {}): Promise<void> => {
  // TODO: part-state-fetch-data - Fetch all necessary data using utility functions.
  // INSTRUCTIONS:
  // 2. Call `getPhaseStats()` to get statistics for all phases.
  // 3. Call `getActiveAgents()` to get a list of running agents.
  // 4. Call `getRecentLogs(5)` to get the last 5 log entries.
  // 5. Call `getFailedReports(24)` to get failures in the last 24 hours.
  // 6. Call `getGitLog(10)` to get the 10 most recent git commits.

  // const phaseStats: PhaseStats = await getPhaseStats();
  // const activeAgents: AgentInfo[] = await getActiveAgents();
  // const recentLogs: LogEntry[] = await getRecentLogs(5);
  // const failedReports: FailedReport[] = await getFailedReports(24);
  // const gitCommits: GitCommit[] = await getGitLog(10);
  // const currentPhase = phaseStats.development?.total > 0 ? 'development' : 'initialization';

  // TODO: part-state-render-output - Format and print the state report.
  // INSTRUCTIONS:
  // 1. Use `chalk` for all coloring to match the style in the project's README.md.
  // 2. Print a header with the current time.
  // 3. Print the current phase.
  // 4. Print phase progress using `renderProgressBar` for each phase found in `phaseStats`.
  // 5. Print detailed plan counts for each phase.
  // 6. Print a list of active agents, including their phase, IDs, and runtime.
  // 7. Print recent agent activity from `recentLogs`, color-coding by status (DONE, FAIL).
  // 8. Print any stalled or failed reports from `failedReports`.
  // 9. Print recent git commits, including hash, worktree (if any), and message.

  /*
  // Header
  console.log(chalk.bold(`== nocaflow State [${dayjs().format('YYYY-MM-DD HH:mm:ss')}] ==`));
  console.log(`Current Phase: ${chalk.cyan(currentPhase)}`);
  
  // Phase Progress
  console.log(chalk.bold('\n== Phase Progress =='));
  // for (const phaseName in phaseStats) { ... renderProgressBar(...) ... }

  // Phase Stats
  console.log(chalk.bold('\n== Phase Stats (Plans) =='));
  // for (const phaseName in phaseStats) { ... console.log(...) ... }

  // Active Agents
  console.log(chalk.bold('\n== Active Agents (tmux) =='));
  // if (activeAgents.length === 0) { console.log('No active agents.'); }
  // for (const agent of activeAgents) { ... console.log(...) ... }

  // Recent Agent Activity
  console.log(chalk.bold('\n== Recent Agent Activity (last 5) =='));
  // if (recentLogs.length === 0) { console.log('No recent activity.'); }
  // for (const log of recentLogs) { ... console.log with color based on log.status ... }

  // Stalled / Failed
  console.log(chalk.bold('\n== Stalled / Failed (last 24h) =='));
  // if (failedReports.length === 0) { console.log('No failed reports in the last 24 hours.'); }
  // for (const report of failedReports) { ... console.log(...) ... }

  // Recent Git Commits
  console.log(chalk.bold('\n== Recent Git Commits (all worktrees) =='));
  // if (gitCommits.length === 0) { console.log('No recent commits.'); }
  // for (const commit of gitCommits) { ... console.log(...) ... }
  */

  throw new Error('Not implemented');
};