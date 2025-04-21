# **decamelize**

## **Introduction**
`decamelize` is a utility function that converts camelCase, PascalCase, or strings with consecutive uppercase letters into a specified delimiter format (default underscore), with support for preserving consecutive uppercase letters.

---

## **Usage Examples**
```javascript
import { decamelize } from 'camel-kit';

// Basic usage
console.log(decamelize('snakeCaseExample')); // Output: snake_case_example
console.log(decamelize('PascalCaseInput')); // Output: pascal_case_input

// Configuration options
console.log(decamelize('helloWorld', { separator: '-' })); // Output: hello-world
console.log(decamelize('FOOBar', { preserveConsecutiveUppercase: true })); // Output: FOO_Bar
```

---

## **API Interface**
### `decamelize(text: string, options?: DecamelizeOptions): string`

#### Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | `string` | Input string to be converted |
| `options` | `DecamelizeOptions` (optional) | Configuration object for conversion behavior |

#### Return Value
The converted string with the specified delimiter (default underscore).

---

## **Configuration Options (`DecamelizeOptions`)**
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `separator` | `string` | `'_'` | Delimiter (e.g., `'-'`, `'.'`, etc.) |
| `preserveConsecutiveUppercase` | `boolean` | `false` | Preserve consecutive uppercase letters (e.g., `FOOBar` → `FOO_Bar`) |

---

## **Core Functionality**
1. **Basic Conversion Logic**:
   - Converts camelCase/PascalCase to `lower_case` format.
   - Supports custom delimiters (e.g., `kebab-case`, `dot.case`).

2. **Preserve Consecutive Uppercase**:
   - When `preserveConsecutiveUppercase` is `true`:
     - `FOOBar` → `FOO_Bar` (preserves `FOO` consecutive uppercase)
     - `HTTPResponse` → `HTTP_Response` (preserves `HTTP` consecutive uppercase)

3. **Unicode Support**:
   - Uses Unicode regex to handle multilingual characters (e.g., Greek letters, Japanese).

4. **Error Handling**:
   - Throws a `TypeError` if the input is not a string.

---

## **Conversion Workflow**
1. **Basic Splitting**:
   ```regex
   /([\p{Ll}\d])(\p{Lu})/gu → Converts `camelCase` → `camel_Case`
   ```
2. **Consecutive Uppercase Handling** (when `preserveConsecutiveUppercase` is enabled):
   ```regex
   /(\p{Lu}+)(\p{Lu}\p{Ll}+)/gu → Converts `FOOBar` → `FOO_Bar`
   ```
3. **Final Normalization**:
   - Converts all letters to lowercase (unless consecutive uppercase is preserved).

---

## **Notes**
- **Delimiter Conflicts**: Avoid using existing delimiters in the input (e.g., `hello_world` with `separator='_'` will not re-split).
- **Numeric Handling**: Number-letter combinations are preserved directly (e.g., `item20` → `item20`).
- **Edge Cases**:
  - Empty strings or single-character inputs return the original value (or lowercase).
