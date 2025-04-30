/**
 * Adds a specified number of milliseconds to a date.
 * 向日期添加指定数量的毫秒。
 *
 * @param date - The date to add milliseconds to. (要添加毫秒的日期。)
 * @param ms - The number of milliseconds to add. (要添加的毫秒数。)
 * @returns A new date with the added milliseconds. (添加毫秒后的新日期。)
 * @example
 * ```ts
 * // Adding 5000 milliseconds to a date (向日期添加5000毫秒)
 * const originalDate = new Date('2023-10-01T12:00:00');
 * addMilliseconds(originalDate, 5000);
 * console.log(originalDate.toISOString()); // Outputs: '2023-10-01T12:00:05.000Z' (输出: '2023-10-01T12:00:05.000Z')
 * ```
 */
export default function addMilliseconds(date: Date, ms: number): Date {
  date.setTime(+date + ms);
  return date;
}
