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
      // TODO: part-unit-shell-parse-all - Test parsing of various valid tmux session names.
      // INSTRUCTIONS:
      // 1. Define a mock `stdout` string from `tmux ls` containing lines for init, dev, scaffold, and qa agents, plus a non-agent session.
      // 2. Mock `mockedExec` to return this `stdout` string.
      // 3. Call `getActiveAgents()`.
      // 4. Assert that the result array contains the correct number of agents (ignoring the non-agent session).
      // 5. Assert that each agent object has correctly parsed details (phase, planId, etc.).
    });

    it('should ignore session names that are similar to but not valid agent sessions', async () => {
      // TODO: part-unit-shell-parse-similar - Test that tricky but invalid names are ignored.
      // INSTRUCTIONS:
      // 1. Define mock `stdout` with sessions like `init-`, `dev-scaffold-123`, `qa`, `my-init-session`.
      // 2. Mock `mockedExec` to return this stdout.
      // 3. Call `getActiveAgents()`.
      // 4. Assert that the result is an empty array.
    });

    it('should return an empty array when there are no tmux sessions', async () => {
      // TODO: part-unit-shell-parse-empty - Test with empty output from tmux.
      // INSTRUCTIONS:
      // 1. Mock `mockedExec` to return an empty string for `stdout`.
      // 2. Call `getActiveAgents()`.
      // 3. Assert that the result is an empty array.
    });

    it('should return an empty array if the tmux command fails', async () => {
      // TODO: part-unit-shell-parse-fail - Test when the `exec` call fails.
      // INSTRUCTIONS:
      // 1. Mock `mockedExec` to simulate an error (e.g., have the callback pass an Error object).
      // 2. Call `getActiveAgents()`.
      // 3. Assert that the function catches the error and returns an empty array.
    });

    it('should correctly calculate agent runtime', async () => {
      // TODO: part-unit-shell-parse-runtime - Test the relative time calculation.
      // INSTRUCTIONS:
      // 1. Use `jest.spyOn(Date, 'now')` or `jest.useFakeTimers` to control the current time.
      // 2. Create a mock `stdout` with a session activity timestamp that is a known duration in the past (e.g., 5 minutes).
      // 3. Mock `mockedExec` to return this stdout.
      // 4. Call `getActiveAgents()`.
      // 5. Assert that the `runtime` string for the agent is the expected relative time (e.g., "5 minutes").
    });
  });
});