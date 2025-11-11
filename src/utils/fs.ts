import path from 'path';
import fs from 'fs/promises';
import yaml from 'js-yaml';
import dayjs from 'dayjs';
import { Plan } from '../models/plan';

export interface PhaseStats {
  [phaseName: string]: {
    todo: number;
    doing: number;
    review: number;
    failed: number;
    done: number;
    total: number;
  };
}

export interface FailedReport {
  planId: string;
  partId: string;
  reason: string;
  reportPath: string;
}

/**
 * @description Reads all plan files from all phases and aggregates stats.
 * @returns An object containing plan counts for each status in each phase.
 */
export const getPhaseStats = async (): Promise<PhaseStats> => {
  // TODO: part-fs-get-phase-stats - Walk through .nocaflow/{phase}/plans/* directories and count plans.
  // INSTRUCTIONS:
  // 1. Define phases: ['initialization', 'development'].
  // 2. Define statuses: ['todo', 'doing', 'review', 'failed', 'done'].
  // 3. Use `fs.readdir` to count the number of files in each subdirectory. Handle errors for non-existent directories (count should be 0).
  // 4. Aggregate the counts into a `PhaseStats` object.
  // 5. Calculate the `total` for each phase.
  // 6. Example structure for one phase:
  //    'initialization': { todo: 1, doing: 2, review: 1, failed: 0, done: 6, total: 10 }
  // 7. Return the final `PhaseStats` object.

  // const phases = ['initialization', 'development'];
  // const statuses = ['todo', 'doing', 'review', 'failed', 'done'];
  // const stats: PhaseStats = {};

  // for (const phase of phases) {
  //   stats[phase] = { todo: 0, doing: 0, review: 0, failed: 0, done: 0, total: 0 };
  //   for (const status of statuses) {
  //     const dirPath = path.join('.nocaflow', phase, 'plans', status);
  //     try {
  //       const files = await fs.readdir(dirPath);
  //       const count = files.filter(f => f.endsWith('.yml')).length;
  //       stats[phase][status as keyof typeof stats.phase] = count;
  //       stats[phase].total += count;
  //     } catch (error) {
  //       // Directory likely doesn't exist, count is 0.
  //     }
  //   }
  // }
  // return stats;

  throw new Error('Not implemented');
};

/**
 * @description Scans the failed reports directory for recent failures.
 * @param hours - The lookback period in hours.
 * @returns A list of failed report details.
 */
export const getFailedReports = async (hours: number): Promise<FailedReport[]> => {
  // TODO: part-fs-get-failed-reports - Scan failed report directories for recent failures.
  // INSTRUCTIONS:
  // 1. Define phase directories to scan.
  // 2. Use `fs.readdir` to get all report files (ending in .md).
  // 3. For each file, get its stats using `fs.stat` to find its modification time (`mtime`). Using `mtime` is more reliable and testable than `birthtime`.
  // 4. Use `dayjs` to check if `mtime` is within the last `hours`.
  // 5. If it is recent, read the file content.
  // 6. Parse the markdown content to extract the summary/reason. A simple regex or string search for a "Summary" section is sufficient.
  // 7. The filename typically follows the pattern `{planId}.{partId}.report.md`. Parse this to get IDs.
  // 8. Construct a `FailedReport` object and add it to a results array.
  // 9. Return the array of recent failed reports.

  // const phases = ['initialization', 'development'];
  // const reports: FailedReport[] = [];
  // const since = dayjs().subtract(hours, 'hour');

  // for (const phase of phases) {
  //   const reportDir = path.join('.nocaflow', phase, 'plans', 'failed', 'report');
  //   try {
  //     const files = await fs.readdir(reportDir);
  //     for (const file of files) {
  //       if (!file.endsWith('.report.md')) continue;
  //       const filePath = path.join(reportDir, file);
  //       const stats = await fs.stat(filePath);
  //       if (dayjs(stats.mtime).isAfter(since)) {
  //         // const content = await fs.readFile(filePath, 'utf-8');
  //         // const summaryMatch = content.match(/## Summary\s*\n\s*(.*)/);
  //         // const reason = summaryMatch ? summaryMatch[1].trim() : 'Could not parse summary.';
  //         // const [planId, partId] = file.split('.').slice(0, 2);
  //         // reports.push({ planId, partId, reason, reportPath: filePath });
  //       }
  //     }
  //   } catch (error) { /* dir may not exist */ }
  // }
  // return reports;
  throw new Error('Not implemented');
};

/**
 * @description Reads and parses a YAML plan file.
 * @param filePath - The path to the plan.yml file.
 * @returns The parsed Plan object.
 */
export const readPlan = async (filePath: string): Promise<Plan> => {
    // TODO: part-fs-read-plan - Read file content and parse using js-yaml.
    // INSTRUCTIONS:
    // 1. Use `fs.readFile` to read the content of `filePath` as 'utf-8'.
    // 2. Use `yaml.load()` from the 'js-yaml' library to parse the string content.
    // 3. Cast the result to the `Plan` type and return it.
    // 4. Include error handling for file-not-found and YAML parsing errors.

    // try {
    //   const fileContent = await fs.readFile(filePath, 'utf-8');
    //   const plan = yaml.load(fileContent) as Plan;
    //   return plan;
    // } catch (error) {
    //   // if (error.code === 'ENOENT') { ... }
    //   // else if (error instanceof YAMLException) { ... }
    //   // else { ... }
    //   throw error;
    // }
    throw new Error('Not implemented');
};