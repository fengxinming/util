
import _arrayInsert from '../_/_arrayInsert';

/**
 * 在指定值的位置替换新值
 *
 * @example
 * ```js
 * arrayReplace([1, 2, 3, 4, 5], 3, 3.5);
 * // [1, 2, 3.5, 4, 5]
 * ```
 *
 * @param value 数组
 * @param child 在该值的位置替换新值
 * @param items 需要替换的新值，可以是多个
 * @returns 返回替换后的值
 */
function arrayReplace(
  value: any,
  child: any,
  ...items: any[]
): any[] {
  return Array.isArray(value) && _arrayInsert(value, child, 0, items.length, items)
    ? items
    : [];
}

export default arrayReplace;
