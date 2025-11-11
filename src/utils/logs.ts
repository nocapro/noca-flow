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
  // TODO: part-logs-get-recent - Read and parse agent log files.
  // INSTRUCTIONS:
  // 1. Define phase directories to scan.
  // 2. Find all `.log` files in the `agent-log` subdirectories.
  // 3. Read content of each log file.
  // 4. For each line, use regex to parse. Example:
  //    /^(?<timestamp>.*?) \[(?<status>\w+)\|(?<phase>\w+)\|(?<agentId>.*?)\] plan:(?<planId>\S+) - (?<message>.*)$/
  // 5. Create `LogEntry` objects from matches. Convert timestamp string to a `Date`.
  // 6. Collect all entries.
  // 7. Sort entries by timestamp (descending).
  // 8. Return a slice of the array containing the top `limit` entries.

  // const logDirs = ['.nocaflow/initialization/agent-log', '.nocaflow/development/agent-log'];
  // let allEntries: LogEntry[] = [];
  // const logRegex = /^(?<timestamp>.*?) \[(?<status>\w+)\|(?<phase>\w+)\|(?<agentId>.*?)\] plan:(?<planId>\S+) - (?<message>.*)$/;

  // for (const dir of logDirs) {
  //   try {
  //     const files = await fs.readdir(dir);
  //     for (const file of files.filter(f => f.endsWith('.log'))) {
  //       // const content = await fs.readFile(path.join(dir, file), 'utf-8');
  //       // for (const line of content.split('\n')) {
  //       //   const match = line.match(logRegex);
  //       //   if (match?.groups) {
  //       //     // create LogEntry and push to allEntries
  //       //   }
  //       // }
  //     }
  //   } catch (error) { /* dir may not exist */ }
  // }

  // allEntries.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  // return allEntries.slice(0, limit);

  throw new Error('Not implemented');
};