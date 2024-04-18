
import _arrayInsert from '../_/_arrayInsert';

/**
 * 在指定值后插入新值
 *
 * @example
 * ```js
 * const array = [1, 2, 3, 4, 5];
 * arrayInsertAfter(array, 2, 2.6); // [1, 2, 2.6, 3, 4, 5]
 * ```
 *
 * @param value 数组
 * @param child 在该值后插入
 * @param items 需要插入的值，可以是多个
 * @returns 返回插入的值
 */
function insertAfter<T = any>(
  value: T[],
  child: T,
  ...items: T[]
): T[] {
  return Array.isArray(value) && _arrayInsert(value, child, 1, 0, items)
    ? items
    : [];
}

export default insertAfter;
