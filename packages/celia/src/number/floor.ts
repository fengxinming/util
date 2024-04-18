
import precise from '../_/_precise';

/**
 * 向下取整
 *
 * @example
 * ```js
 * floor(105.05);  // 105
 * floor(9.9, 1.01);  // 9.9
 * floor(55.59, 1);  // 55.5
 * floor(59, 1);  // 59
 * floor(55.59, -1);  // 50
 * floor(59, -1);  // 50
 * floor(-55.51, -1);  // -60
 * floor(-51, -1);  // -60
 * ```
 *
 * @param number 要取整的数字
 * @param decimals 精度，默认 0
 * @returns 向下取整后的数字
 */
export default function floor(
  number: number,
  decimals?: number
): number {
  return precise('floor', number, decimals);
}
