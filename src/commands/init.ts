import fs from 'fs/promises';
import path from 'path';
import chalk from 'chalk';
import { EOL } from 'os';
import { simpleGit } from 'simple-git';
import { platform } from '../utils/platform';
import { isGitRepository } from '../utils/git';
import { copyScaffoldFiles, scaffoldFiles } from '../scaffold/templates';

/**
 * @description Handles the logic for the 'init' command.
 */
export const handleInitCommand = async (_argv: Record<string, unknown>): Promise<void> => {
  // 1. Prerequisite checks
  const requiredCommands = ['git', 'tmux'];
  for (const cmd of requiredCommands) {
    const exists = await platform.commandExists(cmd);
    if (!exists) {
      console.error(chalk.red(`Error: ${cmd} is not installed. NocaFlow requires git and tmux.`));
      process.exit(1);
    }
  }

  // 2. Check for existing .nocaflow directory
  const rootDir = '.nocaflow';
  try {
    await fs.access(rootDir);
    console.warn(chalk.yellow(`Warning: '${rootDir}' directory already exists. Initialization skipped.`));
    process.exit(0);
  } catch (error) {
    // Directory does not exist, proceed.
  }

  // 3. Initialize git repository if needed
  try {
    const isGitRepo = await isGitRepository();
    if (!isGitRepo) {
      console.log('No git repository found. Initializing...');
      await simpleGit().init();
      console.log(chalk.green('Git repository initialized.'));
    } else {
      console.log('Existing git repository found.');
    }
  } catch (error) {
    console.error(chalk.red('Failed to initialize git repository:'), EOL, error);
    process.exit(1);
  }

  // 4. Create directory structure
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

    // 5. Scaffold agent and rule files
    await copyScaffoldFiles();

    console.log(chalk.green(' nocaflow project initialized successfully. ✨'));
    console.log(
      `Created ${chalk.bold(rootDir)} directory structure and ${chalk.bold(
        scaffoldFiles.length,
      )} agent/rule files.`,
    );
  } catch (error) {
    console.error(chalk.red('Failed to initialize nocaflow project:'), EOL, error);
    process.exit(1);
  }
};