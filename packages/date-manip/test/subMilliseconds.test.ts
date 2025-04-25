// subMilliseconds.test.ts
import { describe, expect, it } from 'vitest';

import subMilliseconds from '../src/subMilliseconds';

describe('subMilliseconds', () => {
  it('should subtract 2 milliseconds from a date', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    const result = subMilliseconds(date, 2);
    const expected = new Date('2023-10-01T12:00:00.000Z');
    expected.setTime(expected.getTime() - 2);
    expect(result).toEqual(expected);
  });

  it('should subtract 0 milliseconds from a date', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    const result = subMilliseconds(date, 0);
    const expected = new Date('2023-10-01T12:00:00Z');
    expect(result).toEqual(expected);
  });

  it('should subtract 5 milliseconds from a date', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    const result = subMilliseconds(date, 5);
    const expected = new Date('2023-10-01T12:00:00.000Z');
    expected.setTime(expected.getTime() - 5);
    expect(result).toEqual(expected);
  });
});
