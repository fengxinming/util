export default function startOfDate(date: Date, y?: number, m?: number, d?: number): number {
  return +new Date(
    y || date.getFullYear(),
    m == null ? date.getMonth() : m,
    d || date.getDate()
  );
}
