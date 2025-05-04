# geometry-fns

[![npm package](https://nodei.co/npm/geometry-fns.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/geometry-fns)

[![NPM Version](https://img.shields.io/npm/v/geometry-fns.svg?style=flat)](https://npmjs.org/package/geometry-fns)
[![NPM Downloads](https://img.shields.io/npm/dm/geometry-fns.svg?style=flat)](https://npmjs.org/package/geometry-fns)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/camel-kit/badge)](https://www.jsdelivr.com/package/npm/geometry-fns)

> A lightweight geometric algorithm library

## Installation

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
  // Global variable GeometryFns available
</script>
```

:::

## API Documentation

### Core Functions

- **`areIntersected(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): boolean`**  
  Determine if two line segments intersect

  Input:
  - Coordinates of two line segments (x1,y1)-(x2,y2) and (x3,y3)-(x4,y4)

  Returns:
  - true (intersecting) | false (non-intersecting)

  ::: details Expand to view examples
  ```ts
  import { areIntersected } from 'geometry-fns';

  // Check intersection between two line segments
  areIntersected(381, 216, 211, 216, 211, 124, 381, 124); // false

  // Practical example: Check line crossing
  areIntersected(0, 0, 2, 2, 0, 2, 2, 0); // true
  ```
  :::

- **`centroidOf(points: number[]): [number, number] | null`**  
  Calculate polygon centroid coordinates

  Input:
  - Polygon vertex coordinates [x1,y1,x2,y2,...]

  Returns:
  - [cx, cy] coordinate pair or null (invalid input)

  ::: details Expand to view examples
  ```ts
  import { centroidOf } from 'geometry-fns';

  // Calculate rectangle centroid
  centroidOf([381, 216, 211, 216, 211, 124, 381, 124]); // [296, 170]

  // Calculate triangle centroid
  centroidOf([154, 97, 341, 95, 255, 240]); // [250, 144]

  // Handle invalid input
  centroidOf([]); // null
  centroidOf([1, 1, 2, 2]); // [1.5, 1.5]
  ```
  :::

- **`crossProduct(x1: number, y1: number, x2: number, y2: number): number`**  
  Calculate 2D vector cross product

  Input:
  - Two vectors represented by coordinates (x1,y1) and (x2,y2)

  Returns:
  - Positive (counter-clockwise), Negative (clockwise), Zero (collinear)

  ::: details Expand to view examples
  ```ts
  import { crossProduct } from 'geometry-fns';

  // Basic cross product calculation
  crossProduct(1, 0, 0, 1); // 1 (counter-clockwise)
  crossProduct(0, 1, 1, 0); // -1 (clockwise)

  // Check if three points are collinear
  function isCollinear(p1, p2, p3) {
    return crossProduct(p2.x - p1.x, p2.y - p1.y, p3.x - p1.x, p3.y - p1.y) === 0;
  }

  // Determine point position relative to line segment
  function pointLocation(ax, ay, bx, by, px, py) {
    const cp = crossProduct(bx - ax, by - ay, px - ax, py - ay);
    return cp > 0 ? 'left' : cp < 0 ? 'right' : 'onLine';
  }
  ```
  :::

- **`distanceBetween(x1: number, y1: number, x2: number, y2: number): number`**  
  Calculate Euclidean distance between two points

  Input:
  - Coordinates of two points (x1,y1) and (x2,y2)

  Returns:
  - Distance value ≥ 0

  ::: details Expand to view examples
  ```ts
  import { distanceBetween } from 'geometry-fns';

  // Calculate horizontal distance (same y-coordinate)
  distanceBetween(381, 216, 211, 216); // 170

  // Calculate general distance
  distanceBetween(0, 0, 3, 4); // 5
  ```
  :::

- **`isConvexPolygon(points: number[]): boolean`**  
  Determine if a polygon is convex

  Input:
  - Polygon vertex coordinates [x1,y1,x2,y2,...]

  Returns:
  - true (convex) | false (concave/invalid input)

  ::: details Expand to view examples
  ```ts
  import { isConvexPolygon } from 'geometry-fns';

  // Check rectangle convexity (rectangles are always convex)
  isConvexPolygon([381, 216, 211, 216, 211, 124, 381, 124]); // true

  // Handle invalid coordinates
  isConvexPolygon([381, 216, 211, 216, 211]); // false

  // Check triangle convexity
  isConvexPolygon([244, 92, 322, 205, 430, 105]); // true
  ```
  :::

- **`lineCrossedQuadrangle(lineCoords: number[], quadCoords: number[]): number[][] | null`**  
  Determine intersection between line and quadrilateral

  Input:
  - lineCoords: [x1,y1,x2,y2] line segment coordinates
  - quadCoords: [x1,y1,x2,y2,x3,y3,x4,y4] quadrilateral vertices

  Returns:
  - Array of intersection points [[x1,y1,x2,y2], ...] or null (no intersection)

  ::: details Expand to view examples
  ```ts
  import { lineCrossedQuadrangle } from 'geometry-fns';

  // Check line-quadrilateral intersection
  lineCrossedQuadrangle(
    [0.2387, 0.2622, 0.4462, 0.76], // line coordinates
    [0.3187, 0.4, 0.51, 0.5311, 0.305, 0.6556, 0.1837, 0.3422] // quadrilateral vertices
  );
  // Returns intersection points: [[0.51, 0.5311, 0.305, 0.6556], [0.1837, 0.3422, 0.3187, 0.4]]

  // No intersection case
  lineCrossedQuadrangle(
    [0.2387, 0.2622, 0.235, 0.7444],
    [] // empty quadrilateral
  ); // null
  ```
  :::
