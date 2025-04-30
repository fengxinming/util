import addMonths from './addMonths';

/**
 * Adds a specified number of years to a date.
 * 向日期添加指定数量的年份。
 *
 * @param date - The date to add years to. (要添加年份的日期。)
 * @param years - The number of years to add. (要添加的年份数。)
 * @returns A new date with the added years. (添加年份后的新日期。)
 * @example
 * ```ts
 * // Adding 2 years to a date (向日期添加2年)
 * const originalDate = new Date('2023-10-01T12:00:00');
 * addYears(originalDate, 2);
 * console.log(originalDate.toISOString()); // Outputs: '2025-10-01T12:00:00.000Z' (输出: '2025-10-01T12:00:00.000Z')
 * ```
 */
export default function addYears(date: Date, years: number): Date {
  return addMonths(date, years * 12);
}
