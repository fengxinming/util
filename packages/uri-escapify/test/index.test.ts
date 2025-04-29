import { describe, expect, it } from 'vitest';

// import encode from '../../fast-qs/src/escape';
// import decode from '../../fast-qs/src/unescape';
import escape from '../src/escape';
import unescape from '../src/unescape';

describe('URI Escapify', () => {
  describe('escape', () => {
    it('encodes basic characters', () => {
      const enStr = 'hello world';
      const zhStr = '中文@示例';
      expect(escape(enStr)).toBe('hello%20world');
      expect(escape(enStr)).toBe(encodeURIComponent('hello world'));
      expect(escape(zhStr)).toBe('%E4%B8%AD%E6%96%87%40%E7%A4%BA%E4%BE%8B');
      expect(escape(zhStr)).toBe(encodeURIComponent('中文@示例'));
    });

    it('preserves reserved characters', () => {
      const reserved = "~()*!.'[],;";
      expect(escape(reserved)).toBe("~()*!.'%5B%5D%2C%3B");
      expect(escape(reserved)).toBe(encodeURIComponent(reserved));
    });

    it('handles special cases', () => {
      const str = '!@#$%^&*()';
      expect(escape('https://example.com')).toBe('https%3A%2F%2Fexample.com');
      expect(escape(str)).toBe(encodeURIComponent(str));
    });

    it('handles edge cases', () => {
      expect(escape('')).toBe('');
      expect(escape(null as any)).toBe(encodeURIComponent(null as any));
      expect(escape(undefined as any)).toBe(encodeURIComponent(undefined as any));
      expect(escape(123 as any)).toBe(encodeURIComponent(123 as any)); // 非字符串强制转换测试
    });

    // 补充非字符串输入的严格处理
    it('strictly converts non-string inputs', () => {
      expect(escape(true as any)).toBe('true'); // 布尔值转字符串编码
      expect(escape({} as any)).toBe(encodeURIComponent({} as any)); // 对象转字符串编码
      expect(escape([1, 2] as any)).toBe('1%2C2'); // 数组转字符串编码
    });

    // 保留字符的完整测试
    it('preserves all reserved characters', () => {
      const reserved = '!*\'();:@&=+$,/?#[]%'; // 包含%本身
      expect(escape(reserved)).toBe(encodeURIComponent(reserved)); // 确保保留所有RFC 3986保留字符
      expect(escape('%')).toBe('%25');
    });

    // 特殊编码场景
    it('handles edge encoding cases', () => {
      expect(escape('\n')).toBe('%0A'); // 换行符编码
      expect(escape('\t')).toBe('%09'); // 制表符编码
      expect(escape(' ')).toBe('%20'); // 空格编码
      expect(escape('✓')).toBe('%E2%9C%93'); // Unicode字符编码
    });

    // 性能边界测试
    it('handles large input', () => {
      const largeStr = 'a'.repeat(100000);
      expect(escape(largeStr)).toBe('a'.repeat(100000)); // 确保无溢出
    });
  });

  describe('unescape', () => {
    it('decodes encoded strings', () => {
      expect(unescape('hello%20world')).toBe('hello world');
      expect(unescape('%E4%B8%AD%E6%96%87')).toBe('中文');
    });

    it('handles incomplete encodings', () => {
      expect(unescape('%E4Zh')).toBe(''); // 不完整编码处理
      expect(unescape('%')).toBe('');
    });

    it('ignores non-encoded characters', () => {
      expect(unescape('normal text')).toBe('normal text');
      expect(unescape('already%encoded')).toBe('');
    });

    it('edge cases', () => {
      expect(unescape('')).toBe('');
      expect(unescape(null as any)).toBe('null'); // 非字符串强制转换测试
    });

    // 非法编码处理
    it('handles invalid encodings', () => {
      expect(unescape('%GG')).toBe(''); // 非法十六进制保留
      expect(unescape('%G')).toBe(''); // 单字符保留
      expect(unescape('%')).toBe(''); // 单%号保留
    });

    // 大写字母解码
    it('decodes uppercase hex', () => {
      expect(unescape('%41%42%43')).toBe('ABC'); // 大写编码
      expect(unescape('%aBc')).toBe('');
    });

    // 解码边界场景
    it('handles special decoding cases', () => {
      expect(unescape('%0A')).toBe('\n'); // 换行符解码
      expect(unescape('%09')).toBe('\t'); // 制表符解码
      expect(unescape('%20')).toBe(' '); // 空格解码
      expect(unescape('%E2%9C%93')).toBe('✓'); // Unicode解码
    });
  });

  describe('round trip', () => {
    it('escape then unescape returns original', () => {
      const testStr = 'test@123!#中文';
      expect(unescape(escape(testStr))).toBe(testStr);
    });
  });

  describe('round trip with edge cases', () => {
    it('preserves special characters', () => {
      const testStr = '%!*\n[]';
      expect(unescape(escape(testStr))).toBe(testStr);
    });

    it('handles mixed cases', () => {
      const mixed = '中文@%20%40%aBc';
      expect(unescape(escape(mixed))).toBe(mixed);
    });
  });
});
