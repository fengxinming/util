export default function absFloor(v: number): number {
  // -0 -> 0
  return v < 0 ? (Math.ceil(v) || 0) : Math.floor(v);
}
