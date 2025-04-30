import { InnerUnit } from '../types';
import units from '../units';

const { DATE, DAY, HOUR, MILLISECOND, MINUTE, MONTH, SECOND, TIME, YEAR } = units;

// 构建映射集合
const compatUnits = {};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function mapUnit(key, ...args) {
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < arguments.length; i++) {
    compatUnits[arguments[i]] = key;
  }
}
mapUnit(YEAR, 'Y', 'y', 'years');
mapUnit(MONTH, 'M', 'months');
mapUnit(DATE, 'D', 'dates');
mapUnit(DAY, 'd', 'days');
mapUnit(HOUR, 'h', 'hours');
mapUnit(MINUTE, 'm', 'minutes');
mapUnit(SECOND, 's', 'seconds');
mapUnit(MILLISECOND, 'ms', 'milliseconds');
mapUnit(TIME, 't');

export default function normalizeUnit(u): InnerUnit {
  return compatUnits[u];
}
