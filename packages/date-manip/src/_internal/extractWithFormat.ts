import compile from '../compile';
import { TZ_REGEX } from './regex';

function toInteger(val: string): number {
  return parseInt(val, 10);
}

function toMonth(val: string): number {
  return parseInt(val, 10) - 1;
}

function toMilliseconds(val: string): number {
  return parseInt(val.padEnd(3, '0'), 10);
}

function parseTimezone(val: string): number {
  if (val === 'Z') { // utc
    return NaN;
  }

  // 匹配到类似+08:00
  const matches = TZ_REGEX.exec(val) as RegExpExecArray;
  return +matches[2] * 60 + (matches[3] ? +matches[3] : 0);

}

export default function extractWithFormat(input: string, format: string): number[] | string {
  // 构建正则表达式并提取日期部分
  const { pattern, tokens } = compile(format);

  // 执行正则匹配
  const match = new RegExp(pattern).exec(input);
  if (!match) {
    return '';
  }

  // 提取日期组件
  const parts: number[] = [];
  tokens.forEach((token, i) => {
    const value = match[i + 1];
    switch (token) {
      case 'YYYY':
        parts[0] = toInteger(value);
        break;
      // case 'YY':
      //   parts[0] = toInteger(value);
      //   break;
      case 'MM':
        parts[1] = toMonth(value);
        break;
      case 'DD':
        parts[2] = toInteger(value);
        break;
      case 'HH':
        parts[3] = toInteger(value);
        break;
      case 'mm':
        parts[4] = toInteger(value);
        break;
      case 'ss':
        parts[5] = toInteger(value);
        break;
      case 'SSS':
        parts[6] = toMilliseconds(value);
        break;
      case 'Z':
        parts[7] = parseTimezone(value);
        break;
    }
  });

  return parts;
}
