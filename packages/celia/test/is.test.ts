import moment from 'moment';
import { expect, it } from 'vitest';

import isInteger from '../src/_/_isInteger';
import _isNaN from '../src/_/_isNaN';
import isAbsoluteURL from '../src/is/isAbsoluteURL';
import isArrayLike from '../src/is/isArrayLike';
import isAsyncFunction from '../src/is/isAsyncFunction';
import isDate from '../src/is/isDate';
import isError from '../src/is/isError';
import isESModule from '../src/is/isESModule';
import isLeapYear from '../src/is/isLeapYear';
import isNil from '../src/is/isNil';
import isNumber from '../src/is/isNumber';
import isObject from '../src/is/isObject';
import isPlainObject from '../src/is/isPlainObject';
import isPromiseLike from '../src/is/isPromiseLike';
import isRegExp from '../src/is/isRegExp';
import isValidDate from '../src/is/isValidDate';
import isWindow from '../src/is/isWindow';

// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
const rollup = require('rollup');

it('测试 _isInteger 方法', () => {
  // 兼容版本
  expect(isInteger(2)).toBe(Number.isInteger(2));
  expect(isInteger(-2)).toBe(Number.isInteger(-2));
  expect(isInteger(1.23)).toBe(Number.isInteger(1.23));
  expect(isInteger(-1.23)).toBe(Number.isInteger(-1.23));
  expect(isInteger(null)).toBe(Number.isInteger(null));
  expect(isInteger(undefined)).toBe(Number.isInteger(undefined));
  expect(isInteger('2')).toBe(Number.isInteger('2'));
  expect(isInteger(Infinity)).toBe(Number.isInteger(Infinity));
});

it('测试 isNaN 方法', () => {
  expect(_isNaN('100F')).toBe(Number.isNaN('100F'));
  expect(_isNaN(NaN)).toBe(Number.isNaN(NaN));
  expect(_isNaN('NaN')).toBe(Number.isNaN('NaN'));
});

it('测试 isAbsoluteURL 方法', () => {
  expect(isAbsoluteURL('/src/isAbsoluteURL.js')).toBe(false);
  expect(isAbsoluteURL('https://github.com')).toBe(true);
});

it('测试 isArrayLike 方法', () => {
  expect(isArrayLike('123')).toBe(true);
  expect(isArrayLike(() => { })).toBe(false);
  expect(isArrayLike([])).toBe(true);
  expect(isArrayLike([1, 2, 3])).toBe(true);
  expect(isArrayLike({
    0: 1,
    length: 1
  })).toBe(true);
});

it('测试 isAsyncFunction 方法', () => {
  expect(isAsyncFunction(async () => { })).toBe(true);
  expect(isAsyncFunction(() => { })).toBe(false);
});

it('测试 isDate 方法', () => {
  expect(isDate(new Date())).toBe(true);
  expect(isDate({})).toBe(false);
});

it('测试 isError 方法', () => {
  expect(isError(new Error('I am error'))).toBe(true);
  expect(isError({})).toBe(false);
});

it('测试 isESModule 方法', () => {
  expect(isESModule(rollup)).toBe(true);
  expect(isESModule({})).toBe(false);
});

it('测试 isLeapYear 方法', () => {
  const date2 = moment([2019, 1, 2]);

  expect(isLeapYear(2019)).toBe(date2.isLeapYear());

  date2.year(2000);
  expect(isLeapYear(2000)).toBe(date2.isLeapYear());

  date2.year(1000);
  expect(isLeapYear(1000)).toBe(date2.isLeapYear());

  date2.year(1024);
  expect(isLeapYear(1024)).toBe(date2.isLeapYear());

  date2.year(2018);
  expect(isLeapYear(2018)).toBe(date2.isLeapYear());

  date2.year(1997);
  expect(isLeapYear(1997)).toBe(date2.isLeapYear());

  expect(isLeapYear(new Date())).toBe(moment().isLeapYear());

  expect(isLeapYear(null)).toBe(false);
});

it('测试 isNil 方法', () => {
  expect(isNil(null)).toBe(true);
  expect(isNil(undefined)).toBe(true);
  expect(isNil({})).toBe(false);
});

it('测试 isNumber 方法', () => {
  expect(isNumber(1)).toBe(true);
  expect(isNumber(undefined)).toBe(false);
  expect(isNumber({})).toBe(false);
});

it('测试 isObject 方法', () => {
  expect(isObject(1)).toBe(false);
  expect(isObject(undefined)).toBe(false);
  expect(isObject({})).toBe(true);
});

it('测试 isPlainObject 方法', () => {
  expect(isPlainObject(new Date())).toBe(false);
  expect(isPlainObject({})).toBe(true);
  function Fn() {}
  expect(isPlainObject(new Fn())).toBe(false);
});

it('测试 isPromiseLike 方法', () => {
  expect(isPromiseLike(null)).toBe(false);
  expect(isPromiseLike(undefined)).toBe(false);
  expect(isPromiseLike({})).toBe(false);
  expect(isPromiseLike(new Promise(() => { }))).toBe(true);
  expect(isPromiseLike({ then: () => { }, catch: () => { } })).toBe(true);
});

it('测试 isRegExp 方法', () => {
  expect(isRegExp(null)).toBe(false);
  expect(isRegExp(undefined)).toBe(false);
  expect(isRegExp({})).toBe(false);
  expect(isRegExp(Object.create(null))).toBe(false);
  expect(isRegExp(/\d+/)).toBe(true);
});

it('测试 isValidDate 方法', () => {
  const date1 = new Date(NaN);
  const date2 = moment(NaN);

  expect(isValidDate(date1)).toBe(date2.isValid());
});

it('测试 isWindow 方法', () => {
  expect(isWindow(null)).toBe(false);
  expect(isWindow(undefined)).toBe(false);
  const a = {} as any;
  a.window = a;
  expect(isWindow(a)).toBe(true);
});
