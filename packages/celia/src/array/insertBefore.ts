
import _arrayInsert from '../_/_arrayInsert';

/**
 * 在指定值前插入新值
 *
 * @example
 * ```js
 * arrayInsertAfter([1, 2, 3, 4, 5], 2, 2.5);
 * // [1, 2.5, 2, 3, 4, 5]
 * ```
 *
 * @param value 数组
 * @param child 在该值前插入
 * @param items 需要插入的值，可以是多个
 * @returns 返回插入的值
 */
function insertBefore(
  value: any[],
  child: any,
  ...items: any[]
): any[] {
  return Array.isArray(value) && _arrayInsert(value, child, 0, 0, items)
    ? items
    : [];
}

export default insertBefore;
