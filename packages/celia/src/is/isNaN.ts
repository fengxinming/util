
import _isNaN from '../_/_isNaN';

/**
 * 检查是否是 `NaN`
 *
 * @example
 * ```js
 * isNaN('100F');  // false
 * isNaN(NaN);  // true
 * isNaN('NaN');  // false
 * ```
 *
 * @param value 要检查的值
 * @returns `true` 表示是 `NaN`，否则为 `false`
 */
export default Number.isNaN || _isNaN;
