/**
 * Check if the value is what you want
 *
 * 校验是否是想要的类型
 *
 * @example
 * ```js
 * import { isWhat } from 'is-what-type';
 *
 * const value: string | number | boolean | null | undefined | symbol | bigint = null;
    const whatType = typeof value;

    if (isWhat<object>(value, whatType, 'object')) {
      Object.keys(value); // Throws TypeError: Cannot convert undefined or null to object
    }
 * ```
 *
 * @param value - The value to check
 * @param type - The type of the value
 * @param comparingType - The type to compare with
 * @returns
 */
export function isWhat<T = unknown>(value: unknown, type: unknown, comparingType: unknown): value is T {
  return type === comparingType;
}
