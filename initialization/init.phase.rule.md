# Phase Rules: `initialization`

Work is rejected by `qa.agent` for any violation.

## 1. Code & Style
- **Toolchain**: `bun.sh` runtime and test runner. Non-negotiable.
- **Style**: No OOP. Functional composition and HOFs only.
- **Types**: `any` and `unknown` are forbidden. Fail build.
- **Lint**: `npm run lint` must exit 0.
- **Format**: `npm run format` must be applied before commit.

## 2. Testing
- **Structure**: Tests located in `[e2e|integration|unit]/[domain].test.ts`.
- **Execution**: `bun test` must pass. No skipped tests.
- **Mocks**: External network APIs only. Mocking internal logic is an anti-pattern.

## 3. Version Control (`git`)
- **Commits**: Conventional Commits standard.
- **Atomicity**: One commit resolves one `TODO` block. No bundled changes.

## 4. State & Blueprint
- **Work Unit**: The spec is the multi-line `INSTRUCTIONS` inside the `/** TODO: ... */` block.
- **Completion**: Task is complete *only when* the source `TODO` block is deleted and tests pass.
- **Logging**: All shell command output (stdout/stderr) logged to `agent-log/{plan_id}.{part_id}.log`.


