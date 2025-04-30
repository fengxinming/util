import { describe, expect, it } from 'vitest';

import compile from '../src/compile';

describe('compile function', () => {
  it('should compile a simple date format correctly', () => {
    const result = compile('YYYY-MM-DD');
    expect(result.pattern).toBe('(\\d{1,4})-(\\d{1,2})-(\\d{1,2})');
    expect(result.tokens).toEqual(['YYYY', 'MM', 'DD']);
  });

  it('should compile a complex date format correctly', () => {
    const result = compile('YYYY-MM-DD HH:mm:ss.SSS Z');
    expect(result.pattern).toBe(
      '(\\d{1,4})-(\\d{1,2})-(\\d{1,2}) (\\d{1,2}):(\\d{1,2}):(\\d{1,2})\\.(\\d{1,3}) (Z|[+-]\\d{2}(?::?\\d{2})?)'
    );
    expect(result.tokens).toEqual(['YYYY', 'MM', 'DD', 'HH', 'mm', 'ss', 'SSS', 'Z']);
  });

  it('should handle escaped characters correctly', () => {
    const result = compile('YYYY-MM-DD \\[escaped\\]');
    expect(result.pattern).toBe('(\\d{1,4})-(\\d{1,2})-(\\d{1,2}) \\\\\\[escaped\\\\\\]');
    expect(result.tokens).toEqual(['YYYY', 'MM', 'DD']);
  });

  it('should return empty tokens for no date format', () => {
    const result = compile('plain text');
    expect(result.pattern).toBe('plain text');
    expect(result.tokens).toEqual([]);
  });

  it('should handle multiple occurrences of the same token', () => {
    const result = compile('YYYY-MM-DD YYYY');
    expect(result.pattern).toBe('(\\d{1,4})-(\\d{1,2})-(\\d{1,2}) (\\d{1,4})');
    expect(result.tokens).toEqual(['YYYY', 'MM', 'DD', 'YYYY']);
  });
});
