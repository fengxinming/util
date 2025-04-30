import moment from 'moment';
import { describe, expect, it } from 'vitest';

import get from '../src/get';

describe('get', () => {
  const date = new Date('2023-10-01T12:30:45.123');

  it('should get the year from a date', () => {
    const result = get(date, 'year');
    const expected = moment(date).year();
    expect(result).toBe(expected);
  });

  it('should get the month from a date', () => {
    const result = get(date, 'month');
    const expected = moment(date).month(); // Note: Months are zero-indexed in JavaScript Date
    expect(result).toBe(expected);
  });

  it('should get the day of the month from a date', () => {
    const result = get(date, 'date');
    const expected = moment(date).date();
    expect(result).toBe(expected);
  });

  it('should get the day of the week from a date', () => {
    const result = get(date, 'day');
    const expected = moment(date).day(); // Note: Days are zero-indexed (0 = Sunday, 1 = Monday, etc.)
    expect(result).toBe(expected);
  });

  it('should get the hours from a date', () => {
    const result = get(date, 'hours');
    const expected = moment(date).hours();
    expect(result).toBe(expected);
  });

  it('should get the minutes from a date', () => {
    const result = get(date, 'minutes');
    const expected = moment(date).minutes();
    expect(result).toBe(expected);
  });

  it('should get the seconds from a date', () => {
    const result = get(date, 'seconds');
    const expected = moment(date).seconds();
    expect(result).toBe(expected);
  });

  it('should get the milliseconds from a date', () => {
    const result = get(date, 'milliseconds');
    const expected = moment(date).milliseconds();
    expect(result).toBe(expected);
  });

  it('should get the time from a date', () => {
    const result = get(date, 'xxx' as any);
    const expected = 0;
    expect(result).toBe(expected);
  });
});
