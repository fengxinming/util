# **Properties**

## **概述**
`Properties` 类继承自 `Map<string, string>`，提供 Java Properties 文件的解析、序列化和高级配置管理功能，支持变量替换、Unicode 处理和注释保留。

---

## **构造函数**
```typescript
new Properties(config: PropertiesConfig = {})
```

**参数**：
| 参数名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| `defaults` | `Properties \| Map<string, string> \| null` | 默认配置值 | `null` |
| `variableRegex` | `RegExp \| null` | 变量占位符正则表达式（如 `/\$\{\s*([^}]+)\s*\}/g`） | `/\$\{\s*([^}]+)\s*\}/g` |
| `lineFeed` | `string` | 序列化时的换行符 | `'\n'` |
| `separators` | `string[]` | 键值对分隔符（如 `['=', ':']`） | `['=', ':']` |
| `commentPrefixes` | `string[]` | 注释前缀（如 `['#', '!']`） | `['#', '!']` |
| `props` | `Map<string, string>` | 初始键值对集合 | - |
| `raw` | `Map<string, string>` | 原始数据存储（如注释类型） | - |

---

## **核心方法**

### **`setProperty(key: string, value: string): this`**
- **功能**：设置键值对，并标记为新属性。
- **返回**：当前实例（`this`）。

### **`getProperty<T = string>(key: string, defaultValue?: T): string \| undefined \| T`**
- **功能**：获取键值，支持从默认值继承和变量替换。
- **参数**：
  - `key`：键名。
  - `defaultValue`：默认值（可选）。
- **返回**：值或默认值，若未找到则返回 `undefined`。
- **变量替换**：若值包含 `${variable}`，会用当前键值替换。

### **`getNumber(key: string, defaultValue?: number): number`**
- **功能**：将值转换为数字，转换失败返回 `NaN` 或默认值。

### **`getBoolean(key: string, defaultValue?: boolean): boolean`**
- **功能**：将值转换为布尔值。支持 `falseLike` 判断（如空字符串、`null` 等视为 `false`）。

### **`parse(content: string, clear?: boolean): void`**
- **功能**：解析配置内容，填充 `props` 和 `raw` 数据。
- **参数**：
  - `content`：要解析的配置内容。
  - `clear`：是否清空现有数据（默认 `false`）。

### **`stringify(comments?: string, escapeUnicode?: boolean): string`**
- **功能**：将配置序列化为字符串，支持保留注释和 Unicode 转义。
- **参数**：
  - `comments`：附加到开头的注释（可选）。
  - `escapeUnicode`：是否转义 Unicode（默认 `true`）。

---

## **其他方法**

### **键值操作**
| 方法名 | 功能 | 返回类型 | **状态** |
|--------|------|---------|----------|
| `get(key: string)` | 获取键值对（继承自 `Map`） | `string \| undefined` | **已废弃**，建议使用 `getProperty()` |
| `set(key: string, value: string)` | 设置键值对（继承自 `Map`） | `this` | **已废弃**，建议使用 `setProperty()` |
| `delete(key: string)` | 删除键值对 | `boolean` | - |
| `has(key: string)` | 检查键是否存在 | `boolean` | - |
| `clear()` | 清空所有键值对 | `void` | - |

### **扩展功能**
| 方法名 | 功能 | 返回类型 |
|--------|------|---------|
| `remove(key: string, specifiedValue?: string)` | 删除键值对（可指定值匹配） | `boolean` |
| `isEmpty()` | 判断是否为空 | `boolean` |
| `replace(key: string, oldValue: string, newValue?: string)` | 替换键值 | `boolean` |
| `clone(): Properties` | 创建浅拷贝实例 | `Properties` |

---

## **迭代与遍历**
- **`[Symbol.iterator](): MapIterator<[string, string]>`**  
  实现迭代器接口，遍历键值对。
- **`entries(): MapIterator<[string, string]>`**  
  返回键值对迭代器。
- **`forEach(callback: (value: string, key: string, map: this) => void, thisArg?: any): void`**  
  遍历键值对并执行回调。

---

## **属性**
| 属性名 | 类型 | 说明 |
|--------|------|------|
| `raw` | `Map<string, string>` | 存储原始数据（如注释类型） |
| `options` | `Required<PropertiesOptions>` | 配置选项（包含默认值） |

---

## **接口定义**
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

## **注意事项**
1. **废弃方法**  
   - `get` 和 `set` 方法已废弃，建议使用 `getProperty()` 和 `setProperty()` 替代。
2. **变量替换**  
   使用 `variableRegex` 定义变量占位符（如 `${variable}`），值会自动替换为当前键值。
3. **注释保留**  
   解析时会保留以 `commentPrefixes` 开头的注释，并可通过 `stringify` 生成时保留。
4. **类型安全**  
   所有值均存储为字符串，需通过 `getNumber`/`getBoolean` 显式转换。
5. **Unicode 支持**  
   `\uxxxx` 格式会被自动解码（如 `\u0041` → `A`）。

---

## **示例**
```typescript
const props = new Properties();
props.parse(`
  name = Alice
  age = 30
  enabled = true
`);

// 基础用法（推荐新方法）
console.log(props.getProperty('name')); // "Alice"
console.log(props.getNumber('age')); // 30
console.log(props.getBoolean('enabled')); // true

// 变量替换
props.setProperty('username', 'bob');
props.parse('greeting = Hello ${username}');
console.log(props.getProperty('greeting')); // "Hello bob"

// 清空并重新解析
props.parse('new_key=new_value', true); // 清空后解析新内容
```

---

## **继承关系**
继承自 `Map<string, string>`，支持以下原生方法：
- `size`: 返回键值对数量。
- `keys()`: 返回键的迭代器。
- `values()`: 返回值的迭代器。
- `get(key)`: 获取值（已废弃，建议使用 `getProperty()`）。
- `set(key, value)`: 设置键值对（已废弃，建议使用 `setProperty()`）。
- `delete(key)`: 删除键值对。
- `has(key)`: 检查键是否存在。

---

## **异常场景**
| 错误类型 | 触发条件 |
|----------|----------|
| `TypeError` | 在 `stringify` 中使用无效的 Unicode 编码（如 `\u1`） |
| `Error` | 解析时出现多个分隔符（如 `key:=value`） |

---

### **弃用通知**
- **`get` 和 `set` 方法** 已标记为废弃。  
  **迁移建议**：  
  ```typescript
  // 旧写法（已废弃）
  props.set('key', 'value');
  const value = props.get('key');

  // 新写法
  props.setProperty('key', 'value');
  const value = props.getProperty('key');
  ```
