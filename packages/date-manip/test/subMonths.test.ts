// subMonths.test.ts
import { describe, expect, it } from 'vitest';

import subMonths from '../src/subMonths';

describe('subMonths', () => {
  it('should subtract 2 months from a date', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    const result = subMonths(date, 2);
    const expected = new Date('2023-08-01T12:00:00Z');
    expect(result).toEqual(expected);
  });

  it('should subtract 0 months from a date', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    const result = subMonths(date, 0);
    const expected = new Date('2023-10-01T12:00:00Z');
    expect(result).toEqual(expected);
  });

  it('should subtract 5 months from a date', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    const result = subMonths(date, 5);
    const expected = new Date('2023-05-01T12:00:00Z');
    expect(result).toEqual(expected);
  });
});
