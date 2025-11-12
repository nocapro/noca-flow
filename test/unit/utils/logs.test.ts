import { getRecentLogs } from '../../../src/utils/logs';
import { setupTestDirectory } from '../../test.util';
import fs from 'fs/promises';
import path from 'path';

describe('unit/utils/logs', () => {
  let cleanup: () => Promise<void>;

  beforeEach(async () => {
    const { cleanup: c } = await setupTestDirectory();
    cleanup = c;
  });

  afterEach(async () => {
    await cleanup();
  });

  it('should aggregate logs from all phase directories', async () => {
    const initLogDir = '.nocaflow/initialization/agent-log';
    const devLogDir = '.nocaflow/development/agent-log';
    await fs.mkdir(initLogDir, { recursive: true });
    await fs.mkdir(devLogDir, { recursive: true });

    const log1 = `2023-01-01T10:00:00.000Z [DONE|INIT|agent1] plan:planA - Init log`;
    const log2 = `2023-01-01T11:00:00.000Z [INFO|DEV|agent2] plan:planB - Dev log`;
    await fs.writeFile(path.join(initLogDir, 'init.log'), log1);
    await fs.writeFile(path.join(devLogDir, 'dev.log'), log2);

    const logs = await getRecentLogs(10);
    expect(logs).toHaveLength(2);
    expect(logs.some(l => l.message === 'Init log')).toBe(true);
    expect(logs.some(l => l.message === 'Dev log')).toBe(true);
  });

  it('should return the correct number of recent, sorted log entries', async () => {
    const logDir = '.nocaflow/initialization/agent-log';
    await fs.mkdir(logDir, { recursive: true });
    const logContent = [
      `2023-01-01T10:00:00.000Z [DONE|INIT|a] plan:p1 - msg1`,
      `2023-01-01T12:00:00.000Z [DONE|INIT|b] plan:p2 - msg3`,
      `2023-01-01T11:00:00.000Z [DONE|INIT|c] plan:p3 - msg2`,
      `2023-01-01T14:00:00.000Z [DONE|INIT|d] plan:p4 - msg5`,
      `2023-01-01T13:00:00.000Z [DONE|INIT|e] plan:p5 - msg4`,
    ].join('\n');
    await fs.writeFile(path.join(logDir, 'test.log'), logContent);

    const logs = await getRecentLogs(3);
    expect(logs).toHaveLength(3);
    expect(logs[0].message).toBe('msg5');
    expect(logs[1].message).toBe('msg4');
    expect(logs[2].message).toBe('msg3');
  });

  it('should correctly parse valid log lines and skip invalid ones', async () => {
    const logDir = '.nocaflow/initialization/agent-log';
    await fs.mkdir(logDir, { recursive: true });
    const logContent = [
      `2023-01-01T10:00:00.000Z [DONE|INIT|agent1] plan:planA - Valid message`,
      `This is a malformed line`,
      `2023-01-01T11:00:00.000Z [FAIL|QA|qa-agent] plan:planB - Another valid one`,
      `[FAIL|QA|qa-agent] plan:planB - Missing timestamp`,
    ].join('\n');
    await fs.writeFile(path.join(logDir, 'mixed.log'), logContent);

    const logs = await getRecentLogs(10);
    expect(logs).toHaveLength(2);
    expect(logs[0].message).toBe('Another valid one');
    expect(logs[1].message).toBe('Valid message');
  });

  it('should correctly parse log lines with varied content', async () => {
    const logDir = '.nocaflow/development/agent-log';
    await fs.mkdir(logDir, { recursive: true });
    const logContent = `2023-01-01T10:00:00.000Z [INFO|DEV|agent-with-dashes_123] plan:plan.id.with.dots - Message with | and other chars`;
    await fs.writeFile(path.join(logDir, 'varied.log'), logContent);

    const logs = await getRecentLogs(1);
    expect(logs).toHaveLength(1);
    expect(logs[0].agentId).toBe('agent-with-dashes_123');
    expect(logs[0].planId).toBe('plan.id.with.dots');
    expect(logs[0].message).toBe('Message with | and other chars');
  });

  it('should handle empty log files gracefully', async () => {
    const logDir = '.nocaflow/initialization/agent-log';
    await fs.mkdir(logDir, { recursive: true });
    await fs.writeFile(path.join(logDir, 'empty.log'), '');

    const logs = await getRecentLogs(5);
    expect(logs).toEqual([]);
  });

  it('should return an empty array if log directories are missing', async () => {
    const logs = await getRecentLogs(5);
    expect(logs).toEqual([]);
  });

  it('should ignore files that do not end with .log', async () => {
    const logDir = '.nocaflow/initialization/agent-log';
    await fs.mkdir(logDir, { recursive: true });
    const logContent = `2023-01-01T10:00:00.000Z [DONE|INIT|agent1] plan:planA - Real log`;
    const bakContent = `2023-01-01T11:00:00.000Z [DONE|INIT|agent2] plan:planB - Backup log`;
    await fs.writeFile(path.join(logDir, 'agent.log'), logContent);
    await fs.writeFile(path.join(logDir, 'agent.log.bak'), bakContent);

    const logs = await getRecentLogs(5);
    expect(logs).toHaveLength(1);
    expect(logs[0].message).toBe('Real log');
  });
});