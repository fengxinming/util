import iteratorCallback from './_array/_iteratorCB';

export default function (value, iterator, context) {
  const cb = iteratorCallback(iterator, context);
  for (let key in value) {
    if (value.hasOwnProperty(key) && cb(value[key], key, value) === false) {
      break;
    };
  }
};