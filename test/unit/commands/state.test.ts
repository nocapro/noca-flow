import { renderProgressBar } from '../../../src/commands/state';

describe('unit/commands/state', () => {
  describe('renderProgressBar', () => {
    it('should render an empty bar for 0% progress', () => {
      const result = renderProgressBar(0, 10, 10);
      expect(result).toBe('[----------] (0/10 plans done)');
    });

    it('should render a half-filled bar for 50% progress', () => {
      const result = renderProgressBar(5, 10, 10);
      expect(result).toBe('[▇▇▇▇▇-----] (5/10 plans done)');
    });

    it('should render a full bar for 100% progress', () => {
      const result = renderProgressBar(10, 10, 10);
      expect(result).toBe('[▇▇▇▇▇▇▇▇▇▇] (10/10 plans done)');
    });

    it('should handle different bar lengths', () => {
      const result = renderProgressBar(1, 2, 20);
      // 50% of 20 is 10 filled characters
      const bar = result.substring(result.indexOf('[') + 1, result.indexOf(']'));
      expect(bar).toHaveLength(20);
      expect(bar).toBe('▇'.repeat(10) + '-'.repeat(10));
    });

    it('should round to the nearest character for fractional progress', () => {
      // 1/3 of 10 is 3.33, which should round to 3
      const result1 = renderProgressBar(1, 3, 10);
      expect(result1).toContain('[▇▇▇-------]');

      // 2/3 of 10 is 6.66, which should round to 7
      const result2 = renderProgressBar(2, 3, 10);
      expect(result2).toContain('[▇▇▇▇▇▇▇---]');
    });

    it('should handle a total of 0 gracefully', () => {
      const result = renderProgressBar(0, 0, 10);
      expect(result).toBe('[----------] (0/0 plans done)');
    });
  });
});