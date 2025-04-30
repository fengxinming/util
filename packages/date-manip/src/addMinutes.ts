import { MS_IN_MINUTE } from './_internal/constants';
import addMilliseconds from './addMilliseconds';

/**
 * Adds a specified number of minutes to a date.
 * 向日期添加指定数量的分钟。
 *
 * @param date - The date to add minutes to. (要添加分钟的日期。)
 * @param minutes - The number of minutes to add. (要添加的分钟数。)
 * @returns A new date with the added minutes. (添加分钟后的新日期。)
 * @example
 * ```ts
 * // Adding 30 minutes to a date (向日期添加30分钟)
 * const originalDate = new Date('2023-10-01T12:00:00');
 * addMinutes(originalDate, 30);
 * console.log(originalDate.toISOString()); // Outputs: '2023-10-01T12:30:00.000Z' (输出: '2023-10-01T12:30:00.000Z')
 * ```
 */
export default function addMinutes(date: Date, minutes: number): Date {
  return addMilliseconds(date, minutes * MS_IN_MINUTE);
}
