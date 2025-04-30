import { describe, expect, test } from 'vitest';

import { isPlainObject } from '../src/isPlainObject';

describe('isPlainObject', () => {
  test('should return true for plain objects', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ key: 'value' })).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);
  });

  test('should return false for non-plain objects', () => {
    function Fn() {}
    expect(isPlainObject(new Fn())).toBe(false);

    class MyClass {
      create() {}
    }
    expect(isPlainObject(new MyClass())).toBe(false);

    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject(new Date())).toBe(false);
    expect(isPlainObject(new RegExp(''))).toBe(false);
    expect(isPlainObject(new Error())).toBe(false);
    expect(isPlainObject(new Map())).toBe(false);
    expect(isPlainObject(new Set())).toBe(false);
    expect(isPlainObject(new WeakMap())).toBe(false);
    expect(isPlainObject(new WeakSet())).toBe(false);
    expect(isPlainObject(new Promise(() => {}))).toBe(false);
    expect(isPlainObject(new Int8Array())).toBe(false);
    expect(isPlainObject(new Uint8Array())).toBe(false);
    expect(isPlainObject(new Uint8ClampedArray())).toBe(false);
    expect(isPlainObject(new Int16Array())).toBe(false);
    expect(isPlainObject(new Uint16Array())).toBe(false);
    expect(isPlainObject(new Int32Array())).toBe(false);
    expect(isPlainObject(new Uint32Array())).toBe(false);
    expect(isPlainObject(new Float32Array())).toBe(false);
    expect(isPlainObject(new Float64Array())).toBe(false);
    expect(isPlainObject(new BigInt64Array())).toBe(false);
    expect(isPlainObject(new BigUint64Array())).toBe(false);
  });

  test('should return false for non-object values', () => {
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
    expect(isPlainObject(123)).toBe(false);
    expect(isPlainObject('string')).toBe(false);
    expect(isPlainObject(true)).toBe(false);
    expect(isPlainObject(false)).toBe(false);
    expect(isPlainObject(() => {})).toBe(false);
    expect(isPlainObject(async () => {})).toBe(false);
    expect(isPlainObject(function* () {})).toBe(false);
    expect(isPlainObject(Symbol('test'))).toBe(false);
  });

  test('should return false for objects with custom prototypes', () => {
    const obj = Object.create({ custom: true });
    expect(isPlainObject(obj)).toBe(false);
  });

  test('should return true for objects created with Object.create(null)', () => {
    const obj = Object.create(null);
    expect(isPlainObject(obj)).toBe(true);
  });
});
