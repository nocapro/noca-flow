import fs from 'fs/promises';
import path from 'path';
import { EOL } from 'os';
import { simpleGit } from 'simple-git';
import { platform } from '../utils/platform';
import { isGitRepository } from '../utils/git';
import { copyScaffoldFiles, scaffoldFiles } from '../scaffold/templates';
import { logger } from '../utils/logger';

/**
 * @description Handles the logic for the 'init' command.
 */
export const handleInitCommand = async (_argv: Record<string, unknown>): Promise<void> => {
  // 1. Prerequisite checks
  const requiredCommands = ['git', 'tmux'];
  for (const cmd of requiredCommands) {
    const exists = await platform.commandExists(cmd);
    if (!exists) {
      logger.error(`Error: ${cmd} is not installed. NocaFlow requires git and tmux.`);
      process.exit(1);
    }
  }

  // 2. Check for existing .nocaflow directory
  const rootDir = '.nocaflow';
  try {
    await fs.access(rootDir);
    logger.warn(`'${rootDir}' directory already exists. Initialization skipped.`);
    process.exit(0);
  } catch (error) {
    // Directory does not exist, proceed.
  }

  // 3. Initialize git repository if needed
  try {
    const isGitRepo = await isGitRepository();
    if (!isGitRepo) {
      logger.info('No git repository found. Initializing...');
      await simpleGit().init();
      logger.info('Git repository initialized.');
    } else {
      logger.info('Existing git repository found.');
    }
  } catch (error) {
    logger.error('Failed to initialize git repository:', EOL, error);
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

    logger.info('nocaflow project initialized successfully. ✨');
    logger.info(
      `Created '${rootDir}' directory structure and ${scaffoldFiles.length} agent/rule files.`,
    );
  } catch (error) {
    logger.error('Failed to initialize nocaflow project:', EOL, error);
    process.exit(1);
  }
};