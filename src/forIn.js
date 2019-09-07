import forIn from './_forIn';
import isNil from './isNil';

export default function (value, iterator, context) {
  !isNil(value) && forIn(value, iterator, context);
};
