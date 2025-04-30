# isObject

> 校验是否是一个对象

## 示例

```js
import { isObject } from 'is-what-type';

isObject(1); // false
isObject(undefined); // false
isObject({}); // true
isObject([]); // true
isObject(null); // false
isObject(function() {}); // true
isObject(new Date()); // true
isObject('string'); // false
isObject(true); // false
isObject(false); // false
isObject(NaN); // false
isObject(Infinity); // false
```
