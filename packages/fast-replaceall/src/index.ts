export interface ReplaceAllOptions {
  fromIndex?: number;
  caseInsensitive?: boolean;
}

export type ReplacementFn = (match: string, offset: number, str: string) => string;

function fitIndex(fromIndex: number, length: number): number {
  return fromIndex ? fromIndex < 0 ? Math.max(0, length + fromIndex) : Math.min(fromIndex, length - 1) : 0;
}

function processBlankSegment(str: string, replacement: ReplacementFn | string, isFn: boolean, index: number): string {
  return isFn
    ? (replacement as ReplacementFn)('', index, str)
    : (replacement as string);
}

function handleZeroLengthEdgeCase(
  str: string,
  len: number,
  replacement: string | ReplacementFn,
  isFn: boolean
): string {
  let result = `${processBlankSegment(str, replacement, isFn, 0)}`;
  for (let i = 0; i < len; i++) {
    result += str[i] + processBlankSegment(str, replacement, isFn, i + 1);
  }
  return result;
}

/**
 * 字符串替换函数
 *
 * @example
 * ```js
 * replaceAll('这是一个字符串', 'dog', 'monkey');  // '这是一个字符串'
 * replaceAll('这是一个字符串', '一', (match, offset) => {});  // '这是undefined个字符串'
 * ```
 *
 * @param str          字符串
 * @param substr       子字符串
 * @param replacement  替换内容或函数
 * @param options      选项
 * @returns            新字符串
 */
export default function replaceAll(
  str: string,
  substr: string,
  replacement: ReplacementFn | any,
  options?: ReplaceAllOptions
): string {
  // 参数校验
  if (typeof str !== 'string') {
    return str;
  }
  if (typeof substr !== 'string') {
    return str;
  }

  const isFn = typeof replacement === 'function';

  const substrLen = substr.length;
  const totalLen = str.length;

  // 处理空子字符串的特殊情况
  if (substrLen === 0) {
    return handleZeroLengthEdgeCase(str, totalLen, replacement, isFn);
  }

  // 配置解析
  const { fromIndex, caseInsensitive } = options || {};
  let currentIndex = fitIndex(fromIndex as number, totalLen);

  // 预处理大小写敏感配置
  let searchStr =  substr;
  let sourceStr = str;
  if (caseInsensitive) {
    searchStr = substr.toLowerCase();
    sourceStr = str.toLowerCase();
  }

  // 初始化循环变量
  let result = '';
  let lastIndex = 0;

  while (currentIndex <= totalLen - substrLen) {
    const matchIndex = sourceStr.indexOf(searchStr, currentIndex);
    if (matchIndex === -1) {
      break;
    }

    // 拼接未匹配部分
    result += str.slice(lastIndex, matchIndex);

    // 处理替换内容
    if (isFn) {
      result += replacement(
        str.slice(matchIndex, matchIndex + substrLen),
        matchIndex,
        str
      );
    }
    else {
      result += replacement;
    }

    // 更新索引
    lastIndex = matchIndex + substrLen;
    currentIndex = lastIndex;
  }

  return lastIndex === 0 ? str : result + str.slice(lastIndex);
}
