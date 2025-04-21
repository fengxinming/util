# isNumber

> Check if the value is a number

## Example

```js
import { isNumber } from 'is-what-type';

isNumber(1); // true
isNumber(0); // true
isNumber(-1); // true
isNumber(3.14); // true
isNumber(NaN); // false
isNumber(Infinity); // true
isNumber(-Infinity); // true
isNumber({}); // false
isNumber('1'); // false
isNumber(null); // false
isNumber(undefined); // false
isNumber(function() {}); // false
```
