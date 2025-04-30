# isFunction

> 校验是否为函数

## 示例

```js
import { isAsyncFunction } from 'is-what-type';

isFunction(async () => { }); // true
isFunction(() => { }); // true
isFunction(function() { }); // true
isFunction(async function() { }); // true
isFunction(123); // false
isFunction('string'); // false
isFunction({}); // false
```
