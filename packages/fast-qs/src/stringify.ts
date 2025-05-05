
import { _stringify as stringifyQuery } from './_stringify';
import { escape } from './escape';

export interface StringifyOptions {
  sep?: string;
  eq?: string;
  encodeURIComponent?: (str: string) => string;
  filter?: (key: string, val: any) => any;
}

/**
 * 通过遍历对象的自身属性从给定的 obj 生成 URL 查询字符串
 *
 * stringify({ a: [1, 2, 3, 4], b: 'test' })
 *
 * // 'a=1&a=2&a=3&a=4&b=test'
 *
 */
export function stringify(
  obj: Record<string, any>,
  options?: StringifyOptions
): string {
  if (obj == null || typeof obj !== 'object') {
    return '';
  }
  if (!options) {
    options = {};
  }
  const sep = options.sep || '&';
  const eq = options.eq || '=';

  return stringifyQuery(
    obj,
    sep,
    eq,
    options.encodeURIComponent || escape,
    options.filter
  );
}
