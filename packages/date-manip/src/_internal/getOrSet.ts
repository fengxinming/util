import { Unit } from '../types';
import units from '../units';
import { MS_IN_DAY } from './constants';
import normalizeUnit from './normalizeUnit';

const { DATE, DAY, HOUR, MILLISECOND, MINUTE, MONTH, SECOND, TIME, YEAR } = units;

const mapping = {
  [YEAR]: 'FullYear',
  [MONTH]: 'Month',
  [DATE]: 'Date',
  [DAY]: 'Day',
  [HOUR]: 'Hours',
  [MINUTE]: 'Minutes',
  [SECOND]: 'Seconds',
  [MILLISECOND]: 'Milliseconds',
  [TIME]: 'Time'
};

const setting: Record<string, (date: Date, v: number) => void> = {};
const getting: Record<string, (date: Date) => number> = {};

Object.entries(mapping).forEach(([key, method]) => {
  if (key === DAY) {
    setting[key] = function (date: Date, val: number) {
      const day = date.getDay();
      if (val !== day) {
        date.setTime(+date + ((val - day) * MS_IN_DAY));
      }
    };
  }
  else {
    setting[key] = function (date: Date, val: number) {
      date[`set${method}`](val);
    };
  }
  getting[key] = function (date: Date) {
    return date[`get${method}`]();
  };
});

/**
 * Retrieves the value of a specified time unit for a given date.
 * 获取给定日期的指定时间单位的值。
 *
 * @param date - The date from which to retrieve the time unit value. (要从中获取时间单位值的日期。)
 * @param unit - The unit of time to retrieve (e.g., 'year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond').
 * (要获取的时间单位，例如 'year'、'month'、'day'、'hour'、'minute'、'second'、'millisecond'。)
 * @returns The value of the specified time unit. (指定时间单位的值。)
 * @example
 * ```ts
 * // Getting the year of a date (获取日期的年份)
 * const date = new Date('2023-10-01');
 * const year = get(date, 'year');
 * console.log(year); // Outputs: 2023 (输出: 2023)
 *
 * // Getting the month of a date (获取日期的月份)
 * const month = get(date, 'month');
 * console.log(month); // Outputs: 9 (输出: 9，注意月份是从0开始的)
 *
 * // Getting the day of a date (获取日期的天数)
 * const day = get(date, 'day');
 * console.log(day); // Outputs: 1 (输出: 1)
 *
 * // Getting the hour of a date (获取日期的小时)
 * const hour = get(date, 'hour');
 * console.log(hour); // Outputs: 0 (输出: 0)
 *
 * // Getting the minute of a date (获取日期的分钟)
 * const minute = get(date, 'minute');
 * console.log(minute); // Outputs: 0 (输出: 0)
 *
 * // Getting the second of a date (获取日期的秒数)
 * const second = get(date, 'second');
 * console.log(second); // Outputs: 0 (输出: 0)
 *
 * // Getting the millisecond of a date (获取日期的毫秒数)
 * const millisecond = get(date, 'millisecond');
 * console.log(millisecond); // Outputs: 0 (输出: 0)
 * ```
 */
export function get(date: Date, unit: Unit): number {
  const fn = getting[normalizeUnit(unit)];
  return fn ? fn(date) : 0;
}

/**
 * Sets the value of a specified time unit for a given date.
 * 设置给定日期的指定时间单位的值。
 *
 * @param date - The date for which to set the time unit value. (要设置时间单位值的日期。)
 * @param unit - The unit of time to set (e.g., 'year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond').
 * (要设置的时间单位，例如 'year'、'month'、'day'、'hour'、'minute'、'second'、'millisecond'。)
 * @param val - The value to set for the specified time unit. (要设置的时间单位的值。)
 * @returns The modified date with the specified time unit set. (设置指定时间单位后修改的日期。)
 * @example
 * ```ts
 * // Setting the year of a date (设置日期的年份)
 * const date = new Date('2023-10-01');
 * const newDate = set(date, 'year', 2024);
 * console.log(newDate.toISOString()); // Outputs: '2024-10-01T00:00:00.000Z' (输出: '2024-10-01T00:00:00.000Z')
 *
 * // Setting the month of a date (设置日期的月份)
 * const newDateWithMonth = set(date, 'month', 11);
 * console.log(newDateWithMonth.toISOString()); // Outputs: '2024-12-01T00:00:00.000Z' (输出: '2024-12-01T00:00:00.000Z')
 *
 * // Setting the day of a date (设置日期的天数)
 * const newDateWithDay = set(date, 'day', 15);
 * console.log(newDateWithDay.toISOString()); // Outputs: '2024-12-15T00:00:00.000Z' (输出: '2024-12-15T00:00:00.000Z')
 *
 * // Setting the hour of a date (设置日期的小时)
 * const newDateWithHour = set(date, 'hour', 12);
 * console.log(newDateWithHour.toISOString()); // Outputs: '2024-12-15T12:00:00.000Z' (输出: '2024-12-15T12:00:00.000Z')
 *
 * // Setting the minute of a date (设置日期的分钟)
 * const newDateWithMinute = set(date, 'minute', 30);
 * console.log(newDateWithMinute.toISOString()); // Outputs: '2024-12-15T12:30:00.000Z' (输出: '2024-12-15T12:30:00.000Z')
 *
 * // Setting the second of a date (设置日期的秒数)
 * const newDateWithSecond = set(date, 'second', 45);
 * console.log(newDateWithSecond.toISOString()); // Outputs: '2024-12-15T12:30:45.000Z' (输出: '2024-12-15T12:30:45.000Z')
 *
 * // Setting the millisecond of a date (设置日期的毫秒数)
 * const newDateWithMillisecond = set(date, 'millisecond', 500);
 * console.log(newDateWithMillisecond.toISOString()); // Outputs: '2024-12-15T12:30:45.500Z'
 * (输出: '2024-12-15T12:30:45.500Z')
 * ```
 */
export function set(date: Date, unit: Unit, val: number): Date {
  const fn = setting[normalizeUnit(unit)];
  fn && fn(date, val);
  return date;
}
