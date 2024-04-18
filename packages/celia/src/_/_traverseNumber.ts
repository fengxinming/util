export default function _traverseNumber(
  value: number,
  start: number,
  end: number,
  iterator: (item: number, index: number, ctx: any) => any,
  increase: number,
  canBreak?: boolean
): void {
  if (canBreak) {
    for (let i = 0; start <= end; i++, start += increase) {
      if (iterator(start, i, value) === false) {
        break;
      }
    }
  }
  else {
    for (let i = 0; start <= end; i++, start += increase) {
      iterator(start, i, value);
    }
  }
}
