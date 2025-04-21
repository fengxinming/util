import { describe, expect, test } from 'vitest';

import { isPromiseLike } from '../src/isPromiseLike';

describe('isPromiseLike', () => {
  test('should return true for Promise objects', () => {
    expect(isPromiseLike(new Promise(() => {}))).toBe(true);
  });

  test('should return true for objects with a then method', () => {
    expect(isPromiseLike({ then: () => {} })).toBe(true);
    expect(isPromiseLike({ then: () => {}, catch: () => {} })).toBe(true);
  });

  test('should return false for non-Promise-like objects', () => {
    expect(isPromiseLike({})).toBe(false);
    expect(isPromiseLike({ catch: () => {} })).toBe(false);
    expect(isPromiseLike({ then: 'not a function' })).toBe(false);
  });

  test('should return false for non-object values', () => {
    expect(isPromiseLike(null)).toBe(false);
    expect(isPromiseLike(undefined)).toBe(false);
    expect(isPromiseLike(123)).toBe(false);
    expect(isPromiseLike('string')).toBe(false);
    expect(isPromiseLike(true)).toBe(false);
    expect(isPromiseLike(false)).toBe(false);
    expect(isPromiseLike(() => {})).toBe(false);
    expect(isPromiseLike(async () => {})).toBe(false);
    expect(isPromiseLike(function* () {})).toBe(false);
    expect(isPromiseLike(new Date())).toBe(false);
    expect(isPromiseLike(new RegExp(''))).toBe(false);
    expect(isPromiseLike(new Error())).toBe(false);
    expect(isPromiseLike(new Map())).toBe(false);
    expect(isPromiseLike(new Set())).toBe(false);
    expect(isPromiseLike(new WeakMap())).toBe(false);
    expect(isPromiseLike(new WeakSet())).toBe(false);
    expect(isPromiseLike(new Int8Array())).toBe(false);
    expect(isPromiseLike(new Uint8Array())).toBe(false);
    expect(isPromiseLike(new Uint8ClampedArray())).toBe(false);
    expect(isPromiseLike(new Int16Array())).toBe(false);
    expect(isPromiseLike(new Uint16Array())).toBe(false);
    expect(isPromiseLike(new Int32Array())).toBe(false);
    expect(isPromiseLike(new Uint32Array())).toBe(false);
    expect(isPromiseLike(new Float32Array())).toBe(false);
    expect(isPromiseLike(new Float64Array())).toBe(false);
    expect(isPromiseLike(new BigInt64Array())).toBe(false);
    expect(isPromiseLike(new BigUint64Array())).toBe(false);
    expect(isPromiseLike(Symbol('test'))).toBe(false);
  });
});
