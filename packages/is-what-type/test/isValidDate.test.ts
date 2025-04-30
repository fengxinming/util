import { describe, expect, test } from 'vitest';

import { isValidDate } from '../src/isValidDate';

describe('isValidDate', () => {
  test('should return true for valid Date objects', () => {
    expect(isValidDate(new Date())).toBe(true);
    expect(isValidDate(new Date('2023-10-01'))).toBe(true);
    expect(isValidDate(new Date(2023, 9, 1))).toBe(true);
  });

  test('should return false for invalid Date objects', () => {
    expect(isValidDate(new Date(NaN))).toBe(false);
    expect(isValidDate(new Date('invalid date'))).toBe(false);
  });

  test('should return false for non-Date values', () => {
    expect(isValidDate(null)).toBe(false);
    expect(isValidDate(undefined)).toBe(false);
    expect(isValidDate(123)).toBe(false);
    expect(isValidDate('string')).toBe(false);
    expect(isValidDate(true)).toBe(false);
    expect(isValidDate(false)).toBe(false);
    expect(isValidDate({})).toBe(false);
    expect(isValidDate([])).toBe(false);
    expect(isValidDate(() => {})).toBe(false);
    expect(isValidDate(async () => {})).toBe(false);
    expect(isValidDate(function* () {})).toBe(false);
    expect(isValidDate(new RegExp(''))).toBe(false);
    expect(isValidDate(new Error())).toBe(false);
    expect(isValidDate(new Map())).toBe(false);
    expect(isValidDate(new Set())).toBe(false);
    expect(isValidDate(new WeakMap())).toBe(false);
    expect(isValidDate(new WeakSet())).toBe(false);
    expect(isValidDate(new Promise(() => {}))).toBe(false);
    expect(isValidDate(new Int8Array())).toBe(false);
    expect(isValidDate(new Uint8Array())).toBe(false);
    expect(isValidDate(new Uint8ClampedArray())).toBe(false);
    expect(isValidDate(new Int16Array())).toBe(false);
    expect(isValidDate(new Uint16Array())).toBe(false);
    expect(isValidDate(new Int32Array())).toBe(false);
    expect(isValidDate(new Uint32Array())).toBe(false);
    expect(isValidDate(new Float32Array())).toBe(false);
    expect(isValidDate(new Float64Array())).toBe(false);
    expect(isValidDate(new BigInt64Array())).toBe(false);
    expect(isValidDate(new BigUint64Array())).toBe(false);
    expect(isValidDate(Symbol('test'))).toBe(false);
  });
});
