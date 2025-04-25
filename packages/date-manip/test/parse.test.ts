import moment from 'moment';
import { describe, expect, it } from 'vitest';

import parse from '../src/parse';

describe('parse', () => {
  it('should parse a date from an ISO 8601 string', () => {
    const input = '2023-10-01T12:34:56Z';
    const result = parse(input);
    const expected = moment(input).toDate();
    expect(result).toEqual(expected);
  });

  it('should parse a date from an ISO 8601 string with timezone', () => {
    const input = '2023-10-01T12:34:56+08';
    const result = parse(input);
    const expected = moment(input).toDate();
    expect(result).toEqual(expected);
  });

  it('should parse a date from a custom format string', () => {
    const input = '20231001123456';
    const format = 'YYYYMMDDHHmmss';
    const result = parse(input, format);
    const expected = moment(input, format).toDate();
    expect(result).toEqual(expected);
  });

  it('should parse a date from a custom format string with timezone', () => {
    const input = '20231001123456+08';
    const format = 'YYYYMMDDHHmmssZ';
    const result = parse(input, format);
    const expected = moment(input, format).toDate();
    expect(result).toEqual(expected);
  });

  it('should handle undefined input from a custom format string', () => {
    const input = undefined;
    const format = 'YYYY-MM-DD';
    const result = parse(input as any, format);
    const expected = moment(input, format).toDate();
    expect(result).toEqual(expected);
  });

  it('should parse a date from an array of numbers', () => {
    const input = [2023, 9, 1, 12, 34, 56];
    const result = parse(input);
    const expected = moment([2023, 9, 1, 12, 34, 56]).toDate();
    expect(result).toEqual(expected);
  });

  it('should parse a date from a timestamp', () => {
    const input = 1696119296000; // 2023-10-01T12:34:56Z
    const result = parse(input);
    const expected = moment(input).toDate();
    expect(result).toEqual(expected);
  });

  it('should parse a date from a Date object', () => {
    const input = new Date('2023-10-01T12:34:56Z');
    const result = parse(input);
    const expected = moment(input).toDate();
    expect(result).toEqual(expected);
  });

  it('should parse a date from an ASP.NET JSON string', () => {
    const input = '/Date(1696119296000)/';
    const result = parse(input);
    const expected = moment(1696119296000).toDate();
    expect(result).toEqual(expected);
  });

  it('should handle invalid input and return the current date', () => {
    const input = 'invalid-date';
    const result = parse(input);
    const expected = moment(input).toDate();
    expect(result).toEqual(expected);
  });

  it('should handle null input and return the current date', () => {
    const input = null;
    const result = parse(input as any);
    const expected = new Date(Date.parse(input as any));
    expect(result).toEqual(expected);
  });

  it('should handle undefined input and return the current date', () => {
    const input = undefined;
    const result = parse(input as any);
    const expected = moment(input);
    expect(+result).toBeLessThanOrEqual(+expected);
  });

  it('should handle an empty string input and return the current date', () => {
    const input = '';
    const result = parse(input);
    const expected = moment(input).toDate();
    expect(result).toEqual(expected);
  });

  it('should handle an object input and return the current date', () => {
    const input = {};
    expect(+parse(input)).toBeLessThanOrEqual(+moment(input));
  });

  it('should parse a date from a date string with different format', () => {
    const input = '01-10-2023';
    const format = 'DD-MM-YYYY';
    const result = parse(input, format);
    const expected = moment(input, format).toDate();
    expect(result).toEqual(expected);
  });

  it('should parse a date from a date string with leap year', () => {
    const input = '2020-02-29';
    expect(parse(input)).toEqual(moment(input).toDate());
  });

  it('should parse a date from a date string with last day of month', () => {
    const input = '2023-04-30';
    expect(parse(input)).toEqual(moment(input).toDate());
  });

  it('should parse a date from a date string with timezone abbreviation', () => {
    const input = '2023-10-01T12:34:56PDT';
    const result = parse(input);
    const expected = moment(input).toDate();
    expect(result).toEqual(expected);
  });

  it('should handle input with leading/trailing spaces', () => {
    const input = ' 2023-10-01T12:34:56Z ';
    expect(parse(input)).toEqual(moment(input).toDate());
  });

  it('should handle input with special characters', () => {
    const input = '2023-10-01T12:34:56Z@';
    expect(parse(input)).toEqual(moment(input).toDate());
  });

  it('should handle an array of numbers with invalid values', () => {
    const input = [2023, 13, 1, 12, 34, 56]; // Invalid month
    expect(parse(input)).toEqual(new Date(input[0], input[1], input[2], input[3], input[4], input[5]));
  });

  it('should handle an object input with valid date properties and return the correct date', () => {
    const input = { year: 2023, month: 9, day: 1, hour: 12, minute: 34, second: 56, utcOffset: 0 };
    const result = parse(input as any);
    const expected = moment.utc(input).toDate();
    expect(result).toEqual(expected);
  });

  it('should handle an object input with invalid date properties and return the current date', () => {
    const input = { year: 2023, month: 13, day: 1, hour: 12, minute: 34, second: 56 }; // Invalid month
    const result = parse(input);
    const expected = new Date(input.year, input.month, input.day, input.hour, input.minute, input.second);
    expect(result).toEqual(expected);
  });

  it('should handle an object input with only year and return the correct date', () => {
    const input = { year: 2023 };
    const result = parse(input);
    const expected = moment(input).toDate();
    expect(result).toEqual(expected);
  });

  it('should handle an object input with only month and return the current date', () => {
    const input = { month: 9 };
    const result = parse(input as any);
    const expected = moment(input).toDate();
    expect(result).toEqual(expected);
  });

  it('should handle an object input with only day and return the current date', () => {
    const input = { day: 1 };
    const result = parse(input as any);
    const expected = moment(input).toDate();
    expect(result).toEqual(expected);
  });

  it('should handle an object input with only hour and return the current date', () => {
    const input = { hour: 12 };
    const result = parse(input);
    const expected = moment(input).toDate();
    expect(result).toEqual(expected);
  });

  it('should handle an object input with only minute and return the current date', () => {
    const input = { minute: 34 };
    const result = parse(input as any);
    const expected = moment(input).toDate();
    expect(result).toEqual(expected);
  });

  it('should handle an object input with only second and return the current date', () => {
    const input = { second: 56 };
    const result = parse(input as any);
    const expected = moment(input).toDate();
    expect(result).toEqual(expected);
  });

  it('should handle an object input with nested date properties and return the current date', () => {
    const input = { date: { year: 2023, month: 9, day: 1, hour: 12, minute: 34, second: 56 } };
    const result = parse(input as any);
    const expected = new Date(NaN);
    expect(result).toEqual(expected);
  });

  it('should parse a date with milliseconds from an ISO 8601 string', () => {
    const input = '2023-10-01T12:34:56.789Z';
    const result = parse(input);
    const expected = moment(input).toDate();
    expect(result).toEqual(expected);
  });

  it('should parse a date with milliseconds from an ISO 8601 string with timezone', () => {
    const input = '2023-10-01T12:34:56.789+08:00';
    const result = parse(input);
    const expected = moment(input).toDate();
    expect(result).toEqual(expected);
  });

  it('should parse a date with milliseconds from a custom format string', () => {
    const input = '20231001123456789';
    const format = 'YYYYMMDDHHmmssSSS';
    const result = parse(input, format);
    const expected = moment(input, format).toDate();
    expect(result).toEqual(expected);
  });

  it('should parse a date with milliseconds from a custom format string with timezone', () => {
    const input = '20231001123456789+0800';
    const format = 'YYYYMMDDHHmmssSSSZ';
    const result = parse(input, format);
    const expected = moment(input, format).toDate();
    expect(result).toEqual(expected);
  });

  it('should parse a date with milliseconds from an array of numbers', () => {
    const input = [2023, 9, 1, 12, 34, 56, 789];
    const result = parse(input);
    const expected = moment([2023, 9, 1, 12, 34, 56, 789]).toDate();
    expect(result).toEqual(expected);
  });

  it('should parse a date with milliseconds from an object input with valid date properties', () => {
    const input = { year: 2023, month: 9, day: 1, hour: 12, minute: 34, second: 56, millisecond: 789 };
    const result = parse(input);
    const expected = moment(input).toDate();
    expect(result).toEqual(expected);
  });

  it('should handle an object input with only millisecond and return the current date', () => {
    const input = { millisecond: 789 };
    const result = parse(input);
    const expected = moment(input).toDate();
    expect(result).toEqual(expected);
  });

  it(
    'should handle an object input with nested date properties including milliseconds and return the correct date',
    () => {
      const input = { date: { year: 2023, month: 9, day: 1, hour: 12, minute: 34, second: 56, millisecond: 789 } };
      const result = parse(input as any);
      const expected = moment(input as any).toDate();
      expect(result).toEqual(expected);
    });

  it('should parse a date from a string with UTC timezone offset and UTC format string', () => {
    const input = '2023-10-01T12:34:56+00:00';
    const format = 'YYYY-MM-DDTHH:mm:ssZ';
    const result = parse(input, format);
    const expected = moment.utc(input, format).toDate();
    expect(result).toEqual(expected);
  });

  it('should parse a date from a string with milliseconds and UTC timezone offset and UTC format string', () => {
    const input = '2023-10-01T12:34:56.789+00:00';
    const format = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
    const result = parse(input, format);
    const expected = moment.utc(input, format).toDate();
    expect(result).toEqual(expected);
  });

  it('should parse a date from a string with different timezone and convert to UTC using UTC format string', () => {
    const input = '2023-10-01T12:34:56+08:00';
    const format = 'YYYY-MM-DDTHH:mm:ssZ';
    const result = parse(input, format);
    const expected = moment.utc(input, format).toDate();
    expect(result).toEqual(expected);
  });

  // eslint-disable-next-line max-len
  it('should parse a date from a string with milliseconds and different timezone and convert to UTC using UTC format string', () => {
    const input = '2023-10-01T12:34:56.789+08:00';
    const format = ',';
    const result = parse(input, format);
    const expected = moment(input, format).toDate();
    expect(result).toEqual(expected);
  });

  it('should handle a non-date string and return null', () => {
    const input = 'not-a-date';
    const format = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
    const result = parse(input, format);
    const expected = moment(input, format).toDate();
    expect(result).toEqual(expected);
  });

  it('should handle a string with random characters and return null', () => {
    const input = 'abc123xyz';
    const format = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
    const result = parse(input, format);
    const expected = new Date(NaN);
    expect(result).toEqual(expected);
  });

  it('should handle a string with numbers only and return null', () => {
    const input = '123456789012345';
    const format = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
    const result = parse(input, format);
    const expected = moment(input, format).toDate();
    expect(result).toEqual(expected);
  });

  it('should handle a string with special characters only and return null', () => {
    const input = '!@#$%^&*()';
    const format = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
    const result = parse(input, format);
    const expected = moment(input, format).toDate();
    expect(result).toEqual(expected);
  });

  it('should handle a string with mixed characters and return null', () => {
    const input = '2023-10-01T12:34:56.789Zabc';
    const format = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
    const result = parse(input, format);
    const expected = moment(input, format).toDate();
    expect(result).toEqual(expected);
  });

  it('should handle a string with incorrect separators and return null', () => {
    const input = '2023/10/01 12:34:56.789Z';
    const format = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
    const result = parse(input, format);
    const expected = new Date(NaN);
    expect(result).toEqual(expected);
  });

  it('should handle a string with missing components and return null', () => {
    const input = '2023-10-01T12:34:56Z';
    const format = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
    const result = parse(input, format);
    const expected = new Date(NaN);
    expect(result).toEqual(expected);
  });

  it('should handle a string with extra components and return null', () => {
    const input = '2023-10-01T12:34:56.789Zextra';
    const format = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
    const result = parse(input, format);
    const expected = moment(input, format).toDate();
    expect(result).toEqual(expected);
  });

  it('should handle a string with incorrect timezone format and return null', () => {
    const input = '2023-10-01T12:34:56.789+0800';
    const format = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
    const result = parse(input, format);
    const expected = moment(input, format).toDate();
    expect(result).toEqual(expected);
  });

  it('should handle a string with incorrect month format and return null', () => {
    const input = '2023-1T12:34:56.789Z';
    const format = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
    const result = parse(input, format);
    const expected = moment(input, format).toDate();
    expect(result).toEqual(expected);
  });

  it('should handle a string with incorrect day format and return null', () => {
    const input = '2023-10-1T12:34:56.789Z';
    const format = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
    const result = parse(input, format);
    const expected = moment(input, format).toDate();
    expect(result).toEqual(expected);
  });

  it('should handle a string with incorrect millisecond format', () => {
    const input = '2023-10-01T12:34:56.78Z';
    const format = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
    const result = parse(input, format);
    const expected = moment(input, format).toDate();
    expect(result).toEqual(expected);
  });
});
