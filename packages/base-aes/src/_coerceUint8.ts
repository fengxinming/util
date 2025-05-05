function checkInt(value: any): boolean {
  return parseInt(value, 10) === value;
}

function checkInts(arrayish: any[]): boolean {
  for (let i = 0, len = arrayish.length; i < len; i++) {
    const val = arrayish[i];
    if (!checkInt(val) || val < 0 || val > 255) {
      return false;
    }
  }

  return true;
}

export function coerceUint8(arg: any, copy?: boolean): Uint8Array {

  // ArrayBuffer view
  if (arg.buffer && arg.constructor.name === 'Uint8Array') {
    if (copy) {
      if (arg.slice) {
        arg = arg.slice();
      }
      else {
        arg = new Uint8Array(Array.prototype.slice.call(arg));
      }
    }

    return arg;
  }

  // It's an array; check it is a valid representation of a byte
  if (Array.isArray(arg)) {
    if (!checkInts(arg)) {
      throw new Error(`Array contains invalid value: ${arg}`);
    }

    return new Uint8Array(arg);
  }

  // Something else, but behaves like an array (maybe a Buffer? Arguments?)
  if (checkInt(arg.length)) {
    if (!checkInts(arg)) {
      throw new Error(`ArrayLike contains invalid value: ${arg}`);
    }

    return new Uint8Array(arg);
  }

  throw new Error('unsupported array-like object');
}
