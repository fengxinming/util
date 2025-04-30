/**
 * Ensure the type of a value
 *
 * 确认类型
 *
 * @example
 * ```js
 * import { ensureType } from 'is-what-type';
 *
 * const value: string | number | boolean | null | undefined | symbol | bigint = null;
    const whatType = typeof value;

    if (ensureType<object>(value, whatType === 'object')) {
      Object.keys(value); // Throws TypeError: Cannot convert undefined or null to object
    }
 * ```
 *
 * @param value - The value to check
 * @param checked - If the type is already checked
 * @returns
 */
export function ensureType<T = unknown>(value: unknown, checked: boolean): value is T {
  return checked;
}
