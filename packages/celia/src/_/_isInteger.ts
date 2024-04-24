import isNumber from '../is/isNumber';

/** @hidden */
export default function _isInteger<T = any>(value: T): boolean {
  return isNumber(value)
    && isFinite(value as any)
    // eslint-disable-next-line no-bitwise
    && ((value as any) >> 0) === value;
}
