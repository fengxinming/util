import {
  MS_IN_DAY, MS_IN_HOUR, MS_IN_MINUTE, MS_IN_SECOND
} from './_internal/constants';
import normalizeUnit from './_internal/normalizeUnit';
import startOfDate from './_internal/startOfDate';
import startOfTime from './_internal/startOfTime';
import { Unit } from './types';
import units from './units';

const { DATE, DAY, HOUR, MINUTE, MONTH, SECOND, YEAR } = units;

/**
 * Sets the date to the end of the specified unit of time.
 * 将日期设置为指定时间单位的结束时间。
 *
 * @param date - The date to set to the end of the specified unit. (要设置为指定时间单位结束时间的日期。)
 * @param unit - The unit of time to set the end of (e.g., 'year', 'month', 'day', 'hour', 'minute', 'second').
 * (要设置结束时间的时间单位，例如 'year'、'month'、'day'、'hour'、'minute'、'second'。)
 * @returns A new date object set to the end of the specified unit. (设置为指定时间单位结束时间的新日期对象。)
 * @example
 * ```ts
 * // Setting the end of the year (设置年份结束时间)
 * const date1 = new Date('2023-01-01');
 * const endOfYear = endOf(date1, 'year');
 * console.log(endOfYear.toISOString()); // Outputs: '2023-12-31T23:59:59.999Z' (输出: '2023-12-31T23:59:59.999Z')
 *
 * // Setting the end of the month (设置月份结束时间)
 * const date2 = new Date('2023-10-01');
 * const endOfMonth = endOf(date2, 'month');
 * console.log(endOfMonth.toISOString()); // Outputs: '2023-10-31T23:59:59.999Z' (输出: '2023-10-31T23:59:59.999Z')
 *
 * // Setting the end of the day (设置天数结束时间)
 * const date3 = new Date('2023-10-01T12:00:00');
 * const endOfDay = endOf(date3, 'day');
 * console.log(endOfDay.toISOString()); // Outputs: '2023-10-01T23:59:59.999Z' (输出: '2023-10-01T23:59:59.999Z')
 *
 * // Setting the end of the hour (设置小时结束时间)
 * const date4 = new Date('2023-10-01T12:00:00');
 * const endOfHour = endOf(date4, 'hour');
 * console.log(endOfHour.toISOString()); // Outputs: '2023-10-01T12:59:59.999Z' (输出: '2023-10-01T12:59:59.999Z')
 *
 * // Setting the end of the minute (设置分钟结束时间)
 * const date5 = new Date('2023-10-01T12:00:00');
 * const endOfMinute = endOf(date5, 'minute');
 * console.log(endOfMinute.toISOString()); // Outputs: '2023-10-01T12:00:59.999Z' (输出: '2023-10-01T12:00:59.999Z')
 *
 * // Setting the end of the second (设置秒数结束时间)
 * const date6 = new Date('2023-10-01T12:00:00');
 * const endOfSecond = endOf(date6, 'second');
 * console.log(endOfSecond.toISOString()); // Outputs: '2023-10-01T12:00:00.999Z' (输出: '2023-10-01T12:00:00.999Z')
 * ```
 */
export default function endOf(date: Date, unit: Unit): Date {
  unit = normalizeUnit(unit);

  let time = 0;

  switch (unit) {
    case YEAR:
      time = startOfDate(date, date.getFullYear() + 1, 0, 1) - 1;
      break;
    case MONTH:
      time = startOfDate(date, void 0, date.getMonth() + 1, 1) - 1;
      break;
    case DATE:
    case DAY:
      time = startOfDate(date) + MS_IN_DAY - 1;
      break;
    case HOUR:
      time = startOfTime(date, MS_IN_HOUR) + MS_IN_HOUR - 1;
      break;
    case MINUTE:
      time = startOfTime(date, MS_IN_MINUTE) + MS_IN_MINUTE - 1;
      break;
    case SECOND:
      time = startOfTime(date, MS_IN_SECOND) + MS_IN_SECOND - 1;
      break;
  }

  time && date.setTime(time);

  return date;
}
