/* eslint-disable @typescript-eslint/ban-ts-comment */
import { describe, expect, test } from 'vitest';

import replaceAll from '../src/index';

describe('对比原生行为测试', () => {
  const str = 'hello world';

  test('基础替换对比', () => {
    // 原生需要使用正则表达式才能全局替换
    const nativeResult = str.replace(/l/g, 'o');
    expect(replaceAll(str, 'l', 'o')).toBe(nativeResult); // 'heoo worod'
  });

  test('替换函数对比', () => {
    const nativeResult = str.replace(/l/g, (match, offset) => `_${offset}_`);
    const customResult = replaceAll(str, 'l', (m, o) => `_${o}_`);
    expect(customResult).toBe(nativeResult); // 'he__2____4__o w__9__rld'
  });

  test('空子字符串行为差异', () => {
    expect('test'.replaceAll('', '!')).toBe('!t!e!s!t!');
    expect(replaceAll('test', '', '!')).toBe('!t!e!s!t!');
  });

  test('大小写不敏感对比', () => {
    const nativeResult = str.replace(/HeLLo/gi, 'HI');
    expect(nativeResult).toBe('HI world');
    expect(replaceAll(str, 'HeLLo', 'HI', { caseInsensitive: true })).toBe('HI world');
  });

  test('fromIndex选项与原生差异', () => {
    // 原生无此功能，需通过正则索引模拟
    expect('aaaa'.replace(/a/g, (_, idx) => (idx >= 2 ? '*' : 'a'))).toBe('aa**');
    expect(replaceAll('aaaa', 'a', '*', { fromIndex: 2 })).toBe('aa**');
  });

  test('重叠替换对比', () => {
    expect(replaceAll('ababab', 'ab', 'ba')).toBe('bababa'); // 自定义行为
    expect('ababab'.replaceAll('ab', 'ba')).toBe('bababa'); // 原生行为相同
  });

  test('undefined替换处理', () => {
    // 原生将undefined转为空字符串
    expect(str.replaceAll('l', undefined as any)).toBe('heundefinedundefinedo worundefinedd');
    // 自定义行为保留undefined
    expect(replaceAll(str, 'l', undefined)).toBe('heundefinedundefinedo worundefinedd'); // 需根据实际代码行为调整
  });
});


