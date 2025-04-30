import addMinutes from './addMinutes';

/**
 * Subtracts a specified number of minutes from a date.
 * 从日期中减去指定数量的分钟。
 *
 * @param date - The date to subtract minutes from. (要从日期中减去的日期。)
 * @param minutes - The number of minutes to subtract. (要减去的分钟数。)
 * @returns A new date with the subtracted minutes. (减去分钟后的新日期。)
 * @example
 * ```ts
 * // Subtracting 30 minutes from a date (从日期中减去30分钟)
 * const date = new Date('2023-10-01T12:00:00Z');
 * subMinutes(date, 30);
 * // Returns: 2023-10-01T11:30:00.000Z (返回: 2023-10-01T11:30:00.000Z)
 * ```
 */
export default function subMinutes(date: Date, minutes: number): Date {
  return addMinutes(date, -minutes);
}
