/* eslint-disable @typescript-eslint/ban-ts-comment */

import moment from 'moment';
import { describe, expect, it } from 'vitest';

import dateFormat from '../src/dateFormat';
import debounce from '../src/debounce';
import each from '../src/each';
import noop from '../src/noop';
import runQueue from '../src/runQueue';
import sleep from '../src/sleep';

describe('测试基础工具方法集', () => {
  it('测试 noop', () => {
    expect(noop()).toBe(undefined);
  });

  it('测试 runQueue 方法', () => {
    const queue = [1, 2, null, 3, 4];
    let i = 0;
    runQueue(
      queue,
      (current, next) => {
        i += current || 0;
        next();
      }, () => {
        i += 10;
      });
    expect(i).toBe(20);

    const fns = [
      (a) => {
        a.i++;
      },
      (a) => {
        a.i += 2;
      }
    ];
    const a = { i: 0 };
    runQueue(
      fns,
      (middleware, next) => {
        Promise.resolve(middleware(a)).then(next);
      },
      () => {
        a.i += 3;
        expect(a.i).toBe(6);
      });
  });

  it('测试 dateFormat 方法', () => {
    const date1 = new Date();
    const date2 = moment(+date1);

    expect(dateFormat(date1, 'YYYY-MM-DD HH:mm:ss')).toBe(date2.format('YYYY-MM-DD HH:mm:ss'));
    expect(dateFormat(date1, 'YYYY-MM-DDTHH:mm:ss')).toBe(date2.format('YYYY-MM-DDTHH:mm:ss'));
    expect(dateFormat(date1, 'YYYY-MM-DD')).toBe(date2.format('YYYY-MM-DD'));
    expect(dateFormat(date1, 'yyyy-MM-dd')).toBe(date2.format('YYYY-MM-DD'));
    expect(dateFormat(date1, 'YYYY/MM/DD')).toBe(date2.format('YYYY/MM/DD'));
    expect(dateFormat(date1, 'YYYY-MM-DD hh:mm:ss')).toBe(date2.format('YYYY-MM-DD hh:mm:ss'));
    expect(dateFormat(date1, 'YYYY-MM-DD HH:mm:ss')).toBe(date2.format('YYYY-MM-DD HH:mm:ss'));
    expect(dateFormat(date1, 'YYYY-MM-DDTHH:mm:ss')).toBe(date2.format('YYYY-MM-DDTHH:mm:ss'));
    expect(dateFormat(date1, 'YY/M/D')).toBe(date2.format('YY/M/D'));
    expect(dateFormat(date1, 'YY-M-D H:m:s')).toBe(date2.format('YY-M-D H:m:s'));
    expect(dateFormat(date1, 'YY-M-d h:m:s')).toBe(date2.format('YY-M-D h:m:s'));
    expect(dateFormat(date1, 'YYYY-MM-DD hh:mm:ss.SSS')).toBe(date2.format('YYYY-MM-DD hh:mm:ss.SSS'));
    expect(dateFormat(date1, 'YYYY-MM-DD hh:mm:ss.SSS +08:00'))
      .toBe(date2.format('YYYY-MM-DD hh:mm:ss.SSS +08:00'));
    expect(dateFormat(date1, 'YYYY-MM-DD hh:mm:ss.SSS -01:00'))
      .toBe(date2.format('YYYY-MM-DD hh:mm:ss.SSS -01:00'));
    expect(dateFormat(date1, 'YYYY-MM-DD hh:mm:ss.SSSZ')).toBe(date2.format('YYYY-MM-DD hh:mm:ss.SSSZ'));
    expect(dateFormat(date1, 'YYYY-MM-DD hh:mm:ss.SSSZZ')).toBe(date2.format('YYYY-MM-DD hh:mm:ss.SSSZZ'));
    expect(dateFormat(date1, 'YYYY-MM-DD hh:mm:ss Z')).toBe(date2.format('YYYY-MM-DD hh:mm:ss Z'));
    expect(dateFormat(date1, 'YYYY-MM-DD hh:mm:ss ZZ')).toBe(date2.format('YYYY-MM-DD hh:mm:ss ZZ'));
    expect(dateFormat(date1, '+YYYY-MM-DD HH:mm:ss')).toBe(date2.format('+YYYY-MM-DD HH:mm:ss'));
    expect(dateFormat(date1)).toBe(date2.toISOString());
    expect(dateFormat(null as any)).toBe('');
  });

  it('测试 debounce 方法', async () => {
    expect(() => {
      // @ts-ignore
      debounce();
    }).toThrow();

    let now = Date.now();
    let result = await new Promise<number>((resolve) => {
      const debounced = debounce(() => {
        resolve(Date.now());
      }, 1000);
      debounced();
    });
    await sleep(null as any);
    let diff = result - now;
    expect(diff).toBeGreaterThan(1000);
    expect(diff).toBeLessThan(2000);

    now = Date.now();
    const fns: Record<string, () => void> = {};
    const promise = new Promise<number>((resolve) => {
      fns.delay = debounce(() => {
        resolve(Date.now());
      }, 500);
    });
    fns.delay();
    result = await promise;
    diff = result - now;
    expect(diff).toBeGreaterThanOrEqual(500);
    expect(diff).toBeLessThan(1000);

    let debounced = debounce(() => 1, 1000, true);
    expect(debounced()).toBe(1);
    await sleep(100);
    expect(debounced()).toBe(1);
    await sleep(1500);
    debounced = debounce(() => 1, 1000);
    debounced.cancel();
  });

  let i = 0;
  each({ a: 1, b: 2 }, () => {
    i += 1;
  });
  expect(i).toBe(2);
});
