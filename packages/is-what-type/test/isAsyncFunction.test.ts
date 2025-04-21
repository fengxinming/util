import { describe, expect, test } from 'vitest';

import { isAsyncFunction } from '../src/isAsyncFunction';

describe('isAsyncFunction', () => {
  test('should return true for async functions', () => {
    expect(isAsyncFunction(async () => {})).toBe(true);
    expect(isAsyncFunction(async () => {})).toBe(true);
  });

  test('should return false for regular functions', () => {
    expect(isAsyncFunction(() => {})).toBe(false);
    expect(isAsyncFunction(() => {})).toBe(false);
  });

  test('should return false for non-function values', () => {
    expect(isAsyncFunction(null)).toBe(false);
    expect(isAsyncFunction(undefined)).toBe(false);
    expect(isAsyncFunction(123)).toBe(false);
    expect(isAsyncFunction('string')).toBe(false);
    expect(isAsyncFunction(true)).toBe(false);
    expect(isAsyncFunction(false)).toBe(false);
    expect(isAsyncFunction({})).toBe(false);
    expect(isAsyncFunction([])).toBe(false);
    expect(isAsyncFunction(new Date())).toBe(false);
    expect(isAsyncFunction(new RegExp(''))).toBe(false);
    expect(isAsyncFunction(new Error())).toBe(false);
    expect(isAsyncFunction(new Map())).toBe(false);
    expect(isAsyncFunction(new Set())).toBe(false);
    expect(isAsyncFunction(new WeakMap())).toBe(false);
    expect(isAsyncFunction(new WeakSet())).toBe(false);
    expect(isAsyncFunction(new Promise(() => {}))).toBe(false);
    expect(isAsyncFunction(new Int8Array())).toBe(false);
    expect(isAsyncFunction(new Uint8Array())).toBe(false);
    expect(isAsyncFunction(new Uint8ClampedArray())).toBe(false);
    expect(isAsyncFunction(new Int16Array())).toBe(false);
    expect(isAsyncFunction(new Uint16Array())).toBe(false);
    expect(isAsyncFunction(new Int32Array())).toBe(false);
    expect(isAsyncFunction(new Uint32Array())).toBe(false);
    expect(isAsyncFunction(new Float32Array())).toBe(false);
    expect(isAsyncFunction(new Float64Array())).toBe(false);
    expect(isAsyncFunction(new BigInt64Array())).toBe(false);
    expect(isAsyncFunction(new BigUint64Array())).toBe(false);
  });

  test('should return false for arrow functions that are not async', () => {
    expect(isAsyncFunction(() => {})).toBe(false);
  });

  test('should return false for generator functions', () => {
    expect(isAsyncFunction(function* () {})).toBe(false);
  });
});
