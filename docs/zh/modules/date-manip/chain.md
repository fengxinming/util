# chain

## 概述
`chain()` 是一个提供流畅（fluent）API 的日期操作类，封装了 `date-manip` 库的核心功能，支持链式调用和直观的日期操作。

## 快速上手
```typescript
import { chain } from 'date-manip';

// 创建日期链实例
const now = chain(new Date());
const tomorrow = now.addDays(1);
console.log(tomorrow.format('YYYY-MM-DD')); // 输出：下一天的日期
```

## 核心功能
### 1. 链式操作
```typescript
chain(new Date())
  .addMonths(2)
  .set('date', 15)
  .format('YYYY-MM-DD HH:mm:ss');
```

### 2. 时间单位操作
支持增减年、月、日、时、分、秒、毫秒等：
```typescript
chain('2023-01-01')
  .addYears(1)       // 2024-01-01
  .addMonths(3)      // 2024-04-01
  .addDays(5)        // 2024-04-06
  .addHours(8);      // 时间增加8小时
```

### 3. 时间比较
```typescript
const date1 = chain('2023-01-01');
const date2 = chain('2023-01-02');

date1.isBefore(date2); // true
date1.isSameOrAfter(date2); // false
```

## API 参考

### 类方法
#### `chain(input: ChainInput | IDateChain, format?: string): IDateChain`
创建一个新的 `DateChain` 实例。

**参数**：
- `input`：日期来源（`Date`、`string`、`number` 或另一个 `DateChain` 实例）
- `format`（可选）：输入字符串的日期格式（如 `'YYYY-MM-DD'`）

### 属性与方法列表
#### **日期增减操作**
| 方法名               | 描述                                                                 |
|----------------------|----------------------------------------------------------------------|
| `add(unit: Unit, val)` | 增加任意时间单位（如 `'year'`、`'month'`）                         |
| `addDays(val: number)` | 增加天数                                                             |
| `addHours(val: number)`| 增加小时                                                             |
| `addMilliseconds(val: number)` | 增加毫秒                                                           |
| `addMinutes(val: number)` | 增加分钟                                                           |
| `addMonths(val: number)` | 增加月份                                                           |
| `addYears(val: number)` | 增加年份                                                           |
| `subtract(unit: Unit, val)` | 减少任意时间单位                                                 |
| `subDays(val: number)` | 减少天数                                                             |
| `subHours(val: number)` | 减少小时                                                             |
| `subMilliseconds(val: number)` | 减少毫秒                                                           |
| `subMinutes(val: number)` | 减少分钟                                                           |
| `subMonths(val: number)` | 减少月份                                                           |
| `subYears(val: number)` | 减少年份                                                           |

#### **日期获取与设置**
| 方法名               | 描述                                                                 |
|----------------------|----------------------------------------------------------------------|
| `year([val: number])` | 获取/设置年份                                                        |
| `month([val: number])` | 获取/设置月份（0-11）                                               |
| `date([val: number])` | 获取/设置日期                                                        |
| `hour([val: number])` | 获取/设置小时                                                        |
| `minute([val: number])` | 获取/设置分钟                                                        |
| `second([val: number])` | 获取/设置秒                                                          |
| `millisecond([val: number])` | 获取/设置毫秒                                                      |
| `time()` | 获取时间戳（毫秒）                                                     |

#### **日期比较**
| 方法名               | 描述                                                                 |
|----------------------|----------------------------------------------------------------------|
| `isAfter(date: DateInput)` | 判断是否晚于某个日期                                                 |
| `isBefore(date: DateInput)` | 判断是否早于某个日期                                                 |
| `isSame(date: DateInput)` | 判断是否与某个日期相等                                               |
| `isSameOrAfter(date: DateInput)` | 判断是否等于或晚于某个日期                                         |
| `isSameOrBefore(date: DateInput)` | 判断是否等于或早于某个日期                                         |
| `isBetween(start: DateInput, end: DateInput)` | 判断是否在两个日期之间                                             |
| `isValid()` | 检查日期是否有效（非 `Invalid Date`）                                       |

#### **日期格式化与转换**
| 方法名               | 描述                                                                 |
|----------------------|----------------------------------------------------------------------|
| `format(pattern: string)` | 格式化日期为字符串（如 `'YYYY-MM-DD HH:mm:ss'`）                     |
| `toISOString()` | 转换为 ISO 8601 格式字符串                                             |
| `toDate()` | 转换为原生 `Date` 对象                                                     |
| `clone()` | 创建当前日期的副本                                                           |

#### **日期范围操作**
| 方法名               | 描述                                                                 |
|----------------------|----------------------------------------------------------------------|
| `startOf(unit: Unit)` | 将日期设置为指定时间单位的开始（如 `startOf('day')` 设置为当天 00:00） |
| `endOf(unit: Unit)` | 将日期设置为指定时间单位的结束（如 `endOf('month')` 设置为月末 23:59:59） |
| `diff(date: DateInput, unit?: Unit)` | 计算与另一个日期的差异（返回数值，可指定单位）                 |
| `diffInDays()` | 计算与另一个日期的天数差异                                             |
| `diffInMonths()` | 计算与另一个日期的月份差异                                           |
| `diffInYears()` | 计算与另一个日期的年份差异                                           |

#### **其他实用方法**
| 方法名               | 描述                                                                 |
|----------------------|----------------------------------------------------------------------|
| `dayOfYear()` | 获取一年中的第几天（1-366）                                             |
| `daysInMonth()` | 获取当前月份的天数（如 28-31）                                         |
| `isLeapYear()` | 判断是否为闰年                                                         |
| `toArray()` | 转换为 `[year, month, date, hours, minutes, seconds, milliseconds]` 数组      |

## 使用示例
### 示例 1：日期增减与格式化
```typescript
const date = chain('2023-01-01');
const result = date
  .addMonths(2)       // 2023-03-01
  .addDays(5)         // 2023-03-06
  .format('YYYY-MM-DD');
console.log(result); // 输出：2023-03-06
```

### 示例 2：时间比较
```typescript
const dateA = chain('2023-01-01');
const dateB = chain('2023-01-02');

dateA.isBefore(dateB); // true
dateB.isAfter(dateA);  // true
```

### 示例 3：获取时间值
```typescript
const now = chain();
console.log(now.year());     // 当前年份
console.log(now.hour());     // 当前小时
```

### 示例 4：日期差异计算
```typescript
const start = chain('2023-01-01');
const end = chain('2023-01-10');
console.log(end.diffInDays(start)); // 输出：9
```

### 示例 5：日期范围操作
```typescript
const date = chain('2023-01-15');
date.startOf('month'); // 2023-01-01 00:00:00
date.endOf('month');   // 2023-01-31 23:59:59.999
```
