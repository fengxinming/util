import addSeconds from './addSeconds';

/**
 * Subtracts a specified number of seconds from a date.
 * 从日期中减去指定数量的秒。
 *
 * @param date - The date to subtract seconds from. (要从日期中减去秒的日期。)
 * @param seconds - The number of seconds to subtract. (要减去的秒数。)
 * @returns A new date with the subtracted seconds. (减去秒后的新日期。)
 * @example
 * ```ts
 * // Subtracting 30 seconds from a date (从日期中减)
 * subSeconds(new Date(2014, 1, 28, 0, 30, 40), 30);
 * //=> Thu Feb 27 2014 23:59:10
 * ```
 */
export default function subSeconds(date: Date, seconds: number): Date {
  return addSeconds(date, -seconds);
}
