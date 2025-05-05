export function fromUTF8Bytes(bytes: ArrayLike<number>): string {
  const result: string[] = [];
  let i = 0;
  const byteLen = bytes.length;

  while (i < byteLen) {
    const c = bytes[i];

    if (c < 128) {
      result.push(String.fromCharCode(c));
      i++;
    }
    else if (c > 191 && c < 224) {
      result.push(String.fromCharCode(((c & 0x1f) << 6) | (bytes[i + 1] & 0x3f)));
      i += 2;
    }
    else {
      result.push(String.fromCharCode(((c & 0x0f) << 12) | ((bytes[i + 1] & 0x3f) << 6) | (bytes[i + 2] & 0x3f)));
      i += 3;
    }
  }

  return result.join('');
}
