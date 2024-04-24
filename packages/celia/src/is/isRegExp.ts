
/**
 * 检查是否是RegExp对象
 *
 * @example
 * ```js
 * isRegExp(null);  // false
 * isRegExp(undefined);  // false
 * isRegExp({});  // false
 * isRegExp(Object.create(null));  // false
 * isRegExp(/\d+/);  // true
 * ```
 *
 * @param value 要检查的值
 * @returns 如果是返回`true`, 否则返回`false`
 */
export default function isRegExp<T>(value: T) {
  return value instanceof RegExp;
}
