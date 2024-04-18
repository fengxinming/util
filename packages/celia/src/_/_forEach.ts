import isNumber from '../is/isNumber';
import fitIndex from '../number/fitIndex';
import _traverseArray from './_traverseArray';

export default function _forEach(
  value: ArrayLike<any>,
  start: any,
  end?: any,
  iterator?: any,
  canBreak?: boolean
): void {
  const len = (value).length;
  if (typeof start === 'function') {
    return _traverseArray(
      value,
      0,
      len,
      start,
      end
    );
  }

  if (typeof end === 'function') {
    return _traverseArray(
      value,
      isNumber(start) ? fitIndex(start, len) : 0,
      len,
      end,
      iterator
    );
  }

  if (typeof iterator === 'function') {
    return _traverseArray(
      value,
      isNumber(start) ? fitIndex(start, len) : 0,
      isNumber(end) ? Math.min(end, len) : len,
      iterator,
      canBreak
    );
  }
}
