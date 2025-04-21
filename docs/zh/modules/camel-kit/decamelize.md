# **decamelize**

## **介绍**
`decamelize` 是一个将驼峰式（camelCase）、帕斯卡式（PascalCase）或连续大写字符串转换为指定分隔符格式（默认下划线）的工具函数，支持保留连续大写字母的特殊处理。

---

## **使用示例**
```javascript
import { decamelize } from 'camel-kit';

// 基础用法
console.log(decamelize('snakeCaseExample')); // 输出: snake_case_example
console.log(decamelize('PascalCaseInput')); // 输出: pascal_case_input

// 配置选项
console.log(decamelize('helloWorld', { separator: '-' })); // 输出: hello-world
console.log(decamelize('FOOBar', { preserveConsecutiveUppercase: true })); // 输出: FOO_Bar
```

---

## **API 接口**
### `decamelize(text: string, options?: DecamelizeOptions): string`

#### 参数
| 参数名 | 类型 | 说明 |
|--------|------|------|
| `text` | `string` | 需要转换的输入字符串 |
| `options` | `DecamelizeOptions`（可选） | 配置转换行为的选项对象 |

#### 返回值
转换后的分隔符格式字符串（默认下划线）。

---

## **配置选项（`DecamelizeOptions`）**
| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `separator` | `string` | `'_'` | 分隔符（如 `'-'`、`'.'` 等） |
| `preserveConsecutiveUppercase` | `boolean` | `false` | 是否保留连续大写字母（如 `FOOBar` → `FOO_Bar`） |

---

## **核心功能说明**
1. **基础转换逻辑**：
   - 将驼峰式（`camelCase`）或帕斯卡式（`PascalCase`）转换为 `lower_case` 格式。
   - 支持自定义分隔符（如 `kebab-case`、`dot.case` 等）。

2. **连续大写保留**：
   - 当 `preserveConsecutiveUppercase` 为 `true` 时：
     - `FOOBar` → `FOO_Bar`（保留 `FOO` 连续大写）
     - `HTTPResponse` → `HTTP_Response`（保留 `HTTP` 连续大写）

3. **Unicode 支持**：
   - 使用 Unicode 正则表达式处理多语言字符（如支持希腊字母、日文等）。

4. **错误处理**：
   - 若输入类型不合法（非字符串），会抛出 `TypeError`。

---

## **转换流程详解**
1. **基础拆分**：
   ```regex
   /([\p{Ll}\d])(\p{Lu})/gu → 将 `camelCase` 转为 `camel_Case`
   ```
2. **连续大写处理**（当启用 `preserveConsecutiveUppercase`）：
   ```regex
   /(\p{Lu}+)(\p{Lu}\p{Ll}+)/gu → 将 `FOOBar` 转为 `FOO_Bar`
   ```
3. **最终标准化**：
   - 将所有字母转为小写（除非保留连续大写）。

---

## **注意事项**
- **分隔符冲突**：避免使用与输入文本中已存在的分隔符重复（如输入 `hello_world` 且 `separator='_'` 时不会二次拆分）。
- **数字处理**：数字与字母的组合会直接保留（如 `item20` → `item20`）。
- **极端输入**：
  - 空字符串或单字符输入会直接返回原值（或转小写）。

