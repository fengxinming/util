import moment from 'moment';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import format from '../src/format';

describe('format', () => {
  // // 清除 mockdate 设置
  // afterEach(() => {
  //   MockDate.reset();
  // });

  it('should format date with "YYYY-MM-DD" format', () => {
    const date = new Date('2023-10-01T12:00:00');
    const result = format(date, 'YYYY-MM-DD');
    const expected = moment(date).format('YYYY-MM-DD');
    expect(result).toBe(expected);
  });

  it('should format date with "YYYY-MM-DD HH:mm:ss" format', () => {
    const date = new Date('2023-10-01T12:30:45');
    const result = format(date, 'YYYY-MM-DD HH:mm:ss');
    const expected = moment(date).format('YYYY-MM-DD HH:mm:ss');
    expect(result).toBe(expected);
  });

  it('should format date with "YYYY-MM-DDTHH:mm:ssZ" format', () => {
    const date = new Date('2023-10-01T12:30:45');
    const result = format(date, 'YYYY-MM-DDTHH:mm:ss[Z]');
    const expected = moment(date).format('YYYY-MM-DDTHH:mm:ss[Z]');
    expect(result).toBe(expected);
  });

  it('should format date with "ISO" format', () => {
    const date = new Date('2023-10-01T12:30:45');
    const result = format(date, 'ISO');
    const expected = date.toISOString();
    expect(result).toBe(expected);
  });

  it('should format date with "YY" format', () => {
    const date = new Date('2023-10-01T12:00:00');
    const result = format(date, 'YY');
    const expected = moment(date).format('YY');
    expect(result).toBe(expected);
  });

  it('should format date with "yyyy" format', () => {
    const date = new Date('2023-10-01T12:00:00');
    const result = format(date, 'yyyy');
    const expected = moment(date).format('YYYY');
    expect(result).toBe(expected);
  });

  it('should format date with "M" format', () => {
    const date = new Date('2023-10-01T12:00:00');
    const result = format(date, 'M');
    const expected = moment(date).format('M');
    expect(result).toBe(expected);
  });

  it('should format date with "MM" format', () => {
    const date = new Date('2023-10-01T12:00:00');
    const result = format(date, 'MM');
    const expected = moment(date).format('MM');
    expect(result).toBe(expected);
  });

  it('should format date with "D" format', () => {
    const date = new Date('2023-10-01T12:00:00');
    const result = format(date, 'D');
    const expected = moment(date).format('D');
    expect(result).toBe(expected);
  });

  it('should format date with "DD" format', () => {
    const date = new Date('2023-10-01T12:00:00');
    const result = format(date, 'DD');
    const expected = moment(date).format('DD');
    expect(result).toBe(expected);
  });

  it('should format date with "H" format', () => {
    const date = new Date('2023-10-01T12:00:00');
    const result = format(date, 'H');
    const expected = moment(date).format('H');
    expect(result).toBe(expected);
  });

  it('should format date with "HH" format', () => {
    const date = new Date('2023-10-01T12:00:00');
    const result = format(date, 'HH');
    const expected = moment(date).format('HH');
    expect(result).toBe(expected);
  });

  it('should format date with "h" format', () => {
    const date = new Date('2023-10-01T12:00:00');
    const result = format(date, 'h');
    const expected = moment(date).format('h');
    expect(result).toBe(expected);
  });

  it('should format date with "hh" format', () => {
    const date = new Date('2023-10-01T12:00:00');
    const result = format(date, 'hh');
    const expected = moment(date).format('hh');
    expect(result).toBe(expected);
  });

  it('should format date with "m" format', () => {
    const date = new Date('2023-10-01T12:30:00');
    const result = format(date, 'm');
    const expected = moment(date).format('m');
    expect(result).toBe(expected);
  });

  it('should format date with "mm" format', () => {
    const date = new Date('2023-10-01T12:30:00');
    const result = format(date, 'mm');
    const expected = moment(date).format('mm');
    expect(result).toBe(expected);
  });

  it('should format date with "s" format', () => {
    const date = new Date('2023-10-01T12:30:45');
    const result = format(date, 's');
    const expected = moment(date).format('s');
    expect(result).toBe(expected);
  });

  it('should format date with "ss" format', () => {
    const date = new Date('2023-10-01T12:30:45');
    const result = format(date, 'ss');
    const expected = moment(date).format('ss');
    expect(result).toBe(expected);
  });

  it('should format date with "SSS" format', () => {
    const date = new Date('2023-10-01T12:30:45.123');
    const result = format(date, 'SSS');
    const expected = moment(date).format('SSS');
    expect(result).toBe(expected);
  });

  it('should format date with "Z" format', () => {
    const date = new Date('2023-10-01T12:30:45');
    const result = format(date, 'Z');
    const expected = moment(date).format('Z');
    expect(result).toBe(expected);
  });

  it('should format date with "ZZ" format', () => {
    const date = new Date('2023-10-01T12:30:45');
    const result = format(date, 'ZZ');
    const expected = moment(date).format('ZZ');
    expect(result).toBe(expected);
  });

  describe('formatting with mock date in UTC-5 (EST)', () => {
    beforeAll(() => {
      // 设置模拟时间为 2023-10-01T12:30:45 UTC
      // MockDate.set('2023-10-01T12:30:45Z');
      // 设置时区为 UTC-5
      process.env.TZ = 'America/New_York';
    });

    afterAll(() => {
      delete process.env.TZ;
    });

    it('should format date with "YYYY-MM-DD" format in UTC-5', () => {
      const date = new Date();
      const result = format(date, 'YYYY-MM-DD');
      const expected = moment(date).format('YYYY-MM-DD');
      expect(result).toBe(expected);
    });

    it('should format date with "YYYY-MM-DD HH:mm:ss" format in UTC-5', () => {
      const date = new Date();
      const result = format(date, 'YYYY-MM-DD HH:mm:ss');
      const expected = moment(date).format('YYYY-MM-DD HH:mm:ss');
      expect(result).toBe(expected);
    });

    it('should format date with "YYYY-MM-DDTHH:mm:ssZ" format in UTC-5', () => {
      const date = new Date();
      const result = format(date, 'YYYY-MM-DDTHH:mm:ssZ');
      const expected = moment(date).format('YYYY-MM-DDTHH:mm:ssZ');
      expect(result).toBe(expected);
    });

    it('should format date with "ISO" format in UTC-5', () => {
      const date = new Date();
      const result = format(date, 'ISO');
      const expected = date.toISOString();
      expect(result).toBe(expected);
    });

    it('should format date with "YY" format in UTC-5', () => {
      const date = new Date();
      const result = format(date, 'YY');
      const expected = moment(date).format('YY');
      expect(result).toBe(expected);
    });

    it('should format date with "yyyy" format in UTC-5', () => {
      const date = new Date();
      const result = format(date, 'yyyy');
      const expected = moment(date).format('YYYY');
      expect(result).toBe(expected);
    });

    it('should format date with "M" format in UTC-5', () => {
      const date = new Date();
      const result = format(date, 'M');
      const expected = moment(date).format('M');
      expect(result).toBe(expected);
    });

    it('should format date with "MM" format in UTC-5', () => {
      const date = new Date();
      const result = format(date, 'MM');
      const expected = moment(date).format('MM');
      expect(result).toBe(expected);
    });

    it('should format date with "D" format in UTC-5', () => {
      const date = new Date();
      const result = format(date, 'D');
      const expected = moment(date).format('D');
      expect(result).toBe(expected);
    });

    it('should format date with "DD" format in UTC-5', () => {
      const date = new Date();
      const result = format(date, 'DD');
      const expected = moment(date).format('DD');
      expect(result).toBe(expected);
    });

    it('should format date with "H" format in UTC-5', () => {
      const date = new Date();
      const result = format(date, 'H');
      const expected = moment(date).format('H');
      expect(result).toBe(expected);
    });

    it('should format date with "HH" format in UTC-5', () => {
      const date = new Date();
      const result = format(date, 'HH');
      const expected = moment(date).format('HH');
      expect(result).toBe(expected);
    });

    it('should format date with "h" format in UTC-5', () => {
      const date = new Date();
      const result = format(date, 'h');
      const expected = moment(date).format('h');
      expect(result).toBe(expected);
    });

    it('should format date with "hh" format in UTC-5', () => {
      const date = new Date();
      const result = format(date, 'hh');
      const expected = moment(date).format('hh');
      expect(result).toBe(expected);
    });

    it('should format date with "m" format in UTC-5', () => {
      const date = new Date();
      const result = format(date, 'm');
      const expected = moment(date).format('m');
      expect(result).toBe(expected);
    });

    it('should format date with "mm" format in UTC-5', () => {
      const date = new Date();
      const result = format(date, 'mm');
      const expected = moment(date).format('mm');
      expect(result).toBe(expected);
    });

    it('should format date with "s" format in UTC-5', () => {
      const date = new Date();
      const result = format(date, 's');
      const expected = moment(date).format('s');
      expect(result).toBe(expected);
    });

    it('should format date with "ss" format in UTC-5', () => {
      const date = new Date();
      const result = format(date, 'ss');
      const expected = moment(date).format('ss');
      expect(result).toBe(expected);
    });

    it('should format date with "SSS" format in UTC-5', () => {
      const date = new Date();
      const result = format(date, 'SSS');
      const expected = moment(date).format('SSS');
      expect(result).toBe(expected);
    });

    it('should format date with "Z" format in UTC-5', () => {
      const date = new Date();
      const result = format(date, 'Z');
      const expected = moment(date).format('Z');
      expect(result).toBe(expected);
    });

    it('should format date with "ZZ" format in UTC-5', () => {
      const date = new Date();
      const result = format(date, 'ZZ');
      const expected = moment(date).format('ZZ');
      expect(result).toBe(expected);
    });
  });

  describe('formatting with mock date in UTC+0 (London)', () => {
    beforeAll(() => {
      // 设置时区为 UTC+0
      process.env.TZ = 'Europe/London';
    });

    afterAll(() => {
      delete process.env.TZ;
    });

    it('should format date with "YYYY-MM-DD" format in UTC+0', () => {
      const date = new Date();
      const result = format(date, 'YYYY-MM-DD');
      const expected = moment(date).format('YYYY-MM-DD');
      expect(result).toBe(expected);
    });

    it('should format date with "YYYY-MM-DD HH:mm:ss" format in UTC+0', () => {
      const date = new Date();
      const result = format(date, 'YYYY-MM-DD HH:mm:ss');
      const expected = moment(date).format('YYYY-MM-DD HH:mm:ss');
      expect(result).toBe(expected);
    });

    it('should format date with "YYYY-MM-DDTHH:mm:ssZ" format in UTC+0', () => {
      const date = new Date();
      const result = format(date, 'YYYY-MM-DDTHH:mm:ssZ');
      const expected = moment(date).format('YYYY-MM-DDTHH:mm:ssZ');
      expect(result).toBe(expected);
    });

    it('should format date with "ISO" format in UTC+0', () => {
      const date = new Date();
      const result = format(date, 'ISO');
      const expected = date.toISOString();
      expect(result).toBe(expected);
    });

    it('should format date with "YY" format in UTC+0', () => {
      const date = new Date();
      const result = format(date, 'YY');
      const expected = moment(date).format('YY');
      expect(result).toBe(expected);
    });

    it('should format date with "yyyy" format in UTC+0', () => {
      const date = new Date();
      const result = format(date, 'yyyy');
      const expected = moment(date).format('YYYY');
      expect(result).toBe(expected);
    });

    it('should format date with "M" format in UTC+0', () => {
      const date = new Date();
      const result = format(date, 'M');
      const expected = moment(date).format('M');
      expect(result).toBe(expected);
    });

    it('should format date with "MM" format in UTC+0', () => {
      const date = new Date();
      const result = format(date, 'MM');
      const expected = moment(date).format('MM');
      expect(result).toBe(expected);
    });

    it('should format date with "D" format in UTC+0', () => {
      const date = new Date();
      const result = format(date, 'D');
      const expected = moment(date).format('D');
      expect(result).toBe(expected);
    });

    it('should format date with "DD" format in UTC+0', () => {
      const date = new Date();
      const result = format(date, 'DD');
      const expected = moment(date).format('DD');
      expect(result).toBe(expected);
    });

    it('should format date with "H" format in UTC+0', () => {
      const date = new Date();
      const result = format(date, 'H');
      const expected = moment(date).format('H');
      expect(result).toBe(expected);
    });

    it('should format date with "HH" format in UTC+0', () => {
      const date = new Date();
      const result = format(date, 'HH');
      const expected = moment(date).format('HH');
      expect(result).toBe(expected);
    });

    it('should format date with "h" format in UTC+0', () => {
      const date = new Date();
      const result = format(date, 'h');
      const expected = moment(date).format('h');
      expect(result).toBe(expected);
    });

    it('should format date with "hh" format in UTC+0', () => {
      const date = new Date();
      const result = format(date, 'hh');
      const expected = moment(date).format('hh');
      expect(result).toBe(expected);
    });

    it('should format date with "m" format in UTC+0', () => {
      const date = new Date();
      const result = format(date, 'm');
      const expected = moment(date).format('m');
      expect(result).toBe(expected);
    });

    it('should format date with "mm" format in UTC+0', () => {
      const date = new Date();
      const result = format(date, 'mm');
      const expected = moment(date).format('mm');
      expect(result).toBe(expected);
    });

    it('should format date with "s" format in UTC+0', () => {
      const date = new Date();
      const result = format(date, 's');
      const expected = moment(date).format('s');
      expect(result).toBe(expected);
    });

    it('should format date with "ss" format in UTC+0', () => {
      const date = new Date();
      const result = format(date, 'ss');
      const expected = moment(date).format('ss');
      expect(result).toBe(expected);
    });

    it('should format date with "SSS" format in UTC+0', () => {
      const date = new Date();
      const result = format(date, 'SSS');
      const expected = moment(date).format('SSS');
      expect(result).toBe(expected);
    });

    it('should format date with "Z" format in UTC+0', () => {
      const date = new Date();
      const result = format(date, 'Z');
      const expected = moment(date).format('Z');
      expect(result).toBe(expected);
    });

    it('should format date with "ZZ" format in UTC+0', () => {
      const date = new Date();
      const result = format(date, 'ZZ');
      const expected = moment(date).format('ZZ');
      expect(result).toBe(expected);
    });
  });
});
