
import _isInteger from '../_/_isInteger';

/**
 * 检查是否是整型
 *
 * @example
 * ```js
 * isInteger(3);  // true
 * isInteger(-2);  // true
 * isInteger(1.23);  // false
 * isInteger(Infinity);  // false
 * ```
 *
 * @param value 要检查的值
 * @returns `true` 表示是整型，否则为 `false`
 */
export default Number.isInteger || _isInteger;
