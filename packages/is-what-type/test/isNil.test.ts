import { describe, expect, test } from 'vitest';

import { isNil } from '../src/isNil';

describe('isNil', () => {
  test('should return true for null', () => {
    expect(isNil(null)).toBe(true);
  });

  test('should return true for undefined', () => {
    expect(isNil(undefined)).toBe(true);
  });

  test('should return false for other values', () => {
    expect(isNil({})).toBe(false);
    expect(isNil([])).toBe(false);
    expect(isNil('string')).toBe(false);
    expect(isNil(123)).toBe(false);
    expect(isNil(true)).toBe(false);
    expect(isNil(false)).toBe(false);
    expect(isNil(() => {})).toBe(false);
    expect(isNil(async () => {})).toBe(false);
    expect(isNil(function* () {})).toBe(false);
    expect(isNil(new Date())).toBe(false);
    expect(isNil(new RegExp(''))).toBe(false);
    expect(isNil(new Error())).toBe(false);
    expect(isNil(new Map())).toBe(false);
    expect(isNil(new Set())).toBe(false);
    expect(isNil(new WeakMap())).toBe(false);
    expect(isNil(new WeakSet())).toBe(false);
    expect(isNil(new Promise(() => {}))).toBe(false);
    expect(isNil(new Int8Array())).toBe(false);
    expect(isNil(new Uint8Array())).toBe(false);
    expect(isNil(new Uint8ClampedArray())).toBe(false);
    expect(isNil(new Int16Array())).toBe(false);
    expect(isNil(new Uint16Array())).toBe(false);
    expect(isNil(new Int32Array())).toBe(false);
    expect(isNil(new Uint32Array())).toBe(false);
    expect(isNil(new Float32Array())).toBe(false);
    expect(isNil(new Float64Array())).toBe(false);
    expect(isNil(new BigInt64Array())).toBe(false);
    expect(isNil(new BigUint64Array())).toBe(false);
    expect(isNil(Symbol('test'))).toBe(false);
  });
});
