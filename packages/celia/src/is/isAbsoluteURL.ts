
const PROTOCOL = /^([a-z][a-z\d+\-.]*:)?\/\//i;

/**
 * 检查是否是绝对URL地址
 *
 * @example
 * ```js
 * isAbsoluteURL('/src/isAbsoluteURL.js');   // false
 * isAbsoluteURL('https://github.com');   // true
 * ```
 *
 * @param url 待检查的URL地址
 * @returns `true` 表示是绝对URL地址，否则为`false`
 */
export default function isAbsoluteURL(url: any): boolean {
  return PROTOCOL.test(url);
}
