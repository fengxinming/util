/**
 * 防抖
 *
 * @example
 * ```js
 * const debounced = debounce(() => {
 *   resolve(Date.now());
 * }, 1000);
 *
 * debounced();
 * ```
 *
 * @param func 要执行的函数
 * @param wait 延迟执行毫秒数
 * @param immediate 是否立即执行
 * @returns 执行函数的返回值，可能为 `undefined`
 */
export default function debounce(
  func: (...args: any[]) => any,
  wait: number,
  immediate?: boolean
): any {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function!');
  }

  let timeout: any;
  let previous: number;
  let _args: any[] | null = null;
  let result: any;
  let context: any;

  const later = function () {
    const passed = Date.now() - previous;
    if (wait > passed) {
      timeout = setTimeout(later, wait - passed);
    }
    else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, _args as any[]);
      }

      if (!timeout) {
        _args = null;
        context = null;
      }
    }
  };

  const debounced = function (this: any, ...args: any[]): any {
    context = this;
    _args = args;
    previous = Date.now();
    if (!timeout) {
      timeout = setTimeout(later, wait);
      if (immediate) {
        result = func.apply(context, args);
      }
    }
    return result;
  };

  debounced.cancel = function () {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = null;
    _args = null;
    context = null;
  };

  return debounced;
}
