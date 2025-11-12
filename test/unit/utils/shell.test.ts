import { getActiveAgents } from '../../../src/utils/shell';
import { platform } from '../../../src/utils/platform';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

jest.mock('../../../src/utils/platform');
const mockedPlatform = platform as jest.Mocked<typeof platform>;
dayjs.extend(relativeTime);

describe('unit/utils/shell', () => {
  afterEach(() => {
    jest.resetAllMocks();
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
      mockedPlatform.runCommand.mockResolvedValue({ stdout, stderr: '' });

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
      mockedPlatform.runCommand.mockResolvedValue({ stdout, stderr: '' });

      const agents = await getActiveAgents();
      expect(agents).toEqual([]);
    });

    it('should return an empty array when there are no tmux sessions', async () => {
      mockedPlatform.runCommand.mockResolvedValue({ stdout: '', stderr: '' });
      const agents = await getActiveAgents();
      expect(agents).toEqual([]);
    });

    it('should return an empty array if the tmux command fails', async () => {
      mockedPlatform.runCommand.mockRejectedValue(new Error('tmux failed'));
      const agents = await getActiveAgents();
      expect(agents).toEqual([]);
    });

    it('should correctly calculate agent runtime', async () => {
      jest.useFakeTimers().setSystemTime(new Date('2023-01-01T12:00:00Z'));

      const fiveMinutesAgo = dayjs('2023-01-01T11:55:00Z').unix();
      const stdout = `dev-part123 111 ${fiveMinutesAgo}`;
      mockedPlatform.runCommand.mockResolvedValue({ stdout, stderr: '' });

      const agents = await getActiveAgents();

      expect(agents).toHaveLength(1);
      // dayjs relative time can be "a few seconds", "a minute", etc. so we check for a known value.
      // "5 minutes" is the expected output.
      expect(agents[0].runtime).toBe('5 minutes');

      jest.useRealTimers();
    });
  });
});