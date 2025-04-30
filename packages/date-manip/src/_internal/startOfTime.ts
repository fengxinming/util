export default function startOfTime(date: Date, ms: number): number {
  const input = +date;
  return input - input % ms;
}
