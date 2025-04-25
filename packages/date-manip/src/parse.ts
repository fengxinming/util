import { isNumber, isObject } from 'is-what-type';

import autoExtract from './_internal/autoExtract';
import createFromArray from './_internal/createFromArray';
import extractWithFormat from './_internal/extractWithFormat';
import normalizeUnit from './_internal/normalizeUnit';
import { DateInput, DateParsingObject } from './types';
import units from './units';

const { DATE, DAY, HOUR, MILLISECOND, MINUTE, MONTH, SECOND, YEAR, UTC_OFFSET } = units;

const ASP_NET_JSON_REGEX = /^\/?Date\((-?\d+)/i;

function parseObject(obj: DateParsingObject): Date {
  const array: number[] = [];

  Object.entries(obj).forEach(([unit, value]) => {
    unit = normalizeUnit(unit);

    switch (unit) {
      case YEAR:
        array[0] = value;
        break;
      case MONTH:
        array[1] = value;
        break;
      case DATE:
      case DAY:
        array[2] = value;
        break;
      case HOUR:
        array[3] = value;
        break;
      case MINUTE:
        array[4] = value;
        break;
      case SECOND:
        array[5] = value;
        break;
      case MILLISECOND:
        array[6] = value;
        break;
      case UTC_OFFSET:
        array[7] = value;
        break;
    }
  });

  if (array.length === 0) {
    return new Date();
  }

  return createFromArray(array);
}

function parseString(input: string, format?: string): Date {
  const extracted = typeof format === 'string' && format
    ? extractWithFormat(input, format)
    : autoExtract(input); // 自动判断格式

  if (Array.isArray(extracted)) {
    return createFromArray(extracted);
  }

  const matched = ASP_NET_JSON_REGEX.exec(input);
  return new Date(matched !== null ? +matched[1] : Date.parse(extracted));
}

/**
 * Parses a date from various input types.
 * 从各种输入类型中解析日期。
 *
 * @param input - The input to parse, which can be a string, number, Date, or array of numbers.
 * (要解析的输入，可以是字符串、数字、Date 对象或数字数组。)
 * @param format - An optional format string that specifies the format of the input string if the input is a string.
 * Or A boolean indicating whether the date should be in UTC.
 * (可选的格式字符串，指定输入字符串的格式，如果输入是字符串。 或者是布尔值，表示日期是否应为 UTC。)
 * @returns A Date object representing the parsed date. (表示解析后日期的 Date 对象。)
 * @example
 * ```ts
 * // 从字符串中解析日期
 * const result = parse('20231001123456', 'YYYYMMDDHHmmss');
 * console.log(result); // 输出: 2023-10-01T12:34:56.000Z
 *
 * // 从 ISO 8601 字符串中解析日期
 * const isoResult = parse('2023-10-01T12:34:56Z');
 * console.log(isoResult); // 输出: 2023-10-01T12:34:56.000Z
 *
 * // 从数字数组中解析日期
 * const arrayResult = parse([2023, 9, 1, 12, 34, 56]);
 * console.log(arrayResult); // 输出: 2023-10-01T12:34:56.000Z
 *
 * // 从数字中解析日期
 * const numberResult = parse(1696119296000);
 * console.log(numberResult); // 输出: 2023-10-01T12:34:56.000Z
 *
 * // 从 Date 对象中解析日期
 * const dateResult = parse(new Date('2023-10-01T12:34:56Z'));
 * console.log(dateResult); // 输出: 2023-10-01T12:34:56.000Z
 * ```
 */
export default function parse(input: DateInput | {isValid: () => any}, format?: string): Date {
  let ret: Date;

  if (typeof input === 'string') {
    ret = parseString(input, format);
  }
  else if (Array.isArray(input)) {
    ret = createFromArray(input);
  }
  else if (input instanceof Date) {
    ret = new Date(input);
  }
  else if (isObject(input)) {
    if ((input as any).isValid && (input as any).isValid()) {
      ret = new Date(+input);
    }
    else {
      ret = parseObject(input as DateParsingObject);
    }
  }
  else if (isNumber(input)) {
    ret = new Date(input);
  }
  else if (typeof input === 'undefined') {
    ret = format ? new Date(NaN) : new Date();
  }
  else {
    // input = null, etc
    ret = new Date(Date.parse(input));
  }

  return ret;
}
