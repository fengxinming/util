// daysInMonth.test.ts
import moment from 'moment';
import { describe, expect, it } from 'vitest';

import daysInMonth from '../src/daysInMonth';

describe('daysInMonth', () => {
  describe('getting the number of days in the month', () => {
    it('should return 31 for January 2023', () => {
      const date = new Date('2023-01-01');
      const momentDate = moment(date);
      expect(daysInMonth(date)).toBe(momentDate.daysInMonth());
    });

    it('should return 28 for February 2023', () => {
      const date = new Date('2023-02-01');
      const momentDate = moment(date);
      expect(daysInMonth(date)).toBe(momentDate.daysInMonth());
    });

    it('should return 29 for February 2024 (leap year)', () => {
      const date = new Date('2024-02-01');
      const momentDate = moment(date);
      expect(daysInMonth(date)).toBe(momentDate.daysInMonth());
    });

    it('should return 31 for March 2023', () => {
      const date = new Date('2023-03-01');
      const momentDate = moment(date);
      expect(daysInMonth(date)).toBe(momentDate.daysInMonth());
    });

    it('should return 30 for April 2023', () => {
      const date = new Date('2023-04-01');
      const momentDate = moment(date);
      expect(daysInMonth(date)).toBe(momentDate.daysInMonth());
    });

    it('should return 31 for May 2023', () => {
      const date = new Date('2023-05-01');
      const momentDate = moment(date);
      expect(daysInMonth(date)).toBe(momentDate.daysInMonth());
    });

    it('should return 30 for June 2023', () => {
      const date = new Date('2023-06-01');
      const momentDate = moment(date);
      expect(daysInMonth(date)).toBe(momentDate.daysInMonth());
    });

    it('should return 31 for July 2023', () => {
      const date = new Date('2023-07-01');
      const momentDate = moment(date);
      expect(daysInMonth(date)).toBe(momentDate.daysInMonth());
    });

    it('should return 31 for August 2023', () => {
      const date = new Date('2023-08-01');
      const momentDate = moment(date);
      expect(daysInMonth(date)).toBe(momentDate.daysInMonth());
    });

    it('should return 30 for September 2023', () => {
      const date = new Date('2023-09-01');
      const momentDate = moment(date);
      expect(daysInMonth(date)).toBe(momentDate.daysInMonth());
    });

    it('should return 31 for October 2023', () => {
      const date = new Date('2023-10-01');
      const momentDate = moment(date);
      expect(daysInMonth(date)).toBe(momentDate.daysInMonth());
    });

    it('should return 30 for November 2023', () => {
      const date = new Date('2023-11-01');
      const momentDate = moment(date);
      expect(daysInMonth(date)).toBe(momentDate.daysInMonth());
    });

    it('should return 31 for December 2023', () => {
      const date = new Date('2023-12-01');
      const momentDate = moment(date);
      expect(daysInMonth(date)).toBe(momentDate.daysInMonth());
    });
  });
});
