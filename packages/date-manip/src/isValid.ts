/**
 * Checks if a given date is valid.
 * 检查给定的日期是否有效。
 *
 * @param date - The date to check. (要检查的日期。)
 * @returns A boolean indicating whether the given date is valid. (布尔值，表示给定的日期是否有效。)
 * @example
 * ```ts
 * // Checking if a date is valid (检查一个日期是否有效)
 * const date1 = new Date('2023-10-01');
 * const isValidDate1 = isValid(date1);
 * console.log(isValidDate1); // Outputs: true (输出: true)
 *
 * // Checking if an invalid date is valid (检查一个无效的日期是否有效)
 * const date2 = new Date('invalid-date');
 * const isValidDate2 = isValid(date2);
 * console.log(isValidDate2); // Outputs: false (输出: false)
 * ```
 */
export default function isValid(date: Date): boolean {
  return date.toString() !== 'Invalid Date';
}
