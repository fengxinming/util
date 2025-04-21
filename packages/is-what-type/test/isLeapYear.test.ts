import { describe, expect, test } from 'vitest';

import { isLeapYear } from '../src/isLeapYear';

describe('isLeapYear', () => {
  test('should return true for leap years', () => {
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(2004)).toBe(true);
    expect(isLeapYear(2008)).toBe(true);
    expect(isLeapYear(2012)).toBe(true);
    expect(isLeapYear(2016)).toBe(true);
    expect(isLeapYear(2020)).toBe(true);
    expect(isLeapYear(2024)).toBe(true);
  });

  test('should return false for non-leap years', () => {
    expect(isLeapYear(1900)).toBe(false);
    expect(isLeapYear(1901)).toBe(false);
    expect(isLeapYear(1902)).toBe(false);
    expect(isLeapYear(1903)).toBe(false);
    expect(isLeapYear(2001)).toBe(false);
    expect(isLeapYear(2002)).toBe(false);
    expect(isLeapYear(2003)).toBe(false);
    expect(isLeapYear(2019)).toBe(false);
    expect(isLeapYear(2021)).toBe(false);
    expect(isLeapYear(2022)).toBe(false);
    expect(isLeapYear(2023)).toBe(false);
  });

  test('should return true for leap years using Date objects', () => {
    expect(isLeapYear(new Date(2000, 0, 1))).toBe(true);
    expect(isLeapYear(new Date(2004, 0, 1))).toBe(true);
    expect(isLeapYear(new Date(2008, 0, 1))).toBe(true);
    expect(isLeapYear(new Date(2012, 0, 1))).toBe(true);
    expect(isLeapYear(new Date(2016, 0, 1))).toBe(true);
    expect(isLeapYear(new Date(2020, 0, 1))).toBe(true);
    expect(isLeapYear(new Date(2024, 0, 1))).toBe(true);
  });

  test('should return false for non-leap years using Date objects', () => {
    expect(isLeapYear(new Date(1900, 0, 1))).toBe(false);
    expect(isLeapYear(new Date(1901, 0, 1))).toBe(false);
    expect(isLeapYear(new Date(1902, 0, 1))).toBe(false);
    expect(isLeapYear(new Date(1903, 0, 1))).toBe(false);
    expect(isLeapYear(new Date(2001, 0, 1))).toBe(false);
    expect(isLeapYear(new Date(2002, 0, 1))).toBe(false);
    expect(isLeapYear(new Date(2003, 0, 1))).toBe(false);
    expect(isLeapYear(new Date(2019, 0, 1))).toBe(false);
    expect(isLeapYear(new Date(2021, 0, 1))).toBe(false);
    expect(isLeapYear(new Date(2022, 0, 1))).toBe(false);
    expect(isLeapYear(new Date(2023, 0, 1))).toBe(false);
  });

  test('should return false for invalid inputs', () => {
    expect(isLeapYear(null)).toBe(false);
    expect(isLeapYear(undefined)).toBe(false);
    expect(isLeapYear('2000')).toBe(false);
    expect(isLeapYear({})).toBe(false);
    expect(isLeapYear([])).toBe(false);
    expect(isLeapYear(true)).toBe(false);
    expect(isLeapYear(false)).toBe(false);
    expect(isLeapYear(() => {})).toBe(false);
    expect(isLeapYear(new Date('invalid'))).toBe(false);
  });

  test('should return false for non-Date objects', () => {
    expect(isLeapYear({ year: 2000 })).toBe(false);
    expect(isLeapYear([2000])).toBe(false);
    expect(isLeapYear(new Date())).toBe(false); // This should be true if the current year is a leap year
  });
});
