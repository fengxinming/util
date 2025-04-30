// subHours.test.ts
import { describe, expect, it } from 'vitest';

import subHours from '../src/subHours';

describe('subHours', () => {
  it('should subtract 2 hours from a date', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    const result = subHours(date, 2);
    const expected = new Date('2023-10-01T10:00:00Z');
    expect(result).toEqual(expected);
  });

  it('should subtract 0 hours from a date', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    const result = subHours(date, 0);
    const expected = new Date('2023-10-01T12:00:00Z');
    expect(result).toEqual(expected);
  });

  it('should subtract 5 hours from a date', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    const result = subHours(date, 5);
    const expected = new Date('2023-10-01T07:00:00Z');
    expect(result).toEqual(expected);
  });
});
