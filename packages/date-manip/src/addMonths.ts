import daysInMonth from './daysInMonth';

/**
 * Adds a specified number of months to a date.
 * 向日期添加指定数量的月份。
 *
 * @param date - The date to add months to. (要添加月份的日期。)
 * @param months - The number of months to add. (要添加的月份数。)
 * @returns A new date with the added months. (添加月份后的新日期。)
 * @example
 * ```ts
 * // Adding 2 months to a date (向日期添加2个月)
 * const originalDate = new Date('2023-10-31T12:00:00');
 * addMonths(originalDate, 2);
 * console.log(originalDate.toISOString()); // Outputs: '2023-12-31T12:00:00.000Z' (输出: '2023-12-31T12:00:00.000Z')
 * ```
 */
export default function addMonths(date: Date, months: number): Date {
  const expectedMonth = date.getMonth() + months;
  // 目标时间当月总天数
  const tempMaxDay = daysInMonth(new Date(date.getFullYear(), expectedMonth, 1, 0, 0, 0, 0));
  const currentDay = date.getDate();
  date.setMonth(expectedMonth, currentDay > tempMaxDay ? tempMaxDay : currentDay);
  return date;
}
