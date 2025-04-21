/**
 * Check if value is an async function
 *
 * 校验是否为函数
 *
 * @example
 * ```js
 * import { isAsyncFunction } from 'is-what-type';
 *
 * isFunction(async () => { }); // true
 * isFunction(() => { }); // true
 * isFunction(function() { }); // true
 * isFunction(async function() { }); // true
 * isFunction(123); // false
 * isFunction('string'); // false
 * isFunction({}); // false
 * ```
 *
 * @param value - The value to check
 * @returns `true` if `value` is an async function, `false` otherwise
 */
export function isFunction<T =(...args: any[]) => any>(value: unknown): value is T {
  return typeof value === 'function';
}
