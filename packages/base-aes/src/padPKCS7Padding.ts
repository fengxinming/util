export function padPKCS7Padding(bytes: ArrayLike<number>): Uint8Array {
  const length = bytes.length;
  const padder = 16 - (length % 16);
  const result = new Uint8Array(length + padder);

  result.set(bytes);

  for (let i = length, len = result.length; i < len; i++) {
    result[i] = padder;
  }

  return result;
}
