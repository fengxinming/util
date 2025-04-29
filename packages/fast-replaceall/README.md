# **fast-replaceall**

[![npm package](https://nodei.co/npm/fast-replaceall.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/fast-replaceall)

[![NPM version](https://img.shields.io/npm/v/fast-replaceall.svg?style=flat)](https://npmjs.org/package/fast-replaceall)
[![NPM Downloads](https://img.shields.io/npm/dm/fast-replaceall.svg?style=flat)](https://npmjs.org/package/fast-replaceall)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/fast-replaceall/badge)](https://www.jsdelivr.com/package/npm/fast-replaceall)

> **High-performance string replacement tool**  
> Supports global replacement, case-insensitive mode, start index control, and functional replacement compatible with native `String.replace`.

---

## **Features** 🌟
- **Global Replacement**: Achieve full replacement without regular expressions
- **Flexible Options**: Customize with `caseInsensitive` and `fromIndex` parameters
- **Functional Replacement**: Use callback functions for dynamic logic
- **TypeScript Support**: Full type definitions included
- **Lightweight**: Only 1KB (uncompressed), zero dependencies

---

## **Documentation**

For detailed usage instructions and API references, please visit the official documentation:

👉 [View Full Documentation](https://fengxinming.github.io/util/modules/eemitt/)

---

## **Quick Start** 🚀

### Basic Replacement
```javascript
import replaceAll from 'fast-replaceall';

const text = 'The quick brown fox jumps over the lazy dog';
console.log(replaceAll(text, 'dog', 'monkey'));
// Output: The quick brown fox jumps over the lazy monkey
```

### Functional Replacement
```javascript
replaceAll('123-456', '-', (match, offset) => `_${offset}_`);
// Output: 123_0_456
```

### Custom Options
```javascript
// Case-insensitive replacement
replaceAll('Apple apple', 'APPLE', 'ORANGE', { caseInsensitive: true });
// Output: ORANGE ORANGE

// Start replacing from index 2
replaceAll('aaaa', 'a', '*', { fromIndex: 2 });
// Output: aa**
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