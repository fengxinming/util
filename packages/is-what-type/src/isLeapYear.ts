import { isNumber } from './isNumber';
import { isValidDate } from './isValidDate';

/**
 * Check if the year is a leap year
 *
 * 校验是否为闰年
 *
 * @example
 * ```js
 * import { isLeapYear } from 'is-what-type';
 *
 * isLeapYear(2000); // true
 * isLeapYear(2020); // true
 * isLeapYear(1900); // false
 * isLeapYear(2021); // false
 * isLeapYear(new Date(2000, 0, 1)); // true
 * isLeapYear(new Date(2020, 0, 1)); // true
 * isLeapYear(new Date(1900, 0, 1)); // false
 * isLeapYear(new Date(2021, 0, 1)); // false
 * isLeapYear('2000'); // false
 * isLeapYear(null); // false
 * isLeapYear(undefined); // false
 * ```
 *
 * @param value - The value to check
 * @returns `true` if the value is a leap year, `false` otherwise
 */
export function isLeapYear(value: unknown): boolean {
  let year: number = value as number;
  if (isValidDate(value)) {
    year = value.getFullYear();
  }
  else if (!isNumber(value)) {
    return false;
  }

  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
