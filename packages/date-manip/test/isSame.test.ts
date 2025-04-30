import moment from 'moment';
import { describe, expect, it } from 'vitest';

import isSame from '../src/isSame';

describe('isSame', () => {
  it('should return true when dates are the same (day)', () => {
    const date1 = moment('2023-10-01').toDate();
    const date2 = '2023-10-01';
    expect(isSame(date1, date2, 'day')).toBe(moment(date1).isSame(date2, 'day'));
  });

  it('should return false when dates are not the same (day)', () => {
    const date1 = moment('2023-10-01').toDate();
    const date2 = '2023-10-02';
    expect(isSame(date1, date2, 'day')).toBe(moment(date1).isSame(date2, 'day'));
  });

  it('should return true when dates are the same (year)', () => {
    const date1 = moment('2023-10-01').toDate();
    const date2 = '2023';
    expect(isSame(date1, date2, 'year')).toBe(moment(date1).isSame(date2, 'year'));
  });

  it('should return false when dates are not the same (year)', () => {
    const date1 = moment('2023-10-01').toDate();
    const date2 = '2024';
    expect(isSame(date1, date2, 'year')).toBe(moment(date1).isSame(date2, 'year'));
  });

  it('should return true when dates are the same (month)', () => {
    const date1 = moment('2023-10-01').toDate();
    const date2 = '2023-10';
    expect(isSame(date1, date2, 'month')).toBe(moment(date1).isSame(date2, 'month'));
  });

  it('should return false when dates are not the same (month)', () => {
    const date1 = moment('2023-10-01').toDate();
    const date2 = '2023-11';
    expect(isSame(date1, date2, 'month')).toBe(moment(date1).isSame(date2, 'month'));
  });

  it('should return true when dates are the same (hour)', () => {
    const date1 = moment('2023-10-01T12:00:00').toDate();
    const date2 = '2023-10-01T12:00:00';
    expect(isSame(date1, date2, 'hour')).toBe(moment(date1).isSame(date2, 'hour'));
  });

  it('should return false when dates are not the same (hour)', () => {
    const date1 = moment('2023-10-01T12:00:00').toDate();
    const date2 = '2023-10-01T13:00:00';
    expect(isSame(date1, date2, 'hour')).toBe(moment(date1).isSame(date2, 'hour'));
  });

  it('should return true when dates are the same (minute)', () => {
    const date1 = moment('2023-10-01T12:01:00').toDate();
    const date2 = '2023-10-01T12:01:00';
    expect(isSame(date1, date2, 'minute')).toBe(moment(date1).isSame(date2, 'minute'));
  });

  it('should return false when dates are not the same (minute)', () => {
    const date1 = moment('2023-10-01T12:01:00').toDate();
    const date2 = '2023-10-01T12:02:00';
    expect(isSame(date1, date2, 'minute')).toBe(moment(date1).isSame(date2, 'minute'));
  });

  it('should return true when dates are the same (second)', () => {
    const date1 = moment('2023-10-01T12:00:01').toDate();
    const date2 = '2023-10-01T12:00:01';
    expect(isSame(date1, date2, 'second')).toBe(moment(date1).isSame(date2, 'second'));
  });

  it('should return false when dates are not the same (second)', () => {
    const date1 = moment('2023-10-01T12:00:01').toDate();
    const date2 = '2023-10-01T12:00:02';
    expect(isSame(date1, date2, 'second')).toBe(moment(date1).isSame(date2, 'second'));
  });

  it('should return true when dates are the same (millisecond)', () => {
    const date1 = moment('2023-10-01T12:00:00.500').toDate();
    const date2 = '2023-10-01T12:00:00.500';
    expect(isSame(date1, date2, 'millisecond')).toBe(moment(date1).isSame(date2, 'millisecond'));
  });

  it('should return false when dates are not the same (millisecond)', () => {
    const date1 = moment('2023-10-01T12:00:00.500').toDate();
    const date2 = '2023-10-01T12:00:00.501';
    expect(isSame(date1, date2, 'millisecond')).toBe(moment(date1).isSame(date2, 'millisecond'));
  });

  it('should return false when dates are not the same (time)', () => {
    const date1 = moment('2023-10-01T12:00:00.500').toDate();
    const date2 = '2023-10-01T12:00:00.501';
    expect(isSame(date1, date2, 'xxx' as any)).toBe(moment(date1).isSame(date2));
  });

  it('should return true when dates are the same (day) with Date object', () => {
    const date1 = moment('2023-10-01').toDate();
    const date2 = moment('2023-10-01').toDate();
    expect(isSame(date1, date2, 'day')).toBe(moment(date1).isSame(date2, 'day'));
  });

  it('should return false when dates are not the same (day) with Date object', () => {
    const date1 = moment('2023-10-01').toDate();
    const date2 = moment('2023-10-02').toDate();
    expect(isSame(date1, date2, 'day')).toBe(moment(date1).isSame(date2, 'day'));
  });

  it('should return true when dates are the same (year) with Date object', () => {
    const date1 = moment('2023-10-01').toDate();
    const date2 = moment('2023-01-01').toDate();
    expect(isSame(date1, date2, 'year')).toBe(moment(date1).isSame(date2, 'year'));
  });

  it('should return false when dates are not the same (year) with Date object', () => {
    const date1 = moment('2023-10-01').toDate();
    const date2 = moment('2024-01-01').toDate();
    expect(isSame(date1, date2, 'year')).toBe(moment(date1).isSame(date2, 'year'));
  });

  it('should return true when dates are the same (month) with Date object', () => {
    const date1 = moment('2023-10-01').toDate();
    const date2 = moment('2023-10-15').toDate();
    expect(isSame(date1, date2, 'month')).toBe(moment(date1).isSame(date2, 'month'));
  });

  it('should return false when dates are not the same (month) with Date object', () => {
    const date1 = moment('2023-10-01').toDate();
    const date2 = moment('2023-11-15').toDate();
    expect(isSame(date1, date2, 'month')).toBe(moment(date1).isSame(date2, 'month'));
  });

  it('should return true when dates are the same (hour) with Date object', () => {
    const date1 = moment('2023-10-01T12:00:00').toDate();
    const date2 = moment('2023-10-01T12:30:00').toDate();
    expect(isSame(date1, date2, 'hour')).toBe(moment(date1).isSame(date2, 'hour'));
  });

  it('should return false when dates are not the same (hour) with Date object', () => {
    const date1 = moment('2023-10-01T12:00:00').toDate();
    const date2 = moment('2023-10-01T13:30:00').toDate();
    expect(isSame(date1, date2, 'hour')).toBe(moment(date1).isSame(date2, 'hour'));
  });

  it('should return true when dates are the same (minute) with Date object', () => {
    const date1 = moment('2023-10-01T12:01:00').toDate();
    const date2 = moment('2023-10-01T12:01:30').toDate();
    expect(isSame(date1, date2, 'minute')).toBe(moment(date1).isSame(date2, 'minute'));
  });

  it('should return false when dates are not the same (minute) with Date object', () => {
    const date1 = moment('2023-10-01T12:01:00').toDate();
    const date2 = moment('2023-10-01T12:02:30').toDate();
    expect(isSame(date1, date2, 'minute')).toBe(moment(date1).isSame(date2, 'minute'));
  });

  it('should return true when dates are the same (second) with Date object', () => {
    const date1 = moment('2023-10-01T12:00:01').toDate();
    const date2 = moment('2023-10-01T12:00:01').toDate();
    expect(isSame(date1, date2, 'second')).toBe(moment(date1).isSame(date2, 'second'));
  });

  it('should return false when dates are not the same (second) with Date object', () => {
    const date1 = moment('2023-10-01T12:00:01').toDate();
    const date2 = moment('2023-10-01T12:00:02').toDate();
    expect(isSame(date1, date2, 'second')).toBe(moment(date1).isSame(date2, 'second'));
  });

  it('should return true when dates are the same (millisecond) with Date object', () => {
    const date1 = moment('2023-10-01T12:00:00.500').toDate();
    const date2 = moment('2023-10-01T12:00:00.500').toDate();
    expect(isSame(date1, date2, 'millisecond')).toBe(moment(date1).isSame(date2, 'millisecond'));
  });

  it('should return false when dates are not the same (millisecond) with Date object', () => {
    const date1 = moment('2023-10-01T12:00:00.500').toDate();
    const date2 = moment('2023-10-01T12:00:00.501').toDate();
    expect(isSame(date1, date2, 'millisecond')).toBe(moment(date1).isSame(date2, 'millisecond'));
  });
});
