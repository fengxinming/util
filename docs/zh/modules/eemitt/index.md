# **eemitt**

[![npm package](https://nodei.co/npm/eemitt.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/eemitt)

[![NPM version](https://img.shields.io/npm/v/eemitt.svg?style=flat)](https://npmjs.org/package/eemitt)
[![NPM Downloads](https://img.shields.io/npm/dm/eemitt.svg?style=flat)](https://npmjs.org/package/eemitt)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/eemitt/badge)](https://www.jsdelivr.com/package/npm/eemitt)

> 轻量级、TypeScript 原生的事件发射器库，支持模块化事件监听、一次触发、传播控制等核心功能。

---

## **特性**
- **TypeScript 支持**：完整的类型定义和泛型支持
- **高性能**：最小化内存占用和执行开销
- **传播控制**：`stopImmediatePropagation` 阻止事件继续传播
- **灵活绑定**：支持批量事件操作
- **混合模式**：可通过 `mixin` 将事件能力注入任意对象
- **自定义事件数据**：通过 `EventType` 对象传递复杂数据

---

## **安装**

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
```html [html]
<script src="https://cdn.jsdelivr.net/npm/eemitt/dist/index.umd.min.js"></script>
<script>
  const { Emitter } = Eemitt;
  // 创建事件发射器
  const emitter = new Emitter();

  // 添加监听器
  emitter.on('message', (evt) => {
    console.log('收到消息:', evt.payload);
  });

  // 触发事件并传递数据
  emitter.emit({ type: 'message', payload: 'Hello World' });
  // 输出: 收到消息: Hello World
</script>
```

:::

---

## **快速开始**

### **基础用法**

```typescript
import { Emitter } from 'eemitt';

// 创建事件发射器
const emitter = new Emitter();

// 添加监听器
emitter.on('message', (evt) => {
  console.log('收到消息:', evt.payload);
});

// 触发事件并传递数据
emitter.emit({ type: 'message', payload: 'Hello World' });
// 输出: 收到消息: Hello World
```

## **核心功能示例**
### **一次触发监听器**
```typescript
emitter.once('login', (event) => {
  console.log('用户登录成功:', event.payload?.userId);
});
emitter.emit('login', { userId: 123 }); // 输出
emitter.emit('login', { userId: 456 }); // 无输出
```

### **批量事件操作**
```typescript
emitter.on(['user-created', 'user-updated'], (event) => {
  console.log(`事件类型 ${event.type} 触发`);
});

emitter.emit('user-created'); // 输出: 事件类型 user-created 触发
emitter.emit('user-updated'); // 输出: 事件类型 user-updated 触发
```

### **传播控制**
```typescript
emitter.on('error', (event) => {
  console.log('第一个错误处理');
  event.stopImmediatePropagation(); // 阻止后续监听器执行
});

emitter.on('error', () => {
  console.log('第二个错误处理'); // 不会被执行
});

emitter.emit('error'); // 仅输出第一个错误处理
```

### **批量事件操作**
```typescript
emitter.on(['a', 'b'], (evt) => {
  console.log(`事件类型 ${evt.type} 触发`);
});
emitter.emit('a'); // 输出 "事件类型 a 触发"
emitter.emit('b'); // 输出 "事件类型 b 触发"
```

### **传播控制**
```typescript
emitter.on('test', (evt) => {
  console.log('第一个监听器');
  evt.stopImmediatePropagation();
});

emitter.on('test', () => {
  console.log('第二个监听器'); // 不会被执行
});
emitter.emit('test'); // 仅输出第一个监听器
```

---

## **核心类：`Emitter`**

### **构造函数**
```typescript
new Emitter()
```

### **方法**
1. **`on(eventType: string | string[], listener: Listener<this>)`**  
   添加事件监听器  
   **返回值**：`this`  
   **参数示例**：  
   ```typescript
   emitter.on('click', (event) => console.log(event.type));
   ```

2. **`once(eventType: string | string[], listener: Listener<this>)`**  
   添加仅触发一次的监听器  
   **返回值**：`this`  
   **参数示例**：  
   ```typescript
   emitter.once('init', () => console.log('初始化完成'));
   ```

3. **`off(eventType?: string | string[], listener?: Listener<this>)`**  
   移除监听器或清空所有监听器  
   **返回值**：`this`  
   **参数示例**：  
   ```typescript
   emitter.off('click', listener); // 移除指定监听器
   emitter.off(); // 清空所有监听器
   ```

4. **`emit(eventType: string | EventType)`**  
   触发指定事件并传递参数  
   **返回值**：`number`（执行的监听器数量）  
   **参数示例**：  
   ```typescript
   emitter.emit({ type: 'data', payload: { id: 1 } }); // 返回执行的监听器数量
   ```

5. **`listeners(eventType: string)`**  
   获取指定事件的所有监听器列表  
   **返回值**：`Listener[]`  
   **参数示例**：  
   ```typescript
   emitter.listeners('click'); // 返回 `click` 事件的监听器数组
   ```

6. **`listenerCount(eventType?: string)`**  
   获取指定事件或所有事件的监听器总数  
   **返回值**：`number`  
   **参数示例**：  
   ```typescript
   emitter.listenerCount('click'); // 指定事件的监听器数量
   emitter.listenerCount(); // 所有事件的监听器总数
   ```

7. **`removeAllListeners(eventType?: string | string[])`**  
   移除指定事件或所有事件的监听器  
   **返回值**：`this`  
   **参数示例**：  
   ```typescript
   emitter.removeAllListeners('click'); // 移除指定事件监听器
   emitter.removeAllListeners(); // 清空所有监听器
   ```

---

## **事件对象：`EEvent<T>`**
```typescript
class EEvent<T = Emitter> {
  type: string;                    // 事件类型
  target: unknown;                 // 事件源对象
  currentTarget: T;                // 触发事件的发射器实例
  propagationStarted: boolean;     // 传播状态（`stopImmediatePropagation` 后变为 false）
  payload?: any;                   // 通过 `EventType` 传递的自定义数据
  stopImmediatePropagation(): void;// 阻止当前事件继续传播
}
```

---

## **事件类型：`EventType`**
```typescript
interface EventType {
  type: string;   // 必须的事件类型
  payload?: any;  // 可选的自定义数据
}
```

**使用示例**：
```typescript
const customEvent: EventType = {
  type: 'user-login',
  payload: { userId: 123, timestamp: Date.now() }
};

emitter.emit(customEvent);
```

---

## **进阶用法**
### **混合模式（Mixin）**
将事件能力注入任意对象：
```typescript
import { mixin } from 'eemitt';

const myObject = { 
  value: 123,
  customMethod() { return 'Hello'; }
};

const mixed = mixin(myObject);

// 现在 myObject 可以使用事件方法
mixed.on('update', () => console.log('对象更新'));
mixed.emit('update'); // 输出: 对象更新

console.log(mixed.customMethod()); // 仍保留原有方法
```

### **监听器管理**
#### **安全移除监听器**
```typescript
const listener = (event) => console.log('监听器执行');
emitter.on('event', listener);
emitter.off('event', listener); // 安全移除
```

#### **监听器优先级**
```typescript
emitter.on('sort', (event) => console.log('第一个监听器'));
emitter.on('sort', (event) => console.log('第二个监听器'));
emitter.emit('sort'); // 输出顺序：第一个 → 第二个
```

---

## **浏览器支持**

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |