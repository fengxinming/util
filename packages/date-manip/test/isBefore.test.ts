import moment from 'moment';
import { describe, expect, it } from 'vitest';

import isBefore from '../src/isBefore';

describe('isBefore', () => {
  it('should check if a date is before another date', () => {
    const date1 = new Date('2023-09-01');
    const date2 = new Date('2023-10-01');
    const result = isBefore(date1, date2, 'day');
    const expected = moment(date1).isBefore(moment(date2));
    expect(result).toBe(expected);
  });

  it('should check if a date is before a specific year', () => {
    const date1 = new Date('2022-12-31');
    const result = isBefore(date1, '2023', 'year');
    const expected = moment(date1).isBefore(moment('2023'));
    expect(result).toBe(expected);
  });

  it('should check if a date is before a specific month', () => {
    const date1 = new Date('2023-09-01');
    const result = isBefore(date1, '2023-10', 'month');
    const expected = moment(date1).isBefore(moment('2023-10-01'));
    expect(result).toBe(expected);
  });

  it('should check if a date is before a specific day', () => {
    const date1 = new Date('2023-10-01');
    const result = isBefore(date1, '2023-10-02', 'day');
    const expected = moment(date1).isBefore(moment('2023-10-02'));
    expect(result).toBe(expected);
  });

  it('should check if a date is before a specific hour', () => {
    const date1 = new Date('2023-10-01T12:00:00');
    const result = isBefore(date1, '2023-10-01T13:00:00', 'hour');
    const expected = moment(date1).isBefore(moment('2023-10-01T13:00:00'));
    expect(result).toBe(expected);
  });

  it('should check if a date is before a specific minute', () => {
    const date1 = new Date('2023-10-01T12:00:00');
    const result = isBefore(date1, '2023-10-01T12:01:00', 'minute');
    const expected = moment(date1).isBefore(moment('2023-10-01T12:01:00'));
    expect(result).toBe(expected);
  });

  it('should check if a date is before a specific second', () => {
    const date1 = new Date('2023-10-01T12:00:00');
    const result = isBefore(date1, '2023-10-01T12:00:01', 'second');
    const expected = moment(date1).isBefore(moment('2023-10-01T12:00:01'));
    expect(result).toBe(expected);
  });

  it('should check if a date is before a specific millisecond', () => {
    const date1 = new Date('2023-10-01T12:00:00.000');
    const result = isBefore(date1, '2023-10-01T12:00:00.500', 'millisecond');
    const expected = moment(date1).isBefore(moment('2023-10-01T12:00:00.500'));
    expect(result).toBe(expected);
  });

  it('should return false if a date is not before another date', () => {
    const date1 = new Date('2023-10-02');
    const date2 = new Date('2023-10-01');
    const result = isBefore(date1, date2, 'day');
    const expected = moment(date1).isBefore(moment(date2));
    expect(result).toBe(expected);
  });

  it('should return false if a date is not before a specific year', () => {
    const date1 = new Date('2023-12-31');
    const result = isBefore(date1, 2023, 'year');
    const expected = moment(date1).isBefore(moment('2023-01-01'));
    expect(result).toBe(expected);
  });

  it('should return false if a date is not before a specific month', () => {
    const date1 = new Date('2023-10-01');
    const result = isBefore(date1, '2023-09', 'month');
    const expected = moment(date1).isBefore(moment('2023-09-01'));
    expect(result).toBe(expected);
  });

  it('should return false if a date is not before a specific day', () => {
    const date1 = new Date('2023-10-02');
    const result = isBefore(date1, '2023-10-01', 'day');
    const expected = moment(date1).isBefore(moment('2023-10-01'));
    expect(result).toBe(expected);
  });

  it('should return false if a date is not before a specific hour', () => {
    const date1 = new Date('2023-10-01T13:00:00');
    const result = isBefore(date1, '2023-10-01T12:00:00', 'hour');
    const expected = moment(date1).isBefore(moment('2023-10-01T12:00:00'));
    expect(result).toBe(expected);
  });

  it('should return false if a date is not before a specific minute', () => {
    const date1 = new Date('2023-10-01T12:01:00');
    const result = isBefore(date1, '2023-10-01T12:00:00', 'minute');
    const expected = moment(date1).isBefore(moment('2023-10-01T12:00:00'));
    expect(result).toBe(expected);
  });

  it('should return false if a date is not before a specific second', () => {
    const date1 = new Date('2023-10-01T12:00:01');
    const result = isBefore(date1, '2023-10-01T12:00:00', 'second');
    const expected = moment(date1).isBefore(moment('2023-10-01T12:00:00'));
    expect(result).toBe(expected);
  });

  it('should return false if a date is not before a specific millisecond', () => {
    const date1 = new Date('2023-10-01T12:00:00.500');
    const result = isBefore(date1, '2023-10-01T12:00:00.000', 'millisecond');
    const expected = moment(date1).isBefore(moment('2023-10-01T12:00:00.000'));
    expect(result).toBe(expected);
  });

  it('should return false if a date is not before a specific time', () => {
    const date1 = new Date('2023-10-01T12:00:00.500');
    const result = isBefore(date1, '2023-10-01T12:00:00.000');
    const expected = moment(date1).isBefore(moment('2023-10-01T12:00:00.000'));
    expect(result).toBe(expected);
  });

  it('should handle date input as string', () => {
    const date1 = new Date('2023-10-01');
    const result = isBefore(date1, '2023-10-02', 'day');
    const expected = moment(date1).isBefore(moment('2023-10-02'));
    expect(result).toBe(expected);
  });

  it('should handle date input as number (timestamp)', () => {
    const date1 = new Date('2023-10-01');
    const timestamp = new Date('2023-10-02').getTime();
    const result = isBefore(date1, timestamp, 'day');
    const expected = moment(date1).isBefore(moment(timestamp));
    expect(result).toBe(expected);
  });

  it('should handle date input as Date object', () => {
    const date1 = new Date('2023-10-01');
    const date2 = new Date('2023-10-02');
    const result = isBefore(date1, date2, 'day');
    const expected = moment(date1).isBefore(moment(date2));
    expect(result).toBe(expected);
  });

  it('should handle date input as array of numbers', () => {
    const date1 = new Date('2023-10-01');
    const dateArray = [2023, 9, 2]; // 2023-10-02
    const result = isBefore(date1, dateArray, 'day');
    const expected = moment(date1).isBefore(moment(dateArray));
    expect(result).toBe(expected);
  });
});
