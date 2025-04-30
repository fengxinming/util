import moment from 'moment';
import { describe, expect, it } from 'vitest';

import isValid from '../src/isValid';

describe('isValid', () => {
  it('should return true for a valid date', () => {
    const date = new Date('2023-10-01T12:34:56');
    const result = isValid(date);
    const expected = moment(date).isValid();
    expect(result).toBe(expected);
  });

  it('should return false for an invalid date string', () => {
    const date = new Date('invalid-date');
    const result = isValid(date);
    const expected = moment(date).isValid();
    expect(result).toBe(expected);
  });

  it('should return false for NaN', () => {
    const date = new Date(NaN);
    const result = isValid(date);
    const expected = moment(date).isValid();
    expect(result).toBe(expected);
  });

  it('should return false for an invalid date object', () => {
    const date = new Date('2023-13-01'); // Invalid month
    const result = isValid(date);
    const expected = moment(date).isValid();
    expect(result).toBe(expected);
  });

  it('should return true for a valid date string', () => {
    const dateString = '2023-10-01T12:34:56';
    const date = new Date(dateString);
    const result = isValid(date);
    const expected = moment(dateString).isValid();
    expect(result).toBe(expected);
  });

  it('should return false for an invalid date string with incorrect format', () => {
    const dateString = '2023-13-01T12:34:56'; // Invalid month
    const date = new Date(dateString);
    const result = isValid(date);
    const expected = moment(dateString).isValid();
    expect(result).toBe(expected);
  });

  it('should return true for a valid date object created from a timestamp', () => {
    const timestamp = 1696119296000; // 2023-10-01T12:34:56Z
    const date = new Date(timestamp);
    const result = isValid(date);
    const expected = moment(timestamp).isValid();
    expect(result).toBe(expected);
  });

  it('should return false for an invalid date object created from an invalid timestamp', () => {
    const timestamp = NaN;
    const date = new Date(timestamp);
    const result = isValid(date);
    const expected = moment(timestamp).isValid();
    expect(result).toBe(expected);
  });

  it('should return true for a valid date object created from a valid ISO 8601 string', () => {
    const isoString = '2023-10-01T12:34:56Z';
    const date = new Date(isoString);
    const result = isValid(date);
    const expected = moment(isoString).isValid();
    expect(result).toBe(expected);
  });

  it('should return false for an invalid date object created from an invalid ISO 8601 string', () => {
    const isoString = 'invalid-date';
    const date = new Date(isoString);
    const result = isValid(date);
    const expected = moment(isoString).isValid();
    expect(result).toBe(expected);
  });

  it('should return true for a valid date object created from a valid moment instance', () => {
    const momentDate = moment('2023-10-01T12:34:56');
    const date = momentDate.toDate();
    const result = isValid(date);
    const expected = momentDate.isValid();
    expect(result).toBe(expected);
  });

  it('should return false for a date object created from an invalid moment instance', () => {
    const momentDate = moment('invalid-date');
    const date = momentDate.toDate();
    const result = isValid(date);
    const expected = momentDate.isValid();
    expect(result).toBe(expected);
  });

  it('should return true for a valid date object created from a valid moment instance with a valid timestamp', () => {
    const timestamp = 1696119296000; // 2023-10-01T12:34:56Z
    const momentDate = moment(timestamp);
    const date = momentDate.toDate();
    const result = isValid(date);
    const expected = momentDate.isValid();
    expect(result).toBe(expected);
  });

  it('should return false for a date object created from an invalid moment instance with an invalid timestamp', () => {
    const timestamp = NaN;
    const momentDate = moment(timestamp);
    const date = momentDate.toDate();
    const result = isValid(date);
    const expected = momentDate.isValid();
    expect(result).toBe(expected);
  });
});
