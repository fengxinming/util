# **fast-qs**

[![npm package](https://nodei.co/npm/fast-qs.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/fast-qs)

[![NPM version](https://img.shields.io/npm/v/fast-qs.svg?style=flat)](https://npmjs.org/package/fast-qs)
[![NPM Downloads](https://img.shields.io/npm/dm/fast-qs.svg?style=flat)](https://npmjs.org/package/fast-qs)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/fast-qs/badge)](https://www.jsdelivr.com/package/npm/fast-qs)

> A lightweight library for parsing and stringifying URL query strings.

---

## **Documentation**

For detailed usage instructions and API references, please visit the official documentation:

👉 [View Full Documentation](https://fengxinming.github.io/util/modules/fast-qs/)

---

## **Quick Start**

```typescript
import { parse, stringify } from 'fast-qs';

// Parse a query string
const params = parse('name=John&age=30');
console.log(params); // → { name: 'John', age: '30' }

// Stringify an object
const query = stringify({ city: 'New York', country: 'USA' });
console.log(query); // → "city=New%20York&country=USA"
```

---

## **Core Features**

### ⚡ Key Features
| Feature                | Description                                                                 |
|------------------------|----------------------------------------------------------------------------|
| **Custom Separators**   | Support any separators (e.g., `parse('a|1;b|2', { sep: ';', eq: '|' })`    |
| **Empty Value Handling** | `f=` → `{ f: '' }`, `&=` → `{ '': '' }`                                  |
| **Duplicate Keys**      | Automatically converted to arrays (e.g., `a=1&a=2` → `{ a: ['1', '2'] }`  |
| **Invalid Encoding**    | Retains invalid `%xx` (e.g., `%` → `%`, `%A` → `%A`                       |
| **URL Parsing**         | Automatically extracts parameters after `?`, supports `start` to specify position |
| **Filter Extension**    | Filter/transform keys/values via `filter` (e.g., filter sensitive fields) |

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