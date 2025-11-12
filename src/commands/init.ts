import fs from 'fs/promises';
import path from 'path';
import chalk from 'chalk';
import { EOL } from 'os';

/**
 * @description Handles the logic for the 'init' command.
 */
export const handleInitCommand = async (_argv: Record<string, unknown>): Promise<void> => {
  const rootDir = '.nocaflow';
  try {
    await fs.access(rootDir);
    console.warn(chalk.yellow(`Warning: '${rootDir}' directory already exists. Initialization skipped.`));
    process.exit(0);
  } catch (error) {
    // Directory does not exist, proceed.
  }

  const phases = ['initialization', 'development'];
  const planSubDirs = ['todo', 'doing', 'review', 'done', 'failed/report'];
  const agentLogDir = 'agent-log';

  const dirsToCreate: string[] = [];
  const gitkeepFiles: string[] = [];

  for (const phase of phases) {
    const phaseBase = path.join(rootDir, phase);
    const agentLogPath = path.join(phaseBase, agentLogDir);
    dirsToCreate.push(agentLogPath);
    gitkeepFiles.push(path.join(agentLogPath, '.gitkeep'));

    const plansBase = path.join(phaseBase, 'plans');
    for (const subDir of planSubDirs) {
      const dirPath = path.join(plansBase, subDir);
      dirsToCreate.push(dirPath);
      gitkeepFiles.push(path.join(dirPath, '.gitkeep'));
    }
  }

  try {
    await Promise.all(dirsToCreate.map(dir => fs.mkdir(dir, { recursive: true })));
    await Promise.all(gitkeepFiles.map(file => fs.writeFile(file, '')));

    console.log(chalk.green(' nocaflow project initialized successfully. ✨'));
    console.log(`Created ${chalk.bold(rootDir)} directory structure with ${dirsToCreate.length} directories and ${gitkeepFiles.length} .gitkeep files.`);
  } catch (error) {
    console.error(chalk.red('Failed to initialize nocaflow project:'), EOL, error);
    process.exit(1);
  }
};