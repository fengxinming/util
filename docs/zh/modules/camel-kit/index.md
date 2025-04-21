# **camel-kit**

[![npm package](https://nodei.co/npm/camel-kit.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/camel-kit)

[![NPM version](https://img.shields.io/npm/v/camel-kit.svg?style=flat)](https://npmjs.org/package/camel-kit)
[![NPM Downloads](https://img.shields.io/npm/dm/camel-kit.svg?style=flat)](https://npmjs.org/package/camel-kit)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/camel-kit/badge)](https://www.jsdelivr.com/package/npm/camel-kit)

> 一个轻量且功能丰富的工具库，用于处理 **驼峰命名（camelCase）** 与 **下划线命名（snake_case）** 的相互转换。

---

## **核心功能**
- **双向转换**：支持 `camelCase` ↔ `snake_case` 的快速转换。
- **配置灵活**：通过选项控制转换行为（如保留连续大写、自定义分隔符）。
- **Unicode 支持**：兼容多语言字符（如希腊字母、日文等）。
- **零依赖**：仅需 ~2KB（gzip 压缩后）。

## **安装**

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
  console.log(camelize('snake_case_example')); // 输出: snakeCaseExample
  console.log(decamelize('camelCaseExample')); // 输出: camel_case_example
</script>
```

:::

---

## **快速上手**
```javascript
import { camelize, decamelize } from 'camel-kit';

// 下划线转驼峰
console.log(camelize('snake_case_example')); // 输出: snakeCaseExample

// 驼峰转下划线
console.log(decamelize('camelCaseExample')); // 输出: camel_case_example
```

---

## **高级功能**
### **1. 配置选项**
#### **`camelize` 配置**
```javascript
// 转为帕斯卡式（首字母大写）
console.log(camelize('hello_world', { pascalCase: true })); // 输出: HelloWorld

// 保留连续大写字母（如 `HTTPRequest` → `http_Request`）
console.log(camelize('HTTP_Request', { preserveConsecutiveUppercase: true })); // 输出: hTTP_Request
```

#### **`decamelize` 配置**
```javascript
// 自定义分隔符（如 kebab-case）
console.log(decamelize('camelCase', { separator: '-' })); // 输出: camel-case

// 保留连续大写（如 `FOOBar` → `FOO_Bar`）
console.log(decamelize('FOOBar', { preserveConsecutiveUppercase: true })); // 输出: FOO_Bar
```

---

### **2. 数组输入处理**
```javascript
console.log(camelize(['hello', 'world'])); // 输出: helloWorld
console.log(decamelize('helloWorld', { separator: '_' })); // 输出: hello_world
```

---

### **3. Unicode 支持**
```javascript
// 处理多语言字符
console.log(camelize('üser_näme')); // 输出: üserNäme
console.log(decamelize('üserNäme')); // 输出: üser_näme
```

---

## **浏览器支持**

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |