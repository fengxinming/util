export function toHexBytes(text: string): number[] {
  const result: number[] = [];
  for (let i = 0, len = text.length; i < len; i += 2) {
    result.push(parseInt(text.substring(i, i + 2), 16));
  }

  return result;
}
