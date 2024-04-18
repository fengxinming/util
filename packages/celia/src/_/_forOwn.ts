import _hasOwn from './_hasOwn';

/**
 * @hidden
 */
function _forOwn<T = any>(
  object: any,
  iterator: (item: T, key: string, ctx: any) => any,
  canBreak?: boolean
): void {
  const hasOwn = _hasOwn(object);
  if (canBreak) {
    for (const key in object) {
      if (hasOwn(object, key) && iterator(object[key], key, object) === false) {
        break;
      }
    }
  }
  else {
    for (const key in object) {
      if (hasOwn(object, key)) {
        iterator(object[key], key, object);
      }
    }
  }
}

export default _forOwn;
