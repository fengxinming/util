import { _parse as parseQuery } from './_parse';
import { unescape } from './unescape';

export interface ParseOptions {
  sep?: string;
  eq?: string;
  decodeURIComponent?: (str: string) => string;
  filter?: (key: string, val: any) => any;
  start?: number | string;
}

/**
 * 将 URL 查询字符串 str 解析为键值对的集合
 *
 * parse('http://demo.com?a=1&a=2&a=3&d=&f=')
 *
 * // { a: ['1', '2', '3'], d: '', f: '' }
 *
 * @param str 要解析的 URL 查询字符串
 * @param options 可选
 * @returns object对象
 */
export function parse(
  str: string,
  options?: ParseOptions
): Record<string, string | string[]> {
  if (!str || typeof str !== 'string') {
    return {};
  }

  if (!options) {
    options = {};
  }

  const sep = options.sep || '&';
  const eq = options.eq || '=';

  const { start, filter } = options;
  const end = str.length;
  const fromIndex = start === 0
    ? 0
    : start as number < 0
      ? Math.max(0, end + (start as number))
      : start as number > 0
        ? Math.min(start as number, end - 1)
        : str.indexOf(start as string || '?') + 1;

  const result: Record<string, string | string[]> = Object.create(null);

  let current: string | string[];
  const set = (
    key: string,
    value: string,
  ): void => {
    current = result[key];
    // 没有相同的key值
    if (current === void 0) {
      result[key] = value;
    }
    else if ((current as string[]).pop) { // 判断是数组
      (current as string[]).push(value);
    }
    else { // 已存在key
      result[key] = [current as string, value];
    }
  };

  parseQuery(
    str,
    fromIndex,
    end,
    sep,
    eq,
    options.decodeURIComponent || unescape,
    filter
      ? (key, value) => {
        if (filter(key, value)) {
          set(key, value);
        }
      }
      : set
  );

  return result;
}
