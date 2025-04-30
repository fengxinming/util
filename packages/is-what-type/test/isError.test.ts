import { describe, expect, test } from 'vitest';

import { isError } from '../src/isError';

class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CustomError';
  }
}

describe('isError', () => {
  test('should return true for Error objects', () => {
    expect(isError(new Error())).toBe(true);
    expect(isError(new TypeError('Type error'))).toBe(true);
    expect(isError(new RangeError('Range error'))).toBe(true);
    expect(isError(new SyntaxError('Syntax error'))).toBe(true);
    expect(isError(new ReferenceError('Reference error'))).toBe(true);
    expect(isError(new EvalError('Eval error'))).toBe(true);
    expect(isError(new URIError('URI error'))).toBe(true);
  });

  test('should return true for custom error objects', () => {
    const customError = new CustomError('This is Error');
    expect(isError(customError)).toBe(true);

    const notAnError = { name: 'NotAnError' };
    expect(isError(notAnError)).toBe(true);
  });

  test('should return false for non-Error objects', () => {
    expect(isError({})).toBe(false);
    expect(isError([])).toBe(false);
    expect(isError('string')).toBe(false);
    expect(isError(123)).toBe(false);
    expect(isError(true)).toBe(false);
    expect(isError(false)).toBe(false);
    expect(isError(null)).toBe(false);
    expect(isError(undefined)).toBe(false);
    expect(isError(() => {})).toBe(false);
    expect(isError(async () => {})).toBe(false);
    expect(isError(function* () {})).toBe(false);
    expect(isError(new Date())).toBe(false);
    expect(isError(new RegExp(''))).toBe(false);
    expect(isError(new Map())).toBe(false);
    expect(isError(new Set())).toBe(false);
    expect(isError(new WeakMap())).toBe(false);
    expect(isError(new WeakSet())).toBe(false);
    expect(isError(new Promise(() => {}))).toBe(false);
    expect(isError(new Int8Array())).toBe(false);
    expect(isError(new Uint8Array())).toBe(false);
    expect(isError(new Uint8ClampedArray())).toBe(false);
    expect(isError(new Int16Array())).toBe(false);
    expect(isError(new Uint16Array())).toBe(false);
    expect(isError(new Int32Array())).toBe(false);
    expect(isError(new Uint32Array())).toBe(false);
    expect(isError(new Float32Array())).toBe(false);
    expect(isError(new Float64Array())).toBe(false);
    expect(isError(new BigInt64Array())).toBe(false);
    expect(isError(new BigUint64Array())).toBe(false);
  });

  test('should return false for null and undefined', () => {
    expect(isError(null)).toBe(false);
    expect(isError(undefined)).toBe(false);
  });
});
