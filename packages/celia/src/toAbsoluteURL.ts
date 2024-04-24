
import isAbsoluteURL from './is/isAbsoluteURL';

const aTest = typeof document !== 'undefined' ? document.createElement('a') : null;

/**
 * 转换相对URL地址至绝对URL地址
 *
 * @example
 * ```js
 * toAbsoluteURL('/foo/bar'); // https://localhost/foo/bar
 * ```
 *
 * @param url URL地址
 * @returns 绝对URL地址
 */
export default function toAbsoluteURL(url: string): string {
  if (!isAbsoluteURL(url) && aTest) {
    aTest.href = url;
    url = aTest.href;
    aTest.href = '';
  }
  return url;
}
