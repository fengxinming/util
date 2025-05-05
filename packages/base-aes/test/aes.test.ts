import { describe, expect, it } from 'vitest';

import { CBC } from '../src/CBC';
import { ECB } from '../src/ECB';
import { fromHexBytes } from '../src/fromHexBytes';
import { fromUTF8Bytes } from '../src/fromUTF8Bytes';
import { padPKCS7Padding } from '../src/padPKCS7Padding';
import { stripPKCS7Padding } from '../src/stripPKCS7Padding';
import { toHexBytes } from '../src/toHexBytes';
import { toUTF8Bytes } from '../src/toUTF8Bytes';

// 跟 go 语言加密和解密保持一致
describe('AES 加密套件测试', () => {
  // 测试向量：AES-128-CBC 互操作性测试
  const key = toUTF8Bytes('\x00\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0E\x0F');
  const iv = toUTF8Bytes('\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !"#$');
  const text = 'TextMustBe16Byte';
  const ecbCipherText = '61e6335e9518e20fd16aa30871e211e6954f64f2e4e86e9eee82d20216684899';
  const cbcCipherText = '0605fda3e80da8724d66811725a98f961bf3ca2e1fadf6af8f7223425c74bc69';

  describe('基础功能验证', () => {
    it('测试 AES-ECB 模式加密解密', () => {
      const aesEcb = new ECB(key);
      const encryptedBytes = aesEcb.encrypt(padPKCS7Padding(toUTF8Bytes(text)));
      expect(fromHexBytes(encryptedBytes)).toBe(ecbCipherText);

      expect(encryptedBytes).toEqual(new Uint8Array(toHexBytes(ecbCipherText)));

      const decryptedBytes = aesEcb.decrypt(encryptedBytes);
      expect(fromUTF8Bytes(stripPKCS7Padding(decryptedBytes))).toBe(text);
    });

    it('测试 AES-CBC 模式加密解密', () => {
      const aesCbc = new CBC(key, iv);
      const encryptedBytes = aesCbc.encrypt(padPKCS7Padding(toUTF8Bytes(text)));
      expect(fromHexBytes(encryptedBytes)).toBe(cbcCipherText);

      expect(encryptedBytes).toEqual(new Uint8Array(toHexBytes(cbcCipherText)));

      const decryptedBytes = aesCbc.decrypt(encryptedBytes);
      expect(fromUTF8Bytes(stripPKCS7Padding(decryptedBytes))).toBe(text);
    });

    // it('测试不同密钥长度支持', () => {
    //   const key192 = new Uint8Array(24);
    //   const key256 = new Uint8Array(32);

    //   expect(() => new AES(key192)).not.throw();
    //   expect(() => new AES(key256)).not.throw();
    // });
  });

  // describe('边界条件测试', () => {
  //   it('测试空数据处理', () => {
  //     const aes = new AES(zeroKey);

  //     expect(() => aes.encrypt(new Uint8Array(0))).throw();
  //     expect(() => aes.decrypt(new Uint8Array(0))).throw();
  //   });

  //   it('测试单字节数据填充', () => {
  //     const data = new Uint8Array(1);
  //     const padded = padPKCS7Padding(data);

  //     expect(padded.length).toBe(16);
  //     expect(padded[15]).toBe(15);
  //   });

  //   it('测试完整块填充移除', () => {
  //     const data = new Uint8Array(16);
  //     data.fill(16);

  //     const result = stripPKCS7Padding(data);
  //     expect(result.length).toBe(0);
  //   });
  // });

  // describe('数据转换验证', () => {
  //   it('测试 UTF8 编解码一致性', () => {
  //     const text = 'Hello World! 中文测试 1234';
  //     const bytes = toUTF8Bytes(text);

  //     expect(fromUTF8Bytes(bytes)).toBe(text);
  //   });

  //   it('测试 HEX 编解码一致性', () => {
  //     const hexStr = '000102030405060708090a0b0c0d0e0f';
  //     const bytes = toHexBytes(hexStr);

  //     expect(fromHexBytes(bytes)).toBe(hexStr);
  //   });

  //   it('测试无效 HEX 输入处理', () => {
  //     expect(() => toHexBytes('invalid')).throw();
  //     expect(() => toHexBytes('00gg')).throw();
  //   });
  // });

  // describe('错误处理验证', () => {
  //   it('测试无效密钥长度', () => {
  //     const shortKey = new Uint8Array(8);

  //     expect(() => new AES(shortKey)).throw();
  //     expect(() => new CBC(shortKey, zeroIV)).throw();
  //   });

  //   it('测试错误块大小解密', () => {
  //     const aes = new AES(zeroKey);
  //     const invalidBlock = new Uint8Array(15);

  //     expect(() => aes.decrypt(invalidBlock)).throw();
  //   });

  //   it('测试无效填充处理', () => {
  //     const data = new Uint8Array(16);
  //     data.fill(0x80); // Invalid padding value

  //     expect(() => stripPKCS7Padding(data)).throw();
  //   });
  // });

  // describe('性能基准测试', () => {
  //   const largeData = new Uint8Array(1024 * 1024); // 1MB data

  //   it('测试加密吞吐量', () => {
  //     const aes = new AES(zeroKey);
  //     const start = performance.now();

  //     const result = aes.encrypt(largeData);
  //     const duration = performance.now() - start;

  //     expect(result).toBeDefined();
  //     console.log(`Encrypted 1MB in ${duration.toFixed(2)}ms`);
  //   });

  //   it('测试解密吞吐量', () => {
  //     const aes = new AES(zeroKey);
  //     const encrypted = aes.encrypt(largeData);
  //     const start = performance.now();

  //     const result = aes.decrypt(encrypted);
  //     const duration = performance.now() - start;

  //     expect(result).toBeDefined();
  //     console.log(`Decrypted 1MB in ${duration.toFixed(2)}ms`);
  //   });
  // });
});
