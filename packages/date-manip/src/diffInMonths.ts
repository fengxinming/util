import absFloor from './_internal/absFloor';
import monthDiff from './_internal/monthDiff';
import parse from './parse';
import { DateInput } from './types';

/**
 * Calculates the difference in months between two dates.
 * 计算两个日期之间的月份差
 *
 * @param date - The first date to compare.
 * @param input - The second date to compare.
 * @param asFloat - Whether to return the result as a float.
 * @returns The difference in months between the two dates.
 * @example
 * ```ts
 * diffInMonths(new Date(), new Date()); // 0
 * diffInMonths(new Date(), new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)); // 1
 * diffInMonths(new Date(), new Date(Date.now() - 1000 * 60 * 60 * 24 * 30)); // -1
 * diffInMonths(new Date(), new Date(Date.now() - 1000 * 60 * 60 * 24 * 30 * 2)); // -2
 * diffInMonths(new Date(), new Date(Date.now() + 1000 * 60 * 60 * 24 * 30 * 2)); // 2
 * ```
 */
export default function diffInMonths(
  date: Date,
  input: DateInput,
  asFloat?: boolean): number {
  const parsed = parse(input);
  const output = monthDiff(date, parsed);

  return asFloat ? output : absFloor(output);
}
