
/**
 * @hidden
 */
export default function _arrayInsert<T>(
  that: T[],
  o: any,
  start: number,
  deleteCount: number,
  items: T[]
): boolean {
  if (items.length === 0) {
    return false;
  }

  const idx = that.indexOf(o);
  if (idx === -1) {
    return false;
  }

  // eslint-disable-next-line prefer-spread
  that.splice.apply(that, [idx + start, deleteCount].concat(items as any[]) as any);
  return true;
}
