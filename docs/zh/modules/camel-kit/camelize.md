# **camelize**

## **介绍**
`camelize` 是一个用于将字符串或字符串数组转换为驼峰式（camelCase）的工具函数，支持多种配置选项和本地化处理。

---

## **使用示例**
```javascript
import { camelize } from 'camel-kit';

// 基础用法
console.log(camelize('snake_case_example')); // 输出: snakeCaseExample
console.log(camelize('PascalCaseInput')); // 输出: pascalCaseInput

// 配置选项
console.log(camelize('hello_world', { pascalCase: true })); // 输出: HelloWorld
console.log(camelize('FOO_BAR', { preserveConsecutiveUppercase: true })); // 输出: fooBAR
```

---

## **API 接口**
### `camelize(input: string | string[], options?: CamelizeOptions): string`

#### 参数
| 参数名 | 类型 | 说明 |
|--------|------|------|
| `input` | `string` 或 `string[]` | 需要转换的输入字符串或字符串数组 |
| `options` | `CamelizeOptions`（可选） | 配置转换行为的选项对象 |

#### 返回值
转换后的驼峰式字符串。

---

## **配置选项（`CamelizeOptions`）**
| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `pascalCase` | `boolean` | `false` | 是否转为帕斯卡式（首字母大写，如 `HelloWorld`） |
| `preserveConsecutiveUppercase` | `boolean` | `false` | 是否保留连续大写字母（如 `FOOBar` → `fooBar` 转换为 `fooBAR`） |
| `locale` | `string` / `string[]` / `boolean` | `false` | 本地化设置（设为 `false` 时禁用本地化） |

---

## **核心功能说明**
1. **输入处理**：
   - 支持字符串或字符串数组输入（数组会用 `-` 连接后再转换）。
   - 自动去除首尾分隔符（如 `_`, `-`, ` `）。

2. **高级转换逻辑**：
   - **保留连续大写**：当 `preserveConsecutiveUppercase` 为 `true` 时，如 `FOOBar` → `fooBAR`。
   - **本地化支持**：通过 `locale` 参数指定语言环境（如 `'zh-CN'`）。

3. **错误处理**：
   - 若输入类型不合法（非字符串/字符串数组），会抛出 `TypeError`。

---

## **注意事项**
- **分隔符处理**：支持 `_`, `-`, `.`, ` ` 等分隔符的自动识别。
- **数字处理**：数字与字母的组合会根据上下文决定是否首字母大写（如 `item_20` → `item20`）。

