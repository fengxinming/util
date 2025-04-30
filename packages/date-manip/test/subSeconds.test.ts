// subSeconds.test.ts
import { describe, expect, it } from 'vitest';

import subSeconds from '../src/subSeconds';

describe('subSeconds', () => {
  it('should subtract 2 seconds from a date', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    const result = subSeconds(date, 2);
    const expected = new Date('2023-10-01T11:59:58Z');
    expect(result).toEqual(expected);
  });

  it('should subtract 0 seconds from a date', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    const result = subSeconds(date, 0);
    const expected = new Date('2023-10-01T12:00:00Z');
    expect(result).toEqual(expected);
  });

  it('should subtract 5 seconds from a date', () => {
    const date = new Date('2023-10-01T12:00:00Z');
    const result = subSeconds(date, 5);
    const expected = new Date('2023-10-01T11:59:55Z');
    expect(result).toEqual(expected);
  });
});
