import addMilliseconds from './addMilliseconds';

/**
 * Subtracts a specified number of milliseconds from a date.
 * 从日期中减去指定的毫秒数。
 *
 * @param date - The date to subtract milliseconds from. (要从中减去毫秒的日期。)
 * @param ms - The number of milliseconds to subtract. (要减去的毫秒数。)
 * @returns A new date with the subtracted milliseconds. (减去毫秒后的新日期。)
 * @example
 * ```typescript
 * // Subtract 500 milliseconds from 10/31/2021 5:45:50 PM
 * const result = subMilliseconds(new Date(2021, 9, 31, 17, 45, 50, 500), 500);
 * //=> Thu Oct 31 2021 17:45:49.000
 * ```
 */
export default function subMilliseconds(date: Date, ms: number): Date {
  return addMilliseconds(date, -ms);
}
