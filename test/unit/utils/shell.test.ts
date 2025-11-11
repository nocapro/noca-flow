import { getActiveAgents } from '../../../src/utils/shell';
import { exec } from 'child_process';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

jest.mock('child_process');
const mockedExec = exec as jest.Mock;
dayjs.extend(relativeTime);

describe('utils/shell', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getActiveAgents', () => {
    // TODO: Test case with `tmux ls` output for various agent types.
    // It should correctly parse init, dev, scaffold, and qa agents.
    // 1. Mock `mockedExec` to return a multi-line string with session names like:
    //    - `init-part1 123 1672531200`
    //    - `dev-part2 456 1672531200`
    //    - `init-scaffold-plan1 789 1672531200`
    //    - `qa-plan2 101 1672531200`
    //    - `non-agent-session 112 1672531200`
    // 2. Call `getActiveAgents()`.
    // 3. Assert the result contains 4 agents.
    // 4. Assert each agent has the correct phase, planId, partId, etc.
    it('should parse all types of agent sessions and ignore non-agent sessions', async () => {});

    // TODO: Test case with `tmux ls` output that is empty.
    // It should return an empty array.
    // 1. Mock `mockedExec` to have a callback that provides an empty string for stdout.
    // 2. Call `getActiveAgents()`.
    // 3. Assert the result is an empty array.
    it('should return an empty array when there are no tmux sessions', async () => {});

    // TODO: Test case where `tmux ls` command fails.
    // It should catch the error and return an empty array.
    // 1. Mock `mockedExec` to have a callback that passes an error as the first argument.
    // 2. Call `getActiveAgents()`.
    // 3. Assert the result is an empty array.
    it('should return an empty array if tmux is not running', async () => {});

    // TODO: Test case to verify runtime calculation.
    // Mocks the current time and session activity timestamp to check the relative time string.
    // 1. Use `jest.spyOn(Date, 'now').mockReturnValue(...)` to freeze the current time.
    // 2. Mock `mockedExec` to return a session with a specific activity timestamp that is, e.g., 5 minutes before the mocked "now".
    // 3. Call `getActiveAgents()`.
    // 4. Assert the `runtime` string is the expected relative time (e.g., "5 minutes").
    // 5. Restore the mock for `Date.now`.
    it('should correctly calculate agent runtime', async () => {});
  });
});