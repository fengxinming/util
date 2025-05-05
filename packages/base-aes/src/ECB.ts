import { coerceUint8 } from './_coerceUint8';
import { copyArray } from './_copyArray';
import { AES } from './AES';

export class ECB {
  private readonly _aes: AES;

  constructor(key: number[] | Uint8Array) {
    this._aes = new AES(key);
  }

  encrypt(bytes: ArrayLike<number>): Uint8Array {
    bytes = coerceUint8(bytes);
    const len = bytes.length;

    if ((len % 16) !== 0) {
      throw new Error('Invalid bytes size (must be multiple of 16 bytes)');
    }

    const cipherText = new Uint8Array(len);
    let block = new Uint8Array(16);

    for (let i = 0; i < bytes.length; i += 16) {
      copyArray(bytes, i, block, 0, 16);
      block = this._aes.encrypt(block) as Uint8Array<ArrayBuffer>;
      cipherText.set(block, i);
    }

    return cipherText;
  }

  decrypt(bytes: ArrayLike<number>): Uint8Array {
    bytes = coerceUint8(bytes);
    const len = bytes.length;

    if ((len % 16) !== 0) {
      throw new Error('Invalid cipherText size (must be multiple of 16 bytes)');
    }

    const plainText = new Uint8Array(len);
    let block = new Uint8Array(16);

    for (let i = 0; i < len; i += 16) {
      copyArray(bytes, i, block, 0, 16);
      block = this._aes.decrypt(block) as Uint8Array<ArrayBuffer>;
      plainText.set(block, i);
    }

    return plainText;
  }
}
