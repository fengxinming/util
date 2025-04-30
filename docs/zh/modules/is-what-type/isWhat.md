# isWhat

> 校验是否是想要的类型

## 示例

```js
import { isWhat } from 'is-what-type';

const value: string | number | boolean | null | undefined | symbol | bigint = null;
   const whatType = typeof value;

   if (isWhat<object>(value, whatType, 'object')) {
     Object.keys(value); // Throws TypeError: Cannot convert undefined or null to object
   }
```
