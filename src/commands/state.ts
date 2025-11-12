import chalk from 'chalk';
import { getPhaseStats, PhaseStats, getFailedReports, FailedReport } from '../utils/fs';
import { getActiveAgents, AgentInfo } from '../utils/shell';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { getRecentLogs, LogEntry } from '../utils/logs';
import { getGitLog, GitCommit } from '../utils/git';

dayjs.extend(relativeTime);

/**
 * @description Renders a progress bar.
 * @param current - The current progress value.
 * @param total - The total value for 100%.
 * @param length - The character length of the bar.
 * @returns A string representing the progress bar.
 */
export const renderProgressBar = (current: number, total: number, length: number = 20): string => {
  const percent = total > 0 ? current / total : 0;
  const filledLength = Math.round(length * percent);
  const emptyLength = length - filledLength;
  const filledBar = '▇'.repeat(filledLength);
  const emptyBar = '-'.repeat(emptyLength);
  const bar = `[${filledBar}${emptyBar}]`;
  const text = `(${current}/${total} plans done)`;

  return `${bar} ${text}`;
};

/**
 * @description Displays the full state report to the console.
 */
export const handleStateCommand = async (argv: {}): Promise<void> => {
  const phaseStats: PhaseStats = await getPhaseStats();
  const activeAgents: AgentInfo[] = await getActiveAgents();
  const recentLogs: LogEntry[] = await getRecentLogs(5);
  const failedReports: FailedReport[] = await getFailedReports(24);
  const gitCommits: GitCommit[] = await getGitLog(10);
  const currentPhase = phaseStats.development?.total > 0 ? 'development' : 'initialization';

  // Header
  console.log(chalk.bold(`== nocaflow State [${dayjs().format('YYYY-MM-DD HH:mm:ss')}] ==`));
  console.log(`Current Phase: ${chalk.cyan(currentPhase)}`);
  
  // Phase Progress
  console.log(chalk.bold('\n== Phase Progress =='));
  for (const phaseName in phaseStats) {
    const stats = phaseStats[phaseName];
    const progressBar = renderProgressBar(stats.done, stats.total);
    console.log(`[${chalk.yellow(phaseName.toUpperCase())}]`.padEnd(18) + progressBar);
  }

  // Phase Stats
  console.log(chalk.bold('\n== Phase Stats (Plans) =='));
  for (const phaseName in phaseStats) {
    const stats = phaseStats[phaseName];
    if (stats.total === 0) continue;
    const statsString = `todo: ${stats.todo}, doing: ${stats.doing}, review: ${stats.review}, failed: ${stats.failed}, done: ${stats.done}`;
    console.log(`[${chalk.yellow(phaseName.toUpperCase())}]`.padEnd(18) + statsString);
  }

  // Active Agents
  console.log(chalk.bold('\n== Active Agents (tmux) =='));
  if (activeAgents.length === 0) {
    console.log('No active agents.');
  } else {
    for (const agent of activeAgents) {
      console.log(`[${chalk.blue(agent.phase)}|${chalk.magenta(agent.pid)}]`.padEnd(18) + `id:${agent.id} (running ${agent.runtime})`);
    }
  }

  // Recent Agent Activity
  console.log(chalk.bold('\n== Recent Agent Activity (last 5) =='));
  if (recentLogs.length === 0) {
    console.log('No recent activity.');
  } else {
    for (const log of recentLogs) {
      const statusColor = log.status === 'DONE' ? chalk.green : log.status === 'FAIL' ? chalk.red : chalk.gray;
      const time = dayjs(log.timestamp).fromNow();
      console.log(`${statusColor(`[${log.status}|${log.phase}|${log.agentId}]`)} plan:${log.planId} - ${log.message} (${chalk.gray(time)})`);
    }
  }

  // Stalled / Failed
  console.log(chalk.bold('\n== Stalled / Failed (last 24h) =='));
  if (failedReports.length === 0) {
    console.log('No failed reports in the last 24 hours.');
  } else {
    for (const report of failedReports) {
      console.log(`${chalk.red('[FAILED]')} plan:${report.planId} part:${report.partId} - "${report.reason}"`);
      console.log(`         Report: ${report.reportPath}`);
    }
  }

  // Recent Git Commits
  console.log(chalk.bold('\n== Recent Git Commits (all worktrees) =='));
  if (gitCommits.length === 0) {
    console.log('No recent commits.');
  } else {
    for (const commit of gitCommits) {
      const worktreeInfo = commit.worktree ? `(${chalk.cyan(commit.worktree)}) ` : '';
      console.log(`${chalk.yellow(commit.hash.slice(0, 7))} ${worktreeInfo}${commit.message}`);
    }
  }
};