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
  const phases = ['initialization', 'development'];
  const statuses: (keyof PhaseStats[string])[] = [
    'todo',
    'doing',
    'review',
    'failed',
    'done',
  ];
  const stats: PhaseStats = {};

  for (const phase of phases) {
    stats[phase] = { todo: 0, doing: 0, review: 0, failed: 0, done: 0, total: 0 };
    for (const status of statuses) {
      const dirPath = path.join('.nocaflow', phase, 'plans', status);
      try {
        const files = await fs.readdir(dirPath);
        // A plan is represented by its .yml file. This counts plans in each state directory.
        const count = files.filter(f => f.endsWith('.yml')).length;
        stats[phase][status] = count;
        stats[phase].total += count;
      } catch (error) {
        // Directory likely doesn't exist, count is 0.
      }
    }
  }
  return stats;
};

/**
 * @description Scans the failed reports directory for recent failures.
 * @param hours - The lookback period in hours.
 * @returns A list of failed report details.
 */
export const getFailedReports = async (hours: number): Promise<FailedReport[]> => {
  const phases = ['initialization', 'development'];
  const reports: FailedReport[] = [];
  const since = dayjs().subtract(hours, 'hour');

  for (const phase of phases) {
    const reportDir = path.join('.nocaflow', phase, 'plans', 'failed', 'report');
    try {
      const files = await fs.readdir(reportDir);
      for (const file of files) {
        if (!file.endsWith('.report.md')) continue;
        const filePath = path.join(reportDir, file);
        const stats = await fs.stat(filePath);
        if (dayjs(stats.mtime).isAfter(since)) {
          const content = await fs.readFile(filePath, 'utf-8');
          const summaryMatch = content.match(/## Summary\s*\n\s*([\s\S]*?)(?=\n##|$)/);
          const reason = summaryMatch ? summaryMatch[1].trim() : 'Could not parse summary.';
          const [planId, partId] = file.split('.').slice(0, 2);
          reports.push({ planId, partId, reason, reportPath: filePath });
        }
      }
    } catch (error) {
      // dir may not exist
    }
  }
  return reports;
};

/**
 * @description Reads and parses a YAML plan file.
 * @param filePath - The path to the plan.yml file.
 * @returns The parsed Plan object.
 */
export const readPlan = async (filePath: string): Promise<Plan> => {
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const plan = yaml.load(fileContent) as Plan;
    return plan;
  } catch (error) {
    // Let the caller handle the error. They might want to know if it's a
    // file not found vs. a parsing error.
    throw error;
  }
};