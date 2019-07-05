import isObject from './isObject';
import isDate from './isDate';
import isRegExp from './isRegExp';

const { isArray } = Array;
export default function looseEqual(a, b) {
  if (isObject(a) && isObject(b)) {
    if (isArray(a) && isArray(b)) { // 判断是否是数组
      return a.length === b.length && a.every((e, i) => {
        return looseEqual(e, b[i]);
      });
    } else if (isDate(a) && isDate(b)) { // 判断日期
      return +a === +b;
    } else if (isRegExp(a) && isRegExp(b)) { // 正则
      return a.toString() === b.toString();
    } else { // 对象
      const keysA = Object.keys(a);
      const keysB = Object.keys(b);
      return keysA.length === keysB.length && keysA.every((key) => {
        return looseEqual(a[key], b[key]);
      });
    }
  }
  return a === b;
}
