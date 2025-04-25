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
