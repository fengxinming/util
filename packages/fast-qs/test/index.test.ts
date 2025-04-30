/* eslint-disable @typescript-eslint/ban-ts-comment */
import { parse, stringify } from 'node:querystring';

import { expect, it } from 'vitest';

import fastEscape from '../../uri-escapify/src/escape';
import appendQuery from '../src/append';
import parseQuery from '../src/parse';
import stringifyQuery from '../src/stringify';

it('测试 stringify', () => {
  const testData1 = { a: 1, b: null, c: undefined, d: NaN, e: '', f: true, g: false, h: Infinity };
  const qs1 = 'a=1&b=&c=&d=&e=&f=true&g=false&h=Infinity';

  const testData2 = { a: '', b: undefined, c: ['\'1\'', '2', '3', NaN, undefined], f: null, '': 'null' };
  const qs2 = 'a=&b=&c=%271%27&c=2&c=3&c=&c=&f=&=null';

  const testData3 = { a: { key: 'value', key2: 'value2' }, d: undefined, f: '' };
  const qs3 = 'a=%7B%22key%22%3A%22value%22%2C%22key2%22%3A%22value2%22%7D&d=&f=';

  const testData4 = { a: () => (1), b: Symbol('test') };
  const qs4 = 'a=&b=';

  const testData5 = { a: [1, 2, 3, 4], b: 'test' };
  const qs5 = 'a=1&a=2&a=3&a=4&b=test';
  const qs5_ = 'a=1&a=2&a=3&a=4';


  expect(stringifyQuery(null as any)).toBe('');
  expect(stringifyQuery('null' as any)).toBe('');
  expect(stringifyQuery(testData1, {})).toBe(qs1);
  expect(stringifyQuery(testData2, { sep: '&' })).toBe(qs2);
  expect(stringifyQuery(testData3, { sep: '&', eq: '=' })).toBe(qs3);
  expect(stringifyQuery(testData4)).toBe(qs4);
  expect(stringifyQuery(testData5)).toBe(qs5);
  expect(stringifyQuery(testData5, {
    filter(key) {
      return key === 'a';
    },
    encodeURIComponent: fastEscape
  })).toBe(qs5_);

  // 不同
  expect(stringify(testData1)).toBe('a=1&b=&c=&d=&e=&f=true&g=false&h=');
  expect(stringify(testData2 as any)).toBe("a=&b=&c='1'&c=2&c=3&c=&c=&f=&=null");
  expect(stringify(testData3 as any)).toBe('a=&d=&f=');

  // 相同
  expect(stringifyQuery(null as any)).toBe(stringify(null as any));
  expect(stringifyQuery(testData4)).toBe(stringify(testData4 as any));
  expect(stringifyQuery(testData5)).toBe(stringify(testData5));
});

it('测试 parse', () => {
  const qs1 = 'foobar';
  const res1 = { foobar: '' };

  const qs2 = 'foo=1&bar=2&c=3&d=%&f=';
  const res2 = { foo: '1', bar: '2', c: '3', d: '%', f: '' };

  const qs3 = '&a=%7B&%7B=%7D&c=3&d=&f=foo+bar&%';
  const res3 = { a: '{', '{': '}', c: '3', d: '', f: 'foo bar', '%': '' };

  const qs4 = 'foo+bar&a=1&b=2&c=3&d=&f=&';
  const res4 = { 'foo bar': '', a: '1', b: '2', c: '3', d: '', f: '' };

  const qs5 = '?a=1&a=2&a=3&d=&f=';
  const res5 = { a: ['1', '2', '3'], d: '', f: '' };

  const qs6 = '=&foo=&foo=bar';
  const res6 = { '': '', foo: ['', 'bar'] };

  const qs7 = '=&=';
  const res7 = { '': ['', ''] };

  const url1 = 'https://www.npmjs.com/search?q=qs#hash';
  const ures1 = { q: 'qs' };

  const url2 = 'https://iotx-vision-vod-vpc-hz-pre.aliyun-inc.com/vod/device/localrecord/flv/play/L3Byb2dzL3JlYy8wMC8yMDIxMTIwMS9OMTIyMTIxLkgyNjQ=.flv?token=64c12e95f0e347ccac246a0916d530e3&session=f39b3f80639c4ca18a62ab7a9d77215a';
  const ures2 = {
    token: '64c12e95f0e347ccac246a0916d530e3',
    session: 'f39b3f80639c4ca18a62ab7a9d77215a'
  };

  const url3 = 'http://demo.com?foo=bar&foo=baz&b=1&c=1&hideTopbar=1&hideSidebar=1';
  const ures3 = {
    foo: ['bar', 'baz'],
    b: '1',
    c: '1'
  };

  expect(parseQuery(null as any)).toEqual({});
  expect(parseQuery(qs1, {})).toEqual(res1);
  expect(parseQuery(qs2, { sep: '&' })).toEqual(res2);
  expect(parseQuery(qs3, { sep: '&', eq: '=' })).toEqual(res3);
  expect(parseQuery(qs4, { start: 0 })).toEqual(res4);
  expect(parseQuery(qs5, { start: 1 })).toEqual(res5);
  expect(parseQuery(qs6)).toEqual(res6);
  expect(parseQuery(qs7, { start: -3 })).toEqual(res7);
  expect(parseQuery(url1)).toEqual(ures1);
  expect(parseQuery(url2, {
    decodeURIComponent
  })).toEqual(ures2);
  expect(parseQuery(url3, {
    filter(key) {
      return key !== 'hideTopbar' && key !== 'hideSidebar';
    }
  })).toEqual(ures3);

  expect(parseQuery(null as any)).toEqual(parse(null as any));
  expect(parseQuery(qs1)).toEqual(parse(qs1));
  expect(parseQuery(qs2)).toEqual(parse(qs2));
  expect(parseQuery(qs3)).toEqual(parse(qs3));
  expect(parseQuery(qs4, { start: 0 })).toEqual(parse(qs4));
  expect(parseQuery(qs5)).toEqual(parse(qs5.slice(1)));
});

it('测试 append', () => {
  // @ts-ignore
  expect(appendQuery(null as any)).toBe('');
  // @ts-ignore
  expect(appendQuery('http://demo.com')).toBe('http://demo.com');
  expect(appendQuery('http://demo.com', 123 as any)).toBe('http://demo.com');
  expect(appendQuery('http://demo.com', 'a=1&b=1&c=1', { sep: '&' })).toBe('http://demo.com?a=1&b=1&c=1');
  expect(appendQuery('http://demo.com?test=1#hash', 'a=1&a=2&b=1&c=1', { eq: '=' })).toBe('http://demo.com?test=1&a=1&a=2&b=1&c=1#hash');
  expect(appendQuery('http://demo.com', { a: 1, b: 1, c: 1 })).toBe('http://demo.com?a=1&b=1&c=1');
  expect(appendQuery('http://demo.com?test=1#hash', { a: 1, b: 1, c: 1 })).toBe('http://demo.com?test=1&a=1&b=1&c=1#hash');
  expect(appendQuery('http://demo.com', 'a=1&a=2&b=1&c=1&hideTopbar=1&hideSidebar=1', {
    filter(key) {
      return key !== 'hideTopbar' && key !== 'hideSidebar';
    }
  })).toBe('http://demo.com?a=1&a=2&b=1&c=1');
  expect(appendQuery('http://demo.com', { a: 1, b: 1, c: 1, hideTopbar: 1, hideSidebar: 1 }, {
    filter(key) {
      return key !== 'hideTopbar' && key !== 'hideSidebar';
    }
  })).toBe('http://demo.com?a=1&b=1&c=1');
  expect(appendQuery('https://iotx-vision-vod-vpc-hz-pre.aliyun-inc.com/vod/device/localrecord/flv/play/L3Byb2dzL3JlYy8wMC8yMDIxMTIwMS9OMTIyMTIxLkgyNjQ=.flv?token=64c12e95f0e347ccac246a0916d530e3&session=f39b3f80639c4ca18a62ab7a9d77215a', {
    speed: 1,
    keyIndex: 0,
    offset: 346000
  })).toBe('https://iotx-vision-vod-vpc-hz-pre.aliyun-inc.com/vod/device/localrecord/flv/play/L3Byb2dzL3JlYy8wMC8yMDIxMTIwMS9OMTIyMTIxLkgyNjQ=.flv?token=64c12e95f0e347ccac246a0916d530e3&session=f39b3f80639c4ca18a62ab7a9d77215a&speed=1&keyIndex=0&offset=346000');
});
