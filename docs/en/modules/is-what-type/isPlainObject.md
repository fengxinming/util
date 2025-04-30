# isPlainObject

> Check if the value is a plain object

## Example

```js
import { isPlainObject } from 'is-what-type';

isPlainObject({}); // true
isPlainObject({ key: 'value' }); // true
isPlainObject([]); // false
isPlainObject(null); // false
isPlainObject(undefined); // false
isPlainObject(function() {}); // false
isPlainObject(new Date()); // false
isPlainObject(new (class {})()); // false

function Fn() {}
isPlainObject(new Fn()); // false
```
