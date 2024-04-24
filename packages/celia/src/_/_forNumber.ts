import isNumber from '../is/isNumber';
import _traverseNumber from './_traverseNumber';

export default function _forNumber(
  value: number,
  start: any,
  end?: any,
  iterator?: any,
  canBreak?: boolean
): void {
  if (typeof start === 'function') {
    return _traverseNumber(
      value,
      1,
      value,
      start,
      1,
      end
    );
  }

  if (typeof end === 'function') {
    return _traverseNumber(
      value,
      isNumber(start) ? start : 1,
      value,
      end,
      1,
      iterator
    );
  }

  if (typeof iterator === 'function') {
    return _traverseNumber(
      value,
      isNumber(start) ? start : 1,
      isNumber(end) ? Math.min(end, value) : value,
      iterator,
      1,
      canBreak
    );
  }
}
