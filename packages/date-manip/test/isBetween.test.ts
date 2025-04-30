import moment from 'moment';
import { describe, expect, it } from 'vitest';

import isBetween from '../src/isBetween';

describe('isBetween', () => {
  it('should return true when date is between two dates (exclusive)', () => {
    const date = new Date('2023-10-01');
    const from = '2023-09-01';
    const to = '2023-11-01';
    expect(isBetween(date, from, to, 'day')).toBe(moment(date).isBetween(from, to, 'day'));
  });

  it('should return false when date is not between two dates (exclusive)', () => {
    const date = new Date('2023-08-01');
    const from = '2023-09-01';
    const to = '2023-11-01';
    expect(isBetween(date, from, to, 'day')).toBe(moment(date).isBetween(from, to, 'day'));
  });

  it('should return true when date is between two years (inclusive on start, exclusive on end)', () => {
    const date = new Date('2023-01-01');
    const from = '2022-01-01';
    const to = '2024-01-01';
    expect(isBetween(date, from, to, 'year', '[)'))
      .toBe(moment(date).isBetween(from, to, 'year', '[)'));
  });

  it('should return true when date is between two months (exclusive on start, inclusive on end)', () => {
    const date = new Date('2023-10-01');
    const from = '2023-09-01';
    const to = '2023-11-01';
    expect(isBetween(date, from, to, 'month', '(]'))
      .toBe(moment(date).isBetween(from, to, 'month', '(]'));
  });

  it('should return true when date is exactly on the boundary with inclusive option', () => {
    const date = new Date('2023-10-01');
    const from = '2023-10-01';
    const to = '2023-10-01';
    expect(isBetween(date, from, to, 'day', '[]'))
      .toBe(moment(date).isBetween(from, to, 'day', '[]'));
  });

  it('should return false when date is exactly on the boundary with exclusive option', () => {
    const date = new Date('2023-10-01');
    const from = '2023-10-01';
    const to = '2023-10-01';
    expect(isBetween(date, from, to, 'day', '()'))
      .toBe(moment(date).isBetween(from, to, 'day', '()'));
  });

  it('should return true when date is between two days (exclusive)', () => {
    const date = new Date('2023-10-02');
    const from = '2023-10-01';
    const to = '2023-10-03';
    expect(isBetween(date, from, to, 'day')).toBe(moment(date).isBetween(from, to, 'day'));
  });

  it('should return true when date is between two hours (exclusive)', () => {
    const date = new Date('2023-10-01T12:00:00');
    const from = '2023-10-01T11:00:00';
    const to = '2023-10-01T13:00:00';
    expect(isBetween(date, from, to, 'hour')).toBe(moment(date).isBetween(from, to, 'hour'));
  });

  it('should return true when date is between two minutes (exclusive)', () => {
    const date = new Date('2023-10-01T12:01:00');
    const from = '2023-10-01T12:00:00';
    const to = '2023-10-01T12:02:00';
    expect(isBetween(date, from, to, 'minute')).toBe(moment(date).isBetween(from, to, 'minute'));
  });

  it('should return true when date is between two seconds (exclusive)', () => {
    const date = new Date('2023-10-01T12:00:01');
    const from = '2023-10-01T12:00:00';
    const to = '2023-10-01T12:00:02';
    expect(isBetween(date, from, to, 'second')).toBe(moment(date).isBetween(from, to, 'second'));
  });

  it('should return true when date is between two milliseconds (exclusive)', () => {
    const date = new Date('2023-10-01T12:00:00.500');
    const from = '2023-10-01T12:00:00.000';
    const to = '2023-10-01T12:00:00.999';
    expect(isBetween(date, from, to, 'millisecond')).toBe(moment(date).isBetween(from, to, 'millisecond'));
  });

  // Additional test cases
  it('should return false when date is exactly on the start boundary with exclusive start', () => {
    const date = new Date('2023-10-01');
    const from = '2023-10-01';
    const to = '2023-10-02';
    expect(isBetween(date, from, to, 'day', '(]'))
      .toBe(moment(date).isBetween(from, to, 'day', '(]'));
  });

  it('should return true when date is exactly on the start boundary with inclusive start', () => {
    const date = new Date('2023-10-01');
    const from = '2023-10-01';
    const to = '2023-10-02';
    expect(isBetween(date, from, to, 'day', '[)'))
      .toBe(moment(date).isBetween(from, to, 'day', '[)'));
  });

  it('should return false when date is exactly on the end boundary with exclusive end', () => {
    const date = new Date('2023-10-02');
    const from = '2023-10-01';
    const to = '2023-10-02';
    expect(isBetween(date, from, to, 'day', '[)'))
      .toBe(moment(date).isBetween(from, to, 'day', '[)'));
  });

  it('should return true when date is exactly on the end boundary with inclusive end', () => {
    const date = new Date('2023-10-02');
    const from = '2023-10-01';
    const to = '2023-10-02';
    expect(isBetween(date, from, to, 'day', '(]'))
      .toBe(moment(date).isBetween(from, to, 'day', '(]'));
  });

  it('should return true when date is between two years (exclusive)', () => {
    const date = new Date('2023-01-01');
    const from = '2022-01-01';
    const to = '2024-01-01';
    expect(isBetween(date, from, to, 'year')).toBe(moment(date).isBetween(from, to, 'year'));
  });

  it('should return false when date is not between two years (exclusive)', () => {
    const date = new Date('2021-01-01');
    const from = '2022-01-01';
    const to = '2024-01-01';
    expect(isBetween(date, from, to, 'year')).toBe(moment(date).isBetween(from, to, 'year'));
  });

  it('should return true when date is between two months (exclusive)', () => {
    const date = new Date('2023-10-01');
    const from = '2023-09-01';
    const to = '2023-11-01';
    expect(isBetween(date, from, to, 'month')).toBe(moment(date).isBetween(from, to, 'month'));
  });

  it('should return false when date is not between two months (exclusive)', () => {
    const date = new Date('2023-08-01');
    const from = '2023-09-01';
    const to = '2023-11-01';
    expect(isBetween(date, from, to, 'month')).toBe(moment(date).isBetween(from, to, 'month'));
  });

  it('should return true when date is between two days (inclusive on start, exclusive on end)', () => {
    const date = new Date('2023-10-01');
    const from = '2023-10-01';
    const to = '2023-10-02';
    expect(isBetween(date, from, to, 'day', '[)'))
      .toBe(moment(date).isBetween(from, to, 'day', '[)'));
  });

  it('should return true when date is between two days (exclusive on start, inclusive on end)', () => {
    const date = new Date('2023-10-01');
    const from = '2023-09-30';
    const to = '2023-10-01';
    expect(isBetween(date, from, to, 'day', '(]'))
      .toBe(moment(date).isBetween(from, to, 'day', '(]'));
  });

  it('should return true when date is between two days (inclusive)', () => {
    const date = new Date('2023-10-01');
    const from = '2023-10-01';
    const to = '2023-10-01';
    expect(isBetween(date, from, to, 'day', '[]'))
      .toBe(moment(date).isBetween(from, to, 'day', '[]'));
  });

  it('should return false when date is before the start date', () => {
    const date = new Date('2023-09-01');
    const from = '2023-10-01';
    const to = '2023-11-01';
    expect(isBetween(date, from, to, 'day')).toBe(moment(date).isBetween(from, to, 'day'));
  });

  it('should return false when date is after the end date', () => {
    const date = new Date('2023-11-01');
    const from = '2023-10-01';
    const to = '2023-10-31';
    expect(isBetween(date, from, to, 'day')).toBe(moment(date).isBetween(from, to, 'day'));
  });

  it('should return true when date is between two hours (inclusive on start, exclusive on end)', () => {
    const date = new Date('2023-10-01T12:00:00');
    const from = '2023-10-01T12:00:00';
    const to = '2023-10-01T13:00:00';
    expect(isBetween(date, from, to, 'hour', '[)'))
      .toBe(moment(date).isBetween(from, to, 'hour', '[)'));
  });

  it('should return true when date is between two hours (exclusive on start, inclusive on end)', () => {
    const date = new Date('2023-10-01T12:59:59');
    const from = '2023-10-01T12:00:00';
    const to = '2023-10-01T13:00:00';
    expect(isBetween(date, from, to, 'hour', '(]'))
      .toBe(moment(date).isBetween(from, to, 'hour', '(]'));
  });

  it('should return true when date is between two minutes (inclusive on start, exclusive on end)', () => {
    const date = new Date('2023-10-01T12:01:00');
    const from = '2023-10-01T12:01:00';
    const to = '2023-10-01T12:02:00';
    expect(isBetween(date, from, to, 'minute', '[)'))
      .toBe(moment(date).isBetween(from, to, 'minute', '[)'));
  });

  it('should return true when date is between two minutes (exclusive on start, inclusive on end)', () => {
    const date = new Date('2023-10-01T12:01:59');
    const from = '2023-10-01T12:01:00';
    const to = '2023-10-01T12:02:00';
    expect(isBetween(date, from, to, 'minute', '(]'))
      .toBe(moment(date).isBetween(from, to, 'minute', '(]'));
  });

  it('should return true when date is between two seconds (inclusive on start, exclusive on end)', () => {
    const date = new Date('2023-10-01T12:00:01');
    const from = '2023-10-01T12:00:01';
    const to = '2023-10-01T12:00:02';
    expect(isBetween(date, from, to, 'second', '[)'))
      .toBe(moment(date).isBetween(from, to, 'second', '[)'));
  });

  it('should return true when date is between two seconds (exclusive on start, inclusive on end)', () => {
    const date = new Date('2023-10-01T12:00:01');
    const from = '2023-10-01T12:00:00';
    const to = '2023-10-01T12:00:01';
    expect(isBetween(date, from, to, 'second', '(]'))
      .toBe(moment(date).isBetween(from, to, 'second', '(]'));
  });

  it('should return true when date is between two milliseconds (inclusive on start, exclusive on end)', () => {
    const date = new Date('2023-10-01T12:00:00.500');
    const from = '2023-10-01T12:00:00.500';
    const to = '2023-10-01T12:00:00.999';
    expect(isBetween(date, from, to, 'millisecond', '[)'))
      .toBe(moment(date).isBetween(from, to, 'millisecond', '[)'));
  });

  it('should return true when date is between two milliseconds (exclusive on start, inclusive on end)', () => {
    const date = new Date('2023-10-01T12:00:00.500');
    const from = '2023-10-01T12:00:00.000';
    const to = '2023-10-01T12:00:00.500';
    expect(isBetween(date, from, to, 'millisecond', '(]'))
      .toBe(moment(date).isBetween(from, to, 'millisecond', '(]'));
  });
});
