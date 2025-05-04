import { crossProduct } from './crossProduct';


/**
 * 找方向，大于0为顺时针，小于零为逆时针
 *
 * @param polygon 多边形坐标集合
 * @param start
 * @param length
 * @returns
 */
function computeCrossProduct(polygon: number[], start: number, length: number): number {
  const x1 = polygon[start];
  const y1 = polygon[start + 1];
  const j = (start + 2) % length;
  const x2 = polygon[j];
  const y2 = polygon[j + 1];
  const k = (start + 4) % length;
  const x3 = polygon[k];
  const y3 = polygon[k + 1];

  // 向量叉积
  return crossProduct(x1, y1, x2, y2, x3, y3);
}


/**
 * 判断凸多边形
 *
 * @param polygon 多边形坐标集合
 * @returns
 */
export function isConvexPolygon(polygon: number[]): boolean {
  const { length } = polygon;

  if (length < 6 || length % 2 !== 0) {
    return false;
  }

  const direction = computeCrossProduct(polygon, 0, length);

  for (let i = 2; i < length; i += 2) {
    const nextDirection = computeCrossProduct(polygon, i, length);
    if (direction * nextDirection <= 0) {
      return false;
    }
  }

  return true;
}
