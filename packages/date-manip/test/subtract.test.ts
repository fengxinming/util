import moment from 'moment';
import { describe, expect, it } from 'vitest';

import subtract from '../src/subtract';

describe('subtract', () => {
  it('should subtract 5 days from a date', () => {
    const date = new Date('2023-10-01T12:00:00');
    const compared = moment(+date); // 创建 moment 实例
    const result = subtract(date, 5, 'day');
    const expected = compared.subtract(5, 'day').toDate();
    expect(result).toEqual(expected);
  });

  it('should subtract 3 months from a date', () => {
    const date = new Date('2023-10-01T12:00:00');
    const compared = moment(+date); // 创建 moment 实例
    const result = subtract(date, 3, 'month');
    const expected = compared.subtract(3, 'month').toDate();
    expect(result).toEqual(expected);
  });

  it('should subtract 2 years from a date', () => {
    const date = new Date('2023-10-01T12:00:00');
    const compared = moment(+date); // 创建 moment 实例
    const result = subtract(date, 2, 'year');
    const expected = compared.subtract(2, 'year').toDate();
    expect(result).toEqual(expected);
  });

  it('should subtract 1 hour from a date', () => {
    const date = new Date('2023-10-01T12:00:00');
    const compared = moment(+date); // 创建 moment 实例
    const result = subtract(date, 1, 'hour');
    const expected = compared.subtract(1, 'hour').toDate();
    expect(result).toEqual(expected);
  });

  it('should subtract 30 minutes from a date', () => {
    const date = new Date('2023-10-01T12:00:00');
    const compared = moment(+date); // 创建 moment 实例
    const result = subtract(date, 30, 'minute');
    const expected = compared.subtract(30, 'minute').toDate();
    expect(result).toEqual(expected);
  });

  it('should subtract 45 seconds from a date', () => {
    const date = new Date('2023-10-01T12:00:45');
    const compared = moment(+date); // 创建 moment 实例
    const result = subtract(date, 45, 'second');
    const expected = compared.subtract(45, 'second').toDate();
    expect(result).toEqual(expected);
  });

  it('should subtract 500 milliseconds from a date', () => {
    const date = new Date('2023-10-01T12:00:00.500');
    const compared = moment(+date); // 创建 moment 实例
    const result = subtract(date, 500, 'millisecond');
    const expected = compared.subtract(500, 'millisecond').toDate();
    expect(result).toEqual(expected);
  });

  it('should subtract multiple time units using an object', () => {
    const date = new Date('2023-10-01T12:00:00');
    const compared = moment(+date); // 创建 moment 实例
    const result = subtract(date, { year: 1, month: 2, day: 3, hour: 4, minute: 5, second: 6, millisecond: 7 });
    const expected = compared
      .subtract(1, 'year')
      .subtract(2, 'month')
      .subtract(3, 'day')
      .subtract(4, 'hour')
      .subtract(5, 'minute')
      .subtract(6, 'second')
      .subtract(7, 'millisecond')
      .toDate();
    expect(result).toEqual(expected);
  });
});
