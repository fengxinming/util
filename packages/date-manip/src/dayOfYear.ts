import { MS_IN_DAY } from './_internal/constants';
import daysOfYear from './_internal/daysOfYear';

export default function dayOfYear(date: Date): number;
export default function dayOfYear(date: Date, val: number): Date;
/**
 * Gets or sets the day of the year for a given date.
 * 获取或设置给定日期的年份中的第几天。
 *
 * @param date - The date to get or set the day of the year for. (要获取或设置年份中的第几天的日期。)
 * @param val - The day of the year to set. (要设置的年份中的第几天。)
 * @returns If `val` is provided, returns a new date object with the updated day of the year.
 * (如果提供了 `val`，返回一个新的日期对象，其年份中的第几天已更新。)
 *          If `val` is not provided, returns the day of the year for the given date.
 * (如果没有提供 `val`，返回给定日期的年份中的第几天。)
 * @example
 * ```ts
 * // Getting the day of the year (获取年份中的第几天)
 * const date = new Date('2023-10-01');
 * const dayOfYear = dayOfYear(date);
 * console.log(dayOfYear); // Outputs: 274 (输出: 274)
 *
 * // Setting the day of the year (设置年份中的第几天)
 * const newDate = dayOfYear(new Date('2023-01-01'), 274);
 * console.log(newDate.toISOString()); // Outputs: '2023-10-01T00:00:00.000Z' (输出: '2023-10-01T00:00:00.000Z')
 * ```
 */
export default function dayOfYear(date: Date, val?: number): number | Date {
  const monthDays = daysOfYear(date.getFullYear());
  const currentMonth = date.getMonth();
  let dayCount = date.getDate();

  for (let i = 0; i < currentMonth; i++) {
    dayCount += monthDays[i];
  }

  if (val === void 0) {
    return dayCount;
  }

  date.setTime(+date + ((val - dayCount) * MS_IN_DAY));
  // date.setMonth(0, val);
  return date;
}
