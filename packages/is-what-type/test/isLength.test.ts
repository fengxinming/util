import { describe, expect, test } from 'vitest';

import { isLength } from '../src/isLength';

describe('isLength', () => {
  test('should return true for valid array-like lengths', () => {
    expect(isLength(0)).toBe(true);
    expect(isLength(1)).toBe(true);
    expect(isLength(100)).toBe(true);
    expect(isLength(1000000)).toBe(true);
  });

  test('should return false for negative numbers', () => {
    expect(isLength(-1)).toBe(false);
    expect(isLength(-100)).toBe(false);
    expect(isLength(-Infinity)).toBe(false);
  });

  test('should return false for non-integer numbers', () => {
    expect(isLength(0.1)).toBe(false);
    expect(isLength(1.5)).toBe(false);
    expect(isLength(-0.1)).toBe(false);
    expect(isLength(-1.5)).toBe(false);
  });

  test('should return false for non-number values', () => {
    expect(isLength('3')).toBe(false);
    expect(isLength('abc')).toBe(false);
    expect(isLength(null)).toBe(false);
    expect(isLength(undefined)).toBe(false);
    expect(isLength({})).toBe(false);
    expect(isLength([])).toBe(false);
    expect(isLength(true)).toBe(false);
    expect(isLength(false)).toBe(false);
    expect(isLength(() => {})).toBe(false);
    expect(isLength(new Date())).toBe(false);
    expect(isLength(new RegExp(''))).toBe(false);
    expect(isLength(new Error())).toBe(false);
    expect(isLength(new Map())).toBe(false);
    expect(isLength(new Set())).toBe(false);
    expect(isLength(new WeakMap())).toBe(false);
    expect(isLength(new WeakSet())).toBe(false);
    expect(isLength(new Promise(() => {}))).toBe(false);
    expect(isLength(new Int8Array())).toBe(false);
    expect(isLength(new Uint8Array())).toBe(false);
    expect(isLength(new Uint8ClampedArray())).toBe(false);
    expect(isLength(new Int16Array())).toBe(false);
    expect(isLength(new Uint16Array())).toBe(false);
    expect(isLength(new Int32Array())).toBe(false);
    expect(isLength(new Uint32Array())).toBe(false);
    expect(isLength(new Float32Array())).toBe(false);
    expect(isLength(new Float64Array())).toBe(false);
    expect(isLength(new BigInt64Array())).toBe(false);
    expect(isLength(new BigUint64Array())).toBe(false);
  });

  test('should return false for special number values', () => {
    expect(isLength(Number.MIN_VALUE)).toBe(false);
    expect(isLength(Number.MAX_VALUE)).toBe(true); // Assuming MAX_VALUE is a valid length
    expect(isLength(Infinity)).toBe(false);
    expect(isLength(NaN)).toBe(false);
  });
});
