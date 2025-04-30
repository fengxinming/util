# fast-qs

[![npm package](https://nodei.co/npm/fast-qs.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/fast-qs)

[![NPM version](https://img.shields.io/npm/v/fast-qs.svg?style=flat)](https://npmjs.org/package/fast-qs)
[![NPM Downloads](https://img.shields.io/npm/dm/fast-qs.svg?style=flat)](https://npmjs.org/package/fast-qs)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/fast-qs/badge)](https://www.jsdelivr.com/package/npm/fast-qs)

> A lightweight library for parsing and stringifying URL query strings.

---

## Core Features

### ⚡ Key Features
| Feature                | Description                                                                 |
|------------------------|----------------------------------------------------------------------------|
| **Custom Separators**   | Support any separators (e.g., `parse('a|1;b|2', { sep: ';', eq: '|' })`    |
| **Empty Value Handling** | `f=` → `{ f: '' }`, `&=` → `{ '': '' }`                                  |
| **Duplicate Keys**      | Automatically converted to arrays (e.g., `a=1&a=2` → `{ a: ['1', '2'] }`  |
| **Invalid Encoding**    | Retains invalid `%xx` (e.g., `%` → `%`, `%A` → `%A`                       |
| **URL Parsing**         | Automatically extracts parameters after `?`, supports `start` to specify position |
| **Filter Extension**    | Filter/transform keys/values via `filter` (e.g., filter sensitive fields) |

---

## Installation

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

## Core APIs

### 1. `parse(input: string, options?: ParseOptions): ParsedResult`
Parse query string into an object

- `str` `<string>` The URL or query string to parse.
- `options` `<ParseOptions>`
  - `sep` `<string>` Separator for key-value pairs (default `'&'`).
  - `eq` `<string>` Separator for key and value (default `'='`).
  - `decodeURIComponent` `<Function>` Custom decoding function (default `unescape()`).
  - `filter` `<Function>` Filter/transform keys/values.
  - `start` `<number|string>` Start parsing from this position (default `'?'`).

#### Parameters:
```typescript
interface ParseOptions {
  sep?: string;            // Separator (default "&")
  eq?: string;             // Key-value separator (default "=")
  decodeURIComponent?: (str: string) => string; // Custom decode function
  filter?: (key: string, val: any) => any;      // Parse filter
  start?: number | string; // Parsing start position
}

// Return example:
{
  key: 'value',
  repeatedKey: ['val1', 'val2'],
  nested[key]: 'value' // via filter
}
```

#### Usage Examples:
```typescript
import { parse } from 'fast-qs';

// Basic parsing
parse('a=1&b=2') // → { a: '1', b: '2' }

// Handle duplicates
parse('a=1&a=2') // → { a: ['1', '2'] }

// Custom separators
parse('a|1;b|2', { sep: ';', eq: '|' }) // → { a: '1', b: '2' }

// Parse URL
parse('https://example.com?search=hello#hash')
// → { search: 'hello' }

// Start parsing from a specific position for performance
parse('search=hello', { start: 0 })
// → { search: 'hello' }
```

---

### 2. `stringify(obj: any, options?: StringifyOptions): string`
Serialize object into a query string

- `obj` `<Object>` The object to serialize.
- `options` `<StringifyOptions>`
  - `sep` `<string>` Separator for key-value pairs (default `'&'`).
  - `eq` `<string>` Separator for key and value (default `'='`).
  - `encodeURIComponent` `<Function>` Custom encoding function (default `escape()`).
  - `filter` `<Function>` Filter/transform keys/values.

#### Parameters:
```typescript
interface StringifyOptions {
  sep?: string;               // Separator (default "&")
  eq?: string;                // Key-value separator (default "=")
  encodeURIComponent?: (str: string) => string; // Custom encode function
  filter?: (key: string, val: any) => any;      // Serialize filter
}

// Supported types:
// Object → { a: 1 } → "a=1"
// Array → { a: [1,2] } → "a=1&a=2"
```

#### Usage Examples:
```typescript
import { stringify } from 'fast-qs';

// Basic serialization
stringify({ a: 1, b: 2 }) // → "a=1&b=2"

// Handle arrays
stringify({ colors: ['red', 'blue'] }) // → "colors=red&colors=blue"

// Custom encoding
stringify({ name: '中文' }, { encodeURIComponent: escape }) 
// → "name=%E4%B8%AD%E6%96%87"
```

---

### 3. `append(base: string, key: string, value: any, options?: AppendOptions): string`
Append parameters to an existing string

- `base` `<string>` The base query string.
- `key` `<string>` New parameter key.
- `value` `<any>` New parameter value.
- `options` `<AppendOptions>` Custom append options.

#### Parameters:
```typescript
interface AppendOptions {
  sep?: string;               // Separator (default "&")
  eq?: string;                // Key-value separator (default "=")
  decodeURIComponent?: (str: string) => string;
  encodeURIComponent?: (str: string) => string;
  filter?: (key: string, val: any) => any;
}

// Features:
// 1. Automatically handles duplicate keys
// 2. Supports nested keys (e.g., `a[b]`)
// 3. Preserves original parameter order
```

#### Usage Examples:
```typescript
import { append } from 'fast-qs';

// Append parameter
append('a=1', 'b', 2) // → "a=1&b=2"

// Append to empty string
append('', 'a', 'value') // → "a=value"

// Append nested parameter
append('', 'a[b]', 3) // → "a[b]=3"
```

---

### 4. Encoding/Decoding Utilities
```typescript
import { escape, unescape } from 'fast-qs';

// High-performance encoding
escape('hello world') // → "hello%20world"

// Fault-tolerant decoding
unescape('%E4%B8%AD%E6%96%87') // → "中文"
```

---

## Advanced Features

### 1. Custom Encoding Logic
```typescript
// Custom encoding function
const myEscape = (str: string) => {
  return str.replace(/ /g, '_').replace(/%/, '%25');
};

parse('a=1%20', { decodeURIComponent: myEscape });
```

### 2. Data Filtering
```typescript
// Filter sensitive parameters
parse('token=secret&data=123', {
  filter: (key) => key !== 'token'
});
// → { data: '123' }
```

---

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |
