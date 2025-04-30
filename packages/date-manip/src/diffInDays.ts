import absFloor from './_internal/absFloor';
import { MS_IN_DAY } from './_internal/constants';
import parse from './parse';
import { DateInput } from './types';

/**
 * Calculates the difference in days between two dates.
 * 计算两个日期之间的天数差
 *
 * @param date - The first date to compare. (第一个日期)
 * @param input - The second date to compare. (第二个日期)
 * @param asFloat - Whether to return the result as a float. (是否返回浮点数)
 * @returns The difference in days between the two dates. (返回两个日期之间的天数差)
 * @example
 * ```ts
 * diffInDays(new Date(2023, 0, 1), new Date(2023, 0, 2)) // 1
 * ```
 */
export default function diffInDays(
  date: Date,
  input: DateInput,
  asFloat?: boolean
): number {
  const parsed = parse(input);
  const output = (+date - +parsed) / MS_IN_DAY;

  return asFloat ? output : absFloor(output);
}
