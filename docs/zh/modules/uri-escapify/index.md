# uri-escapify

[![npm package](https://nodei.co/npm/uri-escapify.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/uri-escapify)

[![NPM version](https://img.shields.io/npm/v/uri-escapify.svg?style=flat)](https://npmjs.org/package/uri-escapify)
[![NPM Downloads](https://img.shields.io/npm/dm/uri-escapify.svg?style=flat)](https://npmjs.org/package/uri-escapify)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/uri-escapify/badge)](https://www.jsdelivr.com/package/npm/uri-escapify)

> 一个轻量级的URI转义工具库，提供 `escape` 和 `unescape` 功能。

## 安装

::: code-group

```bash [npm]
npm add uri-escapify
```
```bash [pnpm]
pnpm add uri-escapify
```
```bash [yarn]
yarn add uri-escapify
```
```html [html]
<script src="https://cdn.jsdelivr.net/npm/uri-escapify/dist/index.umd.min.js"></script>
<script>
  const { escape, unescape } = UriEscapify;
  // 基础编码
  console.log(escape('hello world')); // 输出 "hello%20world"

  // 中文编码
  console.log(escape('中文@示例')); // 输出 "%E4%B8%AD%E6%96%87%40%E7%A4%BA%E4%BE%8B"

  // 特殊字符保留
  console.log(escape("!-._~'()*")); // 输出原字符串

  // 解码操作
  console.log(unescape("%E4%B8%AD%E6%96%87")); // 输出 "中文"
</script>
```

:::

## 使用示例

```typescript
import { escape, unescape } from 'uri-escapify';

// 基础编码
console.log(escape('hello world')); // 输出 "hello%20world"

// 中文编码
console.log(escape('中文@示例')); // 输出 "%E4%B8%AD%E6%96%87%40%E7%A4%BA%E4%BE%8B"

// 特殊字符保留
console.log(escape("!-._~'()*")); // 输出原字符串

// 解码操作
console.log(unescape("%E4%B8%AD%E6%96%87")); // 输出 "中文"
```

## API 文档

### `escape(input: any): string`
- **输入类型**：任何类型（非字符串会先转换为字符串）
- **输出**：百分号编码后的字符串
- **保留字符**：
  ```text
  !-._~'()*
  ```

### `unescape(input: string): string`
- **输入**：百分号编码的字符串
- **输出**：原始解码后的字符串

## 核心功能对比
| 方法         | 功能               | 与原生API差异                     |
|--------------|--------------------|----------------------------------|
| `escape`     | URI编码           | 编码保留!-._~'()*处理更严格      |
| `unescape`   | URI解码           | 支持不完整编码格式的容错处理      |

## 浏览器支持

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |
