
import isInteger from '../is/isInteger';
import isNumber from '../is/isNumber';

/**
 * 精确到小数点几位
 * @hidden
 *
 * 参考 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/round
 */
export default function _precise(
  method: string,
  number: number,
  decimals?: number
): number {
  if (!isNumber(number)) {
    return 0;
  }

  if (!decimals) {
    return (Math as any)[method](number);
  }

  if (!isInteger(decimals)) {
    return number;
  }

  // 负数四舍五入
  const isMinusRounding = method === 'round' && number < 0;
  if (isMinusRounding) {
    number = Math.abs(number);
  }

  const power = Math.pow(10, decimals);
  // 小数点后最多能正常显示15位
  let ret = (Math as any)[method]((number * power).toPrecision(15)) / power;

  if (isMinusRounding) {
    ret = -ret;
  }

  return ret;
}
