/* eslint-disable @typescript-eslint/ban-ts-comment */

import { describe, expect, it } from 'vitest';

import arrayAt from '../src/array/arrayAt';
import arrayRemove from '../src/array/arrayRemove';
import arrayReplace from '../src/array/arrayReplace';
import forEach from '../src/array/forEach';
import arrayInsertAfter from '../src/array/insertAfter';
import arrayInsertBefore from '../src/array/insertBefore';

describe('测试数组方法集', () => {
  it('测试 arrayAt 方法', () => {
    expect(arrayAt([1, 2, 3, 4, 5], -1)).toBe(5);
    expect(arrayAt([1, 2, 3, 4, 5], -5)).toBe(1);
    expect(arrayAt([1, 2, 3, 4, 5], -6)).toBe(1);
    expect(arrayAt(null as any, -6)).toBe(undefined);
    expect(arrayAt({ key: 'value' } as any, -6)).toBe(undefined);
  });

  it('测试 arrayRemove 方法', () => {
    const array = [1, 2, 3, 4, 5, 4, 2, 3, 1, 5];
    arrayRemove(array, 4);
    expect(array).toEqual([1, 2, 3, 5, 4, 2, 3, 1, 5]);
    expect(arrayRemove(array, [10])).toEqual(false);
    expect(arrayRemove(array, [])).toEqual(false);
    expect(arrayRemove(null as any)).toEqual(false);
    arrayRemove(array, [1, 2]);
    expect(array).toEqual([3, 5, 4, 2, 3, 1, 5]);
    expect(arrayRemove([])).toEqual(false);

    arrayRemove(array, 2, true);
    expect(array).toEqual([3, 5, 4, 3, 1, 5]);
    expect(arrayRemove(array)).toEqual(false);
    expect(array.length).toBe(6);
    arrayRemove(array, [3, 5], true);
    expect(array).toEqual([4, 1]);
    expect(arrayRemove(array, [], true)).toEqual(false);
    arrayRemove(array, [1], true);
    expect(array).toEqual([4]);
    arrayRemove(array, [2, 3], true);
    expect(array).toEqual([4]);
  });

  it('测试 arrayInsertBefore 方法', () => {
    const array = [1, 2, 3, 4, 5];
    arrayInsertBefore(array, 2, 2.5); // [1, 2.5, 2, 3, 4, 5]
    expect(array[1]).toBe(2.5);
    expect(arrayInsertBefore(array, 10, 1, 2, 3)).toEqual([]); // [1, 2.5, 2, 3, 4, 5]
    expect(arrayInsertBefore(array, 2)).toEqual([]);
    // @ts-ignore
    expect(arrayInsertBefore(null)).toEqual([]);
  });

  it('测试 arrayReplace 方法', () => {
    const array = [1, 2, 3, 4, 5];
    arrayReplace(array, 3, 3.5); // [1, 2, 3.5, 4, 5]
    expect(array[2]).toBe(3.5);
    expect(arrayReplace(array, 10, 1, 2, 3)).toEqual([]);
    expect(arrayReplace(array, 2)).toEqual([]);
    // @ts-ignore
    expect(arrayReplace(null)).toEqual([]);
  });

  it('测试 arrayInsertAfter 方法', () => {
    const array = [1, 2, 3, 4, 5];
    arrayInsertAfter(array, 2, 2.6); // [1, 2, 2.6, 3, 4, 5]
    expect(array[2]).toBe(2.6);
    expect(arrayInsertAfter(array, 10, 1, 2, 3)).toEqual([]); // [1, 2.5, 2, 3, 4, 5]
    expect(arrayInsertAfter(array, 2)).toEqual([]);
    // @ts-ignore
    expect(arrayInsertAfter(null)).toEqual([]);
  });

  it('测试 forEach 方法', () => {
    const arr = [1, 2, 3, 4, 5];
    let i = 0;

    /** 单一数组 */
    forEach(arr, () => {
      i++;
    });
    expect(i).toBe(5);

    /** 指定开始和结束位置 */
    i = 0;
    forEach(arr, 0, 5, () => {
      i++;
    });
    expect(i).toBe(5);

    i = 0;
    forEach(arr, 1, 3, () => {
      i++;
    });
    expect(i).toBe(2);

    /** 指定开始位置 */
    i = 0;
    forEach(arr, 2, () => {
      i++;
    });
    expect(i).toBe(3);

    /** 特殊情况 */
    i = 0;
    forEach(arr as any, null as any, () => {
      i++;
    });
    expect(i).toBe(5);

    i = 0;
    forEach(arr as any, null as any, null as any, (val, index) => {
      if (index === 2) {
        return false;
      }
      i++;
    }, true);
    expect(i).toBe(2);

    i = 0;
    forEach(null as any, () => {
      i++;
    });
    expect(i).toBe(0);

    i = 0;
    // @ts-ignore
    forEach(arr);
    expect(i).toBe(0);

    /** 遍历数字 */
    i = 0;
    forEach(5, (val) => {
      if (val === 3) {
        return false;
      }
      i++;
    }, true);
    expect(i).toBe(2);

    i = 0;
    forEach(5, 2, () => {
      i++;
    });
    expect(i).toBe(4);

    i = 0;
    forEach(5, 2, 4, () => {
      i++;
    });
    expect(i).toBe(3);

    i = 0;
    forEach(5, 1, 10, () => {
      i++;
    });
    expect(i).toBe(5);

    i = 0;
    forEach(5, null as any, null as any, () => {
      i++;
    });
    expect(i).toBe(5);

    i = 0;
    forEach(5, null as any, () => {
      i++;
    });
    expect(i).toBe(5);

    i = 0;
    // @ts-ignore
    forEach(5);
    expect(i).toBe(0);
  });
});
