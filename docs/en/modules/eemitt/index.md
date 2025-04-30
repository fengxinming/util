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

## **Installation**

::: code-group

```bash [npm]
npm add eemitt
```
```bash [pnpm]
pnpm add eemitt
```
```bash [yarn]
yarn add eemitt
```
```html [HTML]
<script src="https://cdn.jsdelivr.net/npm/eemitt/dist/index.umd.min.js"></script>
<script>
  const { Emitter } = Eemitt;
  // Create event emitter
  const emitter = new Emitter();

  // Add listener
  emitter.on('message', (evt) => {
    console.log('Message received:', evt.payload);
  });

  // Emit event with data
  emitter.emit({ type: 'message', payload: 'Hello World' });
  // Output: Message received: Hello World
</script>
```

:::

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

## **Core Features**

### **One-time Listeners**
```typescript
emitter.once('login', (event) => {
  console.log('User logged in:', event.payload?.userId);
});
emitter.emit('login', { userId: 123 }); // Output
emitter.emit('login', { userId: 456 }); // No output
```

### **Batch Event Operations**
```typescript
emitter.on(['user-created', 'user-updated'], (event) => {
  console.log(`Event type ${event.type} triggered`);
});

emitter.emit('user-created'); // Output: Event type user-created triggered
emitter.emit('user-updated'); // Output: Event type user-updated triggered
```

### **Propagation Control**
```typescript
emitter.on('error', (event) => {
  console.log('First error handler');
  event.stopImmediatePropagation(); // Stop further listeners
});

emitter.on('error', () => {
  console.log('Second error handler'); // Will not execute
});

emitter.emit('error'); // Only outputs "First error handler"
```

---

## **Core Class: `Emitter`**

### **Constructor**
```typescript
new Emitter()
```

### **Methods**
1. **`on(eventType: string | string[], listener: Listener<this>)`**  
   Add an event listener  
   **Return value**: `this`  
   **Example usage**:  
   ```typescript
   emitter.on('click', (event) => console.log(event.type));
   ```

2. **`once(eventType: string | string[], listener: Listener<this>)`**  
   Add a listener that triggers only once  
   **Return value**: `this`  
   **Example usage**:  
   ```typescript
   emitter.once('init', () => console.log('Initialization completed'));
   ```

3. **`off(eventType?: string | string[], listener?: Listener<this>)`**  
   Remove specific listeners or clear all listeners  
   **Return value**: `this`  
   **Example usage**:  
   ```typescript
   emitter.off('click', listener); // Remove specific listener
   emitter.off(); // Clear all listeners
   ```

4. **`emit(eventType: string | EventType)`**  
   Trigger an event and pass parameters  
   **Return value**: `number` (number of executed listeners)  
   **Example usage**:  
   ```typescript
   emitter.emit({ type: 'data', payload: { id: 1 } }); // Returns number of executed listeners
   ```

5. **`listeners(eventType: string)`**  
   Get all listeners for a specific event  
   **Return value**: `Listener[]`  
   **Example usage**:  
   ```typescript
   emitter.listeners('click'); // Returns array of listeners for 'click' event
   ```

6. **`listenerCount(eventType?: string)`**  
   Get total number of listeners for a specific event or all events  
   **Return value**: `number`  
   **Example usage**:  
   ```typescript
   emitter.listenerCount('click'); // Number of listeners for 'click' event
   emitter.listenerCount(); // Total number of listeners across all events
   ```

7. **`removeAllListeners(eventType?: string | string[])`**  
   Remove listeners for specific events or clear all listeners  
   **Return value**: `this`  
   **Example usage**:  
   ```typescript
   emitter.removeAllListeners('click'); // Remove listeners for specific event
   emitter.removeAllListeners(); // Clear all listeners
   ```
```

---

## **Event Object: `EEvent<T>`**
```typescript
class EEvent<T = Emitter> {
  type: string;                    // Event type
  target: unknown;                 // Event source object
  currentTarget: T;                // Emitter instance that triggered the event
  propagationStarted: boolean;     // Propagation state (becomes false after `stopImmediatePropagation()`)
  payload?: any;                   // Custom data via `EventType`
  stopImmediatePropagation(): void; // Halts further listener execution
}
```

---

## **Event Type: `EventType`**
```typescript
interface EventType {
  type: string;   // Required event type
  payload?: any;  // Optional custom data
}
```

**Example Usage**:
```typescript
const customEvent: EventType = {
  type: 'user-login',
  payload: { userId: 123, timestamp: Date.now() }
};

emitter.emit(customEvent);
```

---

## **Advanced Usage**
### **Mixin Mode**
Inject event capabilities into any object:
```typescript
import { mixin } from 'eemitt';

const myObject = { 
  value: 123,
  customMethod() { return 'Hello'; }
};

const mixed = mixin(myObject);

// Now the object can use event methods
mixed.on('update', () => console.log('Object updated'));
mixed.emit('update'); // Output: Object updated

console.log(mixed.customMethod()); // Preserves original methods
```

### **Listener Management**
#### **Safe Listener Removal**
```typescript
const listener = (event) => console.log('Listener executed');
emitter.on('event', listener);
emitter.off('event', listener); // Safely remove listener
```

#### **Listener Order**
```typescript
emitter.on('sort', (event) => console.log('First listener'));
emitter.on('sort', (event) => console.log('Second listener'));
emitter.emit('sort'); // Output order: First → Second
```

---

## **Browser Support**

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |
