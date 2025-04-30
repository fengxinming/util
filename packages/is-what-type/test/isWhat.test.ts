import { describe, expect, test } from 'vitest';

import { isWhat } from '../src/isWhat';

describe('isWhat', () => {
  test('should throw error when value is specified as object', () => {
    const value: string | number | boolean | null | undefined | symbol | bigint = null;
    const whatType = typeof value;

    if (isWhat<object>(value, whatType, 'object')) {
      expect(() => {
        Object.keys(value);
      }).toThrowError();
    }
  });
});
