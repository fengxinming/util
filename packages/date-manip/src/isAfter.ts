import normalizeUnit from './_internal/normalizeUnit';
import parse from './parse';
import startOf from './startOf';
import { DateInput, Unit } from './types';

/**
 * Checks if a date is after another date or a specified time unit.
 * 检查一个日期是否在另一个日期或指定的时间单位之后。
 *
 * @param date - The date to compare. (要比较的日期。)
 * @param input - The date or time unit to compare against. (要比较的日期或时间单位。)
 * @param unit - The unit of time to compare (e.g., 'year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond').
 * (要比较的时间单位，例如 'year'、'month'、'day'、'hour'、'minute'、'second'、'millisecond'。)
 * @returns A boolean indicating whether the first date is after the second date or time unit.
 * (布尔值，表示第一个日期是否在第二个日期或时间单位之后。)
 * @example
 * ```ts
 * // Checking if a date is after another date (检查一个日期是否在另一个日期之后)
 * const date1 = new Date('2023-10-01');
 * const date2 = new Date('2023-09-01');
 * const isAfterDate = isAfter(date1, date2, 'day');
 * console.log(isAfterDate); // Outputs: true (输出: true)
 *
 * // Checking if a date is after a specific year (检查一个日期是否在特定年份之后)
 * const date3 = new Date('2024-01-01');
 * const isAfterYear = isAfter(date3, 2023, 'year');
 * console.log(isAfterYear); // Outputs: true (输出: true)
 *
 * // Checking if a date is after a specific month (检查一个日期是否在特定月份之后)
 * const date4 = new Date('2023-11-01');
 * const isAfterMonth = isAfter(date4, '2023-10', 'month');
 * console.log(isAfterMonth); // Outputs: true (输出: true)
 *
 * // Checking if a date is after a specific day (检查一个日期是否在特定天数之后)
 * const date5 = new Date('2023-10-02');
 * const isAfterDay = isAfter(date5, '2023-10-01', 'day');
 * console.log(isAfterDay); // Outputs: true (输出: true)
 *
 * // Checking if a date is after a specific hour (检查一个日期是否在特定小时之后)
 * const date6 = new Date('2023-10-01T13:00:00');
 * const isAfterHour = isAfter(date6, '2023-10-01T12:00:00', 'hour');
 * console.log(isAfterHour); // Outputs: true (输出: true)
 *
 * // Checking if a date is after a specific minute (检查一个日期是否在特定分钟之后)
 * const date7 = new Date('2023-10-01T12:01:00');
 * const isAfterMinute = isAfter(date7, '2023-10-01T12:00:00', 'minute');
 * console.log(isAfterMinute); // Outputs: true (输出: true)
 *
 * // Checking if a date is after a specific second (检查一个日期是否在特定秒数之后)
 * const date8 = new Date('2023-10-01T12:00:01');
 * const isAfterSecond = isAfter(date8, '2023-10-01T12:00:00', 'second');
 * console.log(isAfterSecond); // Outputs: true (输出: true)
 *
 * // Checking if a date is after a specific millisecond (检查一个日期是否在特定毫秒数之后)
 * const date9 = new Date('2023-10-01T12:00:00.500');
 * const isAfterMillisecond = isAfter(date9, '2023-10-01T12:00:00.000', 'millisecond');
 * console.log(isAfterMillisecond); // Outputs: true (输出: true)
 * ```
 */
export default function isAfter(
  date: Date,
  input: DateInput,
  unit?: Unit
): boolean {
  unit = normalizeUnit(unit);
  const inputMs = +parse(input);

  if (!unit) {
    return +date > inputMs;
  }

  return +startOf(new Date(date), unit) > inputMs;
}
