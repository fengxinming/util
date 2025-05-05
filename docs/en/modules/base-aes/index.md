# base-aes 🔐

[![npm package](https://nodei.co/npm/base-aes.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/base-aes)

[![NPM version](https://img.shields.io/npm/v/base-aes.svg?style=flat)](https://npmjs.org/package/base-aes)
[![NPM Downloads](https://img.shields.io/npm/dm/base-aes.svg?style=flat)](https://npmjs.org/package/base-aes)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/base-aes/badge)](https://www.jsdelivr.com/package/npm/base-aes)

> Zero-dependency AES encryption library.

## Features
- Support for AES-ECB/CBC mode encryption/decryption
- Complete PKCS#7 padding scheme implementation
- Cross-platform byte-level data conversion tools
- Type-safe array buffer operations
- Tree-shakable modular architecture

## Installation
::: code-group
```bash [npm]
npm add base-aes
```
```bash [pnpm]
pnpm add base-aes
```
```bash [yarn]
yarn add base-aes
```
```html [HTML]
<script src="https://cdn.jsdelivr.net/npm/base-aes/dist/index.umd.min.js"></script>
<!-- Global variable BaseAes available -->
```
:::

## Core API

### Encryption Mode Comparison
| Mode | IV Required | Security | Use Cases |
|------|-------------|----------|-----------|
| ECB  | ❌ No IV    | ⚠️ Weak (Same plaintext blocks produce same ciphertext) | Fast encryption/low security needs |
| CBC  | ✅ Yes      | ✅ Recommended | Standard encryption scenarios |

### Encryption Modules
```ts
// Base AES module
import { AES } from 'base-aes';
const cipher = new AES(key: Uint8Array);
cipher.encrypt(data: Uint8Array): Uint8Array;
cipher.decrypt(data: Uint8Array): Uint8Array;

// ECB mode
import { ECB } from 'base-aes';
const ecb = new ECB(key: Uint8Array);
ecb.encrypt(data: Uint8Array): Uint8Array;
ecb.decrypt(data: Uint8Array): Uint8Array;

// CBC mode
import { CBC } from 'base-aes';
const cbc = new CBC(key: Uint8Array, iv: Uint8Array);
cbc.encrypt(data: Uint8Array): Uint8Array;
cbc.decrypt(data: Uint8Array): Uint8Array;
```

### Data Conversion Tools
| Function          | Purpose                     | Example                      |
|-------------------|-----------------------------|------------------------------|
| `toUTF8Bytes`     | UTF-8 string to byte array  | `toUTF8Bytes('hello')`       |
| `fromUTF8Bytes`   | Byte array to UTF-8 string  | `fromUTF8Bytes(bytes)`       |
| `toHexBytes`      | Hex string to byte array    | `toHexBytes('00ff')`        |
| `fromHexBytes`    | Byte array to hex string    | `fromHexBytes(bytes)`        |

### Padding Schemes
```ts
import { padPKCS7Padding, stripPKCS7Padding } from 'base-aes';
const padded = padPKCS7Padding(data, blockSize);  // Add padding
const original = stripPKCS7Padding(padded);      // Remove padding
```

## Usage Examples

### ECB Mode Encryption/Decryption
```ts
import { ECB, padPKCS7Padding, stripPKCS7Padding, toUTF8Bytes, fromUTF8Bytes, fromHexBytes } from 'base-aes';

// Generate 16-byte key
const key = toUTF8Bytes('\x00\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0E\x0F');

// Data to encrypt
const text = 'TextMustBe16Byte';

// Create ECB instance
const ecb = new ECB(key);

// Encrypt data
const encrypted = ecb.encrypt(padPKCS7Padding(toUTF8Bytes(text)));
console.log('Ciphertext:', fromHexBytes(encrypted));
// Ciphertext: 61e6335e9518e20fd16aa30871e211e6954f64f2e4e86e9eee82d20216684899

// Decrypt data
const decrypted = ecb.decrypt(encrypted);
console.log('Plaintext:', fromUTF8Bytes(stripPKCS7Padding(decryptedBytes)));
// Plaintext: TextMustBe16Byte
```

### CBC Mode Encryption/Decryption
```ts
import { CBC, padPKCS7Padding, stripPKCS7Padding, toUTF8Bytes, fromUTF8Bytes, fromHexBytes } from 'base-aes';

// Generate key and IV (16 bytes each)
const key = toUTF8Bytes('\x00\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0E\x0F');
const iv = toUTF8Bytes('\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !"#$');
const text = 'TextMustBe16Byte';

// Create CBC instance
const cbc = new CBC(key, iv);

// Encrypt data
const encrypted = cbc.encrypt(padPKCS7Padding(toUTF8Bytes(text)));
console.log('Ciphertext:', toHexBytes(encrypted));
// Ciphertext: 0605fda3e80da8724d66811725a98f961bf3ca2e1fadf6af8f7223425c74bc69

// Decrypt data
const decrypted = cbc.decrypt(encrypted);
console.log('Plaintext:', fromUTF8Bytes(stripPKCS7Padding(decryptedBytes)));
// Plaintext: TextMustBe16Byte
```

## Comparison with Go Implementation

::: details Click to view Golang code
<<< ../../../../packages/base-aes/aes.go
:::
