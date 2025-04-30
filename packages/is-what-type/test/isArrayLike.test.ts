import { describe, expect, test } from 'vitest';

import { isArrayLike } from '../src/isArrayLike';

describe('isArrayLike', () => {
  test('should return true for array-like objects', () => {
    expect(isArrayLike('123')).toBe(true);
    expect(isArrayLike([])).toBe(true);
    expect(isArrayLike([1, 2, 3])).toBe(true);
    expect(isArrayLike({ 0: 1, length: 1 })).toBe(true);
    expect(isArrayLike(new Int8Array())).toBe(true);
    expect(isArrayLike(new Uint8Array())).toBe(true);
    expect(isArrayLike(new Uint8ClampedArray())).toBe(true);
    expect(isArrayLike(new Int16Array())).toBe(true);
    expect(isArrayLike(new Uint16Array())).toBe(true);
    expect(isArrayLike(new Int32Array())).toBe(true);
    expect(isArrayLike(new Uint32Array())).toBe(true);
    expect(isArrayLike(new Float32Array())).toBe(true);
    expect(isArrayLike(new Float64Array())).toBe(true);
    expect(isArrayLike(new BigInt64Array())).toBe(true);
    expect(isArrayLike(new BigUint64Array())).toBe(true);
  });

  test('should return false for non-array-like objects', () => {
    expect(isArrayLike(() => {})).toBe(false);
    expect(isArrayLike({})).toBe(false);
    expect(isArrayLike({ length: 'not a number' })).toBe(false);
    expect(isArrayLike({ length: -1 })).toBe(false);
    expect(isArrayLike({ length: 1.5 })).toBe(false);
  });

  test('should return false for null and undefined', () => {
    expect(isArrayLike(null)).toBe(false);
    expect(isArrayLike(undefined)).toBe(false);
  });

  test('should return false for functions', () => {
    expect(isArrayLike(() => {})).toBe(false);
    expect(isArrayLike(() => {})).toBe(false);
  });

  test('should return false for other non-array-like values', () => {
    expect(isArrayLike(123)).toBe(false);
    expect(isArrayLike(true)).toBe(false);
    expect(isArrayLike(false)).toBe(false);
    expect(isArrayLike(Symbol('123'))).toBe(false);
    expect(isArrayLike(new Date())).toBe(false);
    expect(isArrayLike(new RegExp(''))).toBe(false);
    expect(isArrayLike(new Error())).toBe(false);
    expect(isArrayLike(new Map())).toBe(false);
    expect(isArrayLike(new Set())).toBe(false);
    expect(isArrayLike(new WeakMap())).toBe(false);
    expect(isArrayLike(new WeakSet())).toBe(false);
    expect(isArrayLike(new Promise(() => {}))).toBe(false);
  });
});
