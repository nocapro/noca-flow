import { getPhaseStats, getFailedReports, readPlan } from '../../../src/utils/fs';
import { setupTestDirectory } from '../../test.util';
import fs from 'fs/promises';
import path from 'path';

describe('unit/utils/fs', () => {
  let cleanup: () => Promise<void>;

  beforeEach(async () => {
    const { cleanup: c } = await setupTestDirectory();
    cleanup = c;
  });

  afterEach(async () => {
    await cleanup();
  });

  describe('getPhaseStats', () => {
      it('should correctly count plans across different statuses and phases', async () => {
        await fs.mkdir('.nocaflow/initialization/plans/todo', { recursive: true });
        await fs.mkdir('.nocaflow/initialization/plans/doing', { recursive: true });
        await fs.mkdir('.nocaflow/development/plans/done', { recursive: true });

        await fs.writeFile('.nocaflow/initialization/plans/todo/11aa22.plan.yml', '');
        await fs.writeFile('.nocaflow/initialization/plans/todo/33bb44.plan.yml', '');
        await fs.writeFile('.nocaflow/initialization/plans/doing/55cc66.plan.yml', '');
        await fs.writeFile('.nocaflow/development/plans/done/77dd88.plan.yml', '');

        const stats = await getPhaseStats();

        expect(stats.initialization.todo).toBe(2);
        expect(stats.initialization.doing).toBe(1);
        expect(stats.initialization.done).toBe(0);
        expect(stats.initialization.total).toBe(3);

        expect(stats.development.done).toBe(1);
        expect(stats.development.total).toBe(1);
      });

      it('should return all zeros for an empty directory structure', async () => {
        await fs.mkdir('.nocaflow/initialization/plans', { recursive: true });
        await fs.mkdir('.nocaflow/development/plans', { recursive: true });

        const stats = await getPhaseStats();

        expect(stats.initialization.total).toBe(0);
        expect(stats.development.total).toBe(0);
      });

      it('should handle missing status subdirectories gracefully', async () => {
        await fs.mkdir('.nocaflow/initialization/plans/todo', { recursive: true });
        await fs.writeFile('.nocaflow/initialization/plans/todo/99ee00.plan.yml', '');

        const stats = await getPhaseStats();

        expect(stats.initialization.todo).toBe(1);
        expect(stats.initialization.doing).toBe(0);
        expect(stats.initialization.done).toBe(0);
        expect(stats.initialization.total).toBe(1);
      });

      it('should handle a missing phase directory gracefully', async () => {
        await fs.mkdir('.nocaflow/initialization/plans/todo', { recursive: true });
        await fs.writeFile('.nocaflow/initialization/plans/todo/aabbcc.plan.yml', '');

        const stats = await getPhaseStats();

        expect(stats.initialization.total).toBe(1);
        expect(stats.development.total).toBe(0);
      });

      it('should ignore non-YAML files', async () => {
        await fs.mkdir('.nocaflow/development/plans/todo', { recursive: true });
        await fs.writeFile('.nocaflow/development/plans/todo/ddee00.plan.yml', '');
        await fs.writeFile('.nocaflow/development/plans/todo/notes.txt', '');

        const stats = await getPhaseStats();

        expect(stats.development.todo).toBe(1);
        expect(stats.development.total).toBe(1);
      });
    });

    describe('getFailedReports', () => {
      it('should only return reports within the lookback period', async () => {
        const reportDir = '.nocaflow/initialization/plans/failed/report';
        await fs.mkdir(reportDir, { recursive: true });

        const recentReportPath = path.join(reportDir, 'a1b2c3.d4e5f6.report.md');
        const oldReportPath = path.join(reportDir, 'g7h8i9.j0k1l2.report.md');
        await fs.writeFile(recentReportPath, '## Summary\n\nRecent failure.');
        await fs.writeFile(oldReportPath, '## Summary\n\nOld failure.');

        const twoDaysAgo = new Date();
        twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
        await fs.utimes(oldReportPath, twoDaysAgo, twoDaysAgo);

        const reports = await getFailedReports(24);

        expect(reports).toHaveLength(1);
        expect(reports[0].planId).toBe('a1b2c3');
      });

      it('should correctly parse report details from filename and content', async () => {
        const reportDir = '.nocaflow/development/plans/failed/report';
        await fs.mkdir(reportDir, { recursive: true });
        const reportPath = path.join(reportDir, 'b2c3d4.e5f6a7.report.md');
        await fs.writeFile(reportPath, '## Summary\n\nThis is the reason.');

        const reports = await getFailedReports(1);

        expect(reports).toHaveLength(1);
        expect(reports[0].planId).toBe('b2c3d4');
        expect(reports[0].partId).toBe('e5f6a7');
        expect(reports[0].reason).toBe('This is the reason.');
        expect(reports[0].reportPath).toBe(reportPath);
      });

      it('should handle report files with no summary section', async () => {
        const reportDir = '.nocaflow/initialization/plans/failed/report';
        await fs.mkdir(reportDir, { recursive: true });
        const reportPath = path.join(reportDir, 'c3d4e5.f6a7b8.report.md');
        await fs.writeFile(reportPath, 'Some content without a summary header.');

        const reports = await getFailedReports(1);

        expect(reports).toHaveLength(1);
        expect(reports[0].reason).toBe('Could not parse summary.');
      });

      it('should return an empty array if the report directory does not exist', async () => {
        const reports = await getFailedReports(24);
        expect(reports).toEqual([]);
      });

      it('should gracefully handle malformed report filenames', async () => {
        const reportDir = '.nocaflow/development/plans/failed/report';
        await fs.mkdir(reportDir, { recursive: true });
        const reportPath = path.join(reportDir, 'malformed.report.md');
        await fs.writeFile(reportPath, '## Summary\n\nReason.');

        const reports = await getFailedReports(1);

        expect(reports).toHaveLength(1);
        expect(reports[0].planId).toBe('malformed');
        expect(reports[0].partId).toBeUndefined();
      });

      it('should ignore non-markdown report files', async () => {
        const reportDir = '.nocaflow/initialization/plans/failed/report';
        await fs.mkdir(reportDir, { recursive: true });
        await fs.writeFile(path.join(reportDir, 'd4e5f6.a7b8c9.report.md'), '## Summary\n\nReport');
        await fs.writeFile(path.join(reportDir, 'notes.txt'), 'some notes');

        const reports = await getFailedReports(1);
        expect(reports).toHaveLength(1);
        expect(reports[0].planId).toBe('d4e5f6');
      });
    });

    describe('readPlan', () => {
      it('should parse a valid plan file', async () => {
        const planContent = `
  plan:
    id: 'test-plan'
    status: 'todo'
    title: 'Test Plan'
    introduction: 'Intro'
    parts: []
    conclusion: 'Conclusion'
    context_files: { compact: [], medium: [], extended: [] }
  `;
        await fs.writeFile('plan.yml', planContent);
        const plan = await readPlan('plan.yml');
        expect(plan.plan.id).toBe('test-plan');
        expect(plan.plan.title).toBe('Test Plan');
      });

      it('should throw an error for a non-existent file', async () => {
        await expect(readPlan('non-existent-plan.yml')).rejects.toThrow();
      });

      it('should throw an error for invalid YAML', async () => {
        await fs.writeFile('bad-plan.yml', 'key: [a, b,');
        await expect(readPlan('bad-plan.yml')).rejects.toThrow();
      });
  });
});