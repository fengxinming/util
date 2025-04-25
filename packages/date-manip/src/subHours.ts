import addHours from './addHours';

/**
 * Subtracts a specified number of hours from a date.
 * 从日期中减去指定数量的小时。
 *
 * @param date - The date to subtract hours from. (要从日期中减去的小时数。)
 * @param hours - The number of hours to subtract. (要减去的小时数。)
 * @returns A new date with the subtracted hours. (减去小时后的新日期。)
 * @example
 * ```ts
 * //Subtracting 3 hours from a date (从日期中减去3)
 * subHours(new Date(2014, 6, 2, 11, 55), 3);
 * //=> Thu Jul 02 2015 08:55:00
 * ```
 */
export default function subHours(date: Date, hours: number): Date {
  return addHours(date, -hours);
}
