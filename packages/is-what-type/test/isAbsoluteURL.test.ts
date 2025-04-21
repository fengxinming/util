import { describe, expect, test } from 'vitest';

import { isAbsoluteURL } from '../src/isAbsoluteURL';

describe('isAbsoluteURL', () => {
  test('should return false for relative URLs', () => {
    expect(isAbsoluteURL('/src/isAbsoluteURL.js')).toBe(false);
    expect(isAbsoluteURL('src/isAbsoluteURL.js')).toBe(false);
    expect(isAbsoluteURL('isAbsoluteURL.js')).toBe(false);
    expect(isAbsoluteURL('./isAbsoluteURL.js')).toBe(false);
    expect(isAbsoluteURL('../isAbsoluteURL.js')).toBe(false);
  });

  test('should return true for absolute URLs with protocol', () => {
    expect(isAbsoluteURL('https://github.com')).toBe(true);
    expect(isAbsoluteURL('http://example.com')).toBe(true);
    expect(isAbsoluteURL('ftp://example.com')).toBe(true);
    expect(isAbsoluteURL('file://example.com')).toBe(true);
  });

  test('should return true for absolute URLs with protocol and path', () => {
    expect(isAbsoluteURL('https://github.com/user/repo')).toBe(true);
    expect(isAbsoluteURL('http://example.com/path/to/resource')).toBe(true);
    expect(isAbsoluteURL('ftp://example.com/path/to/resource')).toBe(true);
    expect(isAbsoluteURL('file://example.com/path/to/resource')).toBe(true);
  });

  test('should return true for URLs without protocol', () => {
    expect(isAbsoluteURL('//example.com')).toBe(true);
    expect(isAbsoluteURL('//example.com/path/to/resource')).toBe(true);
  });

  test('should return false for invalid URLs', () => {
    expect(isAbsoluteURL('')).toBe(false);
    expect(isAbsoluteURL('example.com')).toBe(false);
    expect(isAbsoluteURL('example.com/path/to/resource')).toBe(false);
    expect(isAbsoluteURL('http:/example.com')).toBe(false);
    expect(isAbsoluteURL('http:example.com')).toBe(false);
  });

  test('should return false for non-string inputs', () => {
    expect(isAbsoluteURL(null)).toBe(false);
    expect(isAbsoluteURL(undefined)).toBe(false);
    expect(isAbsoluteURL(123)).toBe(false);
    expect(isAbsoluteURL({})).toBe(false);
    expect(isAbsoluteURL([])).toBe(false);
    expect(isAbsoluteURL(true)).toBe(false);
    expect(isAbsoluteURL(false)).toBe(false);
    expect(isAbsoluteURL(() => {})).toBe(false);
  });
});
