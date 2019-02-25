import merge from './join';
import isArrayLike from '../isArrayLike';
import isString from '../isString';

const {
  push
} = Array.prototype;

export default function (arr, results) {
  const ret = results || [];
  if (arr) {
    if (isArrayLike(Object(arr))) {
      merge(ret, isString(arr) ? [arr] : arr);
    } else {
      ret.push ? ret.push(arr) : push.call(ret, arr);
    }
  }
  return ret;
}
