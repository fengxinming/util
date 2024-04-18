
import fitIndex from '../number/fitIndex';

/**
 * @hidden
 */
export default function _arrayAt<T>(
  value: ArrayLike<T>,
  index: number
): T {
  return value[fitIndex(index, value.length)];
}
