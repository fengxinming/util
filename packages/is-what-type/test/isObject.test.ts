import { describe, expect, test } from 'vitest';

import { isObject } from '../src/isObject';

describe('isObject', () => {
  test('should return true for objects', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ key: 'value' })).toBe(true);
    expect(isObject([])).toBe(true);
    expect(isObject(new Date())).toBe(true);
    expect(isObject(new RegExp(''))).toBe(true);
    expect(isObject(new Error())).toBe(true);
    expect(isObject(new Map())).toBe(true);
    expect(isObject(new Set())).toBe(true);
    expect(isObject(new WeakMap())).toBe(true);
    expect(isObject(new WeakSet())).toBe(true);
    expect(isObject(new Promise(() => {}))).toBe(true);
    expect(isObject(new Int8Array())).toBe(true);
    expect(isObject(new Uint8Array())).toBe(true);
    expect(isObject(new Uint8ClampedArray())).toBe(true);
    expect(isObject(new Int16Array())).toBe(true);
    expect(isObject(new Uint16Array())).toBe(true);
    expect(isObject(new Int32Array())).toBe(true);
    expect(isObject(new Uint32Array())).toBe(true);
    expect(isObject(new Float32Array())).toBe(true);
    expect(isObject(new Float64Array())).toBe(true);
    expect(isObject(new BigInt64Array())).toBe(true);
    expect(isObject(new BigUint64Array())).toBe(true);
  });

  test('should return false for non-object values', () => {
    expect(isObject(1)).toBe(false);
    expect(isObject('string')).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(false)).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(() => {})).toBe(false);
    expect(isObject(async () => {})).toBe(false);
    expect(isObject(function* () {})).toBe(false);
    expect(isObject(Symbol('test'))).toBe(false);
  });
});
