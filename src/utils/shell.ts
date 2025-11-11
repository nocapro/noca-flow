import { promisify } from 'util';
import { exec as execCallback } from 'child_process';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Plan, PlanPart } from '../models/plan';

export interface AgentInfo {
  phase: 'INIT' | 'DEV' | 'QA' | 'SCAF';
  id: string; // part_id, plan_id for QA/Scaffold
  planId: string;
  partId: string; // Can be 'scaffold' or 'qa'
  runtime: string;
  pid: string;
}

const exec = promisify(execCallback);
dayjs.extend(relativeTime);

/**
 * @description Lists active tmux sessions and parses them to find agent info.
 * @returns A list of active agents.
 */
export const getActiveAgents = async (): Promise<AgentInfo[]> => {
  // TODO: part-shell-get-agents - List and parse active tmux sessions to find agent info.
  // INSTRUCTIONS:
  // 1. Execute `tmux ls -F "#{session_name} #{pane_pid} #{session_activity}"`.
  // 2. Handle errors (e.g., tmux not running). Return empty array on failure.
  // 3. Parse each line of stdout.
  // 4. Use regex on session name to determine agent type and extract IDs.
  //    - Worker: /^(init|dev)-(.+)/ -> { phase, partId }
  //    - Scaffolder: /^(init)-scaffold-(.+)/ -> { phase: 'SCAF', planId }
  //    - QA: /^qa-(.+)/ -> { phase: 'QA', planId }
  // 5. For worker agents, `planId` can be 'unknown' for this implementation.
  // 6. Calculate runtime from `session_activity` Unix timestamp using `dayjs().to(dayjs.unix(timestamp), true)`.
  // 7. Construct and return an array of `AgentInfo` objects.

  // try {
  //   const { stdout } = await exec(`tmux ls -F "#{session_name} #{pane_pid} #{session_activity}"`);
  //   if (!stdout) return [];
  //
  //   const lines = stdout.trim().split('\n');
  //   const agents: AgentInfo[] = [];
  //
  //   for (const line of lines) {
  //     const [sessionName, pid, activity] = line.split(' ');
  //     const runtime = dayjs().to(dayjs.unix(parseInt(activity, 10)), true);
  //
  //     let match;
  //     // if ((match = sessionName.match(/^(init|dev)-(.+)/))) { ... }
  //     // else if ((match = sessionName.match(/^init-scaffold-(.+)/))) { ... }
  //     // else if ((match = sessionName.match(/^qa-(.+)/))) { ... }
  //     //
  //     // In each block, construct an AgentInfo object and push to agents array.
  //   }
  //   return agents;
  // } catch (error) {
  //   return []; // Tmux likely not running or has no sessions.
  // }
  throw new Error('Not implemented');
};