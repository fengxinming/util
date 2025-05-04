# geometry-fns

[![npm package](https://nodei.co/npm/geometry-fns.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/geometry-fns)

[![NPM Version](https://img.shields.io/npm/v/geometry-fns.svg?style=flat)](https://npmjs.org/package/geometry-fns)
[![NPM Downloads](https://img.shields.io/npm/dm/geometry-fns.svg?style=flat)](https://npmjs.org/package/geometry-fns)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/camel-kit/badge)](https://www.jsdelivr.com/package/npm/geometry-fns)

> 轻量级几何算法工具库

## 安装

::: code-group

```bash [npm]
npm add geometry-fns
```
```bash [pnpm]
pnpm add geometry-fns
```
```bash [yarn]
yarn add geometry-fns
```
```html [HTML]
<script src="https://cdn.jsdelivr.net/npm/geometry-fns/dist/index.umd.min.js"></script>
<script>
  // 全局变量 GeometryFns 可用
</script>
```

:::

## API 文档

- **`areIntersected(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): boolean`**  
  判断两段直线是否相交

  输入：
  - [x1,y1,x2,y2,...] 坐标序列数组  

  返回：
  - true（相交）| false（不相交）

  ::: details 点我查看示例
  ```ts
  import { areIntersected } from 'geometry-fns';

  // 检测两段直线是否相交
  areIntersected(381, 216, 211, 216, 211, 124, 381, 124); // false

  // 实际应用示例：判断线段交叉
  areIntersected(0, 0, 2, 2, 0, 2, 2, 0); // true
  ```
  :::

- **`centroidOf(points: number[]): [number, number] | null`**  
  计算多边形的重心坐标  

  输入：
  - points 坐标序列数组  

  返回：
  - 二元组 [cx,cy] 或 null（无效输入）

  ::: details 点我查看示例
  ```ts
  import { centroidOf } from 'geometry-fns';

  // 计算矩形的重心（坐标精度为整数）
  centroidOf([381, 216, 211, 216, 211, 124, 381, 124]); // [296, 170]

  // 计算三角形的重心
  centroidOf([154, 97, 341, 95, 255, 240]); // [250, 144]

  // 异常输入处理
  centroidOf([]); // null
  centroidOf([1, 1, 2, 2]); // [1.5, 1.5]
  ```
  :::

- **`crossProduct(x1: number, y1: number, x2: number, y2: number): number`**  
  计算两个二维向量的叉积  

  输入：
  - [x1,y1,x2,y2,...] 坐标序列数组  

  返回：
  - 正数（逆时针）、负数（顺时针）、零（共线）

  ::: details 点我查看示例
  ```ts
  import { crossProduct } from 'geometry-fns';

  // 计算基础叉积
  crossProduct(1, 0, 0, 1); // 1 (逆时针方向)
  crossProduct(0, 1, 1, 0); // -1 (顺时针方向)

   // 判断三点共线
  function isCollinear(p1, p2, p3) {
    return crossProduct(p2.x - p1.x, p2.y - p1.y, p3.x - p1.x, p3.y - p1.y) === 0;
  }

  // 判断点在线段的哪一侧
  function pointLocation(ax, ay, bx, by, px, py) {
    const cp = crossProduct(bx - ax, by - ay, px - ax, py - ay);
    return cp > 0 ? 'left' : cp < 0 ? 'right' : 'onLine';
  }
  ```
  :::

- **`distanceBetween(x1: number, y1: number, x2: number, y2: number): number`**  
  计算两个坐标点之间的直线距离

  输入：
  - [x1,y1,x2,y2,...] 坐标序列数组  

  返回：
  - ≥0 的数值

  ::: details 点我查看示例
  ```ts
  import { distanceBetween } from 'geometry-fns';

  // 计算两点水平距离（y坐标相同）
  distanceBetween(381, 216, 211, 216); // 170

  // 计算任意两点距离
  distanceBetween(0, 0, 3, 4); // 5
  ```
  :::

- **`isConvexPolygon(points: number[]): boolean`**  
  判断多边形是否为凸多边形  

  输入：
  - points 坐标序列数组  

  返回：
  - true（凸多边形）| false（凹多边形/无效输入）

  ::: details 点我查看示例
  ```ts
  import { isConvexPolygon } from 'geometry-fns';

  // 判断矩形是否为凸多边形（矩形一定是凸多边形）
  isConvexPolygon([381, 216, 211, 216, 211, 124, 381, 124]); // true

  // 无效坐标返回 false
  isConvexPolygon([381, 216, 211, 216, 211]); // false

  // 判断正三角形是否为凸多边形
  isConvexPolygon([244, 92, 322, 205, 430, 105]); // true
  ```
  :::

- **`lineCrossedQuadrangle(lineCoords: number[], quadCoords: number[]): number[][] | null`**  
  判断直线与四边形的相交关系  

  输入：
  - lineCoords: [x1,y1,x2,y2] 直线端点坐标  
  - quadCoords: [x1,y1,x2,y2,x3,y3,x4,y4] 四边形顶点坐标 

  返回：
  - 交点坐标数组 [[x1,y1,x2,y2], ...] 或 null（无交点）

  ::: details 点我查看示例
  ```ts
  import { lineCrossedQuadrangle } from 'geometry-fns';

  // 检测直线与四边形相交情况
  lineCrossedQuadrangle(
    [0.2387, 0.2622, 0.4462, 0.76], // 直线坐标
    [0.3187, 0.4, 0.51, 0.5311, 0.305, 0.6556, 0.1837, 0.3422] // 四边形顶点
  );
  // 返回交点坐标数组：[[0.51, 0.5311, 0.305, 0.6556], [0.1837, 0.3422, 0.3187, 0.4]]

  // 无相交情况
  lineCrossedQuadrangle(
    [0.2387, 0.2622, 0.235, 0.7444],
    [] // 空四边形
  ); // null
  ```
  :::
