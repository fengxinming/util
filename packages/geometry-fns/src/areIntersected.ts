import { crossProduct } from './crossProduct';

function max(a: number, b: number): number {
  return a > b ? a : b;
}

function min(a: number, b: number): number {
  return a < b ? a : b;
}

/**
 * 判断两根直线是否相交
 *
 * @param qx1
 * @param qy1
 * @param qx2
 * @param qy2
 * @param lx1
 * @param ly1
 * @param lx2
 * @param ly2
 * @returns
 */
// eslint-disable-next-line max-params
export function areIntersected(
  qx1: number,
  qy1: number,
  qx2: number,
  qy2: number,
  lx1: number,
  ly1: number,
  lx2: number,
  ly2: number
): boolean {
  // 快速排斥，以l1、l2为对角线的矩形必相交，否则两线段不相交
  if (
    max(qx1, qx2) >= min(lx1, lx2) // 矩形1最右端大于矩形2最左端
    && max(lx1, lx2) >= min(qx1, qx2) // 矩形2最右端大于矩形最左端
    && max(qy1, qy2) >= min(ly1, ly2) // 矩形1最高端大于矩形最低端
    && max(ly1, ly2) >= min(qy1, qy2) // 矩形2最高端大于矩形最低端
  ) {
    // 若通过快速排斥则进行跨立实验
    return crossProduct(qx1, qy1, qx2, qy2, lx1, ly1) * crossProduct(qx1, qy1, qx2, qy2, lx2, ly2) <= 0
        && crossProduct(lx1, ly1, lx2, ly2, qx1, qy1) * crossProduct(lx1, ly1, lx2, ly2, qx2, qy2) <= 0;
  }
  return false;
}
