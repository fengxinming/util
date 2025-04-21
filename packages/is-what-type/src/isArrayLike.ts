import { isLength } from './isLength';

/**
 * Check if the value is array-like
 *
 * 校验是否是类数组
 *
 * @example
 * ```js
 * import { isArrayLike } from 'is-what-type';
 *
 * isArrayLike([1, 2, 3]); // true
 * isArrayLike('hello'); // true
 * isArrayLike({ length: 3, 0: 'a', 1: 'b', 2: 'c' }); // true
 * isArrayLike(function() {}); // false
 * isArrayLike(null); // false
 * isArrayLike(undefined); // false
 * isArrayLike({}); // false
 * ```
 *
 * @param value - The value to check
 * @returns `true` if the value is array-like, else `false`
 */
export function isArrayLike<T = any>(value: unknown): value is ArrayLike<T> {
  return value != null
    && isLength((value as ArrayLike<T>).length)
    && typeof value !== 'function';
}
