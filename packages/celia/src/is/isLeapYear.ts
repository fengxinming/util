import isNumber from './isNumber';
import isValidDate from './isValidDate';

/**
 * 检查是否是闰年
 *
 * @example
 * ```js
 * isLeapYear(2000);
 * // true
 * ```
 *
 * @param year 要检查的年份
 * @returns `true` 表示是闰年，否则为 `false`
 */
export default function isLeapYear(year: any) {
  if (isValidDate(year)) {
    year = year.getFullYear();
  }
  else if (!isNumber(year)) {
    return false;
  }
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
