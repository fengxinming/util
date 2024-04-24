
export default function _traverseArray<T>(
  value: ArrayLike<T>,
  start: number,
  end: number,
  iterator: (item: T, s: number, ctx: ArrayLike<T>) => any,
  canBreak?: boolean
): void {
  if (canBreak) {
    for (; start < end; start++) {
      if (iterator(value[start], start, value) === false) {
        break;
      }
    }
  }
  else {
    for (; start < end; start++) {
      iterator(value[start], start, value);
    }
  }
}
