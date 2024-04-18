import { describe, expect, it } from 'vitest';

import emptyOwn from '../src/object/emptyOwn';
import forOwn from '../src/object/forOwn';
import rest from '../src/object/rest';

class A {
  method2!: () => void;
  method1() {
    console.info('hello');
  }
}
A.prototype.method2 = () => {
  console.info('world');
};

describe('测试object方法集合', () => {
  it('测试 forOwn 方法', () => {
    const instance = Object.create(null);
    instance.c = 3;
    instance.d = 4;
    let i = 0;
    forOwn(instance, (val) => {
      if (val === 4) {
        i = 4;
        return false;
      }
    });
    expect(i).toBe(4);

    i = 0;
    forOwn({ a: 1, b: 2 }, () => {
      i += 1;
    });
    expect(i).toBe(2);

    i = 0;
    forOwn(null, () => {
      i += 1;
    });
    expect(i).toBe(0);

    i = 0;
    forOwn(new A(), () => {
      i++;
    });
    expect(i).toBe(0);
  });

  it('测试 rest', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3
    };
    expect(rest(null as any)).toEqual({});
    expect(rest(obj)).toEqual(obj);
    expect(rest(obj, ['a', 'b'])).toEqual({
      c: 3
    });
  });

  it('测试 emptyOwn', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3
    };
    Object.defineProperty(obj, 'd', {
      enumerable: true,
      configurable: false,
      writable: false,
      value: 4
    });

    // eslint-disable-next-line no-proto
    (obj as any).__proto__.e = 5;
    const empty = null;
    emptyOwn(empty);
    expect(empty).toBe(null);

    emptyOwn(obj, ['a']);
    expect(obj).toEqual({ a: 1, d: 4 });

    emptyOwn(obj);
    expect(obj).toEqual({ d: 4 });
  });
});
