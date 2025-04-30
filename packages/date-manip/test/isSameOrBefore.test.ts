// tests/isSameOrBefore.test.ts
import moment from 'moment';
import { describe, expect, it } from 'vitest';

import isSameOrBefore from '../src/isSameOrBefore';

describe('isSameOrBefore', () => {
  it('should return true when the date is the same as the input', () => {
    const date = moment('2023-10-01').toDate();
    const input = '2023-10-01';
    expect(isSameOrBefore(date, input, 'day')).toBe(moment(date).isSameOrBefore(input, 'day'));
  });

  it('should return true when the date is before the input', () => {
    const date = moment('2023-09-30').toDate();
    const input = moment('2023-10-01').toDate();
    expect(isSameOrBefore(date, input, 'day')).toBe(moment(date).isSameOrBefore(input, 'day'));
  });

  it('should return false when the date is after the input', () => {
    const date = moment('2023-10-02').toDate();
    const input = moment('2023-10-01').toDate();
    expect(isSameOrBefore(date, input, 'day')).toBe(moment(date).isSameOrBefore(input, 'day'));
  });

  it('should compare by year', () => {
    const date = moment('2023-01-01').toDate();
    expect(isSameOrBefore(date, '2023', 'year')).toBe(moment(date).isSameOrBefore('2023', 'year'));
    expect(isSameOrBefore(date, '2024', 'year')).toBe(moment(date).isSameOrBefore('2024', 'year'));
    expect(isSameOrBefore(date, '2022', 'year')).toBe(moment(date).isSameOrBefore('2022', 'year'));
  });

  it('should compare by month', () => {
    const date = moment('2023-10-01').toDate();
    expect(isSameOrBefore(date, '2023-10', 'month')).toBe(moment(date).isSameOrBefore(moment('2023-10'), 'month'));
    expect(isSameOrBefore(date, '2023-11', 'month')).toBe(moment(date).isSameOrBefore(moment('2023-11'), 'month'));
    expect(isSameOrBefore(date, '2023-09', 'month')).toBe(moment(date).isSameOrBefore(moment('2023-09'), 'month'));
  });

  it('should compare by day', () => {
    const date = moment('2023-10-01').toDate();
    expect(isSameOrBefore(date, '2023-10-01', 'day')).toBe(moment(date).isSameOrBefore(moment('2023-10-01'), 'day'));
    expect(isSameOrBefore(date, '2023-10-02', 'day')).toBe(moment(date).isSameOrBefore(moment('2023-10-02'), 'day'));
    expect(isSameOrBefore(date, '2023-09-30', 'day')).toBe(moment(date).isSameOrBefore(moment('2023-09-30'), 'day'));
  });

  it('should compare by hour', () => {
    const date = moment('2023-10-01T12:00:00').toDate();
    expect(isSameOrBefore(date, '2023-10-01T12:00:00', 'hour'))
      .toBe(moment(date).isSameOrBefore('2023-10-01T12:00:00', 'hour'));
    expect(isSameOrBefore(date, '2023-10-01T13:00:00', 'hour'))
      .toBe(moment(date).isSameOrBefore('2023-10-01T13:00:00', 'hour'));
    expect(isSameOrBefore(date, '2023-10-01T11:00:00', 'hour'))
      .toBe(moment(date).isSameOrBefore('2023-10-01T11:00:00', 'hour'));
  });

  it('should compare by minute', () => {
    const date = moment('2023-10-01T12:00:00').toDate();
    expect(isSameOrBefore(date, '2023-10-01T12:00:00', 'minute'))
      .toBe(moment(date).isSameOrBefore('2023-10-01T12:00:00', 'minute'));
    expect(isSameOrBefore(date, '2023-10-01T12:01:00', 'minute'))
      .toBe(moment(date).isSameOrBefore('2023-10-01T12:01:00', 'minute'));
    expect(isSameOrBefore(date, '2023-10-01T11:59:00', 'minute'))
      .toBe(moment(date).isSameOrBefore('2023-10-01T11:59:00', 'minute'));
  });

  it('should compare by second', () => {
    const date = moment('2023-10-01T12:00:00').toDate();
    expect(isSameOrBefore(date, '2023-10-01T12:00:00', 'second'))
      .toBe(moment(date).isSameOrBefore('2023-10-01T12:00:00', 'second'));
    expect(isSameOrBefore(date, '2023-10-01T12:00:01', 'second'))
      .toBe(moment(date).isSameOrBefore('2023-10-01T12:00:01', 'second'));
    expect(isSameOrBefore(date, '2023-10-01T11:59:59', 'second'))
      .toBe(moment(date).isSameOrBefore('2023-10-01T11:59:59', 'second'));
  });

  it('should compare by millisecond', () => {
    const date = moment('2023-10-01T12:00:00.000').toDate();
    expect(isSameOrBefore(date, '2023-10-01T12:00:00.000', 'millisecond'))
      .toBe(moment(date).isSameOrBefore('2023-10-01T12:00:00.000', 'millisecond'));
    expect(isSameOrBefore(date, '2023-10-01T12:00:00.001', 'millisecond'))
      .toBe(moment(date).isSameOrBefore('2023-10-01T12:00:00.001', 'millisecond'));
    expect(isSameOrBefore(date, '2023-10-01T12:00:00.000', 'millisecond'))
      .toBe(moment(date).isSameOrBefore('2023-10-01T12:00:00.000', 'millisecond'));
  });
});
