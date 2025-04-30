import addMonths from './addMonths';

/**
 * Subtracts a specified number of months from a date.
 * 从日期中减去指定数量的月份。
 *
 * @param date - The date to subtract months from. (要减去月份的日期。)
 * @param months - The number of months to subtract. (要减去的月份数。)
 * @returns A new date with the subtracted months. (减去月份后的新日期。)
 * @example
 * ```ts
 * //Subtracting 2 months from a date (从日期中减去2)
 * const date = new Date('2023-10-31T12:00:00Z');
 * subMonths(date, 2);
 * // Returns: 2023-08-31T12:00:00Z (返回: 2023-08-31T12:00:00Z)
 * ```
 */
export default function subMonths(date: Date, months: number): Date {
  return addMonths(date, -months);
}
