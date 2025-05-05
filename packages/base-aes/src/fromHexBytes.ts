const hex = '0123456789abcdef';
export function fromHexBytes(bytes: ArrayLike<number>): string {
  const result: string[] = [];

  for (let i = 0, len = bytes.length; i < len; i++) {
    const v = bytes[i];
    result.push(hex[(v & 0xf0) >> 4] + hex[v & 0x0f]);
  }

  return result.join('');
}
