import { isObject } from 'is-what-type';

import addNumber from './_internal/addNumber';
import addObject from './_internal/addObject';
import { DateAddingObject, Unit } from './types';

export default function subtract(date: Date, input: number | DateAddingObject): Date;
export default function subtract(date: Date, num: number, unit: Unit): Date;

/**
 * Subtracts a specified number of time units from a date.
 * 从日期中减去指定数量的时间单位。
 *
 * @param date - The date to subtract time from. (要减去时间的日期。)
 * @param num - The number of time units to subtract,
 * or an object where keys are time units and values are the number of units to subtract.
 * (要减去的时间单位数量，或一个对象，其中键是时间单位，值是要减去的时间单位数量。)
 * @param unit - The unit of time to subtract (e.g., 'year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond').
 * (要减去的时间单位，例如 'year'、'month'、'day'、'hour'、'minute'、'second'、'millisecond'。)
 *              This parameter is required if `num` is a number. (如果 `num` 是数字，则此参数是必需的。)
 * @returns A new date object with the specified time units subtracted. (减去指定时间单位后的新日期对象。)
 * @example
 * ```ts
 * // Subtracting 5 days from a date (从日期中减去5天)
 * const date1 = new Date('2023-10-01');
 * subtract(date1, 5, 'day');
 * console.log(date1.toISOString()); // Outputs: '2023-09-26T00:00:00.000Z' (输出: '2023-09-26T00:00:00.000Z')
 *
 * // Subtracting 3 months from a date (从日期中减去3个月)
 * const date2 = new Date('2023-10-01');
 * subtract(date2, 3, 'month');
 * console.log(date2.toISOString()); // Outputs: '2023-07-01T00:00:00.000Z' (输出: '2023-07-01T00:00:00.000Z')
 *
 * // Subtracting 2 years from a date (从日期中减去2年)
 * const date3 = new Date('2023-10-01');
 * subtract(date3, 2, 'year');
 * console.log(date3.toISOString()); // Outputs: '2021-10-01T00:00:00.000Z' (输出: '2021-10-01T00:00:00.000Z')
 *
 * // Subtracting 1 hour from a date (从日期中减去1小时)
 * const date4 = new Date('2023-10-01T12:00:00');
 * subtract(date4, 1, 'hour');
 * console.log(date4.toISOString()); // Outputs: '2023-10-01T11:00:00.000Z' (输出: '2023-10-01T11:00:00.000Z')
 *
 * // Subtracting 30 minutes from a date (从日期中减去30分钟)
 * const date5 = new Date('2023-10-01T12:30:00');
 * subtract(date5, 30, 'minute');
 * console.log(date5.toISOString()); // Outputs: '2023-10-01T12:00:00.000Z' (输出: '2023-10-01T12:00:00.000Z')
 *
 * // Subtracting 45 seconds from a date (从日期中减去45秒)
 * const date6 = new Date('2023-10-01T12:00:45');
 * subtract(date6, 45, 'second');
 * console.log(date6.toISOString()); // Outputs: '2023-10-01T12:00:00.000Z' (输出: '2023-10-01T12:00:00.000Z')
 *
 * // Subtracting 500 milliseconds from a date (从日期中减去500毫秒)
 * const date7 = new Date('2023-10-01T12:00:00.500');
 * subtract(date7, 500, 'millisecond');
 * console.log(date7.toISOString()); // Outputs: '2023-10-01T12:00:00.000Z' (输出: '2023-10-01T12:00:00.000Z')
 *
 * // Subtracting multiple time units using an object (使用对象减去多个时间单位)
 * const date8 = new Date('2023-10-01T12:00:00');
 * subtract(date8, { year: 1, month: 2, day: 3, hour: 4, minute: 5, second: 6, millisecond: 7 });
 * console.log(date8.toISOString()); // Outputs: '2022-07-28T07:54:53.993Z' (输出: '2022-07-28T07:54:53.993Z')
 * ```
 */
export default function subtract(date: Date, num: number | DateAddingObject, unit?: Unit): Date {
  return isObject(num)
    ? addObject(date, num, -1)
    : addNumber(date, -num, unit as Unit);
}
