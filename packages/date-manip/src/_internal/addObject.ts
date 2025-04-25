import addMilliseconds from '../addMilliseconds';
import daysInMonth from '../daysInMonth';
import { DateAddingObject } from '../types';
import units from '../units';
import { MS_IN_HOUR, MS_IN_MINUTE, MS_IN_SECOND } from './constants';
import normalizeUnit from './normalizeUnit';

const { DAY, HOUR, MINUTE, MONTH, SECOND, YEAR } = units;
export default function addObject(date: Date, obj: DateAddingObject, times: number) {
  let time = 0;
  let expectedMonth = 0;
  let expectedDay = 0;

  Object.entries(obj as Record<string, number>).forEach(([unit, num]) => {
    unit = normalizeUnit(unit);
    num *= times;

    switch (unit) {
      case YEAR:
        expectedMonth += num * 12;
        return;
      case MONTH:
        expectedMonth += date.getMonth() + num;
        return;
      case DAY:
        expectedDay = num;
        return;
      case HOUR:
        num *= MS_IN_HOUR;
        break;
      case MINUTE:
        num *= MS_IN_MINUTE;
        break;
      case SECOND:
        num *= MS_IN_SECOND;
        break;
    }
    time += num;
  });

  if (expectedMonth) {
    // 目标时间当月总天数
    const tempMaxDay = daysInMonth(new Date(date.getFullYear(), expectedMonth, 1, 0, 0, 0, 0));
    const currentDay = date.getDate();
    date.setMonth(expectedMonth, (currentDay > tempMaxDay ? tempMaxDay : currentDay) + expectedDay);
  }

  return addMilliseconds(date, time);
}
