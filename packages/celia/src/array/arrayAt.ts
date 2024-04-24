
import _arrayAt from '../_/_arrayAt';
import isArrayLike from '../is/isArrayLike';

/**
 * 获取指定下标的值
 *
 * @example
 * ```js
 * arrayAt([1, 2, 3, 4, 5], -1); // 5
 * arrayAt([1, 2, 3, 4, 5], -5); // 1
 * arrayAt([1, 2, 3, 4, 5], -6); // 1
 * arrayAt(null as any, -6); // undefined
 * arrayAt({ key: 'value' } as any, -6); // undefined
 * ```
 *
 * @param value 数组或类数组
 * @param index 下标为负数时，从右边开始计数
 * @typeParam T 可指定数组元素类型，返回值也为该类型
 * @returns 指定下标的值，获取失败返回 `undefined`
 */
function arrayAt<T>(
  value: ArrayLike<T>,
  index: number
): T | void {
  if (isArrayLike(value)) {
    return _arrayAt(value, index);
  }
}

export default arrayAt;
