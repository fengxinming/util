# **camelize**

## **Introduction**
`camelize` is a utility function that converts strings or string arrays into camelCase format, supporting multiple configuration options and localization.

---

## **Usage Examples**
```javascript
import { camelize } from 'camel-kit';

// Basic usage
console.log(camelize('snake_case_example')); // Output: snakeCaseExample
console.log(camelize('PascalCaseInput')); // Output: pascalCaseInput

// Configuration options
console.log(camelize('hello_world', { pascalCase: true })); // Output: HelloWorld
console.log(camelize('FOO_BAR', { preserveConsecutiveUppercase: true })); // Output: fooBAR
```

---

## **API Interface**
### `camelize(input: string | string[], options?: CamelizeOptions): string`

#### Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `string` or `string[]` | The input string or string array to be converted |
| `options` | `CamelizeOptions` (optional) | Configuration object for conversion behavior |

#### Return Value
The converted camelCase string.

---

## **Configuration Options (`CamelizeOptions`)**
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `pascalCase` | `boolean` | `false` | Convert to PascalCase (uppercase first letter, e.g., `HelloWorld`) |
| `preserveConsecutiveUppercase` | `boolean` | `false` | Preserve consecutive uppercase letters (e.g., `FOOBar` → `fooBAR`) |
| `locale` | `string` / `string[]` / `boolean` | `false` | Localization settings (disabled when set to `false`) |

---

## **Core Functionality**
1. **Input Handling**:
   - Supports string or string array input (arrays are joined with `-` before conversion).
   - Automatically removes leading/trailing delimiters (e.g., `_`, `-`, ` `).

2. **Advanced Conversion Logic**:
   - **Preserve consecutive uppercase**: When `preserveConsecutiveUppercase` is `true`, e.g., `FOOBar` → `fooBAR`.
   - **Localization support**: Specify a locale via the `locale` parameter (e.g., `'zh-CN'`).

3. **Error Handling**:
   - Throws a `TypeError` if the input type is invalid (not a string or string array).

---

## **Notes**
- **Delimiter handling**: Automatically recognizes delimiters like `_`, `-`, `.`, and ` `.
- **Numeric handling**: Numbers combined with letters will be capitalized based on context (e.g., `item_20` → `item20`).
