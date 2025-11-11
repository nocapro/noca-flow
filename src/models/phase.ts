// Defines data structures related to phases.

export type PhaseName = 'initialization' | 'development';

export interface Phase {
  name: PhaseName;
  path: string;
  // TODO: Add other phase-specific properties if needed.
}