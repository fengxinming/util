// dayOfYear.test.ts
import moment from 'moment';
import { describe, expect, it } from 'vitest';

import dayOfYear from '../src/dayOfYear';

describe('dayOfYear', () => {
  describe('getting the day of the year', () => {
    it('should return 274 for October 1st, 2023', () => {
      const date = new Date('2023-10-01');
      const momentDate = moment(+date);
      expect(dayOfYear(date)).toBe(momentDate.dayOfYear());
    });

    it('should return 1 for January 1st, 2023', () => {
      const date = new Date('2023-01-01');
      const momentDate = moment(+date);
      expect(dayOfYear(date)).toBe(momentDate.dayOfYear());
    });

    it('should return 365 for December 31st, 2023', () => {
      const date = new Date('2023-12-31');
      const momentDate = moment(+date);
      expect(dayOfYear(date)).toBe(momentDate.dayOfYear());
    });

    it('should return 366 for December 31st, 2024 (leap year)', () => {
      const date = new Date('2024-12-31');
      const momentDate = moment(+date);
      expect(dayOfYear(date)).toBe(momentDate.dayOfYear());
    });
  });

  describe('setting the day of the year', () => {
    it('should set the date to October 1st, 2023 when setting day 274', () => {
      const date = new Date('2023-01-01');
      const momentDate = moment(+date);
      expect(dayOfYear(date, 274)).toEqual(momentDate.dayOfYear(274).toDate());
    });

    it('should set the date to January 1st, 2023 when setting day 1', () => {
      const date = new Date('2023-01-01');
      const momentDate = moment(+date);
      expect(dayOfYear(date, 1)).toEqual(momentDate.dayOfYear(1).toDate());
    });

    it('should set the date to December 31st, 2023 when setting day 365', () => {
      const date = new Date('2023-01-01');
      const momentDate = moment(+date);
      expect(dayOfYear(date, 365)).toEqual(momentDate.dayOfYear(365).toDate());
    });

    it('should set the date to December 31st, 2024 when setting day 366 (leap year)', () => {
      const date = new Date('2024-01-01');
      const momentDate = moment(+date);
      expect(dayOfYear(date, 366)).toEqual(momentDate.dayOfYear(366).toDate());
    });
  });
});
