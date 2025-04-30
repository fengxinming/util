import addDays from './addDays';

/**
 * Subtracts a specified number of days from a date.
 * 从日期中减去指定数量的天数。
 *
 * @param date - The date to subtract days from. (要减去天数的日期。)
 * @param days - The number of days to subtract. (要减去的天数。)
 * @returns A new date with the subtracted days. (减去天数后的新日期。)
 * @example
 * ```ts
 * const newDate = subDays(new Date(), 5);
 * console.log(newDate); // Outputs the date 5 days ago (输出5天前的日期)
 * ```
 */
export default function subDays(date: Date, days: number): Date {
  return addDays(date, -days);
}
