# date-manip

[![npm package](https://nodei.co/npm/date-manip.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/date-manip)

[![NPM Version](https://img.shields.io/npm/v/date-manip.svg?style=flat)](https://npmjs.org/package/date-manip)
[![NPM Downloads](https://img.shields.io/npm/dm/date-manip.svg?style=flat)](https://npmjs.org/package/date-manip)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/date-manip/badge)](https://www.jsdelivr.com/package/npm/date-manip)

---

## Introduction

`date-manip` is a lightweight JavaScript date utility library designed to provide modularity, high performance, and additional features. It supports various date operations, including date addition and subtraction, formatting, comparison, etc.

## Installation

::: code-group

```bash [npm]
npm add date-manip
```

```bash [pnpm]
pnpm add date-manip
```

```bash [yarn]
yarn add date-manip
```

```bash [bun]
bun add date-manip
```

```html [HTML]
<script src="https://cdn.jsdelivr.net/npm/date-manip/dist/index.umd.min.js"></script>
<script>
  // window.DateManip
  const { addDays, subMonths, format, isAfter, isBefore, isSame } = DateManip;
  const date = new Date('2023-10-01T12:00:00Z');

  console.log(addDays(date, 5)); // 2023-10-06T12:00:00.000Z
  console.log(subMonths(date, 2)); // 2023-08-01T12:00:00.000Z
  console.log(format(date, 'YYYY-MM-DD HH:mm:ss')); // 2023-10-01 12:00:00
  console.log(isAfter(date2, date1)); // true
  console.log(isBefore(date1, date2)); // true
  console.log(isSame(date1, date2)); // false
  // ...
</script>

<script src="https://cdn.jsdelivr.net/npm/date-manip/dist/chain.umd.js"></script>
<script>
  // window.DateManip
  const { chain } = DateManip;
  const now = chain('2000-02-29')
    .add({
      year: 1,
      month: 1,
      day: 1,
      hour: 1,
      minute: 1,
      second: 1,
      millisecond: 1
    })
    .add(1, 'month')
    .startOf('date')
    .format('YYYY-MM-DD');

  console.log(now); // 2001-04-01
  // ...
</script>
```

:::

## Features

- **Modularity**: Supports modular import and on-demand loading.
- **High Performance**: Optimized performance for various scenarios.
- **Chaining**: Supports chaining, making the code more concise.
- **Rich Features**: Supports date addition and subtraction, formatting, comparison, and other operations.

## Type Definitions

```typescript
export interface DateAddingObject {
  year?: number;
  month?: number;
  day?: number;
  hour?: number;
  minute?: number;
  second?: number;
  millisecond?: number;

  years?: number;
  months?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;

  Y?: number;
  y?: number;
  M?: number;
  d?: number;
  h?: number;
  m?: number;
  s?: number;
  ms?: number;
}

export interface InnerDateParsingObject {
  year?: number;
  month?: number;
  date?: number;
  hour?: number;
  minute?: number;
  second?: number;
  millisecond?: number;
  utcOffset?: number;
}

export interface DateParsingObject extends DateAddingObject{
  utcOffset?: number;
}

/**
 * Date input type
 * 日期输入类型
 */
export type DateInput = string | number | Date | number[] | DateParsingObject;

/**
 * Internal date unit
 * 内部日期单位
 */
export type InnerUnit = 'year' | 'month' | 'date' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond';

export interface InnerUnits {
  /**
   * Time unit (时间单位)
   */
  TIME: 'time';

  /**
   * Year unit (年单位)
   */
  YEAR: 'year';

  /**
   * Month unit (月单位)
   */
  MONTH: 'month';

  /**
   * Date unit (日单位)
   */
  DATE: 'date';

  /**
   * Day unit (日单位)
   */
  DAY: 'day';

  /**
   * Hour unit (时单位)
   */
  HOUR: 'hour';

  /**
   * Minute unit (分单位)
   */
  MINUTE: 'minute';

  /**
   * Second unit (秒单位)
   */
  SECOND: 'second';

  /**
   * Millisecond unit (毫秒单位)
   */
  MILLISECOND: 'millisecond';

  /**
   * UTC offset unit (时区单位)
   */
  UTC_OFFSET: 'utcOffset';
}

/**
 * Date unit
 * 日期单位
 */
export type Unit = 'Y' | 'y' | 'M' | 'D' | 'd' | 'h' | 'm' | 's' | 'ms' |
                  InnerUnit |
                  'years' | 'months' | 'dates' | 'days' | 'hours' | 'minutes' | 'seconds' | 'milliseconds';

export type ChainInput = DateInput | IDateChain;

export interface IDateChain {
  add(input: DateAddingObject): this;
  add(num: number, unit: Unit): this;
  addDays(days: number): this;
  addHours(hours: number): this;
  addMilliseconds(ms: number): this;
  addMinutes(minutes: number): this;
  addMonths(months: number): this;
  addYears(years: number): this;
  dayOfYear(): number;
  dayOfYear(val: number): this;
  daysInMonth(): number;
  diff(input: ChainInput, unit: Unit, asFloat?: boolean): number;
  diffInDays(input: ChainInput, asFloat?: boolean): number;
  diffInHours(input: ChainInput, asFloat?: boolean): number;
  diffInMilliseconds(input: ChainInput, asFloat?: boolean): number;
  diffInMinutes(input: ChainInput, asFloat?: boolean): number;
  diffInMonths(input: ChainInput, asFloat?: boolean): number;
  diffInSeconds(input: ChainInput, asFloat?: boolean): number;
  diffInYears(input: ChainInput, asFloat?: boolean): number;
  endOf(unit: Unit): this;
  format(formatString?: string): string;
  get(unit: Unit): number;
  isAfter(input: ChainInput, unit: Unit): boolean;
  isBefore(input: ChainInput, unit: Unit): boolean;
  isBetween(from: ChainInput, to: ChainInput, unit: Unit, inclusivity?: string): boolean;
  isLeapYear(): boolean;
  isSame(input: ChainInput, unit: Unit): boolean;
  isSameOrAfter(input: ChainInput, unit: Unit): boolean;
  isSameOrBefore(input: ChainInput, unit: Unit): boolean;
  isValid(): boolean;
  set(unit: Unit, val: number): this;
  startOf(unit: Unit): this;
  subDays(days: number): this;
  subHours(hours: number): this;
  subMilliseconds(time: number): this;
  subMinutes(minutes: number): this;
  subMonths(months: number): this;
  subSeconds(seconds: number): this;
  subtract(input: number | DateAddingObject): this;
  subtract(num: number, unit: Unit): this;
  subYears(years: number): this;

  year(year: number): this;
  year(): number;
  month(month: number): this;
  month(): number;
  date(date: number): this;
  date(): number;
  day(day: number): this;
  day(): number;
  hour(hour: number): this;
  hour(): number;
  minute(minute: number): this;
  minute(): number;
  second(second: number): this;
  second(): number;
  millisecond(millisecond: number): this;
  millisecond(): number;
  time(time: number): this;
  time(): number;

  hours(hours: number): this;
  hours(): number;
  minutes(minutes: number): this;
  minutes(): number;
  seconds(seconds: number): this;
  seconds(): number;
  milliseconds(milliseconds: number): this;
  milliseconds(): number;

  clone(): IDateChain;
  toArray(): number[];
  toDate(): Date;
  toISOString(): string;
  toJSON(): string;
  toString(): string;
  valueOf(): number;
}

```