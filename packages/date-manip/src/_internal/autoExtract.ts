import { BASIC_ISO_REGEX, EXTENDED_ISO_REGEX, ISO_DATES_REGEX, ISO_TIMES_REGEX, TZ_REGEX } from './regex';

export default function autoExtract(input: string): number[] | string {
  const dateRet: number[] = new Array(8);

  let matches: RegExpExecArray | null;
  const match = EXTENDED_ISO_REGEX.exec(input) || BASIC_ISO_REGEX.exec(input);

  if (match) {
    // 解析YYYY-MM-DD
    const datesLen = ISO_DATES_REGEX.length;

    for (let i = 0; i < datesLen; i++) {
      if ((matches = ISO_DATES_REGEX[i].exec(match[1]))) {
        for (let j = 0; j < 3; j++) {
          const matched = matches[j + 1];
          dateRet[j] = matched ? +matched : 1;
        }

        // 月份从0开始
        if (dateRet[1]) {
          dateRet[1] -= 1;
        }
        break;
      }
    }

    // 解析hh:mm:ss
    matches = null;
    if (match[3]) {
      for (let i = 0, timesLen = ISO_TIMES_REGEX.length; i < timesLen; i++) {
        if ((matches = ISO_TIMES_REGEX[i].exec(match[3]))) {
          if (matches[4]) {
            matches[4] = matches[4].padEnd(3, '00');
          }
          for (let j = 1, len = matches.length; j < len; j++) {
            dateRet[j + 2] = +matches[j];
          }
          break;
        }
      }
    }

    matches = null;
    // 时区问题
    if (match[4]) {
      matches = TZ_REGEX.exec(match[4]);

      if (matches) {
        dateRet[7] = matches[1]
          // utc
          ? NaN
          // 匹配到类似+08:00
          : +matches[2] * 60 + (matches[3] ? +matches[3] : 0);
      }
    }

    return dateRet;
  }

  return input;
}
