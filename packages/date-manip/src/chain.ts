import * as fns from 'date-manip';

import { ChainInput, DateInput, IDateChain, InnerUnits, Unit } from './types';

const { parse, get, set } = fns;

/**
 * A class that provides a fluent API for manipulating dates.
 * 提供一个流畅的 API 来操作日期的类。
 */
class DateChain implements IDateChain {
  add !: () => any;
  addDays !: () => any;
  addHours !: () => any;
  addMilliseconds !: () => any;
  addMinutes !: () => any;
  addMonths !: () => any;
  addYears !: () => any;
  dayOfYear !: () => any;
  daysInMonth !: () => any;
  diff !: () => any;
  diffInDays !: () => any;
  diffInHours !: () => any;
  diffInMilliseconds !: () => any;
  diffInMinutes !: () => any;
  diffInMonths !: () => any;
  diffInSeconds !: () => any;
  diffInYears !: () => any;
  endOf !: () => any;
  format !: () => string;
  get !: () => any;
  isAfter !: () => any;
  isBefore !: () => any;
  isBetween !: () => any;
  isLeapYear !: () => any;
  isSame !: () => any;
  isSameOrAfter !: () => any;
  isSameOrBefore !: () => any;
  isValid !: () => any;
  set !: () => any;
  startOf !: () => any;
  subDays !: () => any;
  subHours !: () => any;
  subMilliseconds !: () => any;
  subMinutes !: () => any;
  subMonths !: () => any;
  subSeconds !: () => any;
  subtract !: () => any;
  subYears !: () => any;

  year !: () => any;
  month !: () => any;
  date !: () => any;
  day !: () => any;
  hour !: () => any;
  minute !: () => any;
  second !: () => any;
  millisecond !: () => any;
  time !: () => any;

  hours !: () => any;
  minutes !: () => any;
  seconds !: () => any;
  milliseconds !: () => any;

  _d: Date;
  _i: ChainInput;
  _f?: string;

  constructor(input: ChainInput, format?: string) {
    const _input = input instanceof DateChain ? input._d : input;
    this._i = input as DateInput;
    this._f = format;
    this._d = parse(_input as DateInput, format);
  }

  clone() {
    return new DateChain(this, this._f);
  }

  toArray() {
    const date = this._d;
    return [
      get(date, 'year'),
      get(date, 'month'),
      get(date, 'date'),
      get(date, 'hours'),
      get(date, 'minutes'),
      get(date, 'seconds'),
      get(date, 'milliseconds')
      // -date.getTimezoneOffset()
    ];
  }

  toDate() {
    return new Date(this._d);
  }

  toISOString() {
    return this._d.toISOString();
  }

  toJSON() {
    return this.toISOString();
  }

  toString() {
    return this._d.toString();
  }

  valueOf() {
    return this._d.valueOf();
  }
}

const proto = DateChain.prototype;

Object.entries(fns.units as InnerUnits).forEach(([, method]) => {
  const fn = function (val) {
    if (val == null) {
      return get(this._d, method as Unit);
    }
    set(this._d, method as Unit, val);
    return this;
  };
  proto[method] = fn;
  if (method !== 'time') {
    proto[`${method}s`] = fn;
  }
});

const exclude = ['compile', 'parse', 'units'];
Object.entries(fns).forEach(([name, method]) => {
  if (!exclude.includes(name)) {
    proto[name] = function () {
      const date = this._d;
      const ret = (method as any)(date, ...arguments);
      return ret === date ? this : ret;
    };
  }
  DateChain[name] = method;
});

function chain(input: ChainInput | IDateChain, format?: string): IDateChain {
  return new DateChain(input, format);
}

export * from 'date-manip';
export { chain };
