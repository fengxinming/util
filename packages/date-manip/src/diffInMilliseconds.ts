import absFloor from './_internal/absFloor';
import parse from './parse';
import { DateInput } from './types';

/**
 * Calculates the difference in milliseconds between two dates.
 * 计算两个日期之间的毫秒差
 *
 * @param date - The first date to compare.
 * @param input - The second date to compare.
 * @param asFloat - Whether to return the result as a float.
 * @returns The difference in milliseconds between the two dates.
 * @example
 * ```ts
 * diffInMilliseconds(new Date(), new Date()); // 0
 * diffInMilliseconds(new Date(), new Date(Date.now() + 1000)); // 1000
 * diffInMilliseconds(new Date(), new Date(Date.now() - 1000)); // -1000
 * ```
 */
export default function diffInMilliseconds(
  date: Date,
  input: DateInput,
  asFloat?: boolean
): number {
  const parsed = parse(input);
  const output = +date - +parsed;

  return asFloat ? output : absFloor(output);
}
