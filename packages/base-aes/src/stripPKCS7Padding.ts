export function stripPKCS7Padding(bytes: ArrayLike<number>, copy?: boolean): Uint8Array {
  let length = bytes.length;
  if (length < 16) {
    throw new Error('PKCS#7 invalid length');
  }

  // 补码长度
  const padder = bytes[length - 1];
  // 补码最多16个字节
  if (padder > 16) {
    throw new Error('PKCS#7 padding byte out of range');
  }

  length -= padder;
  for (let i = 0; i < padder; i++) {
    if (bytes[length + i] !== padder) {
      throw new Error('PKCS#7 invalid padding byte');
    }
  }

  if (!copy && (bytes as Uint8Array).subarray) {
    return (bytes as Uint8Array).subarray(0, length);
  }

  const result = new Uint8Array(length);
  result.set(bytes);
  return result;
}
