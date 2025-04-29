const encodeReserveRE = /[!'()*]/g;
const encodeReserveReplacer = (c: string) => `%${c.charCodeAt(0).toString(16)}`;

/**
 * 修复了encodeURIComponent遗漏的几种编码情况：[!'()*]
 *
 * @param str 准备编码的字符串
 * @returns
 */
export default function escape(str: string): string {
  return encodeURIComponent(str)
    .replace(encodeReserveRE, encodeReserveReplacer);
}
