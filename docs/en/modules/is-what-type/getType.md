# getType

> Get type of value

## Example

```js
import { getType } from 'is-what-type';

getType(null) // => 'Null'
getType(undefined) // => 'Undefined'
getType(1) // => 'Number'
getType('') // => 'String'
getType(true) // => 'Boolean'
getType([]) // => 'Array'
getType({}) // => 'Object'
getType(function() {}) // => 'Function'
getType(new Date()) // => 'Date'
getType(new RegExp()) // => 'RegExp'
getType(new Error()) // => 'Error'
getType(new Map()) // => 'Map'
getType(new Set()) // => 'Set'
getType(new WeakMap()) // => 'WeakMap'
getType(new WeakSet()) // => 'WeakSet'
getType(new Promise(() => {})) // => 'Promise'
getType(Symbol()) // => 'Symbol'
getType(new Int8Array()) // => 'Int8Array'
getType(new Uint8Array()) // => 'Uint8Array'
getType(new Uint8ClampedArray()) // => 'Uint8ClampedArray'
getType(new Int16Array()) // => 'Int16Array'
getType(new Uint16Array()) // => 'Uint16Array'
getType(new Int32Array()) // => 'Int32Array'
getType(new Uint32Array()) // => 'Uint32Array'
getType(new Float32Array()) // => 'Float32Array'
getType(new Float64Array()) // => 'Float64Array'
getType(new BigInt64Array()) // => 'BigInt64Array'
getType(new BigUint64Array()) // => 'BigUint64Array'
```
