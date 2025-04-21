import { describe, expect, test } from 'vitest';

import { isNumber } from '../src/isNumber';

describe('isNumber', () => {
  test('should return true for numbers', () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber(1)).toBe(true);
    expect(isNumber(-1)).toBe(true);
    expect(isNumber(1.5)).toBe(true);
    expect(isNumber(-1.5)).toBe(true);
    expect(isNumber(Number.MAX_VALUE)).toBe(true);
    expect(isNumber(Number.MIN_VALUE)).toBe(true);
  });

  test('should return false for NaN', () => {
    expect(isNumber(NaN)).toBe(false);
  });

  test('should return false for non-number values', () => {
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber('string')).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(false)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(() => {})).toBe(false);
    expect(isNumber(async () => {})).toBe(false);
    expect(isNumber(function* () {})).toBe(false);
    expect(isNumber(new Date())).toBe(false);
    expect(isNumber(new RegExp(''))).toBe(false);
    expect(isNumber(new Error())).toBe(false);
    expect(isNumber(new Map())).toBe(false);
    expect(isNumber(new Set())).toBe(false);
    expect(isNumber(new WeakMap())).toBe(false);
    expect(isNumber(new WeakSet())).toBe(false);
    expect(isNumber(new Promise(() => {}))).toBe(false);
    expect(isNumber(new Int8Array())).toBe(false);
    expect(isNumber(new Uint8Array())).toBe(false);
    expect(isNumber(new Uint8ClampedArray())).toBe(false);
    expect(isNumber(new Int16Array())).toBe(false);
    expect(isNumber(new Uint16Array())).toBe(false);
    expect(isNumber(new Int32Array())).toBe(false);
    expect(isNumber(new Uint32Array())).toBe(false);
    expect(isNumber(new Float32Array())).toBe(false);
    expect(isNumber(new Float64Array())).toBe(false);
    expect(isNumber(new BigInt64Array())).toBe(false);
    expect(isNumber(new BigUint64Array())).toBe(false);
    expect(isNumber(Symbol('test'))).toBe(false);
  });
});
