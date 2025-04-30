import { getType } from './getType';

export type AsyncFunction<Args extends any[] = any[], Result = void> = (
  ...args: Args
) => Promise<Result>;

/**
 * Check if value is an async function
 *
 * 校验是否为异步函数
 *
 * @example
 * ```js
 * import { isAsyncFunction } from 'is-what-type';
 *
 * isAsyncFunction(async () => { }); // true
 * isAsyncFunction(() => { }); // false
 * isAsyncFunction(function() { }); // false
 * isAsyncFunction(async function() { }); // true
 * isAsyncFunction(123); // false
 * isAsyncFunction('string'); // false
 * isAsyncFunction({}); // false
 * ```
 *
 * @param value - The value to check
 * @returns `true` if `value` is an async function, `false` otherwise
 */
export function isAsyncFunction<T = AsyncFunction>(value: unknown): value is T {
  return getType(value) === 'AsyncFunction';
}
