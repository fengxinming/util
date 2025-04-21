import { isObject } from './isObject';

const hasSymbol
  = typeof Symbol === 'function'
  && typeof Symbol.toStringTag === 'symbol';

/**
 * Check if the value is an ES Module
 *
 * 校验是否是 ES Module
 *
 * @example
 * ```js
 * import { isESModule } from 'is-what-type';
 *
 * isESModule({}); // false
 * isESModule({ __esModule: true }); // true
 * isESModule({ [Symbol.toStringTag]: 'Module' }); // true
 * isESModule('string'); // false
 * isESModule(123); // false
 * isESModule(null); // false
 * isESModule(undefined); // false
 * ```
 *
 * @param value THe value to check
 * @returns `true` if the value is an ES Module, else `false`
 */
export function isESModule<T = object>(value: unknown): value is T {
  return isObject(value)
    && ((value as any).__esModule || (hasSymbol && value[Symbol.toStringTag] === 'Module'));
}
