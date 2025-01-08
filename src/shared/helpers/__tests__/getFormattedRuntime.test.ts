import { getFormattedRuntime } from '../getFormattedRuntime';

describe('getMovieRuntime', () => {
  it('returns hours and minutes', () => {
    expect(getFormattedRuntime(125)).toBe('2h 5m');
  });

  it('returns hours', () => {
    expect(getFormattedRuntime(120)).toBe('2h');
  });

  it('returns minutes', () => {
    expect(getFormattedRuntime(59)).toBe('59m');
  });

  it('returns empty string if input is falsy', () => {
    expect(getFormattedRuntime(null)).toBe('');
  });
});
