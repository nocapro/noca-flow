/**
 * Custom error class for application-specific errors.
 */
export class NocaFlowError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NocaFlowError';
  }
}