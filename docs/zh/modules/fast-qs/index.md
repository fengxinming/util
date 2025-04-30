# fast-qs

[![npm package](https://nodei.co/npm/fast-qs.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/fast-qs)

[![NPM version](https://img.shields.io/npm/v/fast-qs.svg?style=flat)](https://npmjs.org/package/fast-qs)
[![NPM Downloads](https://img.shields.io/npm/dm/fast-qs.svg?style=flat)](https://npmjs.org/package/fast-qs)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/fast-qs/badge)](https://www.jsdelivr.com/package/npm/fast-qs)

> 一个快速、安全的 URL 查询字符串解析和格式化工具库，支持自定义分隔符、空值处理、重复键处理等高级功能。

---

## 核心特性

### ⚡ 功能特性
| 特性                | 说明                                                                 |
|---------------------|----------------------------------------------------------------------|
| **自定义分隔符**    | 支持任意分隔符（如 `parse('a|1;b|2', { sep: ';', eq: '|' })`）       |
| **空值处理**        | `f=` → `{ f: '' }`，`&=` → `{ '': '' }`                              |
| **重复键处理**      | 自动转为数组（如 `a=1&a=2` → `{ a: ['1', '2'] }`）                   |
| **无效编码容错**    | `%xx` 无效时保留原始字符（如 `%` → `%`，`%A` → `%A`）                |
| **URL 解析**        | 自动提取 `?` 后的查询参数，支持 `start` 参数定位起始位置             |
| **过滤器扩展**      | 通过 `filter` 过滤/转换键值（如过滤敏感字段或格式化数据）            |

---

## 安装

::: code-group

```bash [npm]
npm add fast-qs
```
```bash [pnpm]
pnpm add fast-qs
```
```bash [yarn]
yarn add fast-qs
```
```html [HTML]
<script src="https://cdn.jsdelivr.net/npm/fast-qs/dist/index.umd.min.js"></script>
<script>
  // window.FastQs
  FastQs.append
  FastQs.escape
  FastQs.parse
  FastQs.stringify
  FastQs.unescape
</script>
```

:::

---

## 核心 API

### 1. `parse(input: string, options?: ParseOptions): ParsedResult`
解析查询字符串为对象

- `str` `<string>` 需要解析的 URL 或查询字符串。
- `options` `<ParseOptions>`
  - `sep` `<string>` 用于分隔键值对的字符，默认 `'&'`。
  - `eq` `<string>` 用于分隔键和值的字符，默认 `'='`。
  - `decodeURIComponent` `<Function>` 自定义解码函数，默认使用 `unescape()`。
  - `filter` `<Function>` 过滤或转换键值的函数。
  - `start` `<number|string>` 指定从字符串的哪个位置开始解析，默认 `'?'`。

#### 参数说明：
```typescript
interface ParseOptions {
  sep?: string;            // 分隔符（默认 "&"）
  eq?: string;             // 键值分隔符（默认 "="）
  decodeURIComponent?: (str: string) => string; // 自定义解码函数
  filter?: (key: string, val: any) => any;      // 解析过滤器
  start?: number | string; // 解析起始位置（支持 URL 解析）
}

// 返回值示例：
{
  key: 'value',
  repeatedKey: ['val1', 'val2'],
  nested[key]: 'value' // 通过 filter 实现
}
```

#### 使用示例：
```typescript
import { parse } from 'fast-qs';

// 基础解析
parse('a=1&b=2') // → { a: '1', b: '2' }

// 处理重复键
parse('a=1&a=2') // → { a: ['1', '2'] }

// 自定义分隔符
parse('a|1;b|2', { sep: ';', eq: '|' }) // → { a: '1', b: '2' }

// 解析 URL
parse('https://example.com?search=hello#hash')
// → { search: 'hello' }

// 从指定的位置处开始解析，提升解析速度，因为 `parse()` 函数默认从 `'?'` 的位置处开始解析字符串。
parse('search=hello', { start: 0 })
// → { search: 'hello' }
```

---

### 2. `stringify(obj: any, options?: StringifyOptions): string`
对象序列化为查询字符串

- `obj` `<Object>` 需要序列化的对象。
- `options` `<StringifyOptions>`
  - `sep` `<string>` 键值对分隔符，默认 `'&'`。
  - `eq` `<string>` 键值分隔符，默认 `'='`。
  - `encodeURIComponent` `<Function>` 自定义编码函数，默认使用 `escape()`。
  - `filter` `<Function>` 过滤或转换键值的函数。

#### 参数说明：
```typescript
interface StringifyOptions {
  sep?: string;               // 分隔符（默认 "&"）
  eq?: string;                // 键值分隔符（默认 "="）
  encodeURIComponent?: (str: string) => string; // 自定义编码函数
  filter?: (key: string, val: any) => any;      // 序列化过滤器
}

// 支持以下类型：
// 对象 → { a: 1 } → "a=1"
// 数组 → { a: [1,2] } → "a=1&a=2"
```

#### 使用示例：
```typescript
import { stringify } from 'fast-qs';

// 基础序列化
stringify({ a: 1, b: 2 }) // → "a=1&b=2"

// 处理数组
stringify({ colors: ['red', 'blue'] }) // → "colors=red&colors=blue"

// 自定义编码
stringify({ name: '中文' }, { encodeURIComponent: escape }) 
// → "name=%E4%B8%AD%E6%96%87"
```

---

### 3. `append(base: string, key: string, value: any, options?: AppendOptions): string`
追加查询参数到现有字符串

- `base` `<string>` 需要追加的原始查询字符串。
- `key` `<string>` 新参数的键。
- `value` `<any>` 新参数的值。
- `options` `<AppendOptions>` 自定义追加选项。

#### 参数说明：
```typescript
interface AppendOptions {
  sep?: string;               // 分隔符（默认 "&"）
  eq?: string;                // 键值分隔符（默认 "="）
  decodeURIComponent?: (str: string) => string;
  encodeURIComponent?: (str: string) => string;
  filter?: (key: string, val: any) => any;
}

// 特性：
// 1. 自动处理重复键
// 2. 支持嵌套键（如 `a[b]`）
// 3. 保持原始参数顺序
```

#### 使用示例：
```typescript
import { append } from 'fast-qs';

// 追加参数
append('a=1', 'b', 2) // → "a=1&b=2"

// 追加到空字符串
append('', 'a', 'value') // → "a=value"

// 追加嵌套参数
append('', 'a[b]', 3) // → "a[b]=3"
```

---

### 4. 编码/解码工具
```typescript
import { escape, unescape } from 'fast-qs';

// 高性能编码
escape('hello world') // → "hello%20world"

// 容错解码
unescape('%E4%B8%AD%E6%96%87') // → "中文"
```

---

## 高级功能

### 1. 自定义编码逻辑
```typescript
// 自定义编码函数
const myEscape = (str: string) => {
  return str.replace(/ /g, '_').replace(/%/, '%25');
};

parse('a=1%20', { decodeURIComponent: myEscape });
```

### 2. 数据过滤器
```typescript
// 过滤敏感参数
parse('token=secret&data=123', {
  filter: (key) => key !== 'token'
});
// → { data: '123' }
```

---

## 浏览器支持

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |
