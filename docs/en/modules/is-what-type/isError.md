# isError

> Check if the value is an Error object

## Example

```js
import { isError } from 'is-what-type';

isError(new Error()); // true
isError(new TypeError()); // true
isError({}); // false
isError({ name: 'CustomError' }); // true
isError({ name: 'NotAnError' }); // false
isError(null); // false
isError(undefined); // false
isError('string'); // false
isError(123); // false
```
