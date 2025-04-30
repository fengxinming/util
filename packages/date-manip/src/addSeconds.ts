import { MS_IN_SECOND } from './_internal/constants';
import addMilliseconds from './addMilliseconds';

/**
 * Adds a specified number of seconds to a date.
 * 向日期添加指定数量的秒。
 *
 * @param date - The date to add seconds to. (要添加秒的日期。)
 * @param seconds - The number of seconds to add. (要添加的秒数。)
 * @returns A new date with the added seconds. (添加秒后的新日期。)
 * @example
 * ```ts
 * // Adding 30 seconds to a date (向日期添加30秒)
 * const originalDate = new Date('2023-10-01T12:00:00');
 * addSeconds(originalDate, 30);
 * console.log(originalDate.toISOString()); // Outputs: '2023-10-01T12:00:30.000Z' (输出: '2023-10-01T12:00:30.000Z')
 * ```
 */
export default function addSeconds(date: Date, seconds: number): Date {
  return addMilliseconds(date, seconds * MS_IN_SECOND);
}
