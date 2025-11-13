import {
  managerAgentContent,
  planAgentContent,
  qaAgentContent,
  suffixGlobalPromptContent,
  userPromptContent,
  initAgentSwarmContent,
  initPhaseRuleContent,
  scaffolderAgentContent,
  devAgentSwarmContent,
  devPhaseRuleContent,
} from './templateContents';

export interface ScaffoldFile {
  path: string;
  content: string;
}

export const scaffoldFiles: ScaffoldFile[] = [
  { path: 'user.prompt.md', content: userPromptContent },
  { path: '.nocaflow/manager.agent.md', content: managerAgentContent },
  { path: '.nocaflow/plan.agent.md', content: planAgentContent },
  { path: '.nocaflow/qa.agent.md', content: qaAgentContent },
  { path: '.nocaflow/suffix.global.prompt.md', content: suffixGlobalPromptContent },
  { path: '.nocaflow/initialization/init.agent-swarm.md', content: initAgentSwarmContent },
  { path: '.nocaflow/initialization/init.phase.rule.md', content: initPhaseRuleContent },
  { path: '.nocaflow/initialization/scaffolder.agent.md', content: scaffolderAgentContent },
  { path: '.nocaflow/development/dev.agent-swarm.md', content: devAgentSwarmContent },
  { path: '.nocaflow/development/dev.phase.rule.md', content: devPhaseRuleContent },
];