
import isNil from './isNil';
import isNumber from './isNumber';

/**
 * 校验是否是类数组
 *
 * @example
 * ```js
 * isArrayLike('123');    //true
 * isArrayLike(() => { });    //false
 * isArrayLike([]);    //true
 * isArrayLike([1, 2, 3]);    //true
 * isArrayLike({ 0: 1, length: 1 });    //true
 * ```
 *
 * @param value 待校验的值
 * @returns 类数组则返回 `true`，否则返回 `false`
 */
export default function isArrayLike<T = any>(value: T): boolean {
  return !isNil(value) && isNumber((value as any).length) && typeof value !== 'function';
}
