import { NocaFlowError } from '../../../src/utils/errors';

describe('unit/utils/errors', () => {
  it('should create an error with the correct name and message', () => {
    const message = 'Something went wrong';
    const err = new NocaFlowError(message);

    expect(err).toBeInstanceOf(Error);
    expect(err).toBeInstanceOf(NocaFlowError);
    expect(err.name).toBe('NocaFlowError');
    expect(err.message).toBe(message);
  });
});