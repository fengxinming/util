import { describe, expect, test } from 'vitest';

import { isFunction } from '../src/isFunction';

type Noop = () => void;

function noop() {}

describe('isFunction', () => {
  test('returns true for regular function', () => {
    expect(isFunction<Noop>(noop)).toBe(true);
  });

  test('returns true for arrow function', () => {
    expect(isFunction(() => {})).toBe(true);
  });

  test('returns true for async arrow function', () => {
    expect(isFunction(async () => {})).toBe(true);
  });

  test('returns true for async function declaration', () => {
    expect(isFunction(async () => {})).toBe(true);
  });

  test('returns false for non-function values', () => {
    expect(isFunction(123)).toBe(false);
    expect(isFunction('test')).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction([])).toBe(false);
  });

});
