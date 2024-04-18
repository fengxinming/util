/** @hidden */
export default function _isNaN<T = any>(value: T): boolean {
  // eslint-disable-next-line no-self-compare
  return value !== value && typeof value === 'number';
}
