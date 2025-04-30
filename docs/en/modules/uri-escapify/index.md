# uri-escapify

[![npm package](https://nodei.co/npm/uri-escapify.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/uri-escapify)

[![NPM version](https://img.shields.io/npm/v/uri-escapify.svg?style=flat)](https://npmjs.org/package/uri-escapify)
[![NPM Downloads](https://img.shields.io/npm/dm/uri-escapify.svg?style=flat)](https://npmjs.org/package/uri-escapify)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/uri-escapify/badge)](https://www.jsdelivr.com/package/npm/uri-escapify)

> A lightweight URI escaping utility library providing `escape` and `unescape` functionality.

---

## Installation

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
  // Basic encoding
  console.log(escape('hello world')); // Outputs "hello%20world"

  // Chinese encoding
  console.log(escape('中文@示例')); // Outputs "%E4%B8%AD%E6%96%87%40%E7%A4%BA%E4%BE%8B"

  // Reserved characters preservation
  console.log(escape("!-._~'()*")); // Outputs original string

  // Decoding operation
  console.log(unescape("%E4%B8%AD%E6%96%87")); // Outputs "中文"
</script>
```

:::

---

## Usage Examples

```typescript
import { escape, unescape } from 'uri-escapify';

// Basic encoding
console.log(escape('hello world')); // Outputs "hello%20world"

// Chinese encoding
console.log(escape('中文@示例')); // Outputs "%E4%B8%AD%E6%96%87%40%E7%A4%BA%E4%BE%8B"

// Reserved characters preservation
console.log(escape("!-._~'()*")); // Outputs original string

// Decoding operation
console.log(unescape("%E4%B8%AD%E6%96%87")); // Outputs "中文"
```

---

## API Documentation

### `escape(input: any): string`
- **Input Type**: Any type (non-string values are converted to strings)
- **Output**: Percent-encoded string
- **Reserved Characters**:
  ```text
  !-._~'()*
  ```

### `unescape(input: string): string`
- **Input**: Percent-encoded string
- **Output**: Decoded original string

---

## Core Functionality Comparison

| Method         | Function               | Difference from Native APIs                     |
|----------------|------------------------|-----------------------------------------------|
| `escape`       | URI Encoding           | More strict handling of reserved characters like !-._~'()* |
| `unescape`     | URI Decoding           | Supports error-tolerant processing of incomplete encodings |

---

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |
