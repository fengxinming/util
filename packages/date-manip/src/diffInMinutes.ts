import absFloor from './_internal/absFloor';
import { MS_IN_MINUTE } from './_internal/constants';
import parse from './parse';
import { DateInput } from './types';

/**
 * Calculates the difference in minutes between two dates.
 * 计算两个日期之间的分钟差
 *
 * @param date - The first date to compare.
 * @param input - The second date to compare.
 * @param asFloat - Whether to return the result as a float.
 * @returns The difference in minutes between the two dates.
 * @example
 * ```ts
 * diffInMinutes(new Date(), new Date()); // 0
 * diffInMinutes(new Date(), new Date(Date.now() + 1000 * 60)); // 1
 * diffInMinutes(new Date(), new Date(Date.now() - 1000 * 60)); // -1
 * diffInMinutes(new Date(), new Date(Date.now() + 1000 * 60 * 60 * 24)); // 1440
 * diffInMinutes(new Date(), new Date(Date.now() - 1000 * 60 * 60 * 24)); // -1440
 * ```
 */
export default function diffInMinutes(
  date: Date,
  input: DateInput,
  asFloat?: boolean
): number {
  const parsed = parse(input);
  const output = (+date - +parsed) / MS_IN_MINUTE;

  return asFloat ? output : absFloor(output);
}
