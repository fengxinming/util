
import _hasOwn from './_hasOwn';

function del(
  obj: any,
  k: string
) {
  try {
    delete obj[k];
  }
  catch (e) {}
}

/** @hidden */
export default function _emptyOwn(
  object: any,
  exclude?: string[]
): void {
  const callback = Array.isArray(exclude) && exclude.length
    ? (
      obj: any,
      k: string
    ) => {
      if (!exclude.includes(k)) {
        del(obj, k);
      }
    }
    : del;

  const hasOwn = _hasOwn(object);

  for (const key in object) {
    if (hasOwn(object, key)) {
      callback(object, key);
    }
  }
}
