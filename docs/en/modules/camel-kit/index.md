# **camel-kit**

[![npm package](https://nodei.co/npm/camel-kit.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/camel-kit)

[![NPM version](https://img.shields.io/npm/v/camel-kit.svg?style=flat)](https://npmjs.org/package/camel-kit)
[![NPM Downloads](https://img.shields.io/npm/dm/camel-kit.svg?style=flat)](https://npmjs.org/package/camel-kit)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/camel-kit/badge)](https://www.jsdelivr.com/package/npm/camel-kit)

> A lightweight and feature-rich utility library for bidirectional conversion between **camelCase** and **snake_case**.

---

## **Core Features**
- **Bidirectional Conversion**: Supports seamless conversion between `camelCase` ↔ `snake_case`.
- **Flexible Configuration**: Customize behavior with options (e.g., preserve consecutive uppercase letters, custom separators).
- **Unicode Support**: Compatible with multilingual characters (e.g., Greek letters, Japanese).
- **Zero Dependencies**: Only ~2KB (gzipped).

---

## **Installation**

::: code-group

```bash [npm]
npm add camel-kit
```
```bash [pnpm]
pnpm add camel-kit
```
```bash [yarn]
yarn add camel-kit
```
```html [html]
<script src="https://cdn.jsdelivr.net/npm/camel-kit/dist/index.umd.min.js"></script>
<script>
  const { camelize, decamelize } = CamelKit;
  console.log(camelize('snake_case_example')); // Output: snakeCaseExample
  console.log(decamelize('camelCaseExample')); // Output: camel_case_example
</script>
```

:::

---

## **Quick Start**
```javascript
import { camelize, decamelize } from 'camel-kit';

// Snake to Camel
console.log(camelize('snake_case_example')); // Output: snakeCaseExample

// Camel to Snake
console.log(decamelize('camelCaseExample')); // Output: camel_case_example
```

---

## **Advanced Features**
### **1. Configuration Options**
#### **`camelize` Options**
```javascript
// Convert to PascalCase (uppercase first letter)
console.log(camelize('hello_world', { pascalCase: true })); // Output: HelloWorld

// Preserve consecutive uppercase letters (e.g., 'HTTPRequest' → 'http_Request')
console.log(camelize('HTTP_Request', { preserveConsecutiveUppercase: true })); // Output: hTTP_Request
```

#### **`decamelize` Options**
```javascript
// Custom separator (e.g., kebab-case)
console.log(decamelize('camelCase', { separator: '-' })); // Output: camel-case

// Preserve consecutive uppercase letters (e.g., 'FOOBar' → 'FOO_Bar')
console.log(decamelize('FOOBar', { preserveConsecutiveUppercase: true })); // Output: FOO_Bar
```

---

### **2. Array Input Handling**
```javascript
console.log(camelize(['hello', 'world'])); // Output: helloWorld
console.log(decamelize('helloWorld', { separator: '_' })); // Output: hello_world
```

---

### **3. Unicode Support**
```javascript
// Process multilingual characters
console.log(camelize('üser_näme')); // Output: üserNäme
console.log(decamelize('üserNäme')); // Output: üser_näme
```

---

## **Browser Support**

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |
