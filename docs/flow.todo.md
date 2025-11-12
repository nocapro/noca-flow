

fix eslint problems


===

implement multi env compability. don't forget termux env

===


Implement eslint




=== DONE 

Lets make codebase production ready by implementing embeeded blueprint todos/placeholders/mock etc, the only quality is test cases compliance and aligned with specs

=== DONE

Lets make codebase production ready by implementing embeeded blueprint todos, the only quality is passing tests and aligned with specs

=== DONE

create new branch, implement development phase

=== DONE

you are on the goal of finishing the nocaflow of readme.md project, lets blueprinting by adding more coverage test cases in test/ test/unit test/e2e test/integration while also eliminating redundancies

```
- no MOCK, no spy
- real implementation
- each cases isolated and idempotent, clean tmp files and dirs
- real command Run
- test.util.ts to be used by test files
```

blueprinting: each files should contain only concise // TODO: comments, type signatures, and detailed import statements to serve as a "cheatsheet" for the next AI developer.

again, do not write complete code per todo, only cheatsheet with method name, params, return type.

=== DONE

you are on the goal of finishing the nocaflow of readme.md project, lets blueprinting existing test cases should be;
```
- no MOCK, no spy
- real implementation
- each cases isolated and idempotent, clean tmp files and dirs
- real command Run
- test.util.ts to be used by test files
```
blueprinting: each files should contain only concise // TODO: comments, type signatures, and detailed import statements to serve as a "cheatsheet" for the next AI developer.

again, do not write complete code per todo, only cheatsheet with method name, params, return type.

=== DONE

you are on the goal of finishing the nocaflow of readme.md project, lets blueprinting by adding more coverage test cases in test/ test/unit test/e2e test/integration

blueprinting: each files should contain only concise // TODO: comments, type signatures, and detailed import statements to serve as a "cheatsheet" for the next AI developer.

again, do not write complete code per todo, only cheatsheet with method name, params, return type.

=== DONE

you are on the goal of finishing the nocaflow of readme.md project, lets blueprinting the test cases in test/ test/unit test/e2e test/integration

blueprinting: each files should contain only concise // TODO: comments, type signatures, and detailed import statements to serve as a "cheatsheet" for the next AI developer.

again, do not write complete code per todo, only cheatsheet with method name, params, return type.


===

09d93616-d3a9-4679-b1d6-44b4c207fc19 applied. continue aligment blueprinting!

=== DONE

you are on the goal of finishing the nocaflow of readme.md project, now Deepen alignment with agent protocols and lifecycle

keep blueprinting: each files should contain only concise // TODO: comments, type signatures, and detailed import statements to serve as a "cheatsheet" for the next AI developer.

again, do not write complete code per todo, only cheatsheet with method name, params, return type.

=== DONE

Deepen alignment with agent protocols and lifecycle

keep blueprinting: each files should contain only concise // TODO: comments, type signatures, and detailed import statements to serve as a "cheatsheet" for the next AI developer.

again. to save your token cost , do not write complete code per todo, only cheatsheet like method name, params, return type.

=== DONE

applied, but I still believe many things not aligned with below additional context

=== DONE


understand everything especially the readme, then initialize the npm nocaflow project by prepare detailed boilerplate across structure to create nocaflow state with exatc output like in readme.md nocaflow state bash. each files should contain only concise // TODO: comments, type signatures, and detailed import statements to serve as a "cheatsheet" for the next AI developer.

again. to save your token cost , do not write complete code per todo, only cheatsheet like method name, params, return type.

all should HOF no OOP

do not generate what are already exist

huawei@huawei:~/project/code/noca-flow$ ls
development       plan.agent.md      repomix.config.json
docs              qa.agent.md        suffix.global.prompt.md
initialization    README.md
manager.agent.md  relay.config.json
huawei@huawei:~/project/code/noca-flow$ ls initialization
init.agent-swarm.md  init.phase.rule.md  scaffolder.agent.md
huawei@huawei:~/project/code/noca-flow$ ls development
dev.agent-swarm.md  dev.phase.rule.md
huawei@huawei:~/project/code/noca-flow$

=====
start programming

=== DONE

- in init, phase qa should make sure that all blueprint todos and structure across codebase is sufficient to make app production ready after done by worker, also comply with user specs.

- in dev phase, qa should make sure no technical debt like DRYless, bandaids etc.

=== DONE

should give path .nocaflow/ when mentioning files/dirs because .nocaflow will inside the user project root

=== DONE

add last agents activites in nocaflow state bash output

=== DONE

**Concurrency**: 3–5 swarm agents (min 3, max 5). Give me diff patches of manager.agent.md  So manage agent task is also  to maintain the pace . Just simple edit.

=== DONE

Make the qa.agent.md understand what to do in init or dev phase situation ... Give me the diff patches

=== DONE

all repeated should be in suffix.global.prompt.md

=== DONE

project structure in readme.md needs to mention all mds files

=== DONE

Yaml example in readme.md should be in correct format/shape as in plan.agent.md like all ids should be 6 random digit and has agent_id on parts

=== DONE

update readme.md

- mention scaffolder.agent.md in ## Actors
- no worker.agent, only init.agent-swarms.md and dev.agent-swarms.md
- ## State Representation (YAML) should be follow the format on plan.agent.md

update plan.agent.md
plan.agent should phase aware about when and how to produce plan for initialization concern vs development concern


also need depends_on for parts in plan.



update all agent.md:
- should explicit mention to short concise report in agent_log/


update qa.agent.md

- should not isolated git worktree
- should has step to understand user project specs. sometimes user specs located in docs
- main goal is to align implementation with user specs and expectations


===

nocaflow state | nocaflow agent.plan


=== DONE


init phase cycle

1. scaffolder agent output is whole codebase blueprint analysed from a all parts of plan.yml
2. manager.agent spawn worker.agent swarms to execute blindly all blueprint todos across codebase
3. worker.agent swarms only execute the todo instructions steps with unit tests cases until greens no lint problems
4. qa.agent review for worker.agent work
5. manager.agent spawn another worker.agent for unpass qa.agent work

when there is no blueprint todo in codebase, and qa says advance, then phase development starts

___

1. scaffolder.agent execute whole single plan not individual part
scaffolder.agent execute whole single plan not individual part
2. // todo should multiline detailed instructions steps because the worker is less intelligence

=== DONE

please create plan.agent.md in keyword based hacker news netizen language style,,,

I was using below prompt in legacy system. for your reference.


legacy.plan.agent.md


``` markdown
you are master architect for complex refactor code. use hacker news language style. your plan will be used by another intelligence for generating code patches. after you create the plan , reshape the plan in below yaml format ;

#  context_files: identify which files that has relevant context to be included to another llm for the given scope(plan/parts) intention. to prevent hallucination from llm

 compact: # affected files on the scope of parts steps, or plan
 medium: # affected files + additional context
 extended: # affected files + additional context + more extended

```yaml
plan:
  uuid: 'generate-random-regular-uuid'
  status: 'todo'  # Must be one of: todo, doing, done, cancel
  title: 'A short, descriptive title for the master plan'
  introduction: |
    A multi-line introduction paragraph explaining the overall goal and high-level approach. Keep it 2-4 paragraphs.
  parts:
    - uuid: 'generate-random-regular-uuid'
      status: 'todo'
      name: 'Part 1: Descriptive Name'
      reason: |
        A multi-line reason why this part is needed.
      steps:
        - uuid: 'generate-random-regular-uuid'
          status: 'todo'
          name: 'Step Name (e.g., 1. Action Description)'
          reason: |
            A multi-line reason for this step.
          files:
            - file1.ext
            - file2.ext
          operations:
            - 'Bullet-point style operation 1: Describe the change clearly.'
            - 'Bullet-point style operation 2: Use single quotes for code snippets like `functionName()`.'
        - uuid: 'generate-random-regular-uuid'
          status: 'todo'
          name: 'Another Step Name'
          reason: |
            Reason here.
          files: []
          operations:
            - 'Operation description.'
      context_files:
        compact:
          - file1.ext
        medium:
          - file1.ext
          - file2.ext
        extended:
          - file1.ext
          - file2.ext
          - file3.ext
    - uuid: 'generate-random-regular-uuid'
      status: 'todo'
      name: 'Part 2: Another Descriptive Name'
      reason: |
        Reason for the part.
      steps:
        # Similar structure as above, with uuid and status for each step
      context_files:
        compact:
          - file1.ext
        medium:
          - file1.ext
        extended:
          - file1.ext
          - file2.ext
  conclusion: |
    A multi-line conclusion summarizing benefits and impact.
  context_files:
    compact: # affected files
      - file1.ext
    medium: # affected files + additional context
      - file1.ext
      - file2.ext
    extended: # affected files + additional context + more extended context
      - file1.ext
      - file2.ext
      - file3.ext
```

```


=== DONE

qa in dev phase should also align implementation with spec
qa in init phase should do the same

=== DONE

at initialization, it ask user which coding agent wether claude code or droid, because they have diff commmand to spawn.
also ask concurrency limit

====≠=======

Give me scaffolder.agent.md, init.agent-swarm.md and init.phase.rule.md

And this is the most interesting part of init phase than dev phase is iterative codebase building simulating text diffusion.

So the task for manager is iteratively spawn worker.agent with task of iterative coding from Todo to complete production ready for the next phase . And worker.agent works blindly only finish the Todo instructions without care about else

Below is my legacy user prompt I use


===== Prompt for scaffolding

understand everything in docs, then initialize the project by prepare detailed boilerplate across structure. each files should contain only concise // TODO: comments, type signatures, and detailed import statements to serve as a "cheatsheet" for the next AI developer.

again. to save your token cost , do not write complete code per todo, only cheatsheet like method name, params, return type.

all should HOF no OOP

=== Another followup usage . Sorted by newest

=== DONE

before asking next AI developer to finish the todo blueprint ,

need blueprint for ;

proper openroute cheatsheet based on npm readme
dedicated retry mechanism
now do the blueprint for those. again. blueprint concept is to save your token cost , do not write complete code per todo, only cheatsheet with // TODO: comments , method name, params, return type. all for the next AI developer to implement.
=== DONE

before asking next AI developer to finish the todo blueprint ,

need blueprint for ;

dedicated multi-level logging.
comprehensive test cases.
now do the blueprint for those. again. blueprint concept is to save your token cost , do not write complete code per todo, only cheatsheet with // TODO: comments , method name, params, return type. all for the next AI developer to implement.
=== DONE

before asking next AI developer to finish the todo blueprint , lets once again make sure the todo blueprint producing radical DRYness codebase

again. blueprint concept is to save your token cost , do not write complete code per todo, only cheatsheet with // TODO: comments, method name, params, return type. all for the next AI developer to implement.

=== DONE

before asking next AI developer to finish the todo blueprint , lets once again understand everything in docs , then make sure the current todo blueprint is enough for producing plan that met expectations in docs, not by hardcoding complete working code, but by "cheatsheet-ing" .

again. blueprint concept is to save your token cost , do not write complete code per todo, only cheatsheet with method name, params, return type. all for the next AI developer to implement

________

codebase compliance rules;

1. No OOP, only HOFs
2. Use bun.sh and e2e type safe TypeScript
3. No unknown or any type
4. [e2e|integration|unit]/[domain].test.ts files & dirs
5. Bun tests, isolated tests with minimal mocking. External network services (e.g., LLM APIs) should be mocked to ensure tests are fast, deterministic, and independent of network or API key issues.
6. DRY

===========


Give me concise manager.agent.md in keyword based hackernews language style

Keypoints;

1. Can run 'nocaflow state'. Can see bash output
2. Use the same droid command
3. Can use tmux capture pane

And below is legacy version of how I use the agent... So consolidate important part

Legacy prompt.md

``` markdown
# AgentSpawner

**Mission**: Ship the project. Loop forever: Plan → Execute → Ship.

## Spawn Policy

- `git worktree` only when concurrent edits collide; else in-place.
- After merge:
  ```bash
  git worktree remove worktrees/$JOB_ID --force
  git branch -D $JOB_ID
  ```
- Never halt; always ticking.

## 1. Plan

- **Bootstrap**: If `tasks.md` missing, scan `docs/*.md`, list every TODO as a task with unique ID and empty `job-id`.
- **Prioritize**: Read `tasks.md`; respect `depends-on: id`, else parallel.
- **Finalize**: Append audit task that `depends-on: [all-other-ids]`.

## 2. Execute

**Concurrency**: 3–5 agents (min 3, max 5).

**Spawn ready task**:

1. `export JOB_ID="job-$(uuidgen | cut -d- -f1)"`
2. In `tasks.md` set `job-id: $JOB_ID`, status `CLAIMED`.
3. If collision risk:
   ```bash
   git worktree add worktrees/$JOB_ID -b $JOB_ID
   tmux new-session -d -s $JOB_ID \
     "cd worktrees/$JOB_ID && droid exec --skip-permissions-unsafe --output-format debug \
     'Read docs/*.md; accomplish \"$TASK_TEXT\"; replace every TODO/MOCK/PLACEHOLDER with production-ready code; commit; exit 0 when done.'"
   ```
   Else same command without worktree.

**Manage (15 s loop)**:

1. Detect finished tmux; mark `DONE`/`FAILED` via `job-id`.
2. `tmux capture-pane -t $SESSION -p` to watch real work.
3. Fail/idle >20 min → mark `FAILED`, kill, clean worktree & branch, retry once.
4. Keep 3–5 agents alive; spawn while ready tasks exist.
5. When audit ready (all `DONE`), spawn multiple non isolated:
   ```bash
   droid exec --skip-permissions-unsafe --output-format debug "
   1. Merge every job-* branch.
   2. Lint & auto-fix entire codebase.
   3. Run full test suite → 100 % pass.
   4. Commit 'chore: final audit & lint'.
   5. Print single line: SUCCESS or FAIL"
   ```

## 3. Ship

- **Trigger**: Audit `DONE`; capture its last stdout.
- **SUCCESS**:
  - Fast-forward audit → main
  - Delete all job-\* branches & worktrees
  - Tag `main` `v1.0-shipped`
  - Print `MISSION COMPLETE` and exit.
- **FAIL**: Print failed checks, await instructions.
```




===

lets assume that this project is bundled as npm package so user can easily plug and play, also to install noca flow state global cli program, even we dont need state.sh because agent can just run nocaflow state , ... now update readme

===

every failed part should has corresponding report files generated by qa agent

===
add super granular stats on state
sh output like how many and where on review, on in review, failed, open etc

====

well you seems smart, then give me comprehensive readme.md in your own version in concise language style

1.  I think there should be bash script that can be run for output by manager agent to see current state like;
a. sessions,
b. how many agents working,
c. on what parts,
d. output screen capture of tmux sessions,
e. also aggregation data like total open task , worktrees, etc
f. git commits.
2. also we need QA Agent

===

give me manager.agent.md in hacker news netizen language style in keyword based conciseness









# Noca-Task is doc focused workflow for anti-context-rot LLM Agents parallel-collaboration in the most efficient token context windows. this way;

1. sub-agents never loose context by living and breathing in a strict structure.
2. manager agent can delegate easily by mentioning paths, files and ids.
3. all coms so concise using hacker news netizen language style.
4. tmux based spawning
5. git worktree when the plan parts says isolation: true
6. 6 digits ids

# Strict Structure and naming conventions

noca-task/
├── initialization/         # Phase: Boilerplate blueprint with content of only todo list comments and imports statement.
│   ├── agent-log/          # plan execution logs generated by init.agent-swarms.md
│   │   ├── 463462.log.md
│   │   └── 823523.log.md
│   ├── plan/                               # kanban yml position managed by individual init.agent-swarms.md
│   │   ├── todo/                           # yml files in todo generated by noca.agent.md using plan.prompt.md
│   │   │   ├── 463462.todo.plan.yml
│   │   │   └── 674345.todo.plan.yml
│   │   ├── doing/
│   │   │   └── 734567.doing.plan.yml
│   │   ├── review/               # files will be processed by manager.agent.md that can also spawn init.agent-swarms.md
│   │   │   ├── 463462.todo.plan.yml
│   │   │   └── 356446.review.plan.yml
│   │   ├── in-review/            # claimed lock by manager.agents.md that can also spawn another init.agent-swarms.md
│   │   │   ├── 646344.todo.plan.yml
│   │   ├── done/
│   │   │   └── 553464.done.plan.yml
│   │   └── failed/
│   │       └── 745463.failed.plan.yml
│   ├── init.agent-swarms.md                # Execute yml plan/ files while also self-manage plan/ files and agent-log
│   └── init.phase.rule.md                  # should be no isolation in this phase
├── development/            # Phase: when all yml plan/ in initialization/ are done/. then this active development for production-ready codebase, green test and zero linting problems
│   ├── agent-log/          # plan execution logs generated by dev.agent-swarms.md
│   │   ├── 4534667.log.md
│   │   └── 3646544.log.md
│   ├── plan/                               # kanban yml position managed by individual dev.agent-swarms.md
│   │   ├── todo/                           # yml files in todo generated by noca.agent.md using plan.prompt.md
│   │   │   ├── 3646544.todo.plan.yml
│   │   │   └── 4534667.todo.plan.yml
│   │   ├── doing/
│   │   │   └── 2145365.doing.plan.yml
│   │   ├── review/               # files will be processed by manager.agents.md that can also spawn dev.agent-swarms.md
│   │   │   ├── 8797645.todo.plan.yml
│   │   │   └── 2345357.review.plan.yml
│   │   ├── in-review/            # claimed lock by manager.agents.md that can also spawn another init.agent-swarms.md
│   │   │   ├── 4634623.todo.plan.yml
│   │   ├── done/
│   │   │   └── 4574743.done.plan.yml
│   │   └── failed/
│   │       └── 4567454.failed.plan.yml
│   ├── dev.agent-swarms.md                # Execute yml plan/ files while also self-manage plan/ files and agent-log
│   └── dev.phase.rule.md                  # should be no isolation in this phase
├── plan.agents.md                          # Focus on generating plan/ yml todo files based on user input using plan.prompt.md
├── plan.prompt.md
├── manager.agents.md                       #
├── manager.prompt.md
└──

file examples ===

plan.prompt.md

```markdown

you are master architect for complex refactor code. use hacker news language style. your plan will be used by another intelligence for generating code patches. after you create the plan , reshape the plan in below yaml format ;

#  context_files: identify which files that has relevant context to be included to another llm for the given scope(plan/parts) intention. to prevent hallucination from llm. also include upcoming newly created files

 compact: # affected files on the scope of parts steps, or plan
 medium: # affected files + additional context
 extended: # affected files + additional context + more extended

  ```yaml
  plan:
    uuid: 'generate-random-regular-uuid'
    status: 'todo'  # Must be one of: todo, doing, done, cancel
    title: 'A short, descriptive title for the master plan'
    introduction: |
      A multi-line introduction paragraph explaining the overall goal and high-level approach. Keep it 2-4 paragraphs.
    parts:
      - uuid: 'generate-random-regular-uuid'
        status: 'todo'
        name: 'Part 1: Descriptive Name'
        reason: |
          A multi-line reason why this part is needed.
        steps:
          - uuid: 'generate-random-regular-uuid'
            status: 'todo'
            name: 'Step Name (e.g., 1. Action Description)'
            reason: |
              A multi-line reason for this step.
            files:
              - file1.ext
              - file2.ext
            operations:
              - 'Bullet-point style operation 1: Describe the change clearly.'
              - 'Bullet-point style operation 2: Use single quotes for code snippets like `functionName()`.'
          - uuid: 'generate-random-regular-uuid'
            status: 'todo'
            name: 'Another Step Name'
            reason: |
              Reason here.
            files: []
            operations:
              - 'Operation description.'
        context_files:
          compact:
            - file1.ext
          medium:
            - file1.ext
            - file2.ext
          extended:
            - file1.ext
            - file2.ext
            - file3.ext
      - uuid: 'generate-random-regular-uuid'
        status: 'todo'
        name: 'Part 2: Another Descriptive Name'
        reason: |
          Reason for the part.
        steps:
          # Similar structure as above, with uuid and status for each step
        context_files:
          compact:
            - file1.ext
          medium:
            - file1.ext
          extended:
            - file1.ext
            - file2.ext
    conclusion: |
      A multi-line conclusion summarizing benefits and impact.
    context_files:
      compact: # affected files
        - file1.ext
      medium: # affected files + additional context
        - file1.ext
        - file2.ext
      extended: # affected files + additional context + more extended context
        - file1.ext
        - file2.ext
        - file3.ext
  ```

```


463462.todo.plan.yml

```yaml
plan:
  uuid: 'c8a2b1f0-4d5e-4b9c-8a7f-6e5d4c3b2a1f'
  status: 'todo'
  title: 'Refactor Filesystem Ops to Align with Docs & Git Specs'
  introduction: |
    This plan addresses critical discrepancies between our implementation, our documentation, and standard tool behavior (specifically `git`). The current `.gitignore` handling is naive, only processing the root-level file, which is incorrect and leads to improper file traversal in any non-trivial repository. This is a significant deviation from documented specs and user expectations.

    Our primary objective is to implement a robust, recursive `.gitignore` parsing mechanism that correctly reflects `git`'s behavior, including precedence rules for nested ignore files. This will make our `mem` API's file-based tools (`queryGraph`, `searchGlobal`, etc.) reliable and predictable.

    Additionally, we will correct inaccuracies in our API documentation (`tools.md`) to ensure it is a trustworthy resource. We'll also improve code clarity by renaming ambiguous functions in our filesystem walker. This effort will harden the codebase, eliminate a class of potential bugs, and improve overall developer experience.
  parts:
    - uuid: '9e7f8a7b-6c5d-4a3b-2c1d-0e9f8a7b6c5d'
      status: 'todo'
      name: 'Part 1: Implement True Recursive .gitignore Handling'
      reason: |
        The current implementation in `gitignore-parser.ts` only reads the `.gitignore` file from the knowledge graph's root. This is fundamentally incorrect, as `git` respects `.gitignore` files in any subdirectory, with specific precedence rules. This flaw means our agent will incorrectly process files that should be ignored, leading to unpredictable behavior and potential context pollution. This overhaul is critical for robust and correct file system interaction.
      steps:
        - uuid: 'a1b2c3d4-e5f6-4a3b-8c7d-6e5f4a9b8c7d'
          status: 'todo'
          name: '1. Introduce `createProjectIgnoreFilter` in gitignore-parser.ts'
          reason: |
            We need a new top-level function that can build a comprehensive ignore filter for the entire project, not just a single directory. This function will be the core of the new, correct implementation.
          files:
            - 'src/lib/gitignore-parser.ts'
            - 'src/core/mem-api/fs-walker.ts'
          operations:
            - 'In `src/lib/gitignore-parser.ts`, create a new async helper function `simpleWalk` that recursively yields all file paths in a directory. This walker must not use any ignore logic, as its purpose is to find the `.gitignore` files themselves.'
            - 'Create and export a new async function `createProjectIgnoreFilter(rootDir: string): Promise<(filePath: string) => boolean>`. This will replace the old `createIgnoreFilter`.'
            - 'Inside `createProjectIgnoreFilter`, use `simpleWalk` to find all `.gitignore` files within `rootDir`.'
            - 'Read and parse each found `.gitignore` file. Store the patterns in a single list, ensuring each pattern is associated with its base directory (the directory containing its `.gitignore` file).'
        - uuid: 'b2c3d4e5-f6a5-4b3c-9d8e-7f6a5b4c3b2a'
          status: 'todo'
          name: '2. Implement Correct Precedence and Filtering Logic'
          reason: |
            Git's ignore logic depends on the location of the `.gitignore` file and the order of patterns within it. The last matching pattern wins. Our new filter must correctly replicate this behavior by processing patterns from all `.gitignore` files in the correct order.
          files:
            - 'src/lib/gitignore-parser.ts'
          operations:
            - 'Inside `createProjectIgnoreFilter`, create a master list of all parsed patterns from all `.gitignore` files.'
            - 'Sort this master list to respect precedence: patterns from parent directories should be processed before patterns from child directories. Within a single file, the order must be preserved.'
            - 'The returned filter function `(filePath: string) => boolean` must iterate through the sorted patterns. For each pattern, it should calculate the `relativePath` from the pattern''s base directory and use the existing `matchesPattern` helper.'
            - 'The function must track the `isIgnored` state, allowing the last matching pattern in the entire sorted list to determine the final outcome for the given `filePath`.'
        - uuid: 'c3d4e5f6-a5b4-4c3d-8e7f-6a5b4c3d2a1b'
          status: 'todo'
          name: '3. Update Consumers and Clean Up Old Code'
          reason: |
            With the new robust filter in place, we must switch our file-walking consumers to use it and remove the old, incorrect implementation to prevent future misuse.
          files:
            - 'src/core/mem-api/graph-ops.ts'
            - 'src/lib/gitignore-parser.ts'
          operations:
            - 'In `src/core/mem-api/graph-ops.ts`, find all functions that use `createIgnoreFilter` (e.g., `queryGraph`, `getBacklinks`, `searchGlobal`).'
            - 'Replace the line `const isIgnored = await createIgnoreFilter(graphRoot);` with `const isIgnored = await createProjectIgnoreFilter(graphRoot);`.'
            - 'In `src/lib/gitignore-parser.ts`, delete the now-obsolete `createIgnoreFilter` and `combineIgnoreFilters` functions.'
      context_files:
        compact:
          - 'src/lib/gitignore-parser.ts'
          - 'src/core/mem-api/graph-ops.ts'
        medium:
          - 'src/lib/gitignore-parser.ts'
          - 'src/core/mem-api/graph-ops.ts'
          - 'src/core/mem-api/fs-walker.ts'
        extended:
          - 'src/lib/gitignore-parser.ts'
          - 'src/core/mem-api/graph-ops.ts'
          - 'src/core/mem-api/fs-walker.ts'
          - '.gitignore'
          - 'tests/integration/mem-api.test.ts'
    - uuid: '8d7e6f5a-4b3c-2d1e-0a9b-8c7d6e5f4a3b'
      status: 'todo'
      name: 'Part 2: Align API Documentation with Implementation'
      reason: |
        The documentation in `tools.md` for `mem.gitLog` incorrectly states that `filePath` is a required parameter. The implementation and type definitions correctly treat it as optional, allowing a query of the entire repository's history. This discrepancy can mislead the LLM and developers. The docs must be the source of truth.
      steps:
        - uuid: 'd4e5f6a5-b4c3-3d2e-9f8a-7b6c5d4e3b2a'
          status: 'todo'
          name: '1. Correct mem.gitLog Signature in tools.md'
          reason: |
            To ensure our documentation is accurate and reliable, we must update the signature and description to match the actual code behavior.
          files:
            - 'docs/tools.md'
          operations:
            - 'Open `docs/tools.md`.'
            - 'Locate the row for `mem.gitLog` in the "Git-Native Operations" table.'
            - 'Change the signature from `(filePath: string, maxCommits: number = 5)` to `(filePath?: string, maxCommits?: number = 5)`.'
            - 'Update the description to clarify that if `filePath` is omitted, the function returns the log for the entire repository.'
      context_files:
        compact:
          - 'docs/tools.md'
        medium:
          - 'docs/tools.md'
          - 'src/types/mem.ts'
        extended:
          - 'docs/tools.md'
          - 'src/types/mem.ts'
          - 'src/core/mem-api/git-ops.ts'
    - uuid: '7c6b5a4d-3e2d-1f0a-9b8c-7d6e5f4a3b2a'
      status: 'todo'
      name: 'Part 3: Improve Code Clarity in Filesystem Traversal'
      reason: |
        The function `walk` in `fs-walker.ts` is ambiguously named. It only yields files, not directories, but its name doesn't imply this. This can lead to incorrect assumptions and bugs if a developer tries to use it to traverse a full directory tree. Renaming it to `walkFiles` makes its behavior explicit and the code easier to reason about.
      steps:
        - uuid: 'e5f6a5b4-c3d2-2e1f-8a7b-6c5d4e3b2a1f'
          status: 'todo'
          name: '1. Rename `walk` to `walkFiles`'
          reason: |
            To make the function''s purpose unambiguous and prevent misuse.
          files:
            - 'src/core/mem-api/fs-walker.ts'
            - 'src/core/mem-api/graph-ops.ts'
          operations:
            - 'In `src/core/mem-api/fs-walker.ts`, rename the async generator `walk` to `walkFiles`.'
            - 'In `src/core/mem-api/graph-ops.ts`, update all imports and calls from `walk` to `walkFiles`.'
      context_files:
        compact:
          - 'src/core/mem-api/fs-walker.ts'
          - 'src/core/mem-api/graph-ops.ts'
        medium:
          - 'src/core/mem-api/fs-walker.ts'
          - 'src/core/mem-api/graph-ops.ts'
        extended:
          - 'src/core/mem-api/fs-walker.ts'
          - 'src/core/mem-api/graph-ops.ts'
  conclusion: |
    By executing this plan, we will elevate the codebase from a functional prototype to a robust, reliable tool. The corrected `.gitignore` logic is the centerpiece, ensuring our agent interacts with the filesystem exactly as a developer would expect, preventing a whole class of context and file-handling errors.

    Aligning the documentation and improving code clarity are not minor tweaks; they are investments in maintainability and future development speed. A developer or an LLM looking at our codebase will find it predictable, honest, and easier to build upon. This is a crucial step in hardening the core foundation of the Recursa agent.
  context_files:
    compact:
      - 'src/lib/gitignore-parser.ts'
      - 'src/core/mem-api/graph-ops.ts'
      - 'src/core/mem-api/fs-walker.ts'
      - 'docs/tools.md'
    medium:
      - 'src/lib/gitignore-parser.ts'
      - 'src/core/mem-api/graph-ops.ts'
      - 'src/core/mem-api/fs-walker.ts'
      - 'docs/tools.md'
      - 'src/types/mem.ts'
      - 'src/core/mem-api/git-ops.ts'
    extended:
      - 'src/lib/gitignore-parser.ts'
      - 'src/core/mem-api/graph-ops.ts'
      - 'src/core/mem-api/fs-walker.ts'
      - 'docs/tools.md'
      - 'src/types/mem.ts'
      - 'src/core/mem-api/git-ops.ts'
      - 'tests/integration/mem-api.test.ts'
      - '.gitignore'
```
