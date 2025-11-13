import chalk from 'chalk';

const write = (message: string): void => {
  // We write to stderr to separate diagnostic logs from program output (stdout).
  process.stderr.write(message + '\n');
};

const info = (...args: unknown[]): void => {
  const message = args.map(String).join(' ');
  write(chalk.green('i ') + message);
};

const warn = (...args: unknown[]): void => {
  const message = args.map(String).join(' ');
  write(chalk.yellow('! ') + message);
};

const error = (...args: unknown[]): void => {
  const message = args.map(String).join(' ');
  write(chalk.red('✗ ') + message);
};

const debug = (...args: unknown[]): void => {
  if (process.env.NOCA_DEBUG) {
    const message = args.map(String).join(' ');
    write(chalk.gray('d ') + message);
  }
};

export const logger = {
  info,
  warn,
  error,
  debug,
};