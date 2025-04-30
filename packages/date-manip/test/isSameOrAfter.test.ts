import moment from 'moment';
import { describe, expect, it } from 'vitest';

import isSameOrAfter from '../src/isSameOrAfter';

describe('isSameOrAfter', () => {
  it('should return true when the date is the same as the input', () => {
    const date = moment('2023-10-01').toDate();
    const input = '2023-10-01';
    expect(isSameOrAfter(date, input, 'day')).toBe(moment(date).isSameOrAfter(input, 'day'));
  });

  it('should return true when the date is after the input', () => {
    const date = moment('2023-10-02').toDate();
    const input = moment('2023-10-01').toDate();
    expect(isSameOrAfter(date, input, 'day')).toBe(moment(date).isSameOrAfter(input, 'day'));
  });

  it('should return false when the date is before the input', () => {
    const date = moment('2023-09-30').toDate();
    const input = moment('2023-10-01').toDate();
    expect(isSameOrAfter(date, input, 'day')).toBe(moment(date).isSameOrAfter(input, 'day'));
  });

  it('should compare by year', () => {
    const date = moment('2023-01-01').toDate();
    expect(isSameOrAfter(date, '2023', 'year')).toBe(moment(date).isSameOrAfter('2023', 'year'));
    expect(isSameOrAfter(date, '2022', 'year')).toBe(moment(date).isSameOrAfter('2022', 'year'));
    expect(isSameOrAfter(date, '2024', 'year')).toBe(moment(date).isSameOrAfter('2024', 'year'));
  });

  it('should compare by month', () => {
    const date = moment('2023-10-01').toDate();
    expect(isSameOrAfter(date, '2023-10', 'month')).toBe(moment(date).isSameOrAfter('2023-10', 'month'));
    expect(isSameOrAfter(date, '2023-09', 'month')).toBe(moment(date).isSameOrAfter('2023-09', 'month'));
    expect(isSameOrAfter(date, '2023-11', 'month')).toBe(moment(date).isSameOrAfter('2023-11', 'month'));
  });

  it('should compare by day', () => {
    const date = moment('2023-10-01').toDate();
    expect(isSameOrAfter(date, '2023-10-01', 'day')).toBe(moment(date).isSameOrAfter('2023-10-01', 'day'));
    expect(isSameOrAfter(date, '2023-09-30', 'day')).toBe(moment(date).isSameOrAfter('2023-09-30', 'day'));
    expect(isSameOrAfter(date, '2023-10-02', 'day')).toBe(moment(date).isSameOrAfter('2023-10-02', 'day'));
  });

  it('should compare by hour', () => {
    const date = moment('2023-10-01T12:00:00').toDate();
    expect(isSameOrAfter(date, '2023-10-01T12:00:00', 'hour'))
      .toBe(moment(date).isSameOrAfter('2023-10-01T12:00:00', 'hour'));
    expect(isSameOrAfter(date, '2023-10-01T11:00:00', 'hour'))
      .toBe(moment(date).isSameOrAfter('2023-10-01T11:00:00', 'hour'));
    expect(isSameOrAfter(date, '2023-10-01T13:00:00', 'hour'))
      .toBe(moment(date).isSameOrAfter('2023-10-01T13:00:00', 'hour'));
  });

  it('should compare by minute', () => {
    const date = moment('2023-10-01T12:00:00').toDate();
    expect(isSameOrAfter(date, '2023-10-01T12:00:00', 'minute'))
      .toBe(moment(date).isSameOrAfter('2023-10-01T12:00:00', 'minute'));
    expect(isSameOrAfter(date, '2023-10-01T11:59:00', 'minute'))
      .toBe(moment(date).isSameOrAfter('2023-10-01T11:59:00', 'minute'));
    expect(isSameOrAfter(date, '2023-10-01T12:01:00', 'minute'))
      .toBe(moment(date).isSameOrAfter('2023-10-01T12:01:00', 'minute'));
  });

  it('should compare by second', () => {
    const date = moment('2023-10-01T12:00:00').toDate();
    expect(isSameOrAfter(date, '2023-10-01T12:00:00', 'second'))
      .toBe(moment(date).isSameOrAfter('2023-10-01T12:00:00', 'second'));
    expect(isSameOrAfter(date, '2023-10-01T11:59:59', 'second'))
      .toBe(moment(date).isSameOrAfter('2023-10-01T11:59:59', 'second'));
    expect(isSameOrAfter(date, '2023-10-01T12:00:01', 'second'))
      .toBe(moment(date).isSameOrAfter('2023-10-01T12:00:01', 'second'));
  });

  it('should compare by millisecond', () => {
    const date = moment('2023-10-01T12:00:00.000').toDate();
    expect(isSameOrAfter(date, '2023-10-01T12:00:00.000', 'millisecond'))
      .toBe(moment(date).isSameOrAfter('2023-10-01T12:00:00.000', 'millisecond'));
    expect(isSameOrAfter(date, '2023-10-01T12:00:00.000', 'millisecond'))
      .toBe(moment(date).isSameOrAfter('2023-10-01T12:00:00.000', 'millisecond'));
    expect(isSameOrAfter(date, '2023-10-01T12:00:00.001', 'millisecond'))
      .toBe(moment(date).isSameOrAfter('2023-10-01T12:00:00.001', 'millisecond'));
  });
});
