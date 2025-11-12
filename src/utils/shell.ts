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
  try {
    const { stdout } = await exec(`tmux ls -F "#{session_name} #{pane_pid} #{session_activity}"`);
    if (!stdout) return [];

    const lines = stdout.trim().split('\n');
    const agents: AgentInfo[] = [];

    for (const line of lines) {
      const [sessionName, pid, activity] = line.split(' ');
      const runtime = dayjs().to(dayjs.unix(parseInt(activity, 10)), true);

      let match;
      if ((match = sessionName.match(/^(init|dev)-(.+)/))) {
        const phase = match[1].toUpperCase() as 'INIT' | 'DEV';
        const partId = match[2];
        agents.push({
          phase,
          id: partId,
          planId: 'unknown', // Not available from session name
          partId: partId,
          runtime,
          pid,
        });
      } else if ((match = sessionName.match(/^init-scaffold-(.+)/))) {
        const planId = match[1];
        agents.push({
          phase: 'SCAF',
          id: planId,
          planId,
          partId: 'scaffold',
          runtime,
          pid,
        });
      } else if ((match = sessionName.match(/^qa-(.+)/))) {
        const planId = match[1];
        agents.push({ phase: 'QA', id: planId, planId, partId: 'qa', runtime, pid });
      }
    }
    return agents;
  } catch (error) {
    return []; // Tmux likely not running or has no sessions.
  }
};