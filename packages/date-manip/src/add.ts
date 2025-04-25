import { isObject } from 'is-what-type';

import addNumber from './_internal/addNumber';
import addObject from './_internal/addObject';
import { DateAddingObject, Unit } from './types';

export default function add(date: Date, input: number | DateAddingObject): Date;
export default function add(date: Date, num: number, unit: Unit): Date;

/**
 * Adds a specified number of time units or an object with multiple time units to a date.
 * 向日期添加指定数量的时间单位或包含多个时间单位的对象。
 *
 * @param date - The date to add time to. (要添加时间的日期。)
 * @param num - The number of time units to add, (要添加的时间单位数量，)
 *              or an object where keys are time units and values are the number of units to add.
 * (或对象，其中键是时间单位，值是要添加的时间单位数量。)
 * @param unit - The unit of time to add (e.g., 'year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond').
 * (要添加的时间单位，例如 'year'、'month'、'day'、'hour'、'minute'、'second'、'millisecond'。)
 *              This parameter is required if num is a number. (如果 num 是数字，则此参数是必需的。)
 * @returns A new date with the added time. (添加时间后的新日期。)
 * @example
 * ```ts
 * // Adding a number of days (添加天数)
 * const newDate1 = add(new Date(), 5, 'day');
 * console.log(newDate1); // Outputs the date 5 days from now (输出5天后的日期)
 *
 * // Adding multiple time units using an object (使用对象添加多个时间单位)
 * const newDate2 = add(new Date(), { year: 1, month: 2, day: 3 });
 * console.log(newDate2); // Outputs the date 1 year, 2 months, and 3 days from now (输出1年后2个月3天后的日期)
 * ```
 */
export default function add(date: Date, num: number | DateAddingObject, unit?: Unit): Date {
  return isObject(num)
    ? addObject(date, num, 1)
    : addNumber(date, num, unit as Unit);
}
