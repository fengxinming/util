import _isLeapYear from './_internal/isLeapYear';

/**
 * Checks if a given date is in a leap year.
 * 检查给定的日期是否在闰年。
 *
 * @param date - The date to check. (要检查的日期。)
 * @returns A boolean indicating whether the given date is in a leap year. (布尔值，表示给定的日期是否在闰年。)
 * @example
 * ```ts
 * // Checking if a date is in a leap year (检查一个日期是否在闰年)
 * const date1 = new Date('2024-01-01');
 * const isLeap = isLeapYear(date1);
 * console.log(isLeap); // Outputs: true (输出: true)
 *
 * // Checking if a date is not in a leap year (检查一个日期是否不在闰年)
 * const date2 = new Date('2023-01-01');
 * const isNotLeap = isLeapYear(date2);
 * console.log(isNotLeap); // Outputs: false (输出: false)
 * ```
 */
export default function isLeapYear(date: Date): boolean {
  return _isLeapYear(date.getFullYear());
}
