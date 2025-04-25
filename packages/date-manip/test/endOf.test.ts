import moment from 'moment';
import { describe, expect, it } from 'vitest';

import endOf from '../src/endOf';

describe('endOf', () => {
  it('should set the date to the end of the year', () => {
    const date = new Date('2023-01-01');
    const result = endOf(new Date(date), 'year');
    const expected = moment(date).endOf('year').toDate();
    expect(result).toEqual(expected);
  });

  it('should set the date to the end of the month', () => {
    const date = new Date('2023-10-01');
    const result = endOf(new Date(date), 'month');
    const expected = moment(date).endOf('month').toDate();
    expect(result).toEqual(expected);
  });

  it('should set the date to the end of the day', () => {
    const date = new Date('2023-10-01T12:00:00');
    const result = endOf(new Date(date), 'day');
    const expected = moment(date).endOf('day').toDate();
    expect(result).toEqual(expected);
  });

  it('should set the date to the end of the date', () => {
    const date = new Date('2023-10-01T12:00:00');
    const result = endOf(new Date(date), 'date');
    const expected = moment(date).endOf('date').toDate();
    expect(result).toEqual(expected);
  });

  it('should set the date to the end of the hour', () => {
    const date = new Date('2023-10-01T12:00:00');
    const result = endOf(new Date(date), 'hour');
    const expected = moment(date).endOf('hour').toDate();
    expect(result).toEqual(expected);
  });

  it('should set the date to the end of the minute', () => {
    const date = new Date('2023-10-01T12:00:00');
    const result = endOf(new Date(date), 'minute');
    const expected = moment(date).endOf('minute').toDate();
    expect(result).toEqual(expected);
  });

  it('should set the date to the end of the second', () => {
    const date = new Date('2023-10-01T12:00:00');
    const result = endOf(new Date(date), 'second');
    const expected = moment(date).endOf('second').toDate();
    expect(result).toEqual(expected);
  });

  it('should set the date to the end of the millisecond', () => {
    const date = new Date('2023-10-01T12:00:00');
    const result = endOf(new Date(date), 'millisecond');
    const expected = moment(date).endOf('millisecond').toDate();
    expect(result).toEqual(expected);
  });
});
