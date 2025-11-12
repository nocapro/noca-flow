import { exec as execCallback, ExecException } from 'child_process';
import { promisify } from 'util';
import os from 'os';

const exec = promisify(execCallback);

export interface CommandResult {
  stdout: string;
  stderr: string;
}

export interface Platform {
  runCommand(command: string): Promise<CommandResult>;
  getTmpDir(): string;
}

const runCommand = async (command: string): Promise<CommandResult> => {
  try {
    const { stdout, stderr } = await exec(command);
    return { stdout, stderr };
  } catch (error) {
    // exec throws an error for non-zero exit codes.
    // We want to capture stdout/stderr and the code, not crash.
    const err = error as ExecException & CommandResult;
    return {
      stdout: err.stdout,
      stderr: err.stderr,
    };
  }
};

const getTmpDir = (): string => {
  // Respect common environment variables for temp directories.
  // This is crucial for environments like Termux.
  return process.env.TMPDIR || process.env.TEMP || process.env.TMP || os.tmpdir();
};


export const posixPlatform: Platform = {
  runCommand,
  getTmpDir,
};

// Export a singleton instance for the application to use.
export const platform: Platform = posixPlatform;