import moment from 'moment';
import { describe, expect, it } from 'vitest';

import set from '../src/set';

describe('set', () => {
  it('should set the year of a date', () => {
    const date = new Date('2023-10-01T12:34:56');
    const result = set(new Date(date), 'year', 2024);
    const expected = moment(date).year(2024).toDate();
    expect(result).toEqual(expected);
  });

  it('should set the month of a date', () => {
    const date = new Date('2023-10-01T12:34:56');
    const result = set(new Date(date), 'month', 11); // December (0-based index)
    const expected = moment(date).month(11).toDate();
    expect(result).toEqual(expected);
  });

  it('should set the day of the month of a date', () => {
    const date = new Date('2023-10-01T12:34:56');
    const result = set(new Date(date), 'date', 15);
    const expected = moment(date).date(15).toDate();
    expect(result).toEqual(expected);
  });

  it('should set the day of the week of a date', () => {
    const date = new Date('2023-10-01T12:34:56');
    let result = set(new Date(date), 'day', 0); // Sunday (0-based index)
    let expected = moment(date).day(0).toDate();
    expect(result).toEqual(expected);

    const day = 6 - date.getDay();
    result = set(new Date(date), 'day', day); // Sunday (0-based index)
    expected = moment(date).day(day).toDate();
    expect(result).toEqual(expected);
  });

  it('should set the hours of a date', () => {
    const date = new Date('2023-10-01T12:34:56');
    const result = set(new Date(date), 'hours', 18);
    const expected = moment(date).hours(18).toDate();
    expect(result).toEqual(expected);
  });

  it('should set the minutes of a date', () => {
    const date = new Date('2023-10-01T12:34:56');
    const result = set(new Date(date), 'minutes', 45);
    const expected = moment(date).minutes(45).toDate();
    expect(result).toEqual(expected);
  });

  it('should set the seconds of a date', () => {
    const date = new Date('2023-10-01T12:34:56');
    const result = set(new Date(date), 'seconds', 30);
    const expected = moment(date).seconds(30).toDate();
    expect(result).toEqual(expected);
  });

  it('should set the milliseconds of a date', () => {
    const date = new Date('2023-10-01T12:34:56');
    const result = set(new Date(date), 'milliseconds', 500);
    const expected = moment(date).milliseconds(500).toDate();
    expect(result).toEqual(expected);
  });

  it('should handle setting multiple units in sequence', () => {
    const date = new Date('2023-10-01T12:34:56');
    let result = set(new Date(date), 'year', 2024);
    result = set(result, 'month', 11);
    result = set(result, 'date', 15);
    result = set(result, 'hours', 18);
    result = set(result, 'minutes', 45);
    result = set(result, 'seconds', 30);
    result = set(result, 'milliseconds', 500);

    const expected = moment(date)
      .year(2024)
      .month(11)
      .date(15)
      .hours(18)
      .minutes(45)
      .seconds(30)
      .milliseconds(500)
      .toDate();

    expect(result).toEqual(expected);
  });
});
