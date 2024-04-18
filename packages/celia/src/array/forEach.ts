import _forEach from '../_/_forEach';
import _forNumber from '../_/_forNumber';
import isArrayLike from '../is/isArrayLike';
import isNumber from '../is/isNumber';


/**
 * 遍历数组或类数组
 *
 * @example
 * ```js
 * forEach([1, 2, 3], (item, index) => {
 *   // ...
 * }
 * ```
 *
 * @param value 数组或类数组
 * @param iterator 回调函数
 * @param canBreak 是否可中断
 * @typeParam T 数组元素类型
 */
function forEach<T>(
  value: ArrayLike<T>,
  iterator: (item: T, start: number, ctx: ArrayLike<T>) => any,
  canBreak?: boolean
): void;

/**
 * 遍历数组或类数组
 *
 * @example
 * ```js
 * forEach([1, 2, 3], 1, (item, index) => {
 *   // ...
 * }
 * ```
 *
 * @param value 数组或类数组
 * @param start 起始位置
 * @param iterator 回调函数
 * @param canBreak 是否可中断
 * @typeParam T 数组元素类型
 */
function forEach<T>(
  value: ArrayLike<T>,
  start: number,
  iterator: (item: T, start: number, ctx: ArrayLike<T>) => any,
  canBreak?: boolean
): void;

/**
 * 遍历数组或类数组
 *
 * @example
 * ```js
 * forEach([1, 2, 3, 4], 1, 2, (item, index) => {
 *   // ...
 * }
 * ```
 *
 * @param value 数组或类数组
 * @param start 起始位置
 * @param end 结束位置
 * @param iterator 回调函数
 * @param canBreak 是否可中断
 * @typeParam T 数组元素类型
 */
function forEach<T>(
  value: ArrayLike<T>,
  start: number,
  end: number,
  iterator: (item: T, start: number, ctx: ArrayLike<T>) => any,
  canBreak?: boolean
): void;

/**
 * 从 1 开始遍历数字
 *
 * @param value 数字
 * @param iterator 回调函数
 * @param canBreak 是否可中断
 */
function forEach(
  value: number,
  iterator: (item: number, start: number, ctx: number) => any,
  canBreak?: boolean
): void;

/**
 * 从开始位置遍历数字到结束为止
 *
 * @param value 数字
 * @param start 遍历起始位置
 * @param iterator 回调函数
 * @param canBreak 是否可中断
 */
function forEach(
  value: number,
  start: number,
  iterator: (item: number, start: number, ctx: number) => any,
  canBreak?: boolean
): void;

/**
 * 从开始位置遍历数字到指定结束位置
 *
 * @param value 数字
 * @param start 遍历起始位置
 * @param end 遍历结束位置
 * @param iterator 回调函数
 * @param canBreak 是否可中断
 */
function forEach(
  value: number,
  start: number,
  end: number,
  iterator: (item: any, s: number, ctx: number) => any,
  canBreak?: boolean
): void;

function forEach(
  value,
  start,
  end?,
  iterator?,
  canBreak?
) {
  if (isArrayLike(value)) {
    return _forEach(value, start, end, iterator, canBreak);
  }

  if (isNumber(value)) {
    return _forNumber(value, start, end, iterator, canBreak);
  }
}

export default forEach;
