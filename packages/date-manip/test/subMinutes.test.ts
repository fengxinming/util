// subMinutes.test.ts
import { describe, expect, it } from 'vitest';

import subMinutes from '../src/subMinutes';

describe('subMinutes', () => {
  it('should subtract 2 minutes from a date', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    const result = subMinutes(date, 2);
    const expected = new Date('2023-10-01T11:58:00Z');
    expect(result).toEqual(expected);
  });

  it('should subtract 0 minutes from a date', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    const result = subMinutes(date, 0);
    const expected = new Date('2023-10-01T12:00:00Z');
    expect(result).toEqual(expected);
  });

  it('should subtract 5 minutes from a date', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    const result = subMinutes(date, 5);
    const expected = new Date('2023-10-01T11:55:00Z');
    expect(result).toEqual(expected);
  });
});
