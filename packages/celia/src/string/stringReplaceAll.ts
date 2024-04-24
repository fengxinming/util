
import { ReplaceAllOptions } from '../declaring';
import fitIndex from '../number/fitIndex';

type replacementFn = (c: string, offset: number, str: string) => string;

type finderFn = (str: string, sub: string, i: number) => number;

/**
 * 字符串替换函数
 *
 * @example
 * ```js
 * stringReplaceAll('这是一个字符串', 'dog', 'monkey');  // '这是一个字符串'
 * stringReplaceAll('这是一个字符串', '一', (match, offset) => {});  // '这是undefined个字符串'
 * ```
 *
 * @param str          字符串
 * @param substr       子字符串
 * @param replacement  替换内容或函数
 * @param options      选项
 * @returns            新字符串
 */
export default function stringReplaceAll(
  str: string,
  substr: string,
  replacement: replacementFn | any,
  options?: ReplaceAllOptions
): string {
  if (typeof str !== 'string'
      || !(typeof substr === 'string' && substr.length > 0)) {
    return str;
  }

  const { fromIndex, caseInsensitive } = options || {};

  const totalLen = str.length;
  const substrLen = substr.length;

  let fromIndex2 = fitIndex(fromIndex as number, totalLen);
  let cursor = 0; // 游标从0开始
  let result = ''; // 返回新字符串
  const replacer = typeof replacement === 'function'
    ? (v: replacementFn, offset: number) => v(str.slice(offset, offset + substrLen), offset, str)
    : (v: any) => v; // 替换函数
  let matchedOffset = -1; // 匹配字符偏移量

  // 找到匹配字符串的位置
  let lamb = str;
  let finder: finderFn = (s, sub, i) => s.indexOf(sub, i);
  if (caseInsensitive) {
    lamb = str.toLowerCase();
    finder = (s, sub, i) => s.indexOf(sub.toLowerCase(), i);
  }

  // eslint-disable-next-line no-cond-assign
  while ((matchedOffset = finder(lamb, substr, fromIndex2)) > -1) {
    result += str.slice(cursor, matchedOffset);
    result += replacer(replacement, matchedOffset);

    fromIndex2 = matchedOffset + substrLen;
    cursor = fromIndex2;
  }

  if (cursor === 0) {
    return str;
  }

  return result + str.slice(fromIndex2);
}
