import {
  MS_IN_HOUR, MS_IN_MINUTE, MS_IN_SECOND
} from './_internal/constants';
import normalizeUnit from './_internal/normalizeUnit';
import startOfDate from './_internal/startOfDate';
import startOfTime from './_internal/startOfTime';
import { Unit } from './types';
import units from './units';

const { DATE, DAY, HOUR, MINUTE, MONTH, SECOND, YEAR } = units;

/**
 * Sets the date to the start of the specified unit of time.
 * 将日期设置为指定时间单位的开始时间。
 *
 * @param date - The date to set to the start of the specified unit. (要设置为指定时间单位开始时间的日期。)
 * @param unit - The unit of time to set the start of (e.g., 'year', 'month', 'day', 'hour', 'minute', 'second').
 * (要设置开始时间的时间单位，例如 'year'、'month'、'day'、'hour'、'minute'、'second'。)
 * @returns A new date object set to the start of the specified unit. (设置为指定时间单位开始时间的新日期对象。)
 * @example
 * ```ts
 * // Setting the start of the year (设置年份开始时间)
 * const date1 = new Date('2023-10-01');
 * const startOfYear = startOf(date1, 'year');
 * console.log(startOfYear.toISOString()); // Outputs: '2023-01-01T00:00:00.000Z' (输出: '2023-01-01T00:00:00.000Z')
 *
 * // Setting the start of the month (设置月份开始时间)
 * const date2 = new Date('2023-10-01');
 * const startOfMonth = startOf(date2, 'month');
 * console.log(startOfMonth.toISOString()); // Outputs: '2023-10-01T00:00:00.000Z' (输出: '2023-10-01T00:00:00.000Z')
 *
 * // Setting the start of the day (设置天数开始时间)
 * const date3 = new Date('2023-10-01T12:30:45');
 * const startOfDay = startOf(date3, 'day');
 * console.log(startOfDay.toISOString()); // Outputs: '2023-10-01T00:00:00.000Z' (输出: '2023-10-01T00:00:00.000Z')
 *
 * // Setting the start of the hour (设置小时开始时间)
 * const date4 = new Date('2023-10-01T12:30:45');
 * const startOfHour = startOf(date4, 'hour');
 * console.log(startOfHour.toISOString()); // Outputs: '2023-10-01T12:00:00.000Z' (输出: '2023-10-01T12:00:00.000Z')
 *
 * // Setting the start of the minute (设置分钟开始时间)
 * const date5 = new Date('2023-10-01T12:30:45');
 * const startOfMinute = startOf(date5, 'minute');
 * console.log(startOfMinute.toISOString()); // Outputs: '2023-10-01T12:30:00.000Z' (输出: '2023-10-01T12:30:00.000Z')
 *
 * // Setting the start of the second (设置秒数开始时间)
 * const date6 = new Date('2023-10-01T12:30:45.678');
 * const startOfSecond = startOf(date6, 'second');
 * console.log(startOfSecond.toISOString()); // Outputs: '2023-10-01T12:30:45.000Z' (输出: '2023-10-01T12:30:45.000Z')
 * ```
 */
export default function startOf(date: Date, unit: Unit): Date {
  unit = normalizeUnit(unit);

  let time = 0;

  switch (unit) {
    case YEAR:
      time = startOfDate(date, void 0, 0, 1);
      break;
    case MONTH:
      time = startOfDate(date, void 0, void 0, 1);
      break;
    case DATE:
    case DAY:
      time = startOfDate(date);
      break;
    case HOUR:
      time = startOfTime(date, MS_IN_HOUR);
      break;
    case MINUTE:
      time = startOfTime(date, MS_IN_MINUTE);
      break;
    case SECOND:
      time = startOfTime(date, MS_IN_SECOND);
      break;
  }

  time && date.setTime(time);

  return date;
}
