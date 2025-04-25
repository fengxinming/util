import daysInMonthOfYear from './_internal/daysOfYear';

/**
 * Gets the number of days in the month for a given date.
 * 获取给定日期所在月份的天数。
 *
 * @param date - The date to get the number of days in the month for. (要获取月份天数的日期。)
 * @returns The number of days in the month. (月份的天数。)
 * @example
 * ```ts
 * // Getting the number of days in October 2023 (获取2023年10月的天数)
 * const date = new Date('2023-10-01');
 * const days = daysInMonth(date);
 * console.log(days); // Outputs: 31 (输出: 31)
 *
 * // Getting the number of days in February 2024 (获取2024年2月的天数)
 * const date2 = new Date('2024-02-01');
 * const days2 = daysInMonth(date2);
 * console.log(days2); // Outputs: 29 (输出: 29)
 * ```
 */
export default function daysInMonth(date: Date): number {
  return daysInMonthOfYear(date.getFullYear())[date.getMonth()];
}
