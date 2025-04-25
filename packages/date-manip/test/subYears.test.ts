// subYears.test.ts
import { describe, expect, it } from 'vitest';

import subYears from '../src/subYears';

describe('subYears', () => {
  it('should subtract 2 years from a date', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    const result = subYears(date, 2);
    const expected = new Date('2021-10-01T12:00:00Z');
    expect(result).toEqual(expected);
  });

  it('should subtract 0 years from a date', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    const result = subYears(date, 0);
    const expected = new Date('2023-10-01T12:00:00Z');
    expect(result).toEqual(expected);
  });

  it('should subtract 5 years from a date', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    const result = subYears(date, 5);
    const expected = new Date('2018-10-01T12:00:00Z');
    expect(result).toEqual(expected);
  });
});
