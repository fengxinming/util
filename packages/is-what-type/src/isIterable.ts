/**
 * Check if the value is an iterable object.
 *
 * 校验是否是一个可迭代对象
 *
 * @example
 * ```js
 * import { isIterable } from 'is-what-type';
 *
 * isIterable([]); // true
 * isIterable('string'); // true
 * isIterable(new Map()); // true
 * isIterable(new Set()); // true
 * isIterable({}); // false
 * isIterable(null); // false
 * isIterable(undefined); // false
 * isIterable(123); // false
 * isIterable(function() {}); // false
 * ```
 *
 * @param value - The value to check
 * @returns `true` if the value is an iterable object, `false` otherwise
 */
export function isIterable<T = any>(value: unknown): value is Iterable<T> {
  return value != null && typeof value[Symbol.iterator] === 'function';
}
