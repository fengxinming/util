
import _rest from '../_/_rest';
import isNil from '../is/isNil';

/**
 * 浅拷贝对象并排除指定属性
 *
 * @example
 * ```js
 * rest({a: 1, b: 2, c: 3}, ['a', 'c']); // {b: 2}
 * ```
 *
 * @param object 要拷贝的对象
 * @param exclude 排除的属性
 * @returns 排除指定属性后的对象
 */
export default function rest<T>(
  object: Record<string, T>,
  exclude?: string[]
): Record<string, T>;

/**
 * 浅拷贝对象并排除指定属性
 *
 * @example
 * ```js
 * rest({a: 1, b: 2, c: 3}, ['a', 'c']); // {b: 2}
 * ```
 *
 * @param object 要拷贝的对象
 * @param exclude 排除的属性
 * @returns 排除指定属性后的对象
 */
export default function rest(
  object: any,
  exclude?: string[]
): any;

export default function rest(object, exclude): any {
  return isNil(object) ? {} : _rest(object, exclude);
}
