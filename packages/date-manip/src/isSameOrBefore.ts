import isAfter from './isAfter';
import { DateInput, Unit } from './types';

/**
 * Checks if a date is the same as or before another date or a specified time unit.
 * 检查一个日期是否与另一个日期或指定的时间单位相同或在其之前。
 *
 * @param date - The date to compare. (要比较的日期。)
 * @param input - The date or time unit to compare against. (要比较的日期或时间单位。)
 * @param unit - The unit of time to compare (e.g., 'year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond').
 * (要比较的时间单位，例如 'year'、'month'、'day'、'hour'、'minute'、'second'、'millisecond'。)
 * @returns A boolean indicating whether the first date is the same as or before the second date or time unit.
 * (布尔值，表示第一个日期是否与第二个日期或时间单位相同或在其之前。)
 * @example
 * ```ts
 * // Checking if a date is the same as or before another date (检查一个日期是否与另一个日期相同或在其之前)
 * const date1 = new Date('2023-10-01');
 * const date2 = new Date('2023-10-01');
 * const isSameOrBeforeDate = isSameOrBefore(date1, date2, 'day');
 * console.log(isSameOrBeforeDate); // Outputs: true (输出: true)
 *
 * // Checking if a date is before another date (检查一个日期是否在另一个日期之前)
 * const date3 = new Date('2023-09-30');
 * const isSameOrBeforeDate2 = isSameOrBefore(date3, date2, 'day');
 * console.log(isSameOrBeforeDate2); // Outputs: true (输出: true)
 *
 * // Checking if a date is the same as or before a specific year (检查一个日期是否与特定年份相同或在其之前)
 * const date4 = new Date('2022-12-31');
 * const isSameOrBeforeYear = isSameOrBefore(date4, 2023, 'year');
 * console.log(isSameOrBeforeYear); // Outputs: true (输出: true)
 *
 * // Checking if a date is the same as or before a specific month (检查一个日期是否与特定月份相同或在其之前)
 * const date5 = new Date('2023-09-30');
 * const isSameOrBeforeMonth = isSameOrBefore(date5, '2023-10', 'month');
 * console.log(isSameOrBeforeMonth); // Outputs: true (输出: true)
 *
 * // Checking if a date is the same as or before a specific day (检查一个日期是否与特定天数相同或在其之前)
 * const date6 = new Date('2023-10-01');
 * const isSameOrBeforeDay = isSameOrBefore(date6, '2023-10-01', 'day');
 * console.log(isSameOrBeforeDay); // Outputs: true (输出: true)
 *
 * // Checking if a date is the same as or before a specific hour (检查一个日期是否与特定小时相同或在其之前)
 * const date7 = new Date('2023-10-01T12:00:00');
 * const isSameOrBeforeHour = isSameOrBefore(date7, '2023-10-01T12:00:00', 'hour');
 * console.log(isSameOrBeforeHour); // Outputs: true (输出: true)
 *
 * // Checking if a date is the same as or before a specific minute (检查一个日期是否与特定分钟相同或在其之前)
 * const date8 = new Date('2023-10-01T12:00:00');
 * const isSameOrBeforeMinute = isSameOrBefore(date8, '2023-10-01T12:00:00', 'minute');
 * console.log(isSameOrBeforeMinute); // Outputs: true (输出: true)
 *
 * // Checking if a date is the same as or before a specific second (检查一个日期是否与特定秒数相同或在其之前)
 * const date9 = new Date('2023-10-01T12:00:00');
 * const isSameOrBeforeSecond = isSameOrBefore(date9, '2023-10-01T12:00:00', 'second');
 * console.log(isSameOrBeforeSecond); // Outputs: true (输出: true)
 *
 * // Checking if a date is the same as or before a specific millisecond (检查一个日期是否与特定毫秒数相同或在其之前)
 * const date10 = new Date('2023-10-01T12:00:00.000');
 * const isSameOrBeforeMillisecond = isSameOrBefore(date10, '2023-10-01T12:00:00.000', 'millisecond');
 * console.log(isSameOrBeforeMillisecond); // Outputs: true (输出: true)
 * ```
 */
export default function isSameOrBefore(
  date: Date,
  input: DateInput,
  unit?: Unit
): boolean {
  return !isAfter(date, input, unit);
}
