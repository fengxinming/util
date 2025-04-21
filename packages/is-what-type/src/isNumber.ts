/**
 * Check if the value is a number
 *
 * 校验是否是一个数字
 *
 * @example
 * ```js
 * import { isNumber } from 'is-what-type';
 *
 * isNumber(1); // true
 * isNumber(0); // true
 * isNumber(-1); // true
 * isNumber(3.14); // true
 * isNumber(NaN); // false
 * isNumber(Infinity); // true
 * isNumber(-Infinity); // true
 * isNumber({}); // false
 * isNumber('1'); // false
 * isNumber(null); // false
 * isNumber(undefined); // false
 * isNumber(function() {}); // false
 * ```
 *
 * @param value - The value to check
 * @returns `true` if the value is a number, `false` otherwise
 */
export function isNumber(value: unknown): value is number {
  // The type of NaN is "number"
  // and it is the only value in JavaScript which is not equal to itself

  // eslint-disable-next-line no-self-compare
  return typeof value === 'number' && value === value;
}
