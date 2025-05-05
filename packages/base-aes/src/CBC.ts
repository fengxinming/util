import { coerceUint8 } from './_coerceUint8';
import { copyArray } from './_copyArray';
import { AES } from './AES';

export class CBC {
  private readonly _iv!: Uint8Array;
  private readonly _aes: AES;

  constructor(key: number[] | Uint8Array, iv: number[] | Uint8Array) {
    if (!iv) {
      iv = new Uint8Array(16);

    }
    else if (iv.length !== 16) {
      throw new Error('Invalid initialation vector size (must be 16 bytes)');
    }

    this._iv = coerceUint8(iv, true);
    this._aes = new AES(key);
  }

  encrypt(bytes: ArrayLike<number>): Uint8Array {
    const len = bytes.length;

    if ((len % 16) !== 0) {
      throw new Error('Invalid bytes size (must be multiple of 16 bytes)');
    }

    const cipherText = new Uint8Array(len);
    const block = new Uint8Array(16);
    let iv = this._iv;

    for (let i = 0; i < len; i += 16) {
      copyArray(bytes, i, block, 0, 16);

      for (let j = 0; j < 16; j++) {
        block[j] ^= iv[j];
      }

      iv = this._aes.encrypt(block);
      cipherText.set(iv, i);
    }

    return cipherText;
  }

  decrypt(hexBytes: ArrayLike<number>): Uint8Array {
    const len = hexBytes.length;

    if ((len % 16) !== 0) {
      throw new Error('Invalid hexBytes size (must be multiple of 16 bytes)');
    }

    const plainText = new Uint8Array(len);
    let block = new Uint8Array(16);
    const iv = this._iv;

    for (let i = 0; i < len; i += 16) {
      copyArray(hexBytes, i, block, 0, 16);
      block = this._aes.decrypt(block) as Uint8Array<ArrayBuffer>;

      for (let j = 0; j < 16; j++) {
        plainText[i + j] = block[j] ^ iv[j];
      }

      copyArray(hexBytes, i, iv, 0, 16);
    }

    return plainText;
  }
}
