/**
 * Check if the value is a valid date
 *
 * 校验是否是一个有效的日期
 *
 * @example
 * ```js
 * import { isValidDate } from 'is-what-type';
 *
 * isValidDate(new Date()); // true
 * isValidDate(new Date('2023-10-01')); // true
 * isValidDate(new Date(NaN)); // false
 * isValidDate('2023-10-01'); // false
 * isValidDate(123456789); // false
 * isValidDate(null); // false
 * isValidDate(undefined); // false
 * isValidDate({}); // false
 * isValidDate(new Date('invalid-date')); // false
 * ```
 *
 * @param value - The value to check
 * @returns `true` if the value is a valid date, else `false`
 */
export function isValidDate(value: unknown): value is Date {
  return value instanceof Date && value.toString() !== 'Invalid Date';
}
