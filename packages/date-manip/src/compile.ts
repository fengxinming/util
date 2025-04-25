import { InnerDateParsingObject } from './types';
import units from './units';

interface TokenConfig {
  key: keyof InnerDateParsingObject; // 日期部分对应的键
  pattern: string; // 匹配规则
}

interface CompileResult {
  pattern: string;
  tokens: string[];
}

const { YEAR, MONTH, DATE, HOUR, MINUTE, SECOND, MILLISECOND, UTC_OFFSET } = units;

/** 转义正则特殊字符 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 定义占位符映射（格式符号 → 正则表达式）
const TOKEN_MAP: Record<string, TokenConfig> = {
  YYYY: { pattern: '(\\d{1,4})', key: YEAR }, // 年份
  // YY: { pattern: '(\\d{1,2})', key: YEAR }, // 年份
  MM: { pattern: '(\\d{1,2})', key: MONTH }, // 月份
  DD: { pattern: '(\\d{1,2})', key: DATE }, // 日期
  HH: { pattern: '(\\d{1,2})', key: HOUR }, // 小时
  mm: { pattern: '(\\d{1,2})', key: MINUTE }, // 分钟
  ss: { pattern: '(\\d{1,2})', key: SECOND }, // 秒
  SSS: { pattern: '(\\d{1,3})', key: MILLISECOND }, // 毫秒
  Z: { pattern: '(Z|[+-]\\d{2}(?::?\\d{2})?)', key: UTC_OFFSET } // 时区
};

const TOKEN_KEYS = Object.keys(TOKEN_MAP).sort((a, b) => (b.length - a.length));
// 生成原子化正则模板
const TOKEN_PATTERN = new RegExp(`(${TOKEN_KEYS.join('|')})`, 'g');

/**
 * Compile a format string into a regular expression and extract date parts.
 * 编译格式字符串，生成正则表达式和匹配的日期部分
 *
 * @param formatString - The format string to compile. (要编译的格式字符串。)
 * @returns A compiled result object containing the regular expression pattern and extracted date parts.
 * (包含正则表达式模式的编译结果对象，以及提取的日期部分。)
 * @example
 * ```ts
 * compile('YYYY-MM-DD HH:mm:ss.SSS');
 * // {
 * //   pattern: '(\\d{1,4})-(\\d{1,2})-(\\d{1,2}) (\\d{1,2}):(\\d{1,2}):(\\d{1,2})\\.(\\d{1,3})',
 * //   tokens: ['YYYY', 'MM', 'DD','HH', 'mm', 'ss', 'SSS']
 * // }
 * ```
 */
export default function compile(formatString: string): CompileResult {
  // 构建正则表达式并提取日期部分
  const matchedTokens: string[] = [];
  const pattern = escapeRegex(formatString)
    .replace(TOKEN_PATTERN, (m) => {
      matchedTokens.push(m);
      return TOKEN_MAP[m].pattern;
    });

  return { pattern, tokens: matchedTokens };
}
