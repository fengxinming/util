import addMonths from '../addMonths';

export default function monthDiff(a: Date, b: Date): number {
  const aTime = +a;
  const bTime = +b;

  if (aTime < bTime) {
    return -monthDiff(b, a);
  }

  const wholeMonthDiff = ((b.getFullYear() - a.getFullYear()) * 12) + (b.getMonth() - a.getMonth());
  const anchor = +addMonths(new Date(aTime), wholeMonthDiff);
  let anchor2: number;
  let adjust: number;

  if (bTime < anchor) {
    anchor2 = +addMonths(new Date(aTime), wholeMonthDiff - 1);
    adjust = (bTime - anchor) / (anchor - anchor2);
  }
  else {
    anchor2 = +addMonths(new Date(aTime), wholeMonthDiff + 1);
    adjust = (bTime - anchor) / (anchor2 - anchor);
  }

  return -(wholeMonthDiff + adjust) || 0;
}
