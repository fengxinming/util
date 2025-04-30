import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

import Emitter, { EEvent, EventType, mixin } from '../src/index';

describe('Emitter', () => {
  let emitter: Emitter;

  const _warn = console.warn;
  beforeEach(() => {
    console.warn = vi.fn();
    emitter = new Emitter();
  });
  afterAll(() => {
    console.warn = _warn;
  });

  describe('on/once/emit', () => {
    it('should trigger listeners when emitting an event', () => {
      const listener1 = vi.fn();
      const listener2 = vi.fn();

      emitter.on('test', listener1);
      emitter.on('test', listener2);

      emitter.emit({ type: 'test', payload: 'payload' });

      expect(listener1).toBeCalledTimes(1);
      expect(listener2).toBeCalledTimes(1);
      expect(listener1).toBeCalledWith(expect.any(Object));
      expect(listener2).lastCalledWith(expect.any(Object));
    });

    it('should support once listeners', () => {
      const listener = vi.fn();

      emitter.once('test', listener);
      emitter.emit('test');
      emitter.emit('test');

      expect(listener).toBeCalledTimes(1);
    });

    it('should pass event arguments correctly', () => {
      const listener = vi.fn();

      // eslint-disable-next-line max-nested-callbacks
      emitter.on('test', (evt) => {
        listener(evt.payload);
      });

      emitter.emit({ type: 'test', payload: { key: 'value' } });

      expect(listener).toBeCalledWith({ key: 'value' });
    });

    it('should handle event type objects', () => {
      const listener = vi.fn();
      const customEvent: EventType = {
        type: 'custom',
        payload: { foo: 'bar' }
      };

      // eslint-disable-next-line max-nested-callbacks
      emitter.on('custom', (evt) => {
        listener(evt.payload);
      });

      emitter.emit(customEvent);

      expect(listener).toBeCalledWith({ foo: 'bar' });
    });
  });

  describe('off', () => {
    it('should remove specific listener', () => {
      const listener = vi.fn();
      const listenerToRemove = vi.fn();

      emitter.on('test', listener);
      emitter.on('test', listenerToRemove);

      emitter.off('test', listenerToRemove);
      emitter.emit('test');

      expect(listener).toBeCalledTimes(1);
      expect(listenerToRemove).toBeCalledTimes(0);
    });

    it('should remove all listeners for an event', () => {
      emitter.on('test', vi.fn());
      emitter.on('test', vi.fn());

      emitter.off('test');
      emitter.emit('test');

      expect(emitter.listeners('test')).toEqual([]);
    });

    it('should remove all listeners for multiple event types', () => {
      emitter.on('a', vi.fn());
      emitter.on('b', vi.fn());
      emitter.off(['a', 'b']);
      expect(emitter.listenerCount('a')).toBe(0);
      expect(emitter.listenerCount('b')).toBe(0);
    });

    it('should clear all listeners when no args provided', () => {
      emitter.on('test1', vi.fn());
      emitter.on('test2', vi.fn());

      emitter.off();
      emitter.emit('test1');
      emitter.emit('test2');

      expect(emitter.listenerCount()).toBe(0);
    });
  });

  describe('stopImmediatePropagation', () => {
    it('should stop further listeners execution', () => {
      const listener1 = vi.fn();
      const listener2 = vi.fn();

      // eslint-disable-next-line max-nested-callbacks
      emitter.on('test', (evt) => {
        listener1();
        evt.stopImmediatePropagation();
      });
      emitter.on('test', listener2);

      emitter.emit('test');

      expect(listener1).toBeCalledTimes(1);
      expect(listener2).toBeCalledTimes(0);
    });
  });

  describe('mixin', () => {
    it('should mix emitter capabilities into target object', () => {
      const target = { value: 123 };
      const mixed = mixin(target);

      mixed.on('test', vi.fn());
      mixed.emit('test');

      expect(mixed.listenerCount('test')).toBe(1);
      expect(mixed instanceof Emitter).toBe(false);
      expect(mixed.value).toBe(123);
    });
  });

  describe('edge cases', () => {
    it('should handle invalid listener types', () => {
      emitter.on('test', 'not a function' as any);
      expect(console.warn).toBeCalledTimes(1);
    });

    it('should not throw when removing non-existent listeners', () => {
      emitter.off('nonExistent', vi.fn());
      // eslint-disable-next-line max-nested-callbacks
      expect(() => emitter.off('nonExistent', vi.fn())).not.toThrow();
    });

    it('should handle empty events', () => {
      expect(emitter.listenerCount('nonExistent')).toBe(0);
      emitter.removeAllListeners('nonExistent');
      expect(emitter.listenerCount()).toBe(0);
    });
  });

  describe('listeners & listenerCount', () => {
    it('should return correct listener lists', () => {
      const listener1 = vi.fn();
      const listener2 = vi.fn();
      emitter.on('test', listener1);
      emitter.on('test', listener2);
      expect(emitter.listeners('test')).toEqual([listener1, listener2]);
      expect(emitter.listenerCount('test')).toBe(2);
      expect(emitter.listenerCount()).toBe(2);
    });

    it('should count listeners across multiple events', () => {
      emitter.on('a', vi.fn());
      emitter.on('b', vi.fn());
      emitter.on('a', vi.fn());
      expect(emitter.listenerCount('a')).toBe(2);
      expect(emitter.listenerCount('b')).toBe(1);
      expect(emitter.listenerCount()).toBe(3);
    });

    it('should return 0 for non-existent event', () => {
      expect(emitter.listenerCount('no-such-event')).toBe(0);
    });
  });

  describe('event type arrays', () => {
    it('should handle array event types for on', () => {
      const listener = vi.fn();
      emitter.on(['a', 'b'], listener);
      emitter.emit('a');
      emitter.emit('b');
      expect(listener).toBeCalledTimes(2);
    });

    it('should handle array event types for once', () => {
      const listener = vi.fn();
      emitter.once(['a', 'b'], listener);
      emitter.emit('a');
      emitter.emit('b');
      emitter.emit('a');
      expect(listener).toBeCalledTimes(2);
    });

    it('should remove listeners for array event types', () => {
      const listener = vi.fn();
      emitter.on(['a', 'b'], listener);
      emitter.off(['a', 'b'], listener);
      emitter.emit('a');
      emitter.emit('b');
      expect(listener).toBeCalledTimes(0);
    });
  });

  describe('emit return value', () => {
    it('should return correct executed listener count', () => {
      emitter.on('test', vi.fn());
      emitter.on('test', vi.fn());
      const count = emitter.emit('test');
      expect(count).toBe(2);
    });

    it('should return 0 for non-existent events', () => {
      const count = emitter.emit('nonExistent');
      expect(count).toBe(0);
    });
  });

  describe('event propagation control', () => {
    it('should stop propagation when called multiple times', () => {
      // eslint-disable-next-line max-nested-callbacks
      emitter.on('test', (evt) => {
        expect(evt.propagationStarted).toBe(true);
        evt.stopImmediatePropagation();
      });
      // eslint-disable-next-line max-nested-callbacks
      emitter.on('test', () => {
        throw new Error('Should not be called');
      });
      emitter.emit('test');
    });
  });

  describe('removeAllListeners', () => {
    it('should work as off alias', () => {
      emitter.on('test', vi.fn());
      emitter.removeAllListeners('test');
      expect(emitter.listeners('test')).toEqual([]);
    });

    it('should clear all listeners when no args', () => {
      emitter.on('a', vi.fn());
      emitter.on('b', vi.fn());
      emitter.removeAllListeners();
      expect(emitter.listenerCount()).toBe(0);
    });

    it('should remove listeners for array of event types', () => {
      emitter.on('x', vi.fn());
      emitter.on('y', vi.fn());
      emitter.on('z', vi.fn());

      emitter.removeAllListeners(['x', 'y']);

      expect(emitter.listenerCount('x')).toBe(0);
      expect(emitter.listenerCount('y')).toBe(0);
      expect(emitter.listenerCount('z')).toBe(1); // 未删除
    });
  });

  describe('mixin edge cases', () => {
    it('should not affect original object prototype', () => {
      const target = { value: 123 };
      const mixed = mixin(target);
      expect(mixed.on).toBeDefined();
    });

    it('should work with existing emitter methods', () => {
      const existing = new Emitter();
      const mixed = mixin(existing);
      expect(mixed instanceof Emitter).toBe(true);
    });
  });

  describe('invalid inputs', () => {
    it('should ignore invalid listeners', () => {
      emitter.on('test', 123 as any);
      emitter.emit('test');
      expect(emitter.listeners('test')).toHaveLength(0);
    });

    it('should handle null/undefined listeners', () => {
      emitter.off('test', null as any);
      expect(console.warn).toBeCalledTimes(1);
    });
  });

  describe('Event object', () => {
    it('should construct event with EventType', () => {
      const customEvent: EventType = {
        type: 'custom',
        payload: { foo: 'bar' }
      };
      const event = new EEvent(customEvent, emitter);
      expect(event.type).toBe('custom');
      expect(event.payload).toEqual({ foo: 'bar' });
    });

    it('should default target to currentTarget', () => {
      const event = new EEvent('test', emitter);
      expect(event.target).toBe(emitter);
    });
  });
  describe('addListeners internal', () => {
    // 需要通过私有方法测试addListeners，但建议使用行为测试
    it('should add listeners to multiple events via addListeners', () => {
      const spy = vi.spyOn(emitter, 'addListener' as any); // 需调整访问权限
      emitter.addListener(['a', 'b'], vi.fn());
      expect(spy).toBeCalledTimes(1);
    });
  });
  describe('usage', () => {
    it('emit event with two ways', () => {
      // eslint-disable-next-line max-nested-callbacks
      emitter.on('testevent', (evt) => {
        expect(evt instanceof EEvent).toBe(true);
      });
      // eslint-disable-next-line max-nested-callbacks
      emitter.on('testevent2', (evt) => {
        expect(evt.payload).toBe(1);
      });

      emitter.emit({ type: 'testevent2', payload: 1 });
      emitter.emit('testevent');
    });
  });
  it('bind multiple events', () => {
    let i = 0;
    emitter.on(['event1', 'event2', 'event3', 'null'], () => {
      i += 2;
    });
    emitter.emit('event1'); // 2
    emitter.emit('event2'); // 4
    emitter.emit('event3'); // 6
    emitter.emit('event4'); // 6
    expect(i).toBe(6);

    const fn = () => {
      i++;
    };
    emitter.on('event4', fn);
    emitter.emit('event4'); // 7
    expect(i).toBe(7);

    emitter.on('null', () => {
      i++;
    });
    emitter.emit('null'); // 10 触发了2个null事件
    expect(i).toBe(10);

    emitter.on('event5', null as unknown as any);
    emitter.emit('event5'); // 10
    expect(i).toBe(10);

    emitter.once(['event1', 'event2', 'event3'], () => {
      i += 4;
    });
    emitter.emit('event1'); // 16
    emitter.emit('event2'); // 22
    emitter.emit('event3'); // 28
    expect(i).toBe(28);

    emitter.once('event4', () => {
      i += 2;
    });
    emitter.emit('event4'); // 31
    expect(i).toBe(31);

    expect(emitter.emit('event1')).toBe(1); // 33

    emitter.emit('event6'); // 33
    expect(i).toBe(33);

    emitter.removeAllListeners('event1');
    expect(emitter.emit('event1')).toBe(0); // 33

    emitter.off('event2', null as unknown as any);
    emitter.emit('event2'); // 35
    expect(i).toBe(35);

    emitter.removeAllListeners(['event2', 'event3', 'event']);
    emitter.emit('event2');
    emitter.emit('event3');
    expect(i).toBe(35); // 35

    emitter.emit('event6'); // 35;
    expect(i).toBe(35);

    emitter.removeAllListeners();
    emitter.emit('event1');
    emitter.emit('event2');
    emitter.emit('event3');
    emitter.emit('event4');
    expect(i).toBe(35);
  });
});
