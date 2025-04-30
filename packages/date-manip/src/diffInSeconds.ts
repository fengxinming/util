import absFloor from './_internal/absFloor';
import { MS_IN_SECOND } from './_internal/constants';
import parse from './parse';
import { DateInput } from './types';

/**
 * Calculates the difference in seconds between two dates.
 * 计算两个日期之间的秒差
 *
 * @param date - The first date to compare.
 * @param input - The second date to compare.
 * @param asFloat - Whether to return the result as a float.
 * @returns The difference in seconds between the two dates.
 * @example
 * ```ts
 * diffInSeconds(new Date(), new Date()); // 0
 * diffInSeconds(new Date(), new Date(Date.now() + 1000)); // 1
 * diffInSeconds(new Date(), new Date(Date.now() - 1000)); // -1
 * ```
 */
export default function diffInSeconds(
  date: Date,
  input: DateInput,
  asFloat?: boolean
): number {
  const parsed = parse(input);
  const output = (+date - +parsed) / MS_IN_SECOND;

  return asFloat ? output : absFloor(output);
}
