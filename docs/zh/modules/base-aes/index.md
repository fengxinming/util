# base-aes 🔐

[![npm package](https://nodei.co/npm/base-aes.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/base-aes)

[![NPM version](https://img.shields.io/npm/v/base-aes.svg?style=flat)](https://npmjs.org/package/base-aes)
[![NPM Downloads](https://img.shields.io/npm/dm/base-aes.svg?style=flat)](https://npmjs.org/package/base-aes)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/base-aes/badge)](https://www.jsdelivr.com/package/npm/base-aes)

> 零依赖 AES 加密基础库。

## 特性
- 支持 AES-ECB/CBC 模式加密/解密
- 完整 PKCS#7 填充方案实现
- 跨平台字节级数据转换工具
- 类型安全操作数组缓冲区
- Tree-shakable 模块化架构

## 安装
::: code-group
```bash [npm]
npm add base-aes
```
```bash [pnpm]
pnpm add base-aes
```
```bash [yarn]
yarn add base-aes
```
```html [HTML]
<script src="https://cdn.jsdelivr.net/npm/base-aes/dist/index.umd.min.js"></script>
<!-- 全局变量 BaseAes 可用 -->
```
:::

## 核心 API

### 加密模式对比
| 模式 | 向量需求 | 安全性 | 适用场景 |
|------|----------|--------|----------|
| ECB  | ❌ 无需IV | ⚠️ 弱（相同明文块产生相同密文） | 快速加密/低安全性需求 |
| CBC  | ✅ 需要IV | ✅ 推荐 | 标准加密场景 |

### 加密模块
```ts
// AES 基础模块
import { AES } from 'base-aes';
const cipher = new AES(key: Uint8Array);
cipher.encrypt(data: Uint8Array): Uint8Array;
cipher.decrypt(data: Uint8Array): Uint8Array;

// ECB 模式
import { ECB } from 'base-aes';
const ecb = new ECB(key: Uint8Array);
ecb.encrypt(data: Uint8Array): Uint8Array;
ecb.decrypt(data: Uint8Array): Uint8Array;

// CBC 模式
import { CBC } from 'base-aes';
const cbc = new CBC(key: Uint8Array, iv: Uint8Array);
cbc.encrypt(data: Uint8Array): Uint8Array;
cbc.decrypt(data: Uint8Array): Uint8Array;
```

### 数据转换工具
| 函数             | 功能                     | 示例                           |
|------------------|--------------------------|--------------------------------|
| `toUTF8Bytes`    | UTF-8 字符串转字节数组   | `toUTF8Bytes('hello')`         |
| `fromUTF8Bytes`  | 字节数组转 UTF-8 字符串  | `fromUTF8Bytes(bytes)`         |
| `toHexBytes`     | 十六进制字符串转字节数组 | `toHexBytes('00ff')`           |
| `fromHexBytes`   | 字节数组转十六进制字符串 | `fromHexBytes(bytes)`          |

### 填充方案
```ts
import { padPKCS7Padding, stripPKCS7Padding } from 'base-aes';
const padded = padPKCS7Padding(data, blockSize);  // 添加填充
const original = stripPKCS7Padding(padded);      // 移除填充
```

## 使用示例

### ECB 模式加密解密
```ts
import { ECB, padPKCS7Padding, stripPKCS7Padding, toUTF8Bytes, fromUTF8Bytes, fromHexBytes } from 'base-aes';

// 生成密钥（16字节）
const key = toUTF8Bytes('\x00\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0E\x0F');

// 待加密数据
const text = 'TextMustBe16Byte';

// 创建 ECB 实例
const ecb = new ECB(key);

// 加密数据
const encrypted = ecb.encrypt(padPKCS7Padding(toUTF8Bytes(text)));
console.log('密文:', fromHexBytes(encrypted));
// 密文: 61e6335e9518e20fd16aa30871e211e6954f64f2e4e86e9eee82d20216684899

// 解密数据
const decrypted = ecb.decrypt(encrypted);
console.log('明文:', fromUTF8Bytes(stripPKCS7Padding(decryptedBytes)));
// 明文: TextMustBe16Byte
```

### CBC 模式加密解密
```ts
import { CBC, padPKCS7Padding, stripPKCS7Padding, toUTF8Bytes, fromUTF8Bytes, fromHexBytes } from 'base-aes';

// 生成密钥和 IV（均为16字节）
const key = toUTF8Bytes('\x00\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0E\x0F');
const iv = toUTF8Bytes('\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !"#$');
const text = 'TextMustBe16Byte';

// 创建 CBC 实例
const cbc = new CBC(key, iv);

// 加密数据
const encrypted = cbc.encrypt(padPKCS7Padding(toUTF8Bytes(text)));
console.log('密文:', toHexBytes(encrypted));
// 密文: 0605fda3e80da8724d66811725a98f961bf3ca2e1fadf6af8f7223425c74bc69

// 解密数据
const decrypted = cbc.decrypt(encrypted);
console.log('明文:', fromUTF8Bytes(stripPKCS7Padding(decryptedBytes)));
// 明文: TextMustBe16Byte
```

## 对比 Go lang 实现

::: details 点击查看Golang代码
<<< ../../../../packages/base-aes/aes.go
:::
