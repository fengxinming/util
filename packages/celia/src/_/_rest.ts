import _forOwn from './_forOwn';

/**
 * @hidden
 */
export default function _rest<T>(
  object: Record<string, T>,
  exclude?: string[]
): Record<string, T> {
  const target: {[key: string]: any} = {};
  const callback = Array.isArray(exclude) && exclude.length
    ? (val: any, k: string) => {
      const index = exclude.indexOf(k);
      if (index === -1) {
        target[k] = val;
      }
    }
    : (val: any, k: string) => {
      target[k] = val;
    };

  _forOwn(object, callback);
  return target;
}
