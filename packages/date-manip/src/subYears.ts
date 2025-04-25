import addMonths from './addMonths';

/**
 * Subtracts a specified number of years from a date.
 * 从日期中减去指定数量的年份。
 *
 * @param date - The date to subtract years from. (要减去年份的日期。)
 * @param years - The number of years to subtract. (要减去的年份数。)
 * @returns A new date with the subtracted years. (减去年份后的新日期。)
 * @example
 * ```ts
 * //Subtracting 2 years from a date (从日期中减去2)
 * const date = new Date('2023-10-01T12:00:00Z');
 * subYears(date, 2);
 * // Returns: 2021-10-01T12:00:00.000Z (返回: 2021-10-01T12:00:00.000Z)
 * ```
 */
export default function subYears(date: Date, years: number): Date {
  return addMonths(date, -years * 12);
}
