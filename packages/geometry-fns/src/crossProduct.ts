/**
 * 向量: P=(x2-x1, y2-y1), Q=(x3-x1, y3-y1)
 * 叉积: PQ=(x2-x1)*(y3-y1) - (x3-x1)*(y2-y1)
 *
 * @param line1X
 * @param line1Y
 * @param line2X
 * @param line2Y
 * @param x1
 * @param y1
 * @returns
 */
export function crossProduct(
  line1X: number,
  line1Y: number,
  line2X: number,
  line2Y: number,
  x1: number,
  y1: number
): number {
  return (line2X - line1X) * (y1 - line1Y) - (x1 - line1X) * (line2Y - line1Y);
}
