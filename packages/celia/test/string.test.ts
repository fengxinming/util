/* eslint-disable @typescript-eslint/ban-ts-comment */

import { describe, expect, it } from 'vitest';

import joinClassName from '../src/string/joinClassName';
import joinPath from '../src/string/joinPath';
import stringReplaceAll from '../src/string/stringReplaceAll';

describe('测试字符串处理方法集', () => {
  it('测试 joinClassName 方法', () => {
    expect(joinClassName('one')).toBe('one');
    expect(joinClassName([])).toBe('');
    expect(joinClassName()).toBe('');
    expect(joinClassName(null)).toBe('');
    expect(joinClassName(true)).toBe('');
    expect(joinClassName('one', 'two', 'three')).toBe('one two three');
    expect(joinClassName(['one', 'two', 'three'])).toBe('one two three');
    expect(joinClassName({ one: true, two: true, three: false })).toBe('one two');
    expect(joinClassName('one', 'two', { four: true, three: false })).toBe('one two four');
    expect(
      joinClassName(
        'one', { two: true, three: false },
        { four: 'four', five: true }, 6, {}
      )
    ).toBe('one two four five 6');
    expect(
      joinClassName(
        ['one', 'two'], ['three'], ['four', ['five']], [{ six: true }, { seven: false }]
      )
    ).toBe('one two three four five six');
  });

  it('测试 stringReplaceAll 方法', () => {
    expect(stringReplaceAll(
      'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?',
      'dog',
      'monkey'
    )).toBe('The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?');
    // @ts-ignore
    expect(stringReplaceAll(null)).toBe(null);
    // @ts-ignore
    expect(stringReplaceAll('这是一个字符串', null)).toBe('这是一个字符串');
    // @ts-ignore
    expect(stringReplaceAll('这是一个字符串', '')).toBe('这是一个字符串');
    expect(stringReplaceAll('这是一个字符串', 'dog', 'monkey')).toBe('这是一个字符串');
    expect(stringReplaceAll('这是一个字符串', '一', (match, offset) => {
      expect(offset).toBe(2);
    })).toBe('这是undefined个字符串');
    expect(stringReplaceAll(
      'The quick brown fox jumps over the lazy dog. ', 'DOG', 'monkey', { caseInsensitive: true }))
      .toBe('The quick brown fox jumps over the lazy monkey. ');
    expect(stringReplaceAll('The quick brown fox jumps over the lazy dog. ', 'DOG', 'monkey', { fromIndex: -1 }))
      .toBe('The quick brown fox jumps over the lazy dog. ');
    expect(stringReplaceAll('The quick brown fox jumps over the lazy dog. ', 'dog', 'monkey', { fromIndex: -1 }))
      .toBe('The quick brown fox jumps over the lazy dog. ');
    expect(stringReplaceAll('The quick brown fox jumps over the lazy dog. ', 'dog', 'monkey', { fromIndex: -5 }))
      .toBe('The quick brown fox jumps over the lazy monkey. ');
    expect(stringReplaceAll(
      'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?',
      'dog',
      'monkey',
      { fromIndex: -44 }
    )).toBe('The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?');
  });

  it('测试 joinPath 方法', () => {
    // @ts-ignore
    expect(joinPath()).toBe('.');
    expect(joinPath('https://www.taobao.com', 'path1')).toBe('https://www.taobao.com/path1');
    expect(joinPath('https://www.taobao.com/', 'path1')).toBe('https://www.taobao.com/path1');
    expect(joinPath('https://www.taobao.com/', '/path1')).toBe('https://www.taobao.com/path1');
    expect(joinPath('https://www.taobao.com', null, '/path1')).toBe('https://www.taobao.com/path1');
    expect(joinPath('https://www.taobao.com', null, undefined)).toBe('https://www.taobao.com');
  });


});
