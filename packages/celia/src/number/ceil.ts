
import precise from '../_/_precise';

/**
 * 向上取整
 *
 * @example
 * ```js
 * ceil(105.05);  // 106
 * ceil(9.1, 1.01);  // 9.1
 * ceil(55.51, 1);  // 55.6
 * ceil(51, 1);  // 51
 * ceil(55.51, -1);  // 60
 * ceil(51, -1);  // 60
 * ceil(-55.59, -1);  // -50
 * ceil(-59, -1);  // -50
 * ```
 *
 * @param number 要取整的数字
 * @param decimals 精度，默认 0
 * @returns 向上取整后的数字
 */
export default function ceil(
  number: number,
  decimals?: number
): number {
  return precise('ceil', number, decimals);
}
