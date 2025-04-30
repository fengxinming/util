// subDays.test.ts
import { describe, expect, it } from 'vitest';

import subDays from '../src/subDays';

describe('subDays', () => {
  it('should subtract 2 days from a date', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    const result = subDays(date, 2);
    const expected = new Date('2023-09-29T12:00:00Z');
    expect(result).toEqual(expected);
  });

  it('should subtract 0 days from a date', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    const result = subDays(date, 0);
    const expected = new Date('2023-10-01T12:00:00Z');
    expect(result).toEqual(expected);
  });

  it('should subtract 5 days from a date', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    const result = subDays(date, 5);
    const expected = new Date('2023-09-26T12:00:00Z');
    expect(result).toEqual(expected);
  });
});
