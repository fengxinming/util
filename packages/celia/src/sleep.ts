
/**
 * 按照指定的时间间隔延迟执行
 *
 * @example
 * ```js
 * await sleep(1000);
 * ```
 *
 * @param mills 指定延迟的时间间隔
 * @returns `Promise<void>`
 */
function sleep(mills: number): Promise<void>;

/**
 * 按照指定的时间间隔延迟执行
 *
 * @example
 * ```js
 * const result = await sleep(1000, 'hello world');
 * // result === 'hello world'
 * ```
 *
 * @param mills 指定延迟的时间间隔
 * @returns `Promise<T>`
 */
function sleep<T = any>(mills: number, arg: T): Promise<T>;

function sleep(mills, arg?) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arg);
    }, mills || 0);
  });
}

export default sleep;
