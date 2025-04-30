/**
 * 针对decodeURIComponent做了异常捕获，decodeURIComponent('a=%')会出现异常
 *
 * @param str 编码过的字符串
 * @returns
 */
export default function unescape(str: string): string {
  try {
    return decodeURIComponent(str);
  }
  catch (err) {
    console.warn(`Error decoding "${str}". Leaving it intact.`);
  }
  return str;
}
