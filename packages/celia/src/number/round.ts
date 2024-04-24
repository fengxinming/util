
import _precise from '../_/_precise';

/**
 * 四舍五入
 *
 * @example
 * ```js
 * round(105.05);  // 105
 * round(9.2, 1.01);  // 9.2
 * round(55, 1);  // 55
 * round(54.9, 1);  // 54.9
 * round(-55, 1);  // -55
 * round(-55.1, 1);  // -55.1
 * round(55.55, -1);  // 60
 * round(55.549, -1);  // 60
 * round(-55.55, -1);  // -60
 * round(-55.551, -1);  // -60
 * ```
 *
 * @param number 要四舍五入的数字
 * @param decimals 精度，默认 0
 * @returns 四舍五入后的数字
 */
export default function round(
  number: number,
  decimals?: number
) {
  return _precise('round', number, decimals);
}
