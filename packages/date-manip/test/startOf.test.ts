import moment from 'moment';
import { describe, expect, it } from 'vitest';

import startOf from '../src/startOf';

describe('startOf', () => {
  it('should set the start of the year', () => {
    const date = new Date('2023-10-01T12:34:56.789');
    const result = startOf(new Date(date), 'year');
    const expected = moment(date).startOf('year').toDate();
    expect(result).toEqual(expected);
  });

  it('should set the start of the month', () => {
    const date = new Date('2023-10-01T12:34:56.789');
    const result = startOf(new Date(date), 'month');
    const expected = moment(date).startOf('month').toDate();
    expect(result).toEqual(expected);
  });

  it('should set the start of the day', () => {
    const date = new Date('2023-10-01T12:34:56.789');
    const result = startOf(new Date(date), 'day');
    const expected = moment(date).startOf('day').toDate();
    expect(result).toEqual(expected);
  });

  it('should set the start of the hour', () => {
    const date = new Date('2023-10-01T12:34:56.789');
    const result = startOf(new Date(date), 'hour');
    const expected = moment(date).startOf('hour').toDate();
    expect(result).toEqual(expected);
  });

  it('should set the start of the minute', () => {
    const date = new Date('2023-10-01T12:34:56.789');
    const result = startOf(new Date(date), 'minute');
    const expected = moment(date).startOf('minute').toDate();
    expect(result).toEqual(expected);
  });

  it('should set the start of the second', () => {
    const date = new Date('2023-10-01T12:34:56.789');
    const result = startOf(new Date(date), 'second');
    const expected = moment(date).startOf('second').toDate();
    expect(result).toEqual(expected);
  });

  it('should handle setting the start of the year correctly', () => {
    const date = new Date('2023-10-01T12:34:56.789');
    const result = startOf(new Date(date), 'year');
    const expected = moment(date).startOf('year').toDate();
    expect(result).toEqual(expected);
  });

  it('should handle setting the start of the month correctly', () => {
    const date = new Date('2023-10-01T12:34:56.789');
    const result = startOf(new Date(date), 'month');
    const expected = moment(date).startOf('month').toDate();
    expect(result).toEqual(expected);
  });

  it('should handle setting the start of the day correctly', () => {
    const date = new Date('2023-10-01T12:34:56.789');
    const result = startOf(new Date(date), 'day');
    const expected = moment(date).startOf('day').toDate();
    expect(result).toEqual(expected);
  });

  it('should handle setting the start of the hour correctly', () => {
    const date = new Date('2023-10-01T12:34:56.789');
    const result = startOf(new Date(date), 'hour');
    const expected = moment(date).startOf('hour').toDate();
    expect(result).toEqual(expected);
  });

  it('should handle setting the start of the minute correctly', () => {
    const date = new Date('2023-10-01T12:34:56.789');
    const result = startOf(new Date(date), 'minute');
    const expected = moment(date).startOf('minute').toDate();
    expect(result).toEqual(expected);
  });

  it('should handle setting the start of the second correctly', () => {
    const date = new Date('2023-10-01T12:34:56.789');
    const result = startOf(new Date(date), 'second');
    const expected = moment(date).startOf('second').toDate();
    expect(result).toEqual(expected);
  });

  it('should handle setting the start of the day using "date" unit', () => {
    const date = new Date('2023-10-01T12:34:56.789');
    const result = startOf(new Date(date), 'date');
    const expected = moment(date).startOf('day').toDate();
    expect(result).toEqual(expected);
  });

  it('should handle setting the start of the day using "day" unit', () => {
    const date = new Date('2023-10-01T12:34:56.789');
    const result = startOf(new Date(date), 'day');
    const expected = moment(date).startOf('day').toDate();
    expect(result).toEqual(expected);
  });

  it('should handle setting the start of the year using "year" unit', () => {
    const date = new Date('2023-10-01T12:34:56.789');
    const result = startOf(new Date(date), 'year');
    const expected = moment(date).startOf('year').toDate();
    expect(result).toEqual(expected);
  });

  it('should handle setting the start of the month using "month" unit', () => {
    const date = new Date('2023-10-01T12:34:56.789');
    const result = startOf(new Date(date), 'month');
    const expected = moment(date).startOf('month').toDate();
    expect(result).toEqual(expected);
  });

  it('should handle setting the start of the hour using "hour" unit', () => {
    const date = new Date('2023-10-01T12:34:56.789');
    const result = startOf(new Date(date), 'hour');
    const expected = moment(date).startOf('hour').toDate();
    expect(result).toEqual(expected);
  });

  it('should handle setting the start of the minute using "minute" unit', () => {
    const date = new Date('2023-10-01T12:34:56.789');
    const result = startOf(new Date(date), 'minute');
    const expected = moment(date).startOf('minute').toDate();
    expect(result).toEqual(expected);
  });

  it('should handle setting the start of the second using "second" unit', () => {
    const date = new Date('2023-10-01T12:34:56.789');
    const result = startOf(new Date(date), 'second');
    const expected = moment(date).startOf('second').toDate();
    expect(result).toEqual(expected);
  });
});
