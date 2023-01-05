import { sum } from './cal';

describe('test', () => {
  test('case1', () => {
    const result = sum(1, 1);

    expect(result).toBe(3);
  });
});
