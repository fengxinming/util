function padLeft(val: number | string, len?: number): string {
  return String(val).padStart(len || 2, '0');
}

function dateTimeFormat(date: Date, opts: any): string {
  return new Intl.DateTimeFormat('en-US', opts).format(date);
}

function getOrdinalSuffix(day: number): string {
  if (day > 3 && day < 21) {
    return 'th';
  }
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function timezone(date: Date, together?: boolean): string {
  let offset = date.getTimezoneOffset();
  let prefix;
  if (offset <= 0) {
    prefix = '+';
    offset = Math.abs(offset);
  }
  else {
    prefix = '-';
  }
  return `${prefix}${padLeft(Math.floor(offset / 60))}${together ? '' : ':'}${padLeft(Math.floor(offset % 60))}`;
}

interface FormatMap {
  [key: string]: (date: Date) => any;
}

const FORMAT_MAP: FormatMap = {
  // 年份
  yyyy: (d) => d.getFullYear(),
  YYYY: (d) => d.getFullYear(),
  YY: (d) => padLeft(d.getFullYear() % 100),

  // 月份
  MMMM: (d) => dateTimeFormat(d, { month: 'long' }),
  MMM: (d) => dateTimeFormat(d, { month: 'short' }),
  MM: (d) => padLeft(d.getMonth() + 1),
  M: (d) => d.getMonth() + 1,

  // 日期
  DD: (d) => padLeft(d.getDate()),
  D: (d) => d.getDate(),
  Do: (d) => {
    const day = d.getDate();
    return String(day) + getOrdinalSuffix(day);
  },

  // 星期
  dddd: (d) => dateTimeFormat(d, { weekday: 'long' }),
  ddd: (d) => dateTimeFormat(d, { weekday: 'short' }),
  dd: (d) => dateTimeFormat(d, { weekday: 'narrow' }),

  // 时间
  HH: (d) => padLeft(d.getHours()),
  H: (d) => d.getHours(),
  hh: (d) => padLeft(d.getHours() % 12 || 12),
  h: (d) => d.getHours() % 12 || 12,
  mm: (d) => padLeft(d.getMinutes()),
  m: (d) => d.getMinutes(),
  ss: (d) => padLeft(d.getSeconds()),
  s: (d) => d.getSeconds(),
  SSS: (d) => padLeft(d.getMilliseconds(), 3),

  // 其他
  A: (d) => (d.getHours() >= 12 ? 'PM' : 'AM'),
  a: (d) => (d.getHours() >= 12 ? 'pm' : 'am'),
  Z: (d) => timezone(d),
  ZZ: (d) => timezone(d, true)
};

// 按优先级排序的匹配标记（长标记优先）
const tokens = Object.keys(FORMAT_MAP)
  .sort((a, b) => b.length - a.length)
  .join('|');

// 创建主正则表达式
const pattern = new RegExp(
  `${tokens}|\\[([^\\]]*)]`,
  'g'
);

/**
 * Formats a date according to the specified format string.
 * 根据指定的格式字符串格式化日期。
 *
 * @param date - The date to format. (要格式化的日期。)
 * @param formatString - The format string to use. (要使用的格式字符串。)
 * @returns The formatted date string. (格式化后的日期字符串。)
 * @example
 * ```ts
 * // Formatting a date with 'YYYY-MM-DD' format (使用 'YYYY-MM-DD' 格式格式化日期)
 * const date1 = new Date('2023-10-01T12:00:00');
 * const formattedDate1 = format(date1, 'YYYY-MM-DD');
 * console.log(formattedDate1); // Outputs: '2023-10-01' (输出: '2023-10-01')
 *
 * // Formatting a date with 'YYYY-MM-DD HH:mm:ss' format (使用 'YYYY-MM-DD HH:mm:ss' 格式格式化日期)
 * const date2 = new Date('2023-10-01T12:30:45');
 * const formattedDate2 = format(date2, 'YYYY-MM-DD HH:mm:ss');
 * console.log(formattedDate2); // Outputs: '2023-10-01 12:30:45' (输出: '2023-10-01 12:30:45')
 *
 * // Formatting a date with 'YYYY-MM-DDTHH:mm:ssZ' format (使用 'YYYY-MM-DDTHH:mm:ssZ' 格式格式化日期)
 * const date3 = new Date('2023-10-01T12:30:45');
 * const formattedDate3 = format(date3, 'YYYY-MM-DDTHH:mm:ssZ');
 * console.log(formattedDate3); // Outputs: '2023-10-01T12:30:45-04:00' (输出: '2023-10-01T12:30:45-04:00')
 *
 * // Using 'ISO' format (使用 'ISO' 格式)
 * const date4 = new Date('2023-10-01T12:30:45');
 * const formattedDate4 = format(date4, 'ISO');
 * console.log(formattedDate4); // Outputs: '2023-10-01T16:30:45.000Z' (输出: '2023-10-01T16:30:45.000Z')
 * ```
 */
export default function format(date: Date, formatString?: string): string {
  if (!formatString || formatString === 'ISO') {
    return date.toISOString();
  }

  return formatString.replace(pattern, (match, escapeContent): any => {
    // 处理转义内容
    if (escapeContent) {
      return escapeContent;
    }

    // 处理格式化标记
    const formatter = FORMAT_MAP[match];
    return formatter ? formatter(date) : match;
  });
}
