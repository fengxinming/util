
import _forOwn from '../_/_forOwn';
import isNil from '../is/isNil';

/**
 * 遍历object可中途打断
 *
 * @example
 * ```js
 * forOwn({ a: 1, b: 2 }, () => {
 * // ...
 * });
 * ```
 *
 * @param object 遍历对象
 * @param iterator 迭代器
 */
function forOwn<T>(
  object: Record<string, T>,
  iterator: (item: T, key: string, ctx: Record<string, T>) => any,
  canBreak?: boolean
): void;

/**
 * 遍历object可中途打断
 *
 * @example
 * ```js
 * forOwn({ a: 1, b: 2 }, () => {
 * // ...
 * });
 * ```
 *
 * @param object 遍历对象
 * @param iterator 迭代器
 */
function forOwn(
  object: any,
  iterator: (item: any, key: string, ctx: any) => any,
  canBreak?: boolean
): void;

function forOwn(object, iterator, canBreak) {
  if (!isNil(object)) {
    _forOwn(object, iterator, canBreak);
  }
}

export default forOwn;
