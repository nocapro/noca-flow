import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { platform } from './platform';

export interface AgentInfo {
  sessionName: string;
  type: 'WORKER' | 'SCAFFOLDER' | 'QA';
  // Phase is known for workers and scaffolders, but not for QA agents from session name alone.
  phase: 'INIT' | 'DEV' | null;
  planId: string | null;
  partId: string | null;
  runtime: string;
  pid: string;
}

dayjs.extend(relativeTime);

/**
 * @description Lists active tmux sessions and parses them to find agent info.
 * @returns A list of active agents.
 */
export const getActiveAgents = async (): Promise<AgentInfo[]> => {
  try {
    const { stdout } = await platform.runCommand(`tmux ls -F "#{session_name} #{pane_pid} #{session_activity}"`);
    if (!stdout) return [];

    const lines = stdout.trim().split('\n');
    const agents: AgentInfo[] = [];

    for (const line of lines) {
      const [sessionName, pid, activity] = line.split(' ');
      const runtime = dayjs().to(dayjs.unix(parseInt(activity, 10)), true);

      let match;
      if ((match = sessionName.match(/^init-scaffold-(.+)/))) {
        const planId = match[1];
        agents.push({
          sessionName,
          type: 'SCAFFOLDER',
          phase: 'INIT',
          planId,
          partId: 'scaffold',
          runtime,
          pid,
        });
      } else if ((match = sessionName.match(/^qa-(.+)/))) {
        const planId = match[1];
        agents.push({
          sessionName,
          type: 'QA',
          phase: null,
          planId,
          partId: 'qa',
          runtime,
          pid,
        });
      } else if ((match = sessionName.match(/^(init|dev)-(?!scaffold-|qa-)(.+)/))) {
        const phase = match[1].toUpperCase() as 'INIT' | 'DEV';
        const partId = match[2];
        agents.push({
          sessionName,
          type: 'WORKER',
          phase,
          planId: null, // Not available from session name for workers
          partId,
          runtime,
          pid,
        });
      }
    }
    return agents;
  } catch (error) {
    return []; // Tmux likely not running or has no sessions.
  }
};