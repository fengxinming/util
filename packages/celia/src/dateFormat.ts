
const FORMAT_REGEX = /\[.*?\]|Y{2,4}|y{2,4}|M{1,2}|D{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|SSS|Z{1,2}/g;
const ZERO = '00';

function padLeft(val: number, len = 2) {
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  return (ZERO + val).slice(-len);
}

function timezone(together?: boolean) {
  let minutes = (new Date()).getTimezoneOffset();
  let prefix;
  if (minutes < 0) {
    prefix = '+';
    minutes = Math.abs(minutes);
  }
  else {
    prefix = '-';
  }
  return `${prefix}${padLeft(Math.floor(minutes / 60))}${together ? '' : ':'}${padLeft(Math.floor(minutes % 60))}`;
}

function h12(hours: number) {
  hours = hours || 24;
  return hours > 12 ? hours - 12 : hours;
}

/**
 * 格式化日期，模板格式可以包含 Y M D H m s SSS Z 如下字符，如:
 * YYYY-MM-DDTHH:mm:ss.SSSZ
 * YYYY/MM/DD
 * HH:mm:ss
 *
 * @example
 * ```js
 * const date1 = new Date();
 * const date2 = moment(+date1);
 *
 * format(date1, 'YYYY-MM-DD HH:mm:ss');
 * // date2.format('YYYY-MM-DD HH:mm:ss')
 *
 * format(date1, 'YYYY-MM-DDTHH:mm:ss');
 * // date2.format('YYYY-MM-DDTHH:mm:ss')
 *
 * format(date1, 'YYYY-MM-DD');
 * // date2.format('YYYY-MM-DD')
 *
 * format(date1, 'yyyy-MM-dd');
 * // date2.format('YYYY-MM-DD')
 *
 * format(date1, 'YYYY/MM/DD');
 * // date2.format('YYYY/MM/DD')
 *
 * format(date1, 'YYYY-MM-DD hh:mm:ss');
 * // date2.format('YYYY-MM-DD hh:mm:ss')
 *
 * format(date1, 'YYYY-MM-DD HH:mm:ss');
 * // date2.format('YYYY-MM-DD HH:mm:ss')
 *
 * format(date1, 'YYYY-MM-DDTHH:mm:ss');
 * // date2.format('YYYY-MM-DDTHH:mm:ss')
 *
 * format(date1, 'YY/M/D');
 * // date2.format('YY/M/D')
 *
 * format(date1, 'YY-M-D H:m:s');
 * // date2.format('YY-M-D H:m:s')
 *
 * format(date1, 'YY-M-d h:m:s');
 * // date2.format('YY-M-D h:m:s')
 *
 * format(date1, 'YYYY-MM-DD hh:mm:ss.SSS');
 * // date2.format('YYYY-MM-DD hh:mm:ss.SSS')
 *
 * format(date1, 'YYYY-MM-DD hh:mm:ss.SSS +08:00');
 * // date2.format('YYYY-MM-DD hh:mm:ss.SSS +08:00')
 *
 * format(date1, 'YYYY-MM-DD hh:mm:ss.SSS -01:00');
 * // date2.format('YYYY-MM-DD hh:mm:ss.SSS -01:00')
 *
 * format(date1, 'YYYY-MM-DD hh:mm:ss.SSSZ');
 * // date2.format('YYYY-MM-DD hh:mm:ss.SSSZ')
 *
 * format(date1, 'YYYY-MM-DD hh:mm:ss.SSSZZ');
 * // date2.format('YYYY-MM-DD hh:mm:ss.SSSZZ')
 *
 * format(date1, 'YYYY-MM-DD hh:mm:ss Z');
 * // date2.format('YYYY-MM-DD hh:mm:ss Z')
 *
 * format(date1, 'YYYY-MM-DD hh:mm:ss ZZ');
 * // date2.format('YYYY-MM-DD hh:mm:ss ZZ')
 *
 * format(date1, '+YYYY-MM-DD HH:mm:ss');
 * // date2.format('+YYYY-MM-DD HH:mm:ss')
 *
 * format(date1);
 * // date2.toISOString());
 * ```
 *
 * @param date 日期对象
 * @param inputString 格式化模板
 * @returns 格式化后的日期字符串
 */
export default function dateFormat(date: Date, inputString?: string): string {
  if (!date) {
    return '';
  }

  if (!inputString) {
    return date.toISOString();
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return inputString.replace(FORMAT_REGEX, (matched: string) => {
    switch (matched) {
      case 'YY':
        return String(date.getFullYear()).slice(-2);
      case 'YYYY':
      case 'yyyy':
        return date.getFullYear();
      case 'M':
        return date.getMonth() + 1;
      case 'MM':
        return padLeft(date.getMonth() + 1);
      case 'D':
      case 'd':
        return date.getDate();
      case 'DD':
      case 'dd':
        return padLeft(date.getDate());
      // case 'T':
      //   return ' ';
      case 'H':
        return date.getHours();
      case 'HH':
        return padLeft(date.getHours());
      case 'h':
        return h12(date.getHours());
      case 'hh':
        return padLeft(h12(date.getHours()));
      case 'm':
        return date.getMinutes();
      case 'mm':
        return padLeft(date.getMinutes());
      case 's':
        return date.getSeconds();
      case 'ss':
        return padLeft(date.getSeconds());
      case 'SSS':
        return padLeft(date.getMilliseconds(), 3);
      case 'Z':
        return timezone();
      case 'ZZ':
        return timezone(true);
    }
    return matched;
  });
}
