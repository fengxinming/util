import { describe, expect, it } from 'vitest';

import ceil from '../src/number/ceil';
import fitIndex from '../src/number/fitIndex';
import floor from '../src/number/floor';
import round from '../src/number/round';

describe('测试number方法集合', () => {
  it('测试 fitIndex 方法', () => {
    expect(fitIndex(null as any, 10)).toBe(0);
    expect(fitIndex(-1, 10)).toBe(9);
    expect(fitIndex(-11, 10)).toBe(0);
    expect(fitIndex(0, 10)).toBe(0);
    expect(fitIndex(5, 10)).toBe(5);
    expect(fitIndex(11, 10)).toBe(9);
  });

  it('测试 round 方法', () => {
    expect(round(null as any)).toBe(0);
    expect(round({} as any)).toBe(0);
    expect(round(105.05)).toBe(105);
    expect(round(9.2, 1.01)).toBe(9.2);
    expect(round(55, 1)).toBe(55);
    expect(round(54.9, 1)).toBe(54.9);
    expect(round(-55, 1)).toBe(-55);
    expect(round(-55.1, 1)).toBe(-55.1);
    expect(round(55.55, -1)).toBe(60);
    expect(round(55.549, -1)).toBe(60);
    expect(round(-55.55, -1)).toBe(-60);
    expect(round(-55.551, -1)).toBe(-60);

    // bug - 0.04
    expect(Number(0.035).toFixed(2)).toBe(Number(0.045).toFixed(2));
    expect(round(0.045, 2)).toBe(0.05);

    // bug - 3.6
    expect(Number(3.65).toFixed(1)).toBe('3.6');
    expect(round(3.65, 1)).toBe(3.7);

    // bug - 139.60
    expect(Number(139.605).toFixed(2)).toBe('139.60');
    expect(round(139.605, 2)).toBe(139.61);
  });

  it('测试 ceil 方法', () => {
    expect(ceil(null as any)).toBe(0);
    expect(ceil({} as any)).toBe(0);
    expect(ceil(105.05)).toBe(106);
    expect(ceil(9.1, 1.01)).toBe(9.1);
    expect(ceil(55.51, 1)).toBe(55.6);
    expect(ceil(51, 1)).toBe(51);
    expect(ceil(55.51, -1)).toBe(60);
    expect(ceil(51, -1)).toBe(60);
    expect(ceil(-55.59, -1)).toBe(-50);
    expect(ceil(-59, -1)).toBe(-50);
  });

  it('测试 floor 方法', () => {
    expect(floor(null as any)).toBe(0);
    expect(floor({} as any)).toBe(0);
    expect(floor(105.05)).toBe(105);
    expect(floor(9.9, 1.01)).toBe(9.9);
    expect(floor(55.59, 1)).toBe(55.5);
    expect(floor(59, 1)).toBe(59);
    expect(floor(55.59, -1)).toBe(50);
    expect(floor(59, -1)).toBe(50);
    expect(floor(-55.51, -1)).toBe(-60);
    expect(floor(-51, -1)).toBe(-60);
  });
});
