
import isDate from './isDate';

/**
 * 检查日期是否有效
 *
 * @example
 * ```js
 * isValidDate(new Date(NaN)); // false
 * ```
 *
 * @param date 日期对象
 * @returns 日期是否有效
 */
export default function isValidDate<T>(date: T) {
  return isDate(date) && (date as any).toString() !== 'Invalid Date';
}
