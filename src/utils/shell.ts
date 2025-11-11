import { exec } from 'child_process';
import { Plan, PlanPart } from '../models/plan';

export interface AgentInfo {
  phase: 'INIT' | 'DEV' | 'QA' | 'SCAF';
  id: string; // part_id, plan_id for QA/Scaffold
  planId: string;
  partId: string; // Can be 'scaffold' or 'qa'
  runtime: string;
  pid: string;
}

/**
 * @description Lists active tmux sessions and parses them to find agent info.
 * @returns A list of active agents.
 */
export const getActiveAgents = async (): Promise<AgentInfo[]> => {
  // TODO: Execute 'tmux ls -F "#{session_name} #{pane_pid} #{session_activity}"'.
  // TODO: Parse the output. Session names follow conventions from manager.agent.md:
  // - Worker: "{phase}-{part_id}" (e.g., "init-a1b2c3d4")
  // - Scaffolder: "init-scaffold-{plan_id}"
  // - QA: "qa-{plan_id}"
  // TODO: For worker sessions, find the corresponding plan file in `.nocaflow/{phase}/plans/doing/` to look up the planId.
  // TODO: Calculate runtime from session_activity (it's a unix timestamp).
  // TODO: Return a list of AgentInfo objects matching the README.md output.
  return [];
};