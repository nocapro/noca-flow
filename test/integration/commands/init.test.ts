import { handleInitCommand } from '../../../src/commands/init';
import { setupTestDirectory } from '../../test.util';
import fs from 'fs/promises';

describe('integration/commands/init', () => {
  let cleanup: () => Promise<void>;

  beforeEach(async () => {
    const { cleanup: c } = await setupTestDirectory();
    cleanup = c;
  });

  afterEach(async () => {
    await cleanup();
  });

  it('should create the full .nocaflow directory structure on a fresh run', async () => {
    await handleInitCommand({});

    const dirsToCheck = [
      '.nocaflow/initialization/plans/todo',
      '.nocaflow/development/plans/failed/report',
      '.nocaflow/initialization/agent-log',
    ];

    const filesToCheck = [
      '.nocaflow/initialization/plans/todo/.gitkeep',
      '.nocaflow/development/agent-log/.gitkeep',
      '.nocaflow/development/plans/failed/report/.gitkeep',
    ];

    for (const dir of dirsToCheck) {
      await expect(fs.access(dir)).resolves.toBeUndefined();
    }

    for (const file of filesToCheck) {
      await expect(fs.access(file)).resolves.toBeUndefined();
    }
  });

  it('should create the correct number of directories and .gitkeep files', async () => {
    await handleInitCommand({});

    const getAllFiles = async (dir: string): Promise<string[]> => {
        const dirents = await fs.readdir(dir, { withFileTypes: true });
        const files = await Promise.all(dirents.map((dirent) => {
            const res = `${dir}/${dirent.name}`;
            return dirent.isDirectory() ? getAllFiles(res) : res;
        }));
        return Array.prototype.concat(...files);
    };

    const allFiles = await getAllFiles('.nocaflow');
    const gitkeepCount = allFiles.filter(file => file.endsWith('.gitkeep')).length;

    // Expected: 2 phases * (1 agent-log dir + 5 plan sub-dirs) = 12 .gitkeeps
    expect(gitkeepCount).toBe(12);

    // Let's count the directories that contain a .gitkeep file.
    const allDirsWithGitkeep = new Set(allFiles.map(file => file.substring(0, file.lastIndexOf('/'))));
    expect(allDirsWithGitkeep.size).toBe(12);
  });

  // Note: The case for an existing .nocaflow directory is tested in e2e/cli.test.ts,
  // as it involves checking process exit codes, which is not suitable for an integration test
  // without mocking `process.exit`.
});