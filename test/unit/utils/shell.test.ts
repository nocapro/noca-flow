import { getActiveAgents } from '../../../src/utils/shell';
import { exec } from 'child_process';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// Note: This is an exception to the "no mock" rule. `tmux` is an external system
// dependency, not internal application logic. Mocking `exec` is the only reliable
// way to test the parsing logic in a CI environment without requiring `tmux` to be running.
jest.mock('child_process');
const mockedExec = exec as jest.Mock;
dayjs.extend(relativeTime);

describe('unit/utils/shell', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getActiveAgents', () => {
    it('should parse all types of agent sessions and ignore non-agent sessions', async () => {
      const now = dayjs().unix();
      const stdout = [
        `init-part123 111 ${now}`,
        `dev-part456 222 ${now}`,
        `init-scaffold-plan789 333 ${now}`,
        `qa-planABC 444 ${now}`,
        `my-random-session 555 ${now}`,
      ].join('\n');
      mockedExec.mockImplementation((_cmd, callback) => callback(null, { stdout, stderr: '' }));

      const agents = await getActiveAgents();
      expect(agents).toHaveLength(4);

      expect(agents).toContainEqual(expect.objectContaining({ phase: 'INIT', partId: 'part123', pid: '111' }));
      expect(agents).toContainEqual(expect.objectContaining({ phase: 'DEV', partId: 'part456', pid: '222' }));
      expect(agents).toContainEqual(expect.objectContaining({ phase: 'SCAF', planId: 'plan789', pid: '333' }));
      expect(agents).toContainEqual(expect.objectContaining({ phase: 'QA', planId: 'planABC', pid: '444' }));
    });

    it('should ignore session names that are similar to but not valid agent sessions', async () => {
      const now = dayjs().unix();
      const stdout = [
        `init- 111 ${now}`,
        `dev-scaffold-123 222 ${now}`,
        `qa 333 ${now}`,
        `my-init-session 444 ${now}`,
      ].join('\n');
      mockedExec.mockImplementation((_cmd, callback) => callback(null, { stdout, stderr: '' }));

      const agents = await getActiveAgents();
      expect(agents).toEqual([]);
    });

    it('should return an empty array when there are no tmux sessions', async () => {
      mockedExec.mockImplementation((_cmd, callback) => callback(null, { stdout: '', stderr: '' }));
      const agents = await getActiveAgents();
      expect(agents).toEqual([]);
    });

    it('should return an empty array if the tmux command fails', async () => {
      mockedExec.mockImplementation((_cmd, callback) => callback(new Error('tmux failed'), { stdout: '', stderr: '' }));
      const agents = await getActiveAgents();
      expect(agents).toEqual([]);
    });

    it('should correctly calculate agent runtime', async () => {
      jest.useFakeTimers().setSystemTime(new Date('2023-01-01T12:00:00Z'));

      const fiveMinutesAgo = dayjs('2023-01-01T11:55:00Z').unix();
      const stdout = `dev-part123 111 ${fiveMinutesAgo}`;
      mockedExec.mockImplementation((_cmd, callback) => callback(null, { stdout, stderr: '' }));

      const agents = await getActiveAgents();

      expect(agents).toHaveLength(1);
      // dayjs relative time can be "a few seconds", "a minute", etc. so we check for a known value.
      // "5 minutes" is the expected output.
      expect(agents[0].runtime).toBe('5 minutes');

      jest.useRealTimers();
    });
  });
});