function convert(v: any, encode: (str: string) => string): string {
  switch (typeof v) {
    case 'string':
      return encode(v);

    case 'object':
      return v === null ? '' : encode(JSON.stringify(v));

    case 'number':
      // 判断 NaN
      // eslint-disable-next-line no-self-compare
      if (v !== v) {
        return '';
      }
    // break omitted
    case 'bigint':
      return String(v);

    case 'boolean':
      return v ? 'true' : 'false';
  }

  return '';
}

/**
 * @hidden
 */
export function _stringify(
  obj: Record<string, any>,
  sep: string,
  eq: string,
  encode: ((val: string) => string),
  filter?: (key: string, val: any) => any
): string {
  let qs = '';
  const set = (key: string, val: string) => {
    if (qs) {
      qs += sep;
    }
    qs += key +  eq + val;
  };
  const put = filter
    ? (key: string, val: any) => {
      if (filter(key, val)) {
        set(key, val);
      }
    }
    : set;
  const hasOwn = 'hasOwnProperty' in obj
    ? (o: Record<string, any>, k: string) => o.hasOwnProperty(k)
    : (o: Record<string, any>, k: string) => Object.prototype.hasOwnProperty.call(o, k);

  for (const key in obj) {
    if (hasOwn(obj, key)) {
      const value = obj[key];
      if (value && value.pop) {
        for (let j = 0, len = value.length; j < len; j++) {
          put(key, convert(value[j], encode));
        }
      }
      else {
        put(key, convert(value, encode));
      }
    }
  }

  return qs;
}
