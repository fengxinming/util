import moment from 'moment';
import { describe, expect, it } from 'vitest';

import add from '../src/add';

describe('add', () => {
  it('should add 5 days to a date', () => {
    const date = new Date('2023-10-01T12:00:00');
    const compared = moment(+date); // 创建 moment 实例
    const result = add(date, 5, 'day');
    const expected = compared.add(5, 'day').toDate();
    expect(result).toEqual(expected);
  });

  it('should add 3 months to a date', () => {
    const date = new Date('2023-10-01T12:00:00');
    const compared = moment(+date); // 创建 moment 实例
    const result = add(date, 3, 'month');
    const expected = compared.add(3, 'month').toDate();
    expect(result).toEqual(expected);
  });

  it('should add 2 years to a date', () => {
    const date = new Date('2023-10-01T12:00:00');
    const compared = moment(+date); // 创建 moment 实例
    const result = add(date, 2, 'year');
    const expected = compared.add(2, 'year').toDate();
    expect(result).toEqual(expected);
  });

  it('should add 1 hour to a date', () => {
    const date = new Date('2023-10-01T12:00:00');
    const compared = moment(+date); // 创建 moment 实例
    const result = add(date, 1, 'hour');
    const expected = compared.add(1, 'hour').toDate();
    expect(result).toEqual(expected);
  });

  it('should add 30 minutes to a date', () => {
    const date = new Date('2023-10-01T12:00:00');
    const compared = moment(+date); // 创建 moment 实例
    const result = add(date, 30, 'minute');
    const expected = compared.add(30, 'minute').toDate();
    expect(result).toEqual(expected);
  });

  it('should add 45 seconds to a date', () => {
    const date = new Date('2023-10-01T12:00:00');
    const compared = moment(+date); // 创建 moment 实例
    const result = add(date, 45, 'second');
    const expected = compared.add(45, 'second').toDate();
    expect(result).toEqual(expected);
  });

  it('should add 500 milliseconds to a date', () => {
    const date = new Date('2023-10-01T12:00:00.000');
    const compared = moment(+date); // 创建 moment 实例
    const result = add(date, 500, 'millisecond');
    const expected = compared.add(500, 'millisecond').toDate();
    expect(result).toEqual(expected);
  });

  it('should add multiple year, month, and day units using an object', () => {
    const date = new Date('2023-10-01T12:00:00');
    const compared = moment(+date); // 创建 moment 实例
    const result = add(date, { year: 1, month: 2, day: 3 });
    const expected = compared
      .add(1, 'year')
      .add(2, 'month')
      .add(3, 'day')
      .toDate();
    expect(result).toEqual(expected);
  });

  it('should add multiple hour, minute, and second units using an object', () => {
    const date = new Date('2023-10-01T12:00:00');
    const compared = moment(+date); // 创建 moment 实例
    const result = add(date, { hour: 4, minute: 5, second: 6 });
    const expected = compared
      .add(4, 'hour')
      .add(5, 'minute')
      .add(6, 'second')
      .toDate();
    expect(result).toEqual(expected);
  });

  it('should add multiple year, month, day, hour, minute, second, and millisecond units using an object', () => {
    const date = new Date('2023-10-01T12:00:00.000');
    const compared = moment(+date); // 创建 moment 实例
    const result = add(date, {
      year: 1,
      month: 2,
      day: 3,
      hour: 4,
      minute: 5,
      second: 6,
      millisecond: 7
    });
    const expected = compared
      .add(1, 'year')
      .add(2, 'month')
      .add(3, 'day')
      .add(4, 'hour')
      .add(5, 'minute')
      .add(6, 'second')
      .add(7, 'millisecond')
      .toDate();
    expect(result).toEqual(expected);
  });

  it('should handle adding months when the day exceeds the new month\'s maximum days', () => {
    const date = new Date('2023-01-31T12:00:00');
    const compared = moment(+date); // 创建 moment 实例
    const result = add(date, 1, 'month');
    const expected = compared.add(1, 'month').toDate();
    expect(result).toEqual(expected);
  });

  it('should handle adding months when the day exceeds the new month\'s maximum days using an object', () => {
    const date = new Date('2023-01-31T12:00:00');
    const compared = moment(+date); // 创建 moment 实例
    const result = add(date, { month: 1 });
    const expected = compared.add(1, 'month').toDate();
    expect(result).toEqual(expected);
  });

  it('should handle adding months when the day exceeds the new month\'s maximum days (February)', () => {
    const date = new Date('2023-01-31T12:00:00');
    const compared = moment(+date); // 创建 moment 实例
    const result = add(date, 13, 'month'); // 13 months from January 31st should be February 28th (or 29th if leap year)
    const expected = compared.add(13, 'month').toDate();
    expect(result).toEqual(expected);
  });

  it('should handle adding months when the day exceeds the new month\'s maximum days using an object (February)',
    () => {
      const date = new Date('2023-01-31T12:00:00');
      const compared = moment(+date); // 创建 moment 实例
      // 13 months from January 31st should be February 28th (or 29th if leap year)
      const result = add(date, { month: 13 });
      const expected = compared.add(13, 'month').toDate();
      expect(result).toEqual(expected);
    });
});
