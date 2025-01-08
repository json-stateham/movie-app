import { range } from '../range';

describe('range', () => {
  it('generates range array 1', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });
});
