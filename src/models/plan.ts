// Defines the data structure for a plan.yml file.

export interface PlanPart {
  id: string;
  status: 'todo' | 'doing' | 'review' | 'done' | 'failed';
  isolation: boolean;
  agent_id: string;
  depends_on: string[];
  name: string;
}

export interface Plan {
  plan: {
    id: string;
    title: string;
    status: 'todo' | 'doing' | 'review' | 'done' | 'failed';
    parts: PlanPart[];
  };
}