import fs from 'fs/promises';
import path from 'path';

// Get the directory of this module file at runtime
// This works in both development and when the package is installed
const getModuleDir = () => {
  const modulePath = require.resolve('./templates');
  return path.dirname(modulePath);
};

const scaffoldFilesDir = path.join(getModuleDir(), 'files');

export interface ScaffoldFile {
  sourcePath: string;
  targetPath: string;
}

export const scaffoldFiles: ScaffoldFile[] = [
  { sourcePath: 'user.prompt.md', targetPath: 'user.prompt.md' },
  { sourcePath: 'manager.agent.md', targetPath: '.nocaflow/manager.agent.md' },
  { sourcePath: 'plan.agent.md', targetPath: '.nocaflow/plan.agent.md' },
  { sourcePath: 'qa.agent.md', targetPath: '.nocaflow/qa.agent.md' },
  { sourcePath: 'suffix.global.prompt.md', targetPath: '.nocaflow/suffix.global.prompt.md' },
  { sourcePath: 'initialization/init.agent-swarm.md', targetPath: '.nocaflow/initialization/init.agent-swarm.md' },
  { sourcePath: 'initialization/init.phase.rule.md', targetPath: '.nocaflow/initialization/init.phase.rule.md' },
  { sourcePath: 'initialization/scaffolder.agent.md', targetPath: '.nocaflow/initialization/scaffolder.agent.md' },
  { sourcePath: 'development/dev.agent-swarm.md', targetPath: '.nocaflow/development/dev.agent-swarm.md' },
  { sourcePath: 'development/dev.phase.rule.md', targetPath: '.nocaflow/development/dev.phase.rule.md' },
];

/**
 * Copies all scaffold files from the source directory to their target paths
 */
export const copyScaffoldFiles = async (): Promise<void> => {
  await Promise.all(
    scaffoldFiles.map(async (file) => {
      const source = path.join(scaffoldFilesDir, file.sourcePath);
      const target = file.targetPath;
      
      // Ensure target directory exists
      const targetDir = path.dirname(target);
      await fs.mkdir(targetDir, { recursive: true });
      
      // Copy the file
      await fs.copyFile(source, target);
    })
  );
};