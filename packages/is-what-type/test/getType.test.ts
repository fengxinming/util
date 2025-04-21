import { describe, expect, test } from 'vitest';

import { getType } from '../src/getType';

describe('getType', () => {
  test('should return "Null" for null', () => {
    expect(getType(null)).toBe('Null');
  });

  test('should return "Undefined" for undefined', () => {
    expect(getType(undefined)).toBe('Undefined');
  });

  test('should return "Number" for numbers', () => {
    expect(getType(1)).toBe('Number');
    expect(getType(-1)).toBe('Number');
    expect(getType(0)).toBe('Number');
    expect(getType(1.5)).toBe('Number');
    expect(getType(-1.5)).toBe('Number');
  });

  test('should return "String" for strings', () => {
    expect(getType('')).toBe('String');
    expect(getType('Hello')).toBe('String');
    expect(getType('123')).toBe('String');
  });

  test('should return "Boolean" for booleans', () => {
    expect(getType(true)).toBe('Boolean');
    expect(getType(false)).toBe('Boolean');
  });

  test('should return "Array" for arrays', () => {
    expect(getType([])).toBe('Array');
    expect(getType([1, 2, 3])).toBe('Array');
  });

  test('should return "Object" for objects', () => {
    expect(getType({})).toBe('Object');
    expect(getType({ key: 'value' })).toBe('Object');
  });

  test('should return "Function" for functions', () => {
    expect(getType(() => {})).toBe('Function');
    expect(getType(() => {})).toBe('Function');
  });

  test('should return "Date" for dates', () => {
    expect(getType(new Date())).toBe('Date');
  });

  test('should return "RegExp" for regular expressions', () => {
    expect(getType(new RegExp('\\d+'))).toBe('RegExp');
    expect(getType(/abc/)).toBe('RegExp');
  });

  test('should return "Error" for errors', () => {
    expect(getType(new Error())).toBe('Error');
  });

  test('should return "Map" for maps', () => {
    expect(getType(new Map())).toBe('Map');
  });

  test('should return "Set" for sets', () => {
    expect(getType(new Set())).toBe('Set');
  });

  test('should return "WeakMap" for weak maps', () => {
    expect(getType(new WeakMap())).toBe('WeakMap');
  });

  test('should return "WeakSet" for weak sets', () => {
    expect(getType(new WeakSet())).toBe('WeakSet');
  });

  test('should return "Promise" for promises', () => {
    expect(getType(new Promise(() => {}))).toBe('Promise');
  });

  test('should return "Symbol" for symbols', () => {
    expect(getType(Symbol('test'))).toBe('Symbol');
  });

  test('should return "Int8Array" for Int8Array', () => {
    expect(getType(new Int8Array())).toBe('Int8Array');
  });

  test('should return "Uint8Array" for Uint8Array', () => {
    expect(getType(new Uint8Array())).toBe('Uint8Array');
  });

  test('should return "Uint8ClampedArray" for Uint8ClampedArray', () => {
    expect(getType(new Uint8ClampedArray())).toBe('Uint8ClampedArray');
  });

  test('should return "Int16Array" for Int16Array', () => {
    expect(getType(new Int16Array())).toBe('Int16Array');
  });

  test('should return "Uint16Array" for Uint16Array', () => {
    expect(getType(new Uint16Array())).toBe('Uint16Array');
  });

  test('should return "Int32Array" for Int32Array', () => {
    expect(getType(new Int32Array())).toBe('Int32Array');
  });

  test('should return "Uint32Array" for Uint32Array', () => {
    expect(getType(new Uint32Array())).toBe('Uint32Array');
  });

  test('should return "Float32Array" for Float32Array', () => {
    expect(getType(new Float32Array())).toBe('Float32Array');
  });

  test('should return "Float64Array" for Float64Array', () => {
    expect(getType(new Float64Array())).toBe('Float64Array');
  });

  test('should return "BigInt64Array" for BigInt64Array', () => {
    expect(getType(new BigInt64Array())).toBe('BigInt64Array');
  });

  test('should return "BigUint64Array" for BigUint64Array', () => {
    expect(getType(new BigUint64Array())).toBe('BigUint64Array');
  });
});
