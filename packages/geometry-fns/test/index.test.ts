import { describe, expect, it } from 'vitest';

import { areIntersected } from '../src/areIntersected';
import { centroidOf } from '../src/centroidOf';
import { distanceBetween } from '../src/distanceBetween';
import { isConvexPolygon } from '../src/isConvexPolygon';
import { lineCrossedQuadrangle } from '../src/lineCrossedQuadrangle';

describe('测试几何图形公式', () => {
  it('是否是凸多边形', () => {
    expect(isConvexPolygon([381, 216, 211, 216, 211, 124, 381, 124])).toBe(true);
    expect(isConvexPolygon([381, 216, 211, 216, 211, 124, 381])).toBe(false);
    expect(isConvexPolygon([0, 0, 0, 1, 1, 0, 1, 1])).toBe(false);
    expect(isConvexPolygon([1, 1, 1, 2, 1, 3, 1, 4])).toBe(false);
    expect(isConvexPolygon([1, 1, 1, 1, 1, 1, 1, 1])).toBe(false);
    expect(isConvexPolygon([0, 0, 0, 1, 0, 1, 0, 1])).toBe(false);
    expect(isConvexPolygon([244, 92, 322, 205, 430, 105])).toBe(true);
    expect(isConvexPolygon([244, 92, 322, 205, 430])).toBe(false);
  });

  it('求多边形的重心坐标', () => {
    expect(centroidOf([381, 216, 211, 216, 211, 124, 381, 124])).toEqual([296, 170]);
    expect(centroidOf([])).toEqual(null);
    expect(centroidOf([1, 1, 2, 2])).toEqual([1.5, 1.5]);
    expect(centroidOf([154, 97, 341, 95, 255, 240])).toEqual([250, 144]);
  });

  it('求两点之间的距离', () => {
    expect(distanceBetween(381, 216, 211, 216)).toBe(170);
    expect(distanceBetween(211, 216, 381, 216)).toBe(170);
  });

  it('直线穿过多边形', () => {
    expect(lineCrossedQuadrangle(
      [0.2387, 0.2622, 0.4462, 0.76],
      [0.3187, 0.4, 0.51, 0.5311, 0.305, 0.6556, 0.1837, 0.3422],
    )).toEqual([[0.51, 0.5311, 0.305, 0.6556], [0.1837, 0.3422, 0.3187, 0.4]]);

    expect(lineCrossedQuadrangle(
      [0.2387, 0.2622, 0.235, 0.7444],
      [0.3187, 0.4, 0.51, 0.5311, 0.305, 0.6556, 0.1837, 0.3422],
    )).toEqual(null);

    expect(!!lineCrossedQuadrangle(
      [0.1425, 0.5267, 0.52, 0.4089],
      [0.3187, 0.4, 0.51, 0.5311, 0.305, 0.6556, 0.1837, 0.3422],
    )).toEqual(true);

    expect(lineCrossedQuadrangle(
      [],
      [],
    )).toEqual(null);
  });

  it('两条直线是否相交', () => {
    expect(areIntersected(381, 216, 211, 216, 211, 124, 381, 124)).toBe(false);
  });
});
