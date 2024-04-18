
/**
 * 检查是否是类 Promise 类型
 *
 * @example
 * ```js
 * isPromiseLike(null);  // false
 *
 * isPromiseLike(undefined);  // false
 *
 * isPromiseLike({});  // false
 *
 * isPromiseLike(new Promise(() => { }));  // true
 *
 * isPromiseLike({ then: () => { }, catch: () => { } });  // true
 * ```
 *
 * @param value 待检查的值
 * @returns `true` 表示是类 Promise 类型，否则为 `false`
 */
export default function isPromiseLike<T = any>(value: T) {
  return !!value
    && typeof (value as any).then === 'function';
}
