import absFloor from './_internal/absFloor';
import { MS_IN_HOUR } from './_internal/constants';
import parse from './parse';
import { DateInput } from './types';

/**
 * Calculates the difference in hours between two dates.
 * 计算两个日期之间的小时差
 *
 * @param date - The first date to compare.
 * @param input - The second date to compare.
 * @param asFloat - Whether to return the result as a float.
 * @returns The difference in hours between the two dates.
 * @example
 * ```ts
 * diffInHours(new Date(2023, 0, 1), new Date(2023, 0, 2)) // 24
 * ```
 */
export default function diffInHours(
  date: Date,
  input: DateInput,
  asFloat?: boolean
): number {
  const parsed = parse(input);
  const output = (+date - +parsed) / MS_IN_HOUR;

  return asFloat ? output : absFloor(output);
}
