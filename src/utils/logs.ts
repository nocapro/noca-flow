import path from 'path';
import fs from 'fs/promises';

 export interface LogEntry {
  status: 'DONE' | 'FAIL' | 'INFO';
  phase: 'INIT' | 'DEV' | 'QA';
  agentId: string;
  planId: string;
  message: string;
  timestamp: Date;
}

/**
 * @description Reads the agent log files and returns the most recent entries.
 * @param limit - The maximum number of log entries to return.
 * @returns A list of recent log entries, sorted newest first.
 */
export const getRecentLogs = async (limit: number): Promise<LogEntry[]> => {
  const logDirs = ['.nocaflow/initialization/agent-log', '.nocaflow/development/agent-log'];
  let allEntries: LogEntry[] = [];
  const logRegex =
    /^(?<timestamp>.*?) \[(?<status>\w+)\|(?<phase>\w+)\|(?<agentId>.*?)\] plan:(?<planId>\S+) - (?<message>.*)$/;

  for (const dir of logDirs) {
    try {
      const files = await fs.readdir(dir);
      for (const file of files.filter(f => f.endsWith('.log'))) {
        const content = await fs.readFile(path.join(dir, file), 'utf-8');
        for (const line of content.split('\n')) {
          const match = line.match(logRegex);
          if (match?.groups) {
            const { timestamp, status, phase, agentId, planId, message } = match.groups;
            allEntries.push({
              timestamp: new Date(timestamp),
              status: status as LogEntry['status'],
              phase: phase as LogEntry['phase'],
              agentId,
              planId,
              message,
            });
          }
        }
      }
    } catch (error) {
      // dir may not exist
    }
  }

  allEntries.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  return allEntries.slice(0, limit);
};