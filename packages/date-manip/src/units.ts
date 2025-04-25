import { rangeOfUnits } from './_internal/constants';
import { InnerUnits } from './types';

const units = rangeOfUnits.reduce((acc, unit) => {
  acc[unit.toUpperCase()] = unit;
  return acc;
}, {}) as InnerUnits;

/**
 * Units for date manipulations (日期操作单位)
 */
export default units;
