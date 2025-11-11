import { exec as execCallback, ExecException } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';

const promisedExec = promisify(execCallback);

// TODO: part-test-util-run-cli - Implement a promisified exec for running the CLI.
// INSTRUCTIONS:
// 1. Create a function `runCli(args: string)` that returns a promise.
// 2. It should execute the compiled CLI from the `dist` folder.
// 3. The command should be `node <path-to-project-root>/dist/cli.js ${args}`.
// 4. It should return an object `{ stdout: string, stderr: string, code: number }`.
// 5. Handle non-zero exit codes gracefully by catching the error from `exec` and extracting details from it.
export const runCli = async (
  args: string,
): Promise<{ stdout: string; stderr: string; code: number }> => {
  throw new Error('Not implemented');
};

// TODO: part-test-util-setup-dir - Implement a test setup utility.
// INSTRUCTIONS:
// 1. Create a function `setupTestDirectory()` that returns a promise resolving to an object.
// 2. The function should create a unique temporary directory using `fs.mkdtemp` in `os.tmpdir()`.
// 3. It should store the original `process.cwd()` and then `process.chdir()` into the new temp directory.
// 4. The returned object should contain `testDir: string` (the path to the temp dir) and `cleanup: () => Promise<void>`.
// 5. The `cleanup` function should `process.chdir()` back to the original directory and remove the temp directory recursively.
export const setupTestDirectory = async (): Promise<{
  testDir: string;
  cleanup: () => Promise<void>;
}> => {
  throw new Error('Not implemented');
};

// TODO: part-test-util-git-init - Implement a utility to initialize a git repository.
// INSTRUCTIONS:
// 1. Create an async function `initGitRepo()`.
// 2. It should execute the necessary `git` commands using `promisedExec`.
// 3. Commands to run:
//    - `git init`
//    - `git config user.email "test@example.com"`
//    - `git config user.name "Test User"`
//    - `git commit --allow-empty -m "Initial commit"`
export const initGitRepo = async (): Promise<void> => {
  throw new Error('Not implemented');
};

// TODO: part-test-util-create-plan - Implement a utility to create a dummy plan file.
// INSTRUCTIONS:
// 1. Create an async function `createDummyPlanFile(phase: 'initialization' | 'development', status: 'todo' | 'doing' | 'done' | 'review' | 'failed', fileName: string)`.
// 2. The function should create the necessary directory structure inside the current test directory.
//    - e.g., `.nocaflow/${phase}/plans/${status}/`
// 3. It should write a minimal, empty YAML file to that path.
//    - e.g., `fs.writeFile(path.join(..., fileName), '# dummy plan')`.
export const createDummyPlanFile = async (
  phase: 'initialization' | 'development',
  status: 'todo' | 'doing' | 'done' | 'review' | 'failed',
  fileName: string,
): Promise<void> => {
  throw new Error('Not implemented');
};