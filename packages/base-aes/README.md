# base-aes 🔐

[![npm package](https://nodei.co/npm/base-aes.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/base-aes)

[![NPM version](https://img.shields.io/npm/v/base-aes.svg?style=flat)](https://npmjs.org/package/base-aes)
[![NPM Downloads](https://img.shields.io/npm/dm/base-aes.svg?style=flat)](https://npmjs.org/package/base-aes)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/base-aes/badge)](https://www.jsdelivr.com/package/npm/base-aes)

> Zero-dependency AES encryption library.

---

## Features
- Support for AES-ECB/CBC mode encryption/decryption
- Complete PKCS#7 padding scheme implementation
- Cross-platform byte-level data conversion tools
- Type-safe array buffer operations
- Tree-shakable modular architecture

---

## Documentation

For detailed usage instructions and API references, please visit the official documentation:

👉 [View Full Documentation](https://fengxinming.github.io/util/modules/base-aes/)

---

## **Quick Start**

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

---

## Contributing

We welcome contributions from the community! If you find a bug or want to suggest an improvement, feel free to open an issue or submit a pull request.

### How to Contribute
1. Fork the repository.
2. Create a new branch for your changes.
3. Submit a pull request with a clear description of your changes.

---

## License

This project is licensed under the [MIT License](LICENSE).
