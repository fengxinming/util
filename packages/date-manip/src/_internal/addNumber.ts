import addDays from '../addDays';
import addHours from '../addHours';
import addMilliseconds from '../addMilliseconds';
import addMinutes from '../addMinutes';
import addMonths from '../addMonths';
import addSeconds from '../addSeconds';
import addYears from '../addYears';
import { Unit } from '../types';
import units from '../units';
import normalizeUnit from './normalizeUnit';

const { DAY, HOUR, MINUTE, MONTH, SECOND, YEAR } = units;

export default function addNumber(date: Date, num: number, unit: Unit): Date {
  unit = normalizeUnit(unit);

  switch (unit) {
    case YEAR:
      return addYears(date, num);
    case MONTH:
      return addMonths(date, num);
    case DAY:
      return addDays(date, num);
    case HOUR:
      return addHours(date, num);
    case MINUTE:
      return addMinutes(date, num);
    case SECOND:
      return addSeconds(date, num);
    default:
      return addMilliseconds(date, num);
  }
}
