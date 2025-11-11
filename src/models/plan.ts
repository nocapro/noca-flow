// Defines the data structure for a plan.yml file.

export type PlanStatus = 'todo' | 'doing' | 'review' | 'done' | 'failed' | 'cancel';

export interface PlanContextFiles {
  compact: string[];
  medium: string[];
  extended: string[];
}

export interface PlanStep {
  id: string;
  status: PlanStatus;
  name: string;
  reason: string;
  files: string[];
  operations: string[];
}

export interface PlanPart {
  id: string;
  status: PlanStatus;
  isolation: boolean;
  agent_id: string;
  depends_on?: string[];
  name: string;
  reason: string;
  steps: PlanStep[];
  context_files: PlanContextFiles;
}

export interface Plan {
  plan: {
    id: string;
    status: PlanStatus;
    title: string;
    introduction: string;
    parts: PlanPart[];
    conclusion: string;
    context_files: PlanContextFiles;
  };
}