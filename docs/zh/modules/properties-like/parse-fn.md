# **parse**

## **概述**
`parse` 函数用于解析符合 Java Properties 格式的文本内容，支持自定义分隔符、注释前缀和回调函数，实现键值对与注释的分离处理。

---

## **接口定义**
### **`ParseOptions`**
```typescript
export interface ParseOptions {
  separators?: string[]; // 键值分隔符，默认 `['=', ':']`
  commentPrefixes?: string[]; // 注释前缀，默认 `['#', '!']`
  onData?: (key: string, value: string, lineno: number) => void; // 键值对回调
  onComment?: (comment: string, lineno: number) => void; // 注释回调
}
```

---

## **函数定义**
```typescript
export function parse(
  input: string,
  options: ParseOptions = {}
): void
```

---

## **参数说明**
| 参数名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `input` | `string` | - | 需要解析的配置内容 |
| `options` | `ParseOptions` | `{}` | 解析配置选项 |

---

## **选项参数**
| 参数名 | 默认值 | 说明 |
|--------|--------|------|
| `separators` | `['=', ':']` | 支持的键值分隔符（如 `key=value` 或 `key: value`） |
| `commentPrefixes` | `['#', '!']` | 注释行起始符号（如 `# comment` 或 `! note`） |
| `onData` | `noop` | 处理键值对的回调函数（参数：键、值、行号） |
| `onComment` | `noop` | 处理注释的回调函数（参数：注释内容、行号） |

---

## **功能描述**

### **解析流程**
1. **逐字符解析**：按行解析输入内容，逐字符处理：
   - **注释行**：以 `commentPrefixes` 开头的行触发 `onComment`。
   - **键值对**：通过 `separators` 分割键值，处理转义字符（如 `\=` 表示字面量分隔符）。
   - **Unicode 转义**：支持 `\uxxxx` 格式（如 `\u0041` → `A`）。

2. **特殊字符处理**：
   - **转义符 (`\`)**：可转义分隔符（如 `key\=value` 表示键为 `key=`）。
   - **空白字符**：`WHITE_SPACE`（空格、制表符、换页符）默认忽略。
   - **换行符**：`\r` 和 `\n` 标识换行，自动处理 `\r\n` 组合。

---

### **异常处理**
- **多分隔符错误**：同一行出现多个分隔符时抛出 `Error`。
- **Unicode 解码错误**：无效的 `\uxxxx` 编码时抛出 `TypeError`。

---

## **使用示例**
```typescript
parse('key=value\n# comment', {
  onData(key, value, lineno) {
    console.log(`Line ${lineno}: ${key} = ${value}`);
  },
  onComment(comment, lineno) {
    console.log(`Line ${lineno}: COMMENT: ${comment}`);
  }
});
// 输出：
// Line 1: key = value
// Line 2: COMMENT: # comment
```

---

## **注意事项**
1. **转义规则**  
   - `\` 可转义分隔符（如 `key\=value` 表示键为 `key=`）。
   - `\n`, `\t` 等转义字符会被自动解码。
2. **Unicode 支持**  
   - `\uxxxx` 格式的 Unicode 编码会被转换为对应字符（如 `\u0041` → `A`）。
3. **空行处理**  
   - 空行会被忽略，不会触发 `onData` 或 `onComment`。

---

## **异常场景**
| 错误类型 | 触发条件 |
|----------|----------|
| `Error` | 同一行出现多个分隔符（如 `key:=value`） |
| `TypeError` | `\uxxxx` 编码格式错误（如 `\u1` 或 `\uG123`） |

---

## **返回值**
- **无返回值**（`void`），通过回调函数传递解析结果。
