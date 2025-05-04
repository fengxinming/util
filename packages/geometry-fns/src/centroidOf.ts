/**
 * 求多边形的重心
 *
 * @param polygon 多边形点数组
 * @returns
 */
export function centroidOf(polygon: number[]): number[] | null {
  const { length } = polygon;

  if (length < 4 || length % 2 !== 0) {
    return null;
  }

  if (length === 4) {
    return [(polygon[0] + polygon[2]) / 2, (polygon[1] + polygon[3]) / 2];
  }

  if (length === 6) {
    return [(polygon[0] + polygon[2] + polygon[4]) / 3, (polygon[1] + polygon[3] + polygon[5]) / 3];
  }

  let S = 0;
  let GX = 0;
  let GY = 0;
  const n = length - 2;

  for (let i = 0; i < n; i += 2) {
    const x1 = polygon[i];
    const y1 = polygon[i + 1];
    const x2 = polygon[i + 2];
    const y2 = polygon[i + 3];

    S += (x1 * y2 - x2 * y1) / 2;
    GX += (x1 * y2 - x2 * y1) * (x1 + x2);
    GY += (x1 * y2 - x2 * y1) * (y1 + y2);
  }

  const x1 = polygon[0];
  const y1 = polygon[1];
  const x3 = polygon[n];
  const y3 = polygon[n + 1];

  S += (x3 * y1 - x1 * y3) / 2;
  GX += (x3 * y1 - x1 * y3) * (x3 + x1);
  GY += (x3 * y1 - x1 * y3) * (y3 + y1);

  return [GX / S / 6, GY / S / 6];
}
