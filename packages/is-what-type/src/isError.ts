/**
 * Check if the value is an Error object
 *
 * 校验是否是错误对象
 *
 * @example
 * ```js
 * import { isError } from 'is-what-type';
 *
 * isError(new Error()); // true
 * isError(new TypeError()); // true
 * isError({}); // false
 * isError({ name: 'CustomError' }); // true
 * isError({ name: 'NotAnError' }); // false
 * isError(null); // false
 * isError(undefined); // false
 * isError('string'); // false
 * isError(123); // false
 * ```
 *
 * @param value - The value to check
 * @returns `true` if the value is an Error object, else `false`
 */
export function isError(value: unknown): value is Error {
  if (value == null) {
    return false;
  }
  if (value instanceof Error) {
    return true;
  }
  // custom error
  const { name } = value as {name: string};
  return typeof name === 'string' && name.endsWith('Error');
}
