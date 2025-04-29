# **fast-replaceall**

[![npm package](https://nodei.co/npm/fast-replaceall.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/fast-replaceall)

[![NPM version](https://img.shields.io/npm/v/fast-replaceall.svg?style=flat)](https://npmjs.org/package/fast-replaceall)
[![NPM Downloads](https://img.shields.io/npm/dm/fast-replaceall.svg?style=flat)](https://npmjs.org/package/fast-replaceall)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/fast-replaceall/badge)](https://www.jsdelivr.com/package/npm/fast-replaceall)

> **高性能字符串替换工具**  
> 支持全局替换、大小写不敏感模式、起始位置控制，以及与原生 `String.replace` 兼容的函数式替换。

---

## **特性** 🌟
- **全局替换**：无需正则表达式即可实现完全替换
- **灵活配置**：通过 `caseInsensitive` 和 `fromIndex` 参数自定义行为
- **函数式替换**：使用回调函数实现动态逻辑
- **TypeScript 支持**：包含完整类型定义
- **轻量级**：仅 1KB（未压缩），零依赖

---

## **安装** 💻

::: code-group

```bash [npm]
npm add fast-replaceall
```
```bash [pnpm]
pnpm add fast-replaceall
```
```bash [yarn]
yarn add fast-replaceall
```
```html [HTML]
<script src="https://cdn.jsdelivr.net/npm/fast-replaceall/dist/index.umd.min.js"></script>
<script>
  const text = 'The quick brown fox jumps over the lazy dog';
  console.log(FastReplaceall(text, 'dog', 'monkey'));
  // 输出: The quick brown fox jumps over the lazy monkey
</script>
```

:::

---

## **使用示例** 🚀

### **基础替换**
```javascript
import replaceAll from 'fast-replaceall';

const text = 'The quick brown fox jumps over the lazy dog';
console.log(replaceAll(text, 'dog', 'monkey'));
// 输出: The quick brown fox jumps over the lazy monkey
```

### **函数式替换**
```javascript
replaceAll('123-456', '-', (match, offset) => `_${offset}_`);
// 输出: 123_0_456
```

### **自定义选项**
```javascript
// 大小写不敏感替换
replaceAll('Apple apple', 'APPLE', 'ORANGE', { caseInsensitive: true });
// 输出: ORANGE ORANGE

// 从索引 2 开始替换
replaceAll('aaaa', 'a', '*', { fromIndex: 2 });
// 输出: aa**
```

---

## **API 文档** 📖

### **函数签名**
```typescript
export default function replaceAll(
  str: string,
  substr: string,
  replacement: string | ReplacementFn,
  options?: ReplaceAllOptions
): string;
```

### **参数说明**
| 参数 | 类型 | 说明 |
|------|------|------|
| `str` | `string` | 要操作的原始字符串 |
| `substr` | `string` | 需要匹配的子字符串 |
| `replacement` | `string | ReplacementFn` | 替换值或回调函数（接收匹配项、偏移量和原始字符串） |
| `options` | `ReplaceAllOptions` | 可选配置参数 |

### **配置选项**
```typescript
interface ReplaceAllOptions {
  fromIndex?: number; // 起始索引（默认 0，支持负数）
  caseInsensitive?: boolean; // 大小写不敏感匹配（默认 false）
}

type ReplacementFn = (match: string, offset: number, str: string) => string;
```

### **项目灵感**
基于原生 `String.replace` 的增强，解决以下痛点：
- **无需正则表达式**：直接基于字符串匹配
- **直观参数**：用清晰的选项替代复杂的正则标志
- **边界情况处理**：支持空字符串替换（可配置是否抛出错误或格式化输出）

---

## **与原生方法对比** 🎯

| 需求 | `fast-replaceall` | `String.prototype.replace` |
|------|-------------------|----------------------------|
| 全局替换 | 内置支持 | 需要正则 `/g` 标志 |
| 大小写不敏感 | `caseInsensitive` 选项 | 需要正则 `i` 标志 |
| 起始位置控制 | `fromIndex` 参数 | 需要手动切片字符串 |
| 函数式替换 | 完全支持 | 需要正则 + 函数 |

```text
======== 性能基准结果 ========

【String.prototype.replace】 x 6,635,525 ops/sec ±2.58% (87 runs sampled)
【String.prototype.replaceAll】 x 5,636,302 ops/sec ±0.58% (94 runs sampled)
【replaceAll】 x 40,483,612 ops/sec ±0.67% (94 runs sampled)
最快的是 【replaceAll】

======== 基准测试结束 ========
```

## 浏览器支持

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |
