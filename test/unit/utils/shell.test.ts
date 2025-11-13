import { getActiveAgents } from '../../../src/utils/shell';
import { platform } from '../../../src/utils/platform';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import * as crypto from 'crypto';

dayjs.extend(relativeTime);

describe('unit/utils/shell (integration)', () => {
  const testId = crypto.randomBytes(4).toString('hex');
  const sessionNames = [
    `init-part123-${testId}`,
    `dev-part456-${testId}`,
    `init-scaffold-plan789-${testId}`,
    `qa-planABC-${testId}`,
    `my-random-session-${testId}`,
  ];

  let canRun = false;

  beforeAll(async () => {
    canRun = await platform.commandExists('tmux');
    if (!canRun) {
      console.warn('`tmux` command not found. Skipping shell integration tests.');
    }
  });

  beforeEach(async () => {
    // Start detached sessions that will self-terminate
    for (const name of sessionNames) {
      await platform.runCommand(`tmux new-session -d -s ${name} "sleep 10"`);
    }
    // Give tmux a moment to register all sessions
    await new Promise(resolve => setTimeout(resolve, 200));
  });

  afterEach(async () => {
    for (const name of sessionNames) {
      // Use `|| true` to ignore errors if session has already terminated or been killed
      await platform.runCommand(`tmux kill-session -t ${name} || true`);
    }
  });

  describe('getActiveAgents', () => {
    it('should parse all types of agent sessions and ignore non-agent sessions', async () => {
      const agents = await getActiveAgents();
      // Filter for agents created in this specific test run to ensure isolation
      const testAgents = agents.filter(
        a => a.partId.endsWith(testId) || a.planId.endsWith(testId),
      );

      expect(testAgents).toHaveLength(4);

      expect(testAgents).toContainEqual(
        expect.objectContaining({ phase: 'INIT', partId: `part123-${testId}` }),
      );
      expect(testAgents).toContainEqual(
        expect.objectContaining({ phase: 'DEV', partId: `part456-${testId}` }),
      );
      expect(testAgents).toContainEqual(
        expect.objectContaining({ phase: 'SCAF', planId: `plan789-${testId}` }),
      );
      expect(testAgents).toContainEqual(
        expect.objectContaining({ phase: 'QA', planId: `planABC-${testId}` }),
      );
    });

    it('should return an empty array if tmux has no sessions', async () => {
      // Kill the sessions from beforeEach to create an empty state
      for (const name of sessionNames) {
        await platform.runCommand(`tmux kill-session -t ${name} || true`);
      }

      const agents = await getActiveAgents();
      expect(agents).toEqual([]);
    });

    it('should correctly calculate agent runtime', async () => {
      const agents = await getActiveAgents();
      const devAgent = agents.find(a => a.partId === `part456-${testId}`);
      expect(devAgent).toBeDefined();
      // The runtime is short and non-deterministic, just check it exists.
      expect(devAgent?.runtime).toContain('a few seconds');
    });
  });
});