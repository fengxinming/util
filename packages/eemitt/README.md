# **eemitt**

[![npm package](https://nodei.co/npm/eemitt.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/eemitt)

[![NPM version](https://img.shields.io/npm/v/eemitt.svg?style=flat)](https://npmjs.org/package/eemitt)
[![NPM Downloads](https://img.shields.io/npm/dm/eemitt.svg?style=flat)](https://npmjs.org/package/eemitt)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/eemitt/badge)](https://www.jsdelivr.com/package/npm/eemitt)

> A lightweight, TypeScript-native event emitter library supporting modular event listeners, one-time triggers, propagation control, and more.

---

## **Features**
- **TypeScript Support**: Full type definitions and generic support
- **High Performance**: Minimal memory and execution overhead
- **Propagation Control**: `stopImmediatePropagation()` halts further listener execution
- **Flexible Binding**: Supports batch event operations
- **Mixin Mode**: Inject event capabilities into any object using `mixin`
- **Custom Event Data**: Pass complex data via `EventType` objects

---

## **Documentation**

For detailed usage instructions and API references, please visit the official documentation:

👉 [View Full Documentation](https://fengxinming.github.io/util/modules/eemitt/)

---

## **Quick Start**

### **Basic Usage**
```typescript
import { Emitter } from 'eemitt';

// Create event emitter
const emitter = new Emitter();

// Add listener
emitter.on('message', (evt) => {
  console.log('Received message:', evt.payload);
});

// Emit event with data
emitter.emit({ type: 'message', payload: 'Hello World' });
// Output: Received message: Hello World
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