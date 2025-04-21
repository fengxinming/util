import { describe, expect, test } from 'vitest';

import { isIterable } from '../src/isIterable';

describe('isIterable', () => {
  test('should return true for iterable objects', () => {
    expect(isIterable([])).toBe(true);
    expect(isIterable('string')).toBe(true); // Strings are iterable
    expect(isIterable(new Map())).toBe(true);
    expect(isIterable(new Set())).toBe(true);
    expect(isIterable(new WeakMap())).toBe(false); // WeakMap is not iterable
    expect(isIterable(new WeakSet())).toBe(false); // WeakSet is not iterable
    expect(isIterable(new Int8Array())).toBe(true);
    expect(isIterable(new Uint8Array())).toBe(true);
    expect(isIterable(new Uint8ClampedArray())).toBe(true);
    expect(isIterable(new Int16Array())).toBe(true);
    expect(isIterable(new Uint16Array())).toBe(true);
    expect(isIterable(new Int32Array())).toBe(true);
    expect(isIterable(new Uint32Array())).toBe(true);
    expect(isIterable(new Float32Array())).toBe(true);
    expect(isIterable(new Float64Array())).toBe(true);
    expect(isIterable(new BigInt64Array())).toBe(true);
    expect(isIterable(new BigUint64Array())).toBe(true);
    expect(isIterable(new Promise(() => {}))).toBe(false); // Promise is not iterable
    expect(isIterable(new Date())).toBe(false); // Date is not iterable
    expect(isIterable(new RegExp(''))).toBe(false); // RegExp is not iterable
    expect(isIterable(new Error())).toBe(false); // Error is not iterable
  });

  test('should return false for non-iterable objects', () => {
    expect(isIterable({})).toBe(false);
    expect(isIterable(null)).toBe(false);
    expect(isIterable(undefined)).toBe(false);
    expect(isIterable(123)).toBe(false);
    expect(isIterable(true)).toBe(false);
    expect(isIterable(false)).toBe(false);
    expect(isIterable(() => {})).toBe(false);
    expect(isIterable(async () => {})).toBe(false);
    expect(isIterable(function* () {})).toBe(false);
    expect(isIterable(Symbol('test'))).toBe(false);
  });
});
