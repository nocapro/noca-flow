import { logger } from '../../../src/utils/logger';
import chalk from 'chalk';

describe('unit/utils/logger', () => {
  let stderrSpy: jest.SpyInstance;

  beforeEach(() => {
    // Spy on process.stderr.write and mock its implementation
    stderrSpy = jest.spyOn(process.stderr, 'write').mockImplementation(() => true);
    // Disable chalk colors for consistent snapshot testing
    chalk.level = 0;
  });

  afterEach(() => {
    // Restore the original implementation
    stderrSpy.mockRestore();
    chalk.level = 1; // Or whatever default level you use
    delete process.env.NOCA_DEBUG;
  });

  it('info() should write a formatted green message to stderr', () => {
    logger.info('Test info message');
    expect(stderrSpy).toHaveBeenCalledWith('i Test info message\n');
  });

  it('warn() should write a formatted yellow message to stderr', () => {
    logger.warn('Test warn message');
    expect(stderrSpy).toHaveBeenCalledWith('! Test warn message\n');
  });

  it('error() should write a formatted red message to stderr', () => {
    logger.error('Test error message');
    expect(stderrSpy).toHaveBeenCalledWith('✗ Test error message\n');
  });

  it('debug() should not write if NOCA_DEBUG is not set', () => {
    logger.debug('Test debug message');
    expect(stderrSpy).not.toHaveBeenCalled();
  });

  it('debug() should write a formatted gray message if NOCA_DEBUG is set', () => {
    process.env.NOCA_DEBUG = '1';
    logger.debug('Test debug message');
    expect(stderrSpy).toHaveBeenCalledWith('d Test debug message\n');
  });

  it('should handle multiple arguments', () => {
    logger.error('Error code:', 500, 'message:', 'Internal Server Error');
    expect(stderrSpy).toHaveBeenCalledWith('✗ Error code: 500 message: Internal Server Error\n');
  });
});