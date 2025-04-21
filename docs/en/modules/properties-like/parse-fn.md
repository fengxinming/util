# **parse**

## **Overview**
The `parse` function parses text content in the Java Properties format, supporting customizable separators, comment prefixes, and callback functions for separating key-value pairs and comments.

---

## **Interface Definition**
### **`ParseOptions`**
```typescript
export interface ParseOptions {
  separators?: string[]; // Key-value separators, default `['=', ':']`
  commentPrefixes?: string[]; // Comment prefixes, default `['#', '!']`
  onData?: (key: string, value: string, lineno: number) => void; // Callback for key-value pairs
  onComment?: (comment: string, lineno: number) => void; // Callback for comments
}
```

---

## **Function Definition**
```typescript
export function parse(
  input: string,
  options: ParseOptions = {}
): void
```

---

## **Parameters**
| Parameter | Type | Default Value | Description |
|-----------|------|---------------|-------------|
| `input` | `string` | - | Configuration content to parse |
| `options` | `ParseOptions` | `{}` | Parsing configuration options |

---

## **Options**
| Option | Default Value | Description |
|--------|---------------|-------------|
| `separators` | `['=', ':']` | Supported key-value separators (e.g., `key=value` or `key: value`) |
| `commentPrefixes` | `['#', '!']` | Comment line prefixes (e.g., `# comment` or `! note`) |
| `onData` | `noop` | Callback for handling key-value pairs (parameters: key, value, line number) |
| `onComment` | `noop` | Callback for handling comments (parameters: comment text, line number) |

---

## **Functionality**

### **Parsing Process**
1. **Character-by-character parsing**: Processes input line-by-line:
   - **Comment lines**: Trigger `onComment` if prefixed with `commentPrefixes`.
   - **Key-value pairs**: Split using `separators`, handling escaped characters (e.g., `\=` denotes a literal separator).
   - **Unicode escapes**: Supports `\uxxxx` format (e.g., `\u0041` → `A`).

2. **Special Character Handling**:
   - **Escape character (`\`)**: Escapes separators (e.g., `key\=value` represents the key `key=`).
   - **Whitespace**: `WHITE_SPACE` (space, tab, form feed) is ignored by default.
   - **Line breaks**: `\r` and `\n` denote newlines, automatically handling `\r\n` combinations.

---

### **Error Handling**
- **Multiple separators error**: Throws an `Error` if multiple separators appear in a single line.
- **Unicode decoding error**: Throws a `TypeError` for malformed `\uxxxx` sequences.

---

## **Usage Example**
```typescript
parse('key=value\n# comment', {
  onData(key, value, lineno) {
    console.log(`Line ${lineno}: ${key} = ${value}`);
  },
  onComment(comment, lineno) {
    console.log(`Line ${lineno}: COMMENT: ${comment}`);
  }
});
// Output:
// Line 1: key = value
// Line 2: COMMENT: # comment
```

---

## **Notes**
1. **Escaping Rules**  
   - `\` escapes separators (e.g., `key\=value` represents the key `key=`).
   - Escaped characters like `\n`, `\t` are automatically decoded.
2. **Unicode Support**  
   - `\uxxxx` sequences are converted to their corresponding characters (e.g., `\u0041` → `A`).
3. **Blank Lines**  
   - Ignored and do not trigger `onData` or `onComment`.

---

## **Error Scenarios**
| Error Type | Trigger Condition |
|------------|-------------------|
| `Error` | Multiple separators in a line (e.g., `key:=value`). |
| `TypeError` | Invalid `\uxxxx` format (e.g., `\u1` or `\uG123`). |
