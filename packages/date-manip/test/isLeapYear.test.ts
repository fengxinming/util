import moment from 'moment';
import { describe, expect, it } from 'vitest';

import isLeapYear from '../src/isLeapYear';

describe('isLeapYear', () => {
  it('should return true for a leap year', () => {
    const date = moment('2024-01-01').toDate();
    expect(isLeapYear(date)).toBe(moment(date).isLeapYear());
  });

  it('should return false for a non-leap year', () => {
    const date = moment('2023-01-01').toDate();
    expect(isLeapYear(date)).toBe(moment(date).isLeapYear());
  });

  it('should return true for the year 2000 (century leap year)', () => {
    const date = moment('2000-01-01').toDate();
    expect(isLeapYear(date)).toBe(moment(date).isLeapYear());
  });

  it('should return false for the year 1900 (not a leap year)', () => {
    const date = moment('1900-01-01').toDate();
    expect(isLeapYear(date)).toBe(moment(date).isLeapYear());
  });

  it('should return true for the year 2020 (leap year)', () => {
    const date = moment('2020-01-01').toDate();
    expect(isLeapYear(date)).toBe(moment(date).isLeapYear());
  });

  it('should return false for the year 2019 (not a leap year)', () => {
    const date = moment('2019-01-01').toDate();
    expect(isLeapYear(date)).toBe(moment(date).isLeapYear());
  });

  it('should return true for the year 2028 (leap year)', () => {
    const date = moment('2028-01-01').toDate();
    expect(isLeapYear(date)).toBe(moment(date).isLeapYear());
  });

  it('should return false for the year 2029 (not a leap year)', () => {
    const date = moment('2029-01-01').toDate();
    expect(isLeapYear(date)).toBe(moment(date).isLeapYear());
  });

  it('should return true for the year 2100 (not a leap year)', () => {
    const date = moment('2100-01-01').toDate();
    expect(isLeapYear(date)).toBe(moment(date).isLeapYear());
  });

  it('should return true for the year 2400 (century leap year)', () => {
    const date = moment('2400-01-01').toDate();
    expect(isLeapYear(date)).toBe(moment(date).isLeapYear());
  });
});
