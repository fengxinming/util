# isPromiseLike

> Check if the value is a Promise-like object.

## Example

```js
import { isPromiseLike } from 'is-what-type';

isPromiseLike(null); // false
isPromiseLike(undefined); // false
isPromiseLike({}); // false
isPromiseLike(new Promise(() => { })); // true
isPromiseLike({ then: () => { }, catch: () => { } }); // true
isPromiseLike({ then: () => { } }); // true
isPromiseLike({ catch: () => { } }); // false
isPromiseLike('string'); // false
isPromiseLike(123); // false
isPromiseLike(function() {}); // false
```
