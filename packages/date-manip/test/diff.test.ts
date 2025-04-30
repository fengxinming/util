// diff.test.ts
import moment from 'moment';
import { describe, expect, it } from 'vitest';

import diff from '../src/diff';

describe('diff', () => {
  describe('calculating the difference in years', () => {
    it('should return 1 year difference between 2023-01-01 and 2024-01-01', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2024-01-01');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'year')).toBe(momentDate1.diff(momentDate2, 'years'));
    });

    it('should return 0 year difference between 2023-01-01 and December 31st, 2023', () => {
      const date1 = new Date('2023-01-01');
      const date2 = '2023-12-31';
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'year')).toBe(momentDate1.diff(momentDate2, 'years'));
    });

    it('should return 2 years difference between January 1st, 2022 and 2024-01-01', () => {
      const date1 = new Date('2022-01-01');
      const date2 = new Date('2024-01-01');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, +date2, 'year')).toBe(momentDate1.diff(momentDate2, 'years'));
    });
  });

  describe('calculating the difference in months', () => {
    it('should return 12 months difference between 2023-01-01 and 2024-01-01', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2024-01-01');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'month')).toBe(momentDate1.diff(momentDate2, 'months'));
    });

    it('should return 11 months difference between 2023-01-01 and December 1st, 2023', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2023-12-01');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, +date2, 'month')).toBe(momentDate1.diff(momentDate2, 'months'));
    });

    it('should return 24 months difference between January 1st, 2022 and 2024-01-01', () => {
      const date1 = new Date('2022-01-01');
      const date2 = '2024-01-01Z';
      const momentDate1 = moment(date1);
      expect(diff(date1, date2, 'month')).toBe(momentDate1.diff(date2, 'months'));
    });
  });

  describe('calculating the difference in days', () => {
    it('should return 365 days difference between 2023-01-01 and 2024-01-01', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2024-01-01');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'day')).toBe(momentDate1.diff(momentDate2, 'days'));
    });

    it('should return 364 days difference between 2023-01-01 and December 31st, 2023', () => {
      const date1 = new Date('2023-01-01');
      const date2 = '2023-12-31Z';
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'day')).toBe(momentDate1.diff(momentDate2, 'days'));
    });

    it('should return 730 days difference between January 1st, 2022 and 2024-01-01', () => {
      const date1 = new Date('2022-01-01');
      const date2 = new Date('2024-01-01');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, +date2, 'day')).toBe(momentDate1.diff(momentDate2, 'days'));
    });
  });

  describe('calculating the difference in hours', () => {
    it('should return 8760 hours difference between 2023-01-01 and 2024-01-01', () => {
      const date1 = new Date('2023-01-01');
      const date2 = '2024-01-01Z';
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'hour')).toBe(momentDate1.diff(momentDate2, 'hours'));
    });

    it('should return 8759 hours difference between 2023-01-01 and December 31st, 2023', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2023-12-31');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, +date2, 'hour')).toBe(momentDate1.diff(momentDate2, 'hours'));
    });

    it('should return 17520 hours difference between January 1st, 2022 and 2024-01-01', () => {
      const date1 = new Date('2022-01-01');
      const date2 = new Date('2024-01-01');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'hour')).toBe(momentDate1.diff(momentDate2, 'hours'));
    });
  });

  describe('calculating the difference in minutes', () => {
    it('should return 525600 minutes difference between 2023-01-01 and 2024-01-01', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2024-01-01');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'minute')).toBe(momentDate1.diff(momentDate2, 'minutes'));
    });

    it('should return 525540 minutes difference between 2023-01-01 and December 31st, 2023', () => {
      const date1 = new Date('2023-01-01');
      const date2 = '2023-12-31Z';
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'minute')).toBe(momentDate1.diff(momentDate2, 'minutes'));
    });

    it('should return 1051200 minutes difference between January 1st, 2022 and 2024-01-01', () => {
      const date1 = new Date('2022-01-01');
      const date2 = new Date('2024-01-01');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, +date2, 'minute')).toBe(momentDate1.diff(momentDate2, 'minutes'));
    });
  });

  describe('calculating the difference in seconds', () => {
    it('should return 31536000 seconds difference between 2023-01-01 and 2024-01-01', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2024-01-01');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'second')).toBe(momentDate1.diff(momentDate2, 'seconds'));
    });

    it('should return 31535940 seconds difference between 2023-01-01 and December 31st, 2023', () => {
      const date1 = new Date('2023-01-01');
      const date2 = '2023-12-31Z';
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'second')).toBe(momentDate1.diff(momentDate2, 'seconds'));
    });

    it('should return 63072000 seconds difference between January 1st, 2022 and 2024-01-01', () => {
      const date1 = new Date('2022-01-01');
      const date2 = new Date('2024-01-01');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, +date2, 'second')).toBe(momentDate1.diff(momentDate2, 'seconds'));
    });
  });

  describe('calculating the difference in milliseconds', () => {
    it('should return 31536000000 milliseconds difference between 2023-01-01 and 2024-01-01', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2024-01-01');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'millisecond')).toBe(momentDate1.diff(momentDate2, 'milliseconds'));
    });

    it('should return 31535940000 milliseconds difference between 2023-01-01 and December 31st, 2023', () => {
      const date1 = new Date('2023-01-01');
      const date2 = '2023-12-31Z';
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'millisecond')).toBe(momentDate1.diff(momentDate2, 'milliseconds'));
    });

    it('should return 63072000000 milliseconds difference between January 1st, 2022 and 2024-01-01', () => {
      const date1 = new Date('2022-01-01');
      const date2 = new Date('2024-01-01');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, +date2, 'millisecond')).toBe(momentDate1.diff(momentDate2, 'milliseconds'));
    });
  });

  describe('calculating the difference as a floating-point number', () => {
    it('should return 1.0 year difference between 2023-01-01 and 2024-01-01', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2024-01-01');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'year', true)).toBeCloseTo(momentDate1.diff(momentDate2, 'years', true));
    });

    it('should return 0.9972602739726027 year difference between 2023-01-01 and December 31st, 2023', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2023-12-31');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'year', true)).toBeCloseTo(momentDate1.diff(momentDate2, 'years', true));
    });

    it('should return 2.0 year difference between January 1st, 2022 and 2024-01-01', () => {
      const date1 = new Date('2022-01-01');
      const date2 = new Date('2024-01-01');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'year', true)).toBeCloseTo(momentDate1.diff(momentDate2, 'years', true));
    });

    it('should return 1.0 year difference between 2023-01-01 and 2024-01-01', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2024-01-01');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'year', true)).toBeCloseTo(momentDate1.diff(momentDate2, 'years', true));
    });

    it('should return 0.9972602739726027 year difference between 2023-01-01 and December 31st, 2023', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2023-12-31');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'year', true)).toBeCloseTo(momentDate1.diff(momentDate2, 'years', true));
    });

    it('should return 2.0 year difference between January 1st, 2022 and 2024-01-01', () => {
      const date1 = new Date('2022-01-01');
      const date2 = new Date('2024-01-01');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'year', true)).toBeCloseTo(momentDate1.diff(momentDate2, 'years', true));
    });

    it('should return 1.0 month difference between 2023-01-01 and February 1st, 2023', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2023-02-01');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'month', true)).toBeCloseTo(momentDate1.diff(momentDate2, 'months', true));
    });

    it('should return 0.9931506849315068 month difference between 2023-01-01 and January 31st, 2023', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2023-01-31');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'month', true)).toBeCloseTo(momentDate1.diff(momentDate2, 'months', true));
    });

    it('should return 1.0 day difference between 2023-01-01 and January 2nd, 2023', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2023-01-02');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'day', true)).toBeCloseTo(momentDate1.diff(momentDate2, 'days', true));
    });

    it('should return 0.9993148148148148 day difference between 2023-01-01 and January 31st, 2023, 23:59:59', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2023-01-31T23:59:59');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'day', true)).toBeCloseTo(momentDate1.diff(momentDate2, 'days', true));
    });

    it('should return 1.0 hour difference between 2023-01-01, 00:00:00 and 2023-01-01, 01:00:00', () => {
      const date1 = new Date('2023-01-01T00:00:00');
      const date2 = new Date('2023-01-01T01:00:00');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'hour', true)).toBeCloseTo(momentDate1.diff(momentDate2, 'hours', true));
    });

    it('should return 0.9993055555555556 hour difference between 2023-01-01, 00:00:00 and 2023-01-01, 23:59:59', () => {
      const date1 = new Date('2023-01-01T00:00:00');
      const date2 = new Date('2023-01-01T23:59:59');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'hour', true)).toBeCloseTo(momentDate1.diff(momentDate2, 'hours', true));
    });

    it('should return 1.0 minute difference between 2023-01-01, 00:00:00 and 2023-01-01, 00:01:00', () => {
      const date1 = new Date('2023-01-01T00:00:00');
      const date2 = new Date('2023-01-01T00:01:00');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'minute', true)).toBeCloseTo(momentDate1.diff(momentDate2, 'minutes', true));
    });

    it(
      'should return 0.9999722222222222 minute difference between 2023-01-01, 00:00:00 and 2023-01-01, 00:59:59',
      () => {
        const date1 = new Date('2023-01-01T00:00:00');
        const date2 = new Date('2023-01-01T00:59:59');
        const momentDate1 = moment(date1);
        const momentDate2 = moment(date2);
        expect(diff(date1, date2, 'minute', true)).toBeCloseTo(momentDate1.diff(momentDate2, 'minutes', true));
      });

    it('should return 1.0 second difference between 2023-01-01, 00:00:00 and 2023-01-01, 00:00:01', () => {
      const date1 = new Date('2023-01-01T00:00:00');
      const date2 = new Date('2023-01-01T00:00:01');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'second', true)).toBeCloseTo(momentDate1.diff(momentDate2, 'seconds', true));
    });

    it(
      'should return 0.9999888888888889 second difference between 2023-01-01, 00:00:00 and 2023-01-01, 00:00:59',
      () => {
        const date1 = new Date('2023-01-01T00:00:00');
        const date2 = new Date('2023-01-01T00:00:59');
        const momentDate1 = moment(date1);
        const momentDate2 = moment(date2);
        expect(diff(date1, date2, 'second', true)).toBeCloseTo(momentDate1.diff(momentDate2, 'seconds', true));
      });

    it('should return 500 millisecond difference between 2023-01-01, 00:00:00 and 2023-01-01, 00:00:00.5', () => {
      const date1 = new Date('2023-01-01T00:00:00');
      const date2 = new Date('2023-01-01T00:00:00.5');
      const momentDate1 = moment(date1);
      const momentDate2 = moment(date2);
      expect(diff(date1, date2, 'millisecond', true)).toBeCloseTo(momentDate1.diff(momentDate2, 'milliseconds', true));
    });
  });
});
