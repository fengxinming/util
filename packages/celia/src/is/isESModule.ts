
const hasSymbol
  = typeof Symbol === 'function'
  && typeof Symbol.toStringTag === 'symbol';

/**
 * 检查是否是 ES Module
 *
 * @example
 * ```js
 * isESModule({})
 * // false
 * ```
 *
 * @param obj 对象
 * @returns 是否是 ES Module
 */
export default function isESModule<T>(obj: T) {
  return (obj as any).__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module');
}
