# API 文档

## add 函数

### 功能描述
向日期添加指定数量的时间单位或包含多个时间单位的对象。

### 参数类型
- `date`: `Date` - 需要添加时间的日期。
- `num`: `number | DateAddingObject` - 要添加的时间单位数量，或一个对象，其中键是时间单位，值是要添加的时间单位数量。
- `unit`: `Unit` - 要添加的时间单位，如 'year'、'month'、'day' 等。如果 `num` 是数字，则此参数是必需的。

### 返回值
- `Date`: 添加时间后的新日期。

### 示例代码
```typescript
import { add } from 'date-manip';

// 添加5天
const newDate1 = add(new Date(), 5, 'day');
console.log(newDate1); // 输出5天后的日期

// 使用对象添加多个时间单位
const newDate2 = add(new Date(), { year: 1, month: 2, day: 3 });
console.log(newDate2); // 输出1年后2个月3天后的日期
```

## addDays 函数

### 功能描述
向日期添加指定数量的天数。

### 参数类型
- `date`: `Date` - 需要添加天数的日期。
- `days`: `number` - 要添加的天数。

### 返回值
- `Date`: 添加天数后的新日期。

### 示例代码
```typescript
import { addDays } from 'date-manip';

const newDate = addDays(new Date(), 5);
console.log(newDate); // 输出5天后的日期
```

## addHours 函数

### 功能描述
向日期添加指定数量的小时。

### 参数类型
- `date`: `Date` - 需要添加小时的日期。
- `hours`: `number` - 要添加的小时数。

### 返回值
- `Date`: 添加小时后的新日期。

### 示例代码
```typescript
import { addHours } from 'date-manip';

const newDate = addHours(new Date('2023-10-01T12:00:00'), 3);
console.log(newDate.toISOString()); // 输出: '2023-10-01T15:00:00.000Z'
```

## addMilliseconds 函数

### 功能描述
向日期添加指定数量的毫秒。

### 参数类型
- `date`: `Date` - 需要添加毫秒的日期。
- `ms`: `number` - 要添加的毫秒数。

### 返回值
- `Date`: 添加毫秒后的新日期。

### 示例代码
```typescript
import { addMilliseconds } from 'date-manip';

const newDate = addMilliseconds(new Date('2023-10-01T12:00:00'), 5000);
console.log(newDate.toISOString()); // 输出: '2023-10-01T12:00:05.000Z'
```

## addMonths 函数

### 功能描述
向日期添加指定数量的月份。

### 参数类型
- `date`: `Date` - 需要添加月份的日期。
- `months`: `number` - 要添加的月份数。

### 返回值
- `Date`: 添加月份后的新日期。

### 示例代码
```typescript
import { addMonths } from 'date-manip';

const newDate = addMonths(new Date('2023-10-31T12:00:00'), 2);
console.log(newDate.toISOString()); // 输出: '2023-12-31T12:00:00.000Z'
```

## addYears 函数

### 功能描述
向日期添加指定数量的年份。

### 参数类型
- `date`: `Date` - 需要添加年份的日期。
- `years`: `number` - 要添加的年份数。

### 返回值
- `Date`: 添加年份后的新日期。

### 示例代码
```typescript
import { addYears } from 'date-manip';

const newDate = addYears(new Date('2023-10-01T12:00:00'), 2);
console.log(newDate.toISOString()); // 输出: '2025-10-01T12:00:00.000Z'
```

## chain 函数

### 功能描述
提供一个流畅的 API 来操作日期。

### 参数类型
- `input`: `ChainInput` - 日期输入，可以是字符串、数字、Date 对象、数字数组或 DateParsingObject。
- `format`: `string` - 可选的格式字符串，指定输入字符串的格式。

### 返回值
- `IDateChain`: 提供流畅 API 的日期操作对象。

### 示例代码
```typescript
import { chain } from 'date-manip';

const date = chain('2023-10-01', 'YYYY-MM-DD')
  .addDays(5)
  .addHours(3)
  .toDate();
console.log(date.toISOString()); // 输出处理后的日期
```

## compile 函数

### 功能描述
编译格式字符串，生成正则表达式和提取的日期部分。

### 参数类型
- `formatString`: `string` - 要编译的格式字符串。

### 返回值
- `CompileResult`: 包含正则表达式模式的编译结果对象，以及提取的日期部分。

### 示例代码
```typescript
import { compile } from 'date-manip';

const result = compile('YYYY-MM-DD HH:mm:ss.SSS');
console.log(result.pattern); // 输出正则表达式模式
console.log(result.tokens); // 输出提取的日期部分
```

## dayOfYear 函数

### 功能描述
获取或设置给定日期的年份中的第几天。

### 参数类型
- `date`: `Date` - 要获取或设置年份中的第几天的日期。
- `val`: `number` - 要设置的年份中的第几天。

### 返回值
- `number | Date`: 如果提供了 `val`，返回更新年份中的第几天的新日期；否则，返回给定日期的年份中的第几天。

### 示例代码
```typescript
import { dayOfYear } from 'date-manip';

// 获取年份中的第几天
const date = new Date('2023-10-01');
const day = dayOfYear(date);
console.log(day); // 输出: 274

// 设置年份中的第几天
const newDate = dayOfYear(new Date('2023-01-01'), 274);
console.log(newDate.toISOString()); // 输出: '2023-10-01T00:00:00.000Z'
```

## daysInMonth 函数

### 功能描述
获取给定日期所在月份的天数。

### 参数类型
- `date`: `Date` - 要获取月份天数的日期。

### 返回值
- `number`: 月份的天数。

### 示例代码
```typescript
import { daysInMonth } from 'date-manip';

// 获取2023年10月的天数
const days = daysInMonth(new Date('2023-10-01'));
console.log(days); // 输出: 31

// 获取2024年2月的天数
const days2 = daysInMonth(new Date('2024-02-01'));
console.log(days2); // 输出: 29
```

## diff 函数

### 功能描述
计算两个日期之间的指定时间单位差异。

### 参数类型
- `date`: `Date` - 第一个日期。
- `input`: `DateInput` - 第二个日期。
- `unit`: `Unit` - 要计算差异的时间单位，如 'year'、'month'、'day' 等。
- `asFloat`: `boolean` - 是否以浮点数形式返回差异。

### 返回值
- `number`: 两个日期之间的指定时间单位差异。

### 示例代码
```typescript
import { diff } from 'date-manip';

// 计算年份差异
const yearsDiff = diff(new Date('2023-01-01'), new Date('2024-01-01'), 'year');
console.log(yearsDiff); // 输出: 1

// 计算月份差异
const monthsDiff = diff(new Date('2023-01-01'), new Date('2024-01-01'), 'month');
console.log(monthsDiff); // 输出: 12
```

## diffInDays 函数

### 功能描述
计算两个日期之间的天数差。

### 参数类型
- `date`: `Date` - 第一个日期。
- `input`: `DateInput` - 第二个日期。
- `asFloat`: `boolean` - 是否返回浮点数。

### 返回值
- `number`: 两个日期之间的天数差。

### 示例代码
```typescript
import { diffInDays } from 'date-manip';

const daysDiff = diffInDays(new Date(2023, 0, 1), new Date(2023, 0, 2));
console.log(daysDiff); // 输出: 1
```

## diffInHours 函数

### 功能描述
计算两个日期之间的小时差。

### 参数类型
- `date`: `Date` - 第一个日期。
- `input`: `DateInput` - 第二个日期。
- `asFloat`: `boolean` - 是否返回浮点数。

### 返回值
- `number`: 两个日期之间的小时差。

### 示例代码
```typescript
import { diffInHours } from 'date-manip';

const hoursDiff = diffInHours(new Date(2023, 0, 1), new Date(2023, 0, 2));
console.log(hoursDiff); // 输出: 24
```

## diffInMilliseconds 函数

### 功能描述
计算两个日期之间的毫秒差。

### 参数类型
- `date`: `Date` - 第一个日期。
- `input`: `DateInput` - 第二个日期。
- `asFloat`: `boolean` - 是否返回浮点数。

### 返回值
- `number`: 两个日期之间的毫秒差。

### 示例代码
```typescript
import { diffInMilliseconds } from 'date-manip';

console.log(diffInMilliseconds(new Date(), new Date())); // 输出: 0
console.log(diffInMilliseconds(new Date(), new Date(Date.now() + 1000))); // 输出: 1000
```

## diffInMinutes 函数

### 功能描述
计算两个日期之间的分钟差。

### 参数类型
- `date`: `Date` - 第一个日期。
- `input`: `DateInput` - 第二个日期。
- `asFloat`: `boolean` - 是否返回浮点数。

### 返回值
- `number`: 两个日期之间的分钟差。

### 示例代码
```typescript
import { diffInMinutes } from 'date-manip';

console.log(diffInMinutes(new Date(), new Date())); // 输出: 0
console.log(diffInMinutes(new Date(), new Date(Date.now() + 1000 * 60))); // 输出: 1
```

## diffInMonths 函数

### 功能描述
计算两个日期之间的月份差。

### 参数类型
- `date`: `Date` - 第一个日期。
- `input`: `DateInput` - 第二个日期。
- `asFloat`: `boolean` - 是否返回浮点数。

### 返回值
- `number`: 两个日期之间的月份差。

### 示例代码
```typescript
import { diffInMonths } from 'date-manip';

console.log(diffInMonths(new Date(), new Date(Date.now() + 1000 * 60 * 60 * 24 * 30))); // 输出: 1
```

## diffInSeconds 函数

### 功能描述
计算两个日期之间的秒差。

### 参数类型
- `date`: `Date` - 第一个日期。
- `input`: `DateInput` - 第二个日期。
- `asFloat`: `boolean` - 是否返回浮点数。

### 返回值
- `number`: 两个日期之间的秒差。

### 示例代码
```typescript
import { diffInSeconds } from 'date-manip';

console.log(diffInSeconds(new Date(), new Date())); // 输出: 0
console.log(diffInSeconds(new Date(), new Date(Date.now() + 1000))); // 输出: 1
```

## diffInYears 函数

### 功能描述
计算两个日期之间的年份差。

### 参数类型
- `date`: `Date` - 第一个日期。
- `input`: `DateInput` - 第二个日期。
- `asFloat`: `boolean` - 是否返回浮点数。

### 返回值
- `number`: 两个日期之间的年份差。

### 示例代码
```typescript
import { diffInYears } from 'date-manip';

console.log(diffInYears(new Date(), new Date(Date.now() + 1000 * 60 * 60 * 24 * 30))); // 输出: 1
```

## endOf 函数

### 功能描述
将日期设置为指定时间单位的结束时间。

### 参数类型
- `date`: `Date` - 要设置为指定时间单位结束时间的日期。
- `unit`: `Unit` - 要设置结束时间的时间单位，如 'year'、'month'、'day' 等。

### 返回值
- `Date`: 设置为指定时间单位结束时间的新日期。

### 示例代码
```typescript
import { endOf } from 'date-manip';

// 设置年份结束时间
const endOfYear = endOf(new Date('2023-01-01'), 'year');
console.log(endOfYear.toISOString()); // 输出: '2023-12-31T23:59:59.999Z'

// 设置月份结束时间
const endOfMonth = endOf(new Date('2023-10-01'), 'month');
console.log(endOfMonth.toISOString()); // 输出: '2023-10-31T23:59:59.999Z'
```

## format 函数

### 功能描述
根据指定的格式字符串格式化日期。

### 参数类型
- `date`: `Date` - 要格式化的日期。
- `formatString`: `string` - 要使用的格式字符串。

### 返回值
- `string`: 格式化后的日期字符串。

### 示例代码
```typescript
import { format } from 'date-manip';

// 使用 'YYYY-MM-DD' 格式格式化日期
const formattedDate1 = format(new Date('2023-10-01T12:00:00'), 'YYYY-MM-DD');
console.log(formattedDate1); // 输出: '2023-10-01'

// 使用 'YYYY-MM-DD HH:mm:ss' 格式格式化日期
const formattedDate2 = format(new Date('2023-10-01T12:30:45'), 'YYYY-MM-DD HH:mm:ss');
console.log(formattedDate2); // 输出: '2023-10-01 12:30:45'
```

## get 函数

### 功能描述
获取日期的某个时间单位值。

### 参数类型
- `date`: `Date` - 要获取时间单位值的日期。
- `unit`: `Unit` - 要获取的时间单位，如 'year'、'month'、'day' 等。

### 返回值
- `number`: 指定时间单位的值。

### 示例代码
```typescript
import { get } from 'date-manip';

const date = new Date('2023-10-01T12:30:45');
console.log(get(date, 'year')); // 输出: 2023
console.log(get(date, 'month')); // 输出: 9（月份从0开始）
console.log(get(date, 'date')); // 输出: 1
console.log(get(date, 'hour')); // 输出: 12
console.log(get(date, 'minute')); // 输出: 30
console.log(get(date, 'second')); // 输出: 45
```

## isAfter 函数

### 功能描述
检查一个日期是否在另一个日期或指定的时间单位之后。

### 参数类型
- `date`: `Date` - 要比较的日期。
- `input`: `DateInput` - 要比较的日期或时间单位。
- `unit`: `Unit` - 要比较的时间单位，如 'year'、'month'、'day' 等。

### 返回值
- `boolean`: 表示第一个日期是否在第二个日期或时间单位之后。

### 示例代码
```typescript
import { isAfter } from 'date-manip';

// 检查一个日期是否在另一个日期之后
const isAfterDate = isAfter(new Date('2023-10-01'), new Date('2023-09-01'), 'day');
console.log(isAfterDate); // 输出: true

// 检查一个日期是否在特定年份之后
const isAfterYear = isAfter(new Date('2024-01-01'), 2023, 'year');
console.log(isAfterYear); // 输出: true
```

## isBefore 函数

### 功能描述
检查一个日期是否在另一个日期或指定的时间单位之前。

### 参数类型
- `date`: `Date` - 要比较的日期。
- `input`: `DateInput` - 要比较的日期或时间单位。
- `unit`: `Unit` - 要比较的时间单位，如 'year'、'month'、'day' 等。

### 返回值
- `boolean`: 表示第一个日期是否在第二个日期或时间单位之前。

### 示例代码
```typescript
import { isBefore } from 'date-manip';

// 检查一个日期是否在另一个日期之前
const isBeforeDate = isBefore(new Date('2023-09-01'), new Date('2023-10-01'), 'day');
console.log(isBeforeDate); // 输出: true

// 检查一个日期是否在特定年份之前
const isBeforeYear = isBefore(new Date('2022-12-31'), 2023, 'year');
console.log(isBeforeYear); // 输出: true
```

## isBetween 函数

### 功能描述
检查一个日期是否在两个其他日期或指定的时间单位之间。

### 参数类型
- `date`: `Date` - 要检查的日期。
- `from`: `DateInput` - 起始日期或时间单位。
- `to`: `DateInput` - 结束日期或时间单位。
- `unit`: `Unit` - 要比较的时间单位，如 'year'、'month'、'day' 等。
- `inclusivity`: `string` - 指示比较是否包含边界的字符串。

### 返回值
- `boolean`: 表示日期是否在两个指定的日期或时间单位之间。

### 示例代码
```typescript
import { isBetween } from 'date-manip';

// 检查一个日期是否在两个日期之间
const isBetweenDates = isBetween(new Date('2023-10-01'), new Date('2023-09-01'), new Date('2023-11-01'), 'day');
console.log(isBetweenDates); // 输出: true

// 检查一个日期是否在两个年份之间
const isBetweenYears = isBetween(new Date('2023-01-01'), 2022, 2024, 'year');
console.log(isBetweenYears); // 输出: true
```

## isLeapYear 函数

### 功能描述
检查给定的日期是否在闰年。

### 参数类型
- `date`: `Date` - 要检查的日期。

### 返回值
- `boolean`: 表示给定的日期是否在闰年。

### 示例代码
```typescript
import { isLeapYear } from 'date-manip';

const isLeap = isLeapYear(new Date('2024-01-01'));
console.log(isLeap); // 输出: true

const isNotLeap = isLeapYear(new Date('2023-01-01'));
console.log(isNotLeap); // 输出: false
```

## isSame 函数

### 功能描述
检查一个日期是否与另一个日期或指定的时间单位相同。

### 参数类型
- `date`: `Date` - 要比较的日期。
- `input`: `DateInput` - 要比较的日期或时间单位。
- `unit`: `Unit` - 要比较的时间单位，如 'year'、'month'、'day' 等。

### 返回值
- `boolean`: 表示第一个日期是否与第二个日期或时间单位相同。

### 示例代码
```typescript
import { isSame } from 'date-manip';

// 检查一个日期是否与另一个日期相同
const isSameDate = isSame(new Date('2023-10-01'), new Date('2023-10-01'), 'day');
console.log(isSameDate); // 输出: true

// 检查一个日期是否与特定年份相同
const isSameYear = isSame(new Date('2023-10-01'), 2023, 'year');
console.log(isSameYear); // 输出: true
```

## isSameOrAfter 函数

### 功能描述
检查一个日期是否与另一个日期或指定的时间单位相同或在其之后。

### 参数类型
- `date`: `Date` - 要比较的日期。
- `input`: `DateInput` - 要比较的日期或时间单位。
- `unit`: `Unit` - 要比较的时间单位，如 'year'、'month'、'day' 等。

### 返回值
- `boolean`: 表示第一个日期是否与第二个日期或时间单位相同或在其之后。

### 示例代码
```typescript
import { isSameOrAfter } from 'date-manip';

// 检查一个日期是否与另一个日期相同或在其之后
const isSameOrAfterDate = isSameOrAfter(new Date('2023-10-01'), new Date('2023-10-01'), 'day');
console.log(isSameOrAfterDate); // 输出: true

// 检查一个日期是否在另一个日期之后
const isSameOrAfterDate2 = isSameOrAfter(new Date('2023-10-02'), new Date('2023-10-01'), 'day');
console.log(isSameOrAfterDate2); // 输出: true
```

## isSameOrBefore 函数

### 功能描述
检查一个日期是否与另一个日期或指定的时间单位相同或在其之前。

### 参数类型
- `date`: `Date` - 要比较的日期。
- `input`: `DateInput` - 要比较的日期或时间单位。
- `unit`: `Unit` - 要比较的时间单位，如 'year'、'month'、'day' 等。

### 返回值
- `boolean`: 表示第一个日期是否与第二个日期或时间单位相同或在其之前。

### 示例代码
```typescript
import { isSameOrBefore } from 'date-manip';

// 检查一个日期是否与另一个日期相同或在其之前
const isSameOrBeforeDate = isSameOrBefore(new Date('2023-10-01'), new Date('2023-10-01'), 'day');
console.log(isSameOrBeforeDate); // 输出: true

// 检查一个日期是否在另一个日期之前
const isSameOrBeforeDate2 = isSameOrBefore(new Date('2023-09-30'), new Date('2023-10-01'), 'day');
console.log(isSameOrBeforeDate2); // 输出: true
```

## isValid 函数

### 功能描述
检查给定的日期是否有效。

### 参数类型
- `date`: `Date` - 要检查的日期。

### 返回值
- `boolean`: 表示给定的日期是否有效。

### 示例代码
```typescript
import { isValid } from 'date-manip';

const isValidDate1 = isValid(new Date('2023-10-01'));
console.log(isValidDate1); // 输出: true

const isValidDate2 = isValid(new Date('invalid-date'));
console.log(isValidDate2); // 输出: false
```

## parse 函数

### 功能描述
从各种输入类型中解析日期。

### 参数类型
- `input`: `DateInput` - 要解析的输入，可以是字符串、数字、Date 对象、数字数组或 DateParsingObject。
- `format`: `string` - 可选的格式字符串，指定输入字符串的格式。

### 返回值
- `Date`: 表示解析后日期的 Date 对象。

### 示例代码
```typescript
import { parse } from 'date-manip';

// 从字符串中解析日期
const result = parse('20231001123456', 'YYYYMMDDHHmmss');
console.log(result.toISOString()); // 输出: '2023-10-01T12:34:56.000Z'

// 从 ISO 8601 字符串中解析日期
const isoResult = parse('2023-10-01T12:34:56Z');
console.log(isoResult.toISOString()); // 输出: '2023-10-01T12:34:56.000Z'
```

## set 函数

### 功能描述
设置日期的某个时间单位值。

### 参数类型
- `date`: `Date` - 要设置时间单位值的日期。
- `unit`: `Unit` - 要设置的时间单位，如 'year'、'month'、'day' 等。
- `val`: `number` - 要设置的时间单位值。

### 返回值
- `Date`: 更新后的新日期。

### 示例代码
```typescript
import { set } from 'date-manip';

const date = new Date('2023-10-01T12:30:45');
const newDate = set(date, 'year', 2024);
console.log(newDate.toISOString()); // 输出: '2024-10-01T12:30:45.000Z'
```

## startOf 函数

### 功能描述
将日期设置为指定时间单位的开始时间。

### 参数类型
- `date`: `Date` - 要设置为指定时间单位开始时间的日期。
- `unit`: `Unit` - 要设置开始时间的时间单位，如 'year'、'month'、'day' 等。

### 返回值
- `Date`: 设置为指定时间单位开始时间的新日期。

### 示例代码
```typescript
import { startOf } from 'date-manip';

// 设置年份开始时间
const startOfYear = startOf(new Date('2023-10-01'), 'year');
console.log(startOfYear.toISOString()); // 输出: '2023-01-01T00:00:00.000Z'

// 设置月份开始时间
const startOfMonth = startOf(new Date('2023-10-01'), 'month');
console.log(startOfMonth.toISOString()); // 输出: '2023-10-01T00:00:00.000Z'
```

## subDays 函数

### 功能描述
从日期中减去指定数量的天数。

### 参数类型
- `date`: `Date` - 要减去天数的日期。
- `days`: `number` - 要减去的天数。

### 返回值
- `Date`: 减去天数后的新日期。

### 示例代码
```typescript
import { subDays } from 'date-manip';

const newDate = subDays(new Date(), 5);
console.log(newDate); // 输出5天前的日期
```

## subHours 函数

### 功能描述
从日期中减去指定数量的小时。

### 参数类型
- `date`: `Date` - 要减去小时的日期。
- `hours`: `number` - 要减去的小时数。

### 返回值
- `Date`: 减去小时后的新日期。

### 示例代码
```typescript
import { subHours } from 'date-manip';

const newDate = subHours(new Date(2014, 6, 2, 11, 55), 3);
console.log(newDate.toISOString()); // 输出: '2014-07-02T08:55:00.000Z'
```

## subMilliseconds 函数

### 功能描述
从日期中减去指定数量的毫秒。

### 参数类型
- `date`: `Date` - 要减去毫秒的日期。
- `ms`: `number` - 要减去的毫秒数。

### 返回值
- `Date`: 减去毫秒后的新日期。

### 示例代码
```typescript
import { subMilliseconds } from 'date-manip';

const newDate = subMilliseconds(new Date(2021, 9, 31, 17, 45, 50, 500), 500);
console.log(newDate.toISOString()); // 输出: '2021-10-31T17:45:49.000Z'
```

## subMinutes 函数

### 功能描述
从日期中减去指定数量的分钟。

### 参数类型
- `date`: `Date` - 要减去分钟的日期。
- `minutes`: `number` - 要减去的分钟数。

### 返回值
- `Date`: 减去分钟后的新日期。

### 示例代码
```typescript
import { subMinutes } from 'date-manip';

const newDate = subMinutes(new Date(2014, 1, 28, 0, 30, 40), 30);
console.log(newDate.toISOString()); // 输出: '2014-02-27T23:59:10.000Z'
```

## subMonths 函数

### 功能描述
从日期中减去指定数量的月份。

### 参数类型
- `date`: `Date` - 要减去月份的日期。
- `months`: `number` - 要减去的月份数。

### 返回值
- `Date`: 减去月份后的新日期。

### 示例代码
```typescript
import { subMonths } from 'date-manip';

const newDate = subMonths(new Date('2023-10-31T12:00:00Z'), 2);
console.log(newDate.toISOString()); // 输出: '2023-08-31T12:00:00.000Z'
```

## subSeconds 函数

### 功能描述
从日期中减去指定数量的秒。

### 参数类型
- `date`: `Date` - 要减去秒的日期。
- `seconds`: `number` - 要减去的秒数。

### 返回值
- `Date`: 减去秒后的新日期。

### 示例代码
```typescript
import { subSeconds } from 'date-manip';

const newDate = subSeconds(new Date(2014, 1, 28, 0, 30, 40), 30);
console.log(newDate.toISOString()); // 输出: '2014-02-28T00:29:10.000Z'
```

## subtract 函数

### 功能描述
从日期中减去指定数量的时间单位。

### 参数类型
- `date`: `Date` - 要减去时间的日期。
- `num`: `number | DateAddingObject` - 要减去的时间单位数量，或一个对象，其中键是时间单位，值是要减去的时间单位数量。
- `unit`: `Unit` - 要减去的时间单位，如 'year'、'month'、'day' 等。如果 `num` 是数字，则此参数是必需的。

### 返回值
- `Date`: 减去指定时间单位后的新日期。

### 示例代码
```typescript
import { subtract } from 'date-manip';

// 减去5天
const newDate1 = subtract(new Date('2023-10-01'), 5, 'day');
console.log(newDate1.toISOString()); // 输出: '2023-09-26T00:00:00.000Z'

// 使用对象减去多个时间单位
const newDate2 = subtract(new Date('2023-10-01T12:00:00'), { year: 1, month: 2, day: 3, hour: 4, minute: 5, second: 6, millisecond: 7 });
console.log(newDate2.toISOString()); // 输出: '2022-07-28T07:54:53.993Z'
```

## subYears 函数

### 功能描述
从日期中减去指定数量的年份。

### 参数类型
- `date`: `Date` - 要减去年份的日期。
- `years`: `number` - 要减去的年份数。

### 返回值
- `Date`: 减去年份后的新日期。

### 示例代码
```typescript
import { subYears } from 'date-manip';

const newDate = subYears(new Date('2023-10-01T12:00:00Z'), 2);
console.log(newDate.toISOString()); // 输出: '2021-10-01T12:00:00.000Z'
```