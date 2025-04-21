# isAsyncFunction

> Check if value is an async function

## Example

```ts
export type AsyncFunction<Args extends any[] = any[], Result = void> = (
  ...args: Args
) => Promise<Result>;
```

```js
import { isAsyncFunction } from 'is-what-type';

isAsyncFunction(async () => { }); // true
isAsyncFunction(() => { }); // false
isAsyncFunction(function() { }); // false
isAsyncFunction(async function() { }); // true
isAsyncFunction(123); // false
isAsyncFunction('string'); // false
isAsyncFunction({}); // false
```
