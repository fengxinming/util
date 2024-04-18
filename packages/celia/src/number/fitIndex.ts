
/**
 * 根据长度适应索引
 *
 * @example
 * ```js
 * fitIndex(null as any, 10);  // 0
 * fitIndex(-1, 10);  // 9
 * fitIndex(-11, 10);  // 0
 * fitIndex(0, 10);  // 0
 * fitIndex(5, 10);  // 5
 * fitIndex(11, 10);  // 9
 * ```
 *
 * @param fromIndex 索引
 * @param length 长度
 * @returns 适应的索引
 */
export default function fitIndex(
  fromIndex: number,
  length: number
): number {
  return fromIndex
    ? fromIndex < 0
      ? Math.max(0, length + fromIndex)
      : Math.min(fromIndex, length - 1)
    : 0;
}
