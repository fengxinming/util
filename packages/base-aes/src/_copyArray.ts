export function copyArray(
  srcArray: ArrayLike<number>,
  srcIndex: number,
  destArray: Uint8Array | number[],
  destIndex: number,
  length: number
): void {
  for (let i = 0; i < length; i++) {
    destArray[destIndex + i] = srcArray[srcIndex + i];
  }
}
