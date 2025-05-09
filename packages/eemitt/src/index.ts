export type Listener<T = Emitter> = ((evt: EEvent<T>) => void) & { fn?: Listener };

export interface EventType {
  type: string;
  payload?: any;
}


function removeListener(
  events: Map<string, Listener[]>,
  eventType: string,
  fn: Listener<any>
): void {
  const currentListeners = events.get(eventType);

  if (currentListeners === void 0) {
    return;
  }

  events.set(eventType, currentListeners.filter((listener) => {
    return listener !== fn && listener.fn !== fn;
  }));
}

function addListener(
  emitter: Emitter,
  eventType: string,
  fn: Listener,
  once: boolean
): void {
  const { __listeners } = emitter;
  let currentListeners = __listeners.get(eventType);

  if (currentListeners === void 0) {
    currentListeners = [];
    __listeners.set(eventType, currentListeners);
  }

  const type = typeof fn;
  if (type !== 'function') {
    console.warn(`Expect a function to bind "${eventType}" event, but got a ${type}.`);
    return;
  }

  let listener: Listener =  fn;
  if (once) {
    listener = function (evt: EEvent<typeof emitter>) {
      removeListener(emitter.__listeners, eventType, fn);
      fn(evt);
    };
    listener.fn = fn;
  }

  currentListeners.push(listener);
}

function addListeners(
  emitter: Emitter,
  eventType: string | string[],
  fn: Listener<any>,
  once: boolean
): void {
  if (Array.isArray(eventType)) {
    eventType.forEach((n) => {
      addListener(emitter, n, fn, once);
    });
  }
  else {
    addListener(emitter, eventType, fn, once);
  }
}


export class EEvent<T> {
  type: string;
  target: unknown;
  currentTarget: T;
  propagationStarted: boolean;
  payload?: any;

  constructor(eventType: EventType, currentTarget: T) {
    this.target = currentTarget;
    this.currentTarget = currentTarget;
    this.propagationStarted = true;
    this.type = eventType.type;
    this.payload = eventType.payload;
  }

  stopImmediatePropagation(): void {
    this.propagationStarted = false;
  }
}

export class Emitter {
  __listeners: Map<string, Listener[]>;
  addListener!: (eventType: string | string[], listener: Listener<this>) => this;
  removeListener!: (eventType?: string | string[], listener?: Listener<this>) => this;

  constructor() {
    this.__listeners = new Map();
  }

  on(eventType: string | string[], listener: Listener<this>): this {
    addListeners(this, eventType, listener, false);
    return this;
  }

  once(eventType: string | string[], listener: Listener<this>): this {
    addListeners(this, eventType, listener, true);
    return this;
  }

  off(eventType?: string | string[], listener?: Listener<this>): this {
    const { __listeners } = this;
    if (eventType === void 0 && listener === void 0) {
      __listeners.clear();
      return this;
    }

    if (eventType) {
      if (listener === void 0) {
        if (Array.isArray(eventType)) {
          eventType.forEach((eventType) => {
            __listeners.delete(eventType);
          });
          return this;
        }

        __listeners.delete(eventType);
        return this;
      }

      const type = typeof listener;
      if (type !== 'function') {
        console.warn(`Expect a function to bind "${eventType}" event, but got a ${type}.`);
        return this;
      }

      if (Array.isArray(eventType)) {
        eventType.forEach((n) => {
          removeListener(__listeners, n, listener);
        });
      }
      else {
        removeListener(__listeners, eventType, listener);
      }
    }
    return this;
  }

  emit(eventType: EventType): number;
  emit(eventType: string, payload?: any): number;
  emit(eventType: string | EventType, payload?: any): number {
    if (typeof eventType === 'string') {
      eventType = {
        type: eventType,
        payload
      };
    }
    const evt = new EEvent(eventType, this);
    const { type } = evt;
    const { __listeners } = this;
    const currentListeners = __listeners.get(type);
    let i = 0;

    if (currentListeners === void 0) {
      return i;
    }

    const duplicates = currentListeners.slice(0);
    for (const len = duplicates.length; i < len; i++) {
      // 执行事件回调函数
      duplicates[i](evt);

      // 试图阻止当前事件广播
      if (evt.propagationStarted === false) {
        break;
      }
    }
    return i;
  }

  listeners(eventType: string): Listener[] {
    return this.__listeners.get(eventType) || [];
  }

  listenerCount(eventType?: string): number {
    if (eventType) {
      return this.listeners(eventType).length;
    }

    let totalCount = 0;
    for (const fns of this.__listeners.values()) {
      totalCount += fns.length;
    }
    return totalCount;
  }

  removeAllListeners(eventType?: string | string[]): this {
    return this.off(eventType);
  }
}

const proto = Emitter.prototype;
// Aliases
proto.addListener = proto.on;
proto.removeListener = proto.off;

export function mixin<T extends object>(object: T): T & Emitter {
  const emitter = object as T & Emitter;
  Object.getOwnPropertyNames(proto).forEach((key) => {
    if (key === 'constructor') {
      return;
    }
    emitter[key] = proto[key];
  });
  emitter.__listeners = new Map();
  return emitter;
}

export default Emitter;
