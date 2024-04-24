
function isObjectLike(value: any) {
  return !!value && Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * 检查是否是一个普通对象，兼容ie9+
 *
 * @example
 * ```js
 * isPlainObject({});  // true
 *
 * function Fn() {}
 * isPlainObject(new Fn());  // false
 * ```
 *
 * @param value 要检查的值
 * @returns 如果是，返回`true`，否则返回`false`
 */
export default function isPlainObject<T = any>(value: T) {
  if (!isObjectLike(value)) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}
