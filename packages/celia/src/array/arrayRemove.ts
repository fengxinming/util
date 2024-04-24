
import _arrayRemove from '../_/_arrayRemove';

/**
 * 移除数组中的指定值，重复数据只删除一个
 *
 * @example
 * ```js
 * arrayRemove([1, 2, 3, 4, 5, 4], 4);
 * // [1, 2, 3, 5, 4]
 * ```
 *
 * @param value 数组
 * @param items 需要删除的值，可以是多个
 * @returns 返回删除的值
 */
function arrayRemove(
  value: any[],
  target?: any[] | any,
  removeDuplicates?: boolean
): boolean {
  if (Array.isArray(value)) {
    return _arrayRemove(value, target, removeDuplicates);
  }

  return false;
}

export default arrayRemove;
