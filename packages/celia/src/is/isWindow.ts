
/**
 * 检查是否是window对象
 *
 * @example
 * ```js
 * isWindow(window);  // true
 * ``
 *
 * @param elem 待检查的元素
 * @returns 是否是window对象
 */
export default function isWindow<T = any>(elem: T) {
  return !!elem && elem === (elem as any).window;
}
