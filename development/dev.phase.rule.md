# Phase Rules: `development`

Work will be rejected by `qa.agent` if any rule is violated.

## 1. Code & Style
- **Linter**: All code MUST pass `npm run lint` with zero errors.
- **Formatter**: All code MUST be formatted with `npm run format`.
- **Dependencies**: New dependencies require a justification comment in the pull request description (handled by `qa.agent` during promotion). Use `npm install --save-exact`.

## 2. Testing
- **Unit Tests**: All new logic (functions, classes, components) MUST have corresponding unit tests.
- **Integration Tests**: New API endpoints or major features MUST have integration tests.
- **Passing**: `npm test` MUST exit with code 0. No failing or skipped tests are permitted.
- **Coverage**: Test coverage must not decrease. Aim for >80% on new code.

## 3. Version Control (`git`)
- **Isolation**: All work MUST be contained within the provided `git worktree`. Do not commit to `main`.
- **Commits**: Use Conventional Commits standard (`feat:`, `fix:`, `chore:`).
- **Atomicity**: A single plan part should result in a single, atomic commit. Do not mix unrelated changes.

## 4. State Management
- **YAML Status**: Update part `status` in the plan YAML to `doing` on start, and `review` on successful completion.
- **Logging**: All shell commands and their outputs MUST be logged to `agent-log/{plan_id}.{part_id}.log`.