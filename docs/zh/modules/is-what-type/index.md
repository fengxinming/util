# **is-what-type**

[![npm 包](https://nodei.co/npm/is-what-type.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/is-what-type)

[![NPM 版本](https://img.shields.io/npm/v/is-what-type.svg?style=flat)](https://npmjs.org/package/is-what-type)
[![NPM 下载量](https://img.shields.io/npm/dm/is-what-type.svg?style=flat)](https://npmjs.org/package/is-what-type)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/camel-kit/badge)](https://www.jsdelivr.com/package/npm/is-what-type)

> 一个简单的类型检查的工具库。

## 安装

::: code-group

```bash [npm]
npm add is-what-type
```
```bash [pnpm]
pnpm add is-what-type
```
```bash [yarn]
yarn add is-what-type
```
:::

## 特性介绍

- :clipboard: **API 数量**：提供了 15 个实用的类型检测函数。
- :zap: **高效准确**：提供高效的类型检测函数，确保结果准确无误。
- :book: **易于使用**：简洁明了的 API 设计，方便开发者快速上手。
- :package: **兼容性强**：适用于 JavaScript 和 TypeScript 环境，确保代码兼容性。
- :white_check_mark: **单元测试覆盖**：所有功能均经过全面的单元测试覆盖，确保代码质量。
- :link: **无第三方依赖**：不依赖任何第三方库，保持轻量级。

## API 列表

### getType

获取值的类型。

```typescript
import { getType } from 'is-what-type';

console.log(getType(null)); // 'Null'
console.log(getType(undefined)); // 'Undefined'
console.log(getType(1)); // 'Number'
console.log(getType('string')); // 'String'
console.log(getType(true)); // 'Boolean'
console.log(getType([])); // 'Array'
console.log(getType({})); // 'Object'
console.log(getType(function() {})); // 'Function'
console.log(getType(new Date())); // 'Date'
console.log(getType(new RegExp(''))); // 'RegExp'
console.log(getType(new Error())); // 'Error'
console.log(getType(new Map())); // 'Map'
console.log(getType(new Set())); // 'Set'
console.log(getType(new WeakMap())); // 'WeakMap'
console.log(getType(new WeakSet())); // 'WeakSet'
console.log(getType(new Promise(() => {}))); // 'Promise'
console.log(getType(Symbol())); // 'Symbol'
console.log(getType(new Int8Array())); // 'Int8Array'
console.log(getType(new Uint8Array())); // 'Uint8Array'
console.log(getType(new Uint8ClampedArray())); // 'Uint8ClampedArray'
console.log(getType(new Int16Array())); // 'Int16Array'
console.log(getType(new Uint16Array())); // 'Uint16Array'
console.log(getType(new Int32Array())); // 'Int32Array'
console.log(getType(new Uint32Array())); // 'Uint32Array'
console.log(getType(new Float32Array())); // 'Float32Array'
console.log(getType(new Float64Array())); // 'Float64Array'
console.log(getType(new BigInt64Array())); // 'BigInt64Array'
console.log(getType(new BigUint64Array())); // 'BigUint64Array'
```

### isAbsoluteURL

检查值是否为绝对 URL。

```typescript
import { isAbsoluteURL } from 'is-what-type';

console.log(isAbsoluteURL('https://github.com')); // true
console.log(isAbsoluteURL('/src/index.js')); // false
console.log(isAbsoluteURL('http://example.com')); // true
console.log(isAbsoluteURL('example.com')); // false
```

### isArrayLike

检查值是否为类数组对象。

```typescript
import { isArrayLike } from 'is-what-type';

console.log(isArrayLike('123')); // true
console.log(isArrayLike(() => {})); // false
console.log(isArrayLike([])); // true
console.log(isArrayLike([1, 2, 3])); // true
console.log(isArrayLike({ 0: 1, length: 1 })); // true
```

### isAsyncFunction

检查值是否为异步函数。

```typescript
import { isAsyncFunction } from 'is-what-type';

async function asyncFunction() {}

console.log(isAsyncFunction(asyncFunction)); // true
console.log(isAsyncFunction(() => {})); // false
console.log(isAsyncFunction(function() {})); // false
console.log(isAsyncFunction({})); // false
```

### isESModule

检查值是否为 ES 模块。

```typescript
import { isESModule } from 'is-what-type';

const esModule = { __esModule: true };
const generatorFunction = function*() {};
const generatorObject = generatorFunction();

console.log(isESModule(esModule)); // true
console.log(isESModule(generatorFunction)); // false
console.log(isESModule(generatorObject)); // false
console.log(isESModule({})); // false
```

### isFunction

检查值是否为函数。

```typescript
import { isFunction } from 'is-what-type';

isFunction(async () => { }); // true
isFunction(() => { }); // true
isFunction(123); // false
isFunction('string'); // false
isFunction({}); // false
```

### isError

检查值是否为错误对象。

```typescript
import { isError } from 'is-what-type';

console.log(isError(new Error('error'))); // true
console.log(isError({ name: 'Error' })); // true
console.log(isError('error')); // false
console.log(isError({})); // false
```

### isIterable

检查值是否为可迭代对象。

```typescript
import { isIterable } from 'is-what-type';

console.log(isIterable([])); // true
console.log(isIterable('string')); // true
console.log(isIterable(new Map())); // true
console.log(isIterable({})); // false
console.log(isIterable(null)); // false
console.log(isIterable(undefined)); // false
```

### isLeapYear

检查年份是否为闰年。

```typescript
import { isLeapYear } from 'is-what-type';

console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2004)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2021)); // false
```

### isLength

检查值是否为有效的类数组长度。

```typescript
import { isLength } from 'is-what-type';

console.log(isLength(3)); // true
console.log(isLength(Number.MIN_VALUE)); // false
console.log(isLength(Infinity)); // false
console.log(isLength('3')); // false
```

### isNil

检查值是否为 `null` 或 `undefined`。

```typescript
import { isNil } from 'is-what-type';

console.log(isNil(null)); // true
console.log(isNil(undefined)); // true
console.log(isNil({})); // false
```

### isNumber

检查值是否为数字。

```typescript
import { isNumber } from 'is-what-type';

console.log(isNumber(1)); // true
console.log(isNumber(NaN)); // false
console.log(isNumber('1')); // false
```

### isObject

检查值是否为对象。

```typescript
import { isObject } from 'is-what-type';

console.log(isObject({})); // true
console.log(isObject([])); // true
console.log(isObject(null)); // false
console.log(isObject(1)); // false
```

### isPlainObject

检查值是否为普通对象。

```typescript
import { isPlainObject } from 'is-what-type';

console.log(isPlainObject({})); // true
console.log(isPlainObject(new Date())); // false
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false
console.log(isPlainObject(undefined)); // false
```

### isPromiseLike

检查值是否为类似 Promise 的对象。

```typescript
import { isPromiseLike } from 'is-what-type';

console.log(isPromiseLike(new Promise(() => {}))); // true
console.log(isPromiseLike({ then: () => {} })); // true
console.log(isPromiseLike({ then: 'not a function' })); // false
console.log(isPromiseLike({})); // false
```

### isValidDate

检查值是否为有效日期。

```typescript
import { isValidDate } from 'is-what-type';

console.log(isValidDate(new Date())); // true
console.log(isValidDate(new Date('invalid'))); // false
console.log(isValidDate('2023-10-01')); // false
```