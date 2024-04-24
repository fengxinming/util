
import _emptyOwn from '../_/_emptyOwn';
import isNil from '../is/isNil';

/**
 * 清空对象的自身非原型链属性
 *
 * @example
 * ```js
 * emptyOwn(obj, ['a']);  // { a: 1, d: 4 }
 * emptyOwn(obj);  // { }
 * ```
 *
 * @param object - 要清空的对象
 * @param exclude - 要排除的属性名
 * @returns 清空后的对象
 */
export default function emptyOwn<T>(
  object: T,
  exclude?: string[]
): void {
  if (!isNil(object)) {
    _emptyOwn(object, exclude);
  }
}
