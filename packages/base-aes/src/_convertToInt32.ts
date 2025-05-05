export function convertToInt32(bytes: ArrayLike<number>): number[] {
  const result: number[] = [];
  for (let i = 0, len = bytes.length; i < len; i += 4) {
    result.push(
      (bytes[i] << 24)
          | (bytes[i + 1] << 16)
          | (bytes[i + 2] <<  8)
           | bytes[i + 3]
    );
  }
  return result;
}
