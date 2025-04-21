# **Properties**

## **Overview**
The `Properties` class extends `Map<string, string>` and provides functionality for parsing, serializing, and managing Java Properties files. It supports variable interpolation, Unicode handling, and comment preservation.

---

## **Constructor**
```typescript
new Properties(config: PropertiesConfig = {})
```

**Parameters**:
| Parameter | Type | Description | Default Value |
|-----------|------|-------------|---------------|
| `defaults` | `Properties \| Map<string, string> \| null` | Default configuration values | `null` |
| `variableRegex` | `RegExp \| null` | Placeholder regex for variables (e.g., `/\$\{\s*([^}]+)\s*\}/g`) | `/\$\{\s*([^}]+)\s*\}/g` |
| `lineFeed` | `string` | Line feed character for serialization | `'\n'` |
| `separators` | `string[]` | Key-value pair separators (e.g., `['=', ':']`) | `['=', ':']` |
| `commentPrefixes` | `string[]` | Comment prefixes (e.g., `['#', '!']`) | `['#', '!']` |
| `props` | `Map<string, string>` | Initial key-value pairs | - |
| `raw` | `Map<string, string>` | Raw data storage (e.g., comment types) | - |

---

## **Core Methods**

### **`setProperty(key: string, value: string): this`**
- **Functionality**: Sets a key-value pair and marks it as a new property.
- **Returns**: The current instance (`this`).

### **`getProperty<T = string>(key: string, defaultValue?: T): string \| undefined \| T`**
- **Functionality**: Retrieves a value with inheritance from defaults and variable interpolation.
- **Parameters**:
  - `key`: Key name.
  - `defaultValue`: Default value (optional).
- **Returns**: The value or default value, `undefined` if not found.
- **Variable Interpolation**: Replaces `${variable}` placeholders with current values.

### **`getNumber(key: string, defaultValue?: number): number`**
- **Functionality**: Converts a value to a number. Returns `NaN` or the default value if parsing fails.

### **`getBoolean(key: string, defaultValue?: boolean): boolean`**
- **Functionality**: Converts a value to a boolean. Treats falsy values (e.g., empty strings, `null`) as `false`.

### **`parse(content: string, clear?: boolean): void`**
- **Functionality**: Parses configuration content and populates `props` and `raw` data.
- **Parameters**:
  - `content`: Configuration content to parse.
  - `clear`: Whether to clear existing data (default: `false`).

### **`stringify(comments?: string, escapeUnicode?: boolean): string`**
- **Functionality**: Serializes configuration to a string, preserving comments and Unicode escapes.
- **Parameters**:
  - `comments`: Comments to prepend (optional).
  - `escapeUnicode`: Whether to escape Unicode (default: `true`).

---

## **Additional Methods**

### **Key-Value Operations**
| Method | Functionality | Return Type | **Deprecated** |
|--------|---------------|-------------|----------------|
| `set(key: string, value: string)` | Sets a key-value pair (inherited from `Map`) | `this` | **Yes** – Use `setProperty()` instead |
| `get(key: string)` | Retrieves a value (inherited from `Map`) | `string \| undefined` | **Yes** – Use `getProperty()` instead |
| `delete(key: string)` | Removes a key-value pair | `boolean` | - |
| `has(key: string)` | Checks if a key exists | `boolean` | - |
| `clear()` | Clears all entries | `void` | - |

### **Extended Features**
| Method | Functionality | Return Type |
|--------|---------------|-------------|
| `remove(key: string, specifiedValue?: string)` | Removes a key-value pair (optionally by value) | `boolean` |
| `isEmpty()` | Checks if the map is empty | `boolean` |
| `replace(key: string, oldValue: string, newValue?: string)` | Replaces a value | `boolean` |
| `clone(): Properties` | Creates a shallow copy | `Properties` |

---

## **Iteration & Traversal**
- **`[Symbol.iterator](): MapIterator<[string, string]>`**  
  Implements iterator interface to traverse entries.
- **`entries(): MapIterator<[string, string]>`**  
  Returns an iterator for key-value pairs.
- **`forEach(callback: (value: string, key: string, map: this) => void, thisArg?: any): void`**  
  Iterates over entries and executes a callback.

---

## **Properties**
| Property | Type | Description |
|----------|------|-------------|
| `raw` | `Map<string, string>` | Stores raw data (e.g., comment types) |
| `options` | `Required<PropertiesOptions>` | Configuration options with defaults |

---

## **Type Definitions**
### **`PropertiesOptions`**
```typescript
interface PropertiesOptions {
  defaults?: Properties | Map<string, string> | null;
  variableRegex?: RegExp | null;
  lineFeed?: string;
  separators?: string[];
  commentPrefixes?: string[];
}
```

### **`PropertiesConfig`**
```typescript
interface PropertiesConfig extends PropertiesOptions {
  props?: Map<string, string>;
  raw?: Map<string, string>;
}
```

---

## **Notes**
1. **Deprecations**  
   - **`set(key: string, value: string)`** and **`get(key: string)`** are deprecated. Use `setProperty()` and `getProperty()` instead.
2. **Variable Interpolation**  
   Define placeholders using `variableRegex` (e.g., `${variable}`), which are replaced with current values.
3. **Comment Preservation**  
   Comments starting with `commentPrefixes` are retained during parsing and serialization.
4. **Type Safety**  
   All values are stored as strings. Use `getNumber`/`getBoolean` for explicit type conversion.
5. **Unicode Support**  
   `\uxxxx` sequences are automatically decoded (e.g., `\u0041` → `A`).

---

## **Example**
```typescript
const props = new Properties();
props.parse(`
  name = Alice
  age = 30
  enabled = true
`);

// Basic Usage
console.log(props.getProperty('name')); // "Alice"
console.log(props.getNumber('age')); // 30
console.log(props.getBoolean('enabled')); // true

// Variable Interpolation
props.setProperty('username', 'bob');
props.parse('greeting = Hello ${username}');
console.log(props.getProperty('greeting')); // "Hello bob"

// Clear and Re-Parse
props.parse('new_key=new_value', true); // Clears and parses new content
```

---

## **Inheritance**
Extends `Map<string, string>`, supporting native methods:
- `size`: Returns the number of entries.
- `keys()`: Returns an iterator of keys.
- `values()`: Returns an iterator of values.
- `get(key)`: Retrieves a value (use `getProperty()` instead).
- `set(key, value)`: Sets a key-value pair (use `setProperty()` instead).
- `delete(key)`: Removes an entry.
- `has(key)`: Checks key existence.

---

## **Error Scenarios**
| Error Type | Trigger Condition |
|------------|-------------------|
| `TypeError` | Invalid Unicode encoding (e.g., `\u1`) in `stringify` |
| `Error` | Multiple separators in a line (e.g., `key:=value`) |

---

### **Deprecation Notice**
- **`get` and `set` methods** are marked as deprecated.  
  **Migration Recommendations**:  
  ```typescript
  // Old syntax (deprecated)
  props.set('key', 'value');
  const value = props.get('key');

  // New syntax
  props.setProperty('key', 'value');
  const value = props.getProperty('key');
  ```