import moment from 'moment';
import { describe, expect, it } from 'vitest';

import isAfter from '../src/isAfter';

describe('isAfter', () => {
  it('should check if a date is after another date', () => {
    const date1 = new Date('2023-10-01');
    const date2 = new Date('2023-09-01');
    const result = isAfter(date1, date2, 'day');
    const expected = moment(date1).isAfter(moment(date2));
    expect(result).toBe(expected);
  });

  it('should check if a date is after a specific year', () => {
    const date1 = new Date('2024-01-01');
    const result = isAfter(date1, 2023, 'year');
    const expected = moment(date1).isAfter(moment('2023-01-01'));
    expect(result).toBe(expected);
  });

  it('should check if a date is after a specific month', () => {
    const date1 = new Date('2023-11-01');
    const result = isAfter(date1, '2023-10', 'month');
    const expected = moment(date1).isAfter(moment('2023-10-01'));
    expect(result).toBe(expected);
  });

  it('should check if a date is after a specific day', () => {
    const date1 = new Date('2023-10-02');
    const result = isAfter(date1, '2023-10-01', 'day');
    const expected = moment(date1).isAfter(moment('2023-10-01'));
    expect(result).toBe(expected);
  });

  it('should check if a date is after a specific hour', () => {
    const date1 = new Date('2023-10-01T13:00:00');
    const result = isAfter(date1, '2023-10-01T12:00:00', 'hour');
    const expected = moment(date1).isAfter(moment('2023-10-01T12:00:00'));
    expect(result).toBe(expected);
  });

  it('should check if a date is after a specific minute', () => {
    const date1 = new Date('2023-10-01T12:01:00');
    const result = isAfter(date1, '2023-10-01T12:00:00', 'minute');
    const expected = moment(date1).isAfter(moment('2023-10-01T12:00:00'));
    expect(result).toBe(expected);
  });

  it('should check if a date is after a specific second', () => {
    const date1 = new Date('2023-10-01T12:00:01');
    const result = isAfter(date1, '2023-10-01T12:00:00', 'second');
    const expected = moment(date1).isAfter(moment('2023-10-01T12:00:00'));
    expect(result).toBe(expected);
  });

  it('should check if a date is after a specific millisecond', () => {
    const date1 = new Date('2023-10-01T12:00:00.500');
    const result = isAfter(date1, '2023-10-01T12:00:00.000', 'millisecond');
    const expected = moment(date1).isAfter(moment('2023-10-01T12:00:00.000'));
    expect(result).toBe(expected);
  });

  it('should return false if a date is not after another date', () => {
    const date1 = new Date('2023-10-01');
    const date2 = new Date('2023-10-02');
    const result = isAfter(date1, date2, 'day');
    const expected = moment(date1).isAfter(moment(date2));
    expect(result).toBe(expected);
  });

  it('should return false if a date is not after a specific year', () => {
    const date1 = new Date('2022-12-31');
    const input = '2023';
    const result = isAfter(date1, input, 'year');
    const expected = moment(date1).isAfter(input, 'year');
    expect(result).toBe(expected);
  });

  it('should return false if a date is not after a specific month', () => {
    const date1 = new Date('2023-09-30');
    const input = '2023-10';
    const result = isAfter(date1, input, 'month');
    const expected = moment(date1).isAfter(input, 'month');
    expect(result).toBe(expected);
  });

  it('should return false if a date is not after a specific day', () => {
    const date1 = new Date('2023-10-01');
    const input = '2023-10-02';
    const result = isAfter(date1, input, 'day');
    const expected = moment(date1).isAfter(input, 'day');
    expect(result).toBe(expected);
  });

  it('should return false if a date is not after a specific hour', () => {
    const date1 = new Date('2023-10-01T12:00:00');
    const input = '2023-10-01T12:30:00';
    const result = isAfter(date1, input, 'hour');
    const expected = moment(date1).isAfter(input, 'hour');
    expect(result).toBe(expected);
  });

  it('should return false if a date is not after a specific minute', () => {
    const date1 = new Date('2023-10-01T12:00:00');
    const input = '2023-10-01T12:01:00';
    const result = isAfter(date1, input, 'minute');
    const expected = moment(date1).isAfter(input, 'minute');
    expect(result).toBe(expected);
  });

  it('should return false if a date is not after a specific second', () => {
    const date1 = new Date('2023-10-01T12:00:00');
    const input = '2023-10-01T12:00:01';
    const result = isAfter(date1, input, 'second');
    const expected = moment(date1).isAfter(moment(input, 'second'));
    expect(result).toBe(expected);
  });

  it('should return false if a date is not after a specific millisecond', () => {
    const date1 = new Date('2023-10-01T12:00:00.000');
    const input = '2023-10-01T12:00:00.500';
    const result = isAfter(date1, input, 'millisecond');
    const expected = moment(date1).isAfter(input, 'millisecond');
    expect(result).toBe(expected);
  });

  it('should return false if a date is not after a specific time', () => {
    const date1 = new Date('2023-10-01T12:00:00.000');
    const input = '2023-10-01T12:00:00.500';
    const result = isAfter(date1, input);
    const expected = moment(date1).isAfter(input);
    expect(result).toBe(expected);
  });
});
