import { exec as execCallback, ExecException } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import { platform } from '../src/utils/platform';

const promisedExec = promisify(execCallback);

export const runCli = async (
  args: string,
): Promise<{ stdout: string; stderr: string; code: number }> => {
  const cliPath = path.join(__dirname, '..', 'dist', 'cli.js');
  try {
    const { stdout, stderr } = await promisedExec(`node ${cliPath} ${args}`);
    return { stdout, stderr, code: 0 };
  } catch (error) {
    const err = error as ExecException & { stdout: string; stderr: string };
    return {
      stdout: err.stdout,
      stderr: err.stderr,
      code: err.code || 1,
    };
  }
};

export const setupTestDirectory = async (): Promise<{
  testDir: string;
  cleanup: () => Promise<void>;
}> => {
  const originalCwd = process.cwd();
  const testDir = await fs.mkdtemp(path.join(platform.getTmpDir(), 'nocaflow-test-'));
  process.chdir(testDir);

  const cleanup = async (): Promise<void> => {
    process.chdir(originalCwd);
    await fs.rm(testDir, { recursive: true, force: true });
  };

  return { testDir, cleanup };
};

export const initGitRepo = async (): Promise<void> => {
  await promisedExec('git init');
  await promisedExec('git config user.email "test@example.com"');
  await promisedExec('git config user.name "Test User"');
  await promisedExec('git commit --allow-empty -m "Initial commit"');
};

export const createDummyPlanFile = async (
  phase: 'initialization' | 'development',
  status: 'todo' | 'doing' | 'done' | 'review' | 'failed',
  fileName: string,
): Promise<void> => {
  const dirPath = path.join('.nocaflow', phase, 'plans', status);
  await fs.mkdir(dirPath, { recursive: true });
  await fs.writeFile(path.join(dirPath, fileName), '# dummy plan');
};

export const createDummyFailedReport = async (
  phase: 'initialization' | 'development',
  planId: string,
  partId: string,
  summary: string,
): Promise<string> => {
  const reportDir = path.join('.nocaflow', phase, 'plans', 'failed', 'report');
  await fs.mkdir(reportDir, { recursive: true });
  const reportPath = path.join(reportDir, `${planId}.${partId}.report.md`);
  const content = `## Summary\n\n${summary}`;
  await fs.writeFile(reportPath, content);
  return reportPath;
};