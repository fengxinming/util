import { describe, expect, test } from 'vitest';

import { isESModule } from '../src/isESModule';

describe('isESModule', () => {
  test('should return true for ES Modules', () => {
    const esModule = { __esModule: true };
    expect(isESModule(esModule)).toBe(true);

    const esModuleWithSymbol = {};
    if (typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol') {
      esModuleWithSymbol[Symbol.toStringTag] = 'Module';
      expect(isESModule(esModuleWithSymbol)).toBe(true);
    }
  });

  test('should return false for non-ES Modules', () => {
    expect(isESModule({})).toBe(false);
    expect(isESModule([])).toBe(false);
    expect(isESModule('string')).toBe(false);
    expect(isESModule(123)).toBe(false);
    expect(isESModule(true)).toBe(false);
    expect(isESModule(false)).toBe(false);
    expect(isESModule(null)).toBe(false);
    expect(isESModule(undefined)).toBe(false);
    expect(isESModule(() => {})).toBe(false);
    expect(isESModule(async () => {})).toBe(false);
    expect(isESModule(function* () {})).toBe(false);
    expect(isESModule(new Date())).toBe(false);
    expect(isESModule(new RegExp(''))).toBe(false);
    expect(isESModule(new Error())).toBe(false);
    expect(isESModule(new Map())).toBe(false);
    expect(isESModule(new Set())).toBe(false);
    expect(isESModule(new WeakMap())).toBe(false);
    expect(isESModule(new WeakSet())).toBe(false);
    expect(isESModule(new Promise(() => {}))).toBe(false);
    expect(isESModule(new Int8Array())).toBe(false);
    expect(isESModule(new Uint8Array())).toBe(false);
    expect(isESModule(new Uint8ClampedArray())).toBe(false);
    expect(isESModule(new Int16Array())).toBe(false);
    expect(isESModule(new Uint16Array())).toBe(false);
    expect(isESModule(new Int32Array())).toBe(false);
    expect(isESModule(new Uint32Array())).toBe(false);
    expect(isESModule(new Float32Array())).toBe(false);
    expect(isESModule(new Float64Array())).toBe(false);
    expect(isESModule(new BigInt64Array())).toBe(false);
    expect(isESModule(new BigUint64Array())).toBe(false);
  });

  test('should return false for objects with incorrect __esModule property', () => {
    const obj = { __esModule: false };
    expect(isESModule(obj)).toBe(false);
  });

  test('should return false for objects with incorrect Symbol.toStringTag property', () => {
    const obj = {};
    if (typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol') {
      obj[Symbol.toStringTag] = 'NotAModule';
      expect(isESModule(obj)).toBe(false);
    }
  });
});
