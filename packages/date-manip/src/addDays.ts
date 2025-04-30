import { MS_IN_DAY } from './_internal/constants';
import addMilliseconds from './addMilliseconds';

/**
 * Adds a specified number of days to a date.
 * 向日期添加指定数量的天数。
 *
 * @param date - The date to add days to. (要添加天数的日期。)
 * @param days - The number of days to add. (要添加的天数。)
 * @returns A new date with the added days. (添加天数后的新日期。)
 * @example
 * ```ts
 * const newDate = addDays(new Date(), 5);
 * console.log(newDate); // Outputs the date 5 days from now (输出5天后的日期)
 * ```
 */
export default function addDays(date: Date, days: number): Date {
  return addMilliseconds(date, days * MS_IN_DAY);
}
