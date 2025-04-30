# **uri-escapify**

[![npm package](https://nodei.co/npm/uri-escapify.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/uri-escapify)

[![NPM version](https://img.shields.io/npm/v/uri-escapify.svg?style=flat)](https://npmjs.org/package/uri-escapify)
[![NPM Downloads](https://img.shields.io/npm/dm/uri-escapify.svg?style=flat)](https://npmjs.org/package/uri-escapify)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/uri-escapify/badge)](https://www.jsdelivr.com/package/npm/uri-escapify)

> A lightweight URI escaping utility library providing `escape` and `unescape` functionality.

---

## **Documentation**

For detailed usage instructions and API references, please visit the official documentation:

👉 [View Full Documentation](https://fengxinming.github.io/util/modules/uri-escapify/)

---

## **Quick Start**

### **Basic Usage**

```typescript
import { escape, unescape } from 'uri-escapify';

// Basic encoding
console.log(escape('hello world')); // Outputs "hello%20world"

// Chinese encoding
console.log(escape('中文@示例')); // Outputs "%E4%B8%AD%E6%96%87%40%E7%A4%BA%E4%BE%8B"

// Reserved characters preservation
console.log(escape("!-._~'()*")); // Outputs original string

// Decoding operation
console.log(unescape("%E4%B8%AD%E6%96%87")); // Outputs "中文"
```

---

## **Contributing**

We welcome contributions from the community! If you find a bug or want to suggest an improvement, feel free to open an issue or submit a pull request.

### **How to Contribute**
1. Fork the repository.
2. Create a new branch for your changes.
3. Submit a pull request with a clear description of your changes.

---

## **License**

This project is licensed under the [MIT License](LICENSE).

---

## **Browser Support**

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |