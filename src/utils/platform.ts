import { exec as execCallback, ExecException } from 'child_process';
import { promisify } from 'util';
import * as os from 'os';

const exec = promisify(execCallback);

export interface CommandResult {
  stdout: string;
  stderr: string;
  code: number;
}

export interface Platform {
  runCommand(command: string): Promise<CommandResult>;
  getTmpDir(): string;
  commandExists(command: string): Promise<boolean>;
}

const runCommand = async (command: string): Promise<CommandResult> => {
  try {
    const { stdout, stderr } = await exec(command);
    return { stdout, stderr, code: 0 };
  } catch (error) {
    // exec throws an error for non-zero exit codes.
    // We want to capture stdout/stderr and the code, not crash.
    const err = error as ExecException & { stdout: string; stderr: string };
    return {
      stdout: err.stdout,
      stderr: err.stderr,
      code: err.code ?? 1,
    };
  }
};

const getTmpDir = (): string => {
  // Respect common environment variables for temp directories.
  // This is crucial for environments like Termux.
  return process.env.TMPDIR || process.env.TEMP || process.env.TMP || os.tmpdir();
};

const commandExists = async (command: string): Promise<boolean> => {
  // `command -v` is a POSIX standard way to check for command existence.
  // It has a non-zero exit code if the command is not found.
  const result = await runCommand(`command -v ${command}`);
  return result.code === 0;
};


export const posixPlatform: Platform = {
  runCommand,
  getTmpDir,
  commandExists,
};

// Export a singleton instance for the application to use.
export const platform: Platform = posixPlatform;