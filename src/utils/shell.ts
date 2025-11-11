import { exec } from 'child_process';

export interface AgentInfo {
  phase: 'INIT' | 'DEV';
  id: string;
  planId: string;
  partId: string;
  runtime: string;
}

/**
 * @description Lists active tmux sessions and parses them to find agent info.
 * @returns A list of active agents.
 */
export const getActiveAgents = async (): Promise<AgentInfo[]> => {
  // TODO: Execute 'tmux ls' command.
  // TODO: Parse the output to extract agent details based on a naming convention
  // for tmux sessions (e.g., 'nc-init-c8a2b1f0-9e7f8a7b').
  return [];
};