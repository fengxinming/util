import { MS_IN_HOUR } from './_internal/constants';
import addMilliseconds from './addMilliseconds';

/**
 * Adds a specified number of hours to a date.
 * 向日期添加指定数量的小时。
 *
 * @param date - The date to add hours to. (要添加小时的日期。)
 * @param hours - The number of hours to add. (要添加的小时数。)
 * @returns A new date with the added hours. (添加小时后的新日期。)
 * @example
 * ```ts
 * // Adding 3 hours to a date (向日期添加3小时)
 * const originalDate = new Date('2023-10-01T12:00:00');
 * addHours(originalDate, 3);
 * console.log(originalDate.toISOString()); // Outputs: '2023-10-01T15:00:00.000Z' (输出: '2023-10-01T15:00:00.000Z')
 * ```
 */
export default function addHours(date: Date, hours: number): Date {
  return addMilliseconds(date, hours * MS_IN_HOUR);
}
