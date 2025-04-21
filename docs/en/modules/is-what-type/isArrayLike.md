# isArrayLike

> Check if the value is array-like

## Example

```js
import { isArrayLike } from 'is-what-type';

isArrayLike([1, 2, 3]); // true
isArrayLike('hello'); // true
isArrayLike({ length: 3, 0: 'a', 1: 'b', 2: 'c' }); // true
isArrayLike(function() {}); // false
isArrayLike(null); // false
isArrayLike(undefined); // false
isArrayLike({}); // false
```
