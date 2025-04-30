import moment from 'moment';
import { describe, expect, it } from 'vitest';

import { chain } from '../src/chain';

describe('chain', () => {
  it('should parse date correctly', () => {
    const dateInput = '2023-10-01';
    const dateChain = chain(dateInput);
    const expectedMoment = moment(dateInput);
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should add days correctly', () => {
    const dateInput = '2023-10-01';
    const daysToAdd = 5;
    const dateChain = chain(dateInput).add(daysToAdd, 'days');
    const expectedMoment = moment(dateInput).add(daysToAdd, 'days');
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should calculate difference in days correctly', () => {
    const dateInput1 = '2023-10-01';
    const dateInput2 = '2023-10-10';
    const diffInDays = chain(dateInput2).diff(chain(dateInput1), 'days');
    const expectedDiff = moment(dateInput2).diff(dateInput1, 'days');
    expect(diffInDays).toBe(expectedDiff);
  });

  it('should format date correctly', () => {
    const dateInput = '2023-10-01';
    const formatString = 'YYYY-MM-DD';
    const formattedDate = chain(dateInput).format(formatString);
    const expectedFormattedDate = moment(dateInput).format(formatString);
    expect(formattedDate).toBe(expectedFormattedDate);
  });

  it('should check if dates are the same correctly', () => {
    const dateInput1 = '2023-10-01';
    const dateInput2 = '2023-10-01';
    const isSame = chain(dateInput1).isSame(dateInput2, 'day');
    const expectedIsSame = moment(dateInput1).isSame(dateInput2, 'day');
    expect(isSame).toBe(expectedIsSame);
  });

  it('should add months correctly', () => {
    const dateInput = '2023-10-01';
    const monthsToAdd = 2;
    const dateChain = chain(dateInput).add(monthsToAdd, 'months');
    const expectedMoment = moment(dateInput).add(monthsToAdd, 'months');
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should add years correctly', () => {
    const dateInput = '2023-10-01';
    const yearsToAdd = 1;
    const dateChain = chain(dateInput).add(yearsToAdd, 'years');
    const expectedMoment = moment(dateInput).add(yearsToAdd, 'years');
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should subtract days correctly', () => {
    const dateInput = '2023-10-01';
    const daysToSubtract = 5;
    const dateChain = chain(dateInput).subDays(daysToSubtract);
    const expectedMoment = moment(dateInput).subtract(daysToSubtract, 'days');
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should subtract months correctly', () => {
    const dateInput = '2023-10-01';
    const monthsToSubtract = 2;
    const dateChain = chain(dateInput).subMonths(monthsToSubtract);
    const expectedMoment = moment(dateInput).subtract(monthsToSubtract, 'months');
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set date to start of month correctly', () => {
    const dateInput = '2023-10-15';
    const dateChain = chain(dateInput).startOf('month');
    const expectedMoment = moment(dateInput).startOf('month');
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set date to end of month correctly', () => {
    const dateInput = '2023-10-15';
    const dateChain = chain(dateInput).endOf('month');
    const expectedMoment = moment(dateInput).endOf('month');
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should check if date is before another date correctly', () => {
    const dateInput1 = '2023-10-01';
    const dateInput2 = '2023-10-10';
    const isBefore = chain(dateInput1).isBefore(dateInput2, 'day');
    const expectedIsBefore = moment(dateInput1).isBefore(dateInput2, 'day');
    expect(isBefore).toBe(expectedIsBefore);
  });

  it('should check if date is after another date correctly', () => {
    const dateInput1 = '2023-10-10';
    const dateInput2 = '2023-10-01';
    const isAfter = chain(dateInput1).isAfter(dateInput2, 'day');
    const expectedIsAfter = moment(dateInput1).isAfter(dateInput2, 'day');
    expect(isAfter).toBe(expectedIsAfter);
  });

  it('should check if date is between two dates correctly', () => {
    const dateInput1 = '2023-10-01';
    const dateInput2 = '2023-10-10';
    const dateInput3 = '2023-10-05';
    const isBetween = chain(dateInput3).isBetween(dateInput1, dateInput2, 'day');
    const expectedIsBetween = moment(dateInput3).isBetween(dateInput1, dateInput2, 'day');
    expect(isBetween).toBe(expectedIsBetween);
  });

  it('should check if date is valid correctly', () => {
    const validDateInput = '2023-10-01';
    const invalidDateInput = '2023-13-01';
    const isValidValidDate = chain(validDateInput).isValid();
    const isValidInvalidDate = chain(invalidDateInput).isValid();
    const expectedIsValidValidDate = moment(validDateInput).isValid();
    expect(isValidValidDate).toBe(expectedIsValidValidDate);
    expect(isValidInvalidDate).toBe(true);
  });

  it('should get day of year correctly', () => {
    const dateInput = '2023-10-01';
    const dayOfYear = chain(dateInput).dayOfYear();
    const expectedDayOfYear = moment(dateInput).dayOfYear();
    expect(dayOfYear).toBe(expectedDayOfYear);
  });

  it('should get days in month correctly', () => {
    const dateInput = '2023-10-01';
    const daysInMonth = chain(dateInput).daysInMonth();
    const expectedDaysInMonth = moment(dateInput).daysInMonth();
    expect(daysInMonth).toBe(expectedDaysInMonth);
  });

  it('should check if year is leap year correctly', () => {
    const leapYearInput = '2024-01-01';
    const nonLeapYearInput = '2023-01-01';
    const isLeapYearLeap = chain(leapYearInput).isLeapYear();
    const isLeapYearNonLeap = chain(nonLeapYearInput).isLeapYear();
    const expectedIsLeapYearLeap = moment(leapYearInput).isLeapYear();
    const expectedIsLeapYearNonLeap = moment(nonLeapYearInput).isLeapYear();
    expect(isLeapYearLeap).toBe(expectedIsLeapYearLeap);
    expect(isLeapYearNonLeap).toBe(expectedIsLeapYearNonLeap);
  });

  it('should calculate difference in hours correctly', () => {
    const dateInput1 = '2023-10-01T12:00:00';
    const dateInput2 = '2023-10-01T14:00:00';
    const diffInHours = chain(dateInput2).diff(chain(dateInput1), 'hours');
    const expectedDiff = moment(dateInput2).diff(dateInput1, 'hours');
    expect(diffInHours).toBe(expectedDiff);
  });

  it('should calculate difference in minutes correctly', () => {
    const dateInput1 = '2023-10-01T12:00:00';
    const dateInput2 = '2023-10-01T12:30:00';
    const diffInMinutes = chain(dateInput2).diff(chain(dateInput1), 'minutes');
    const expectedDiff = moment(dateInput2).diff(dateInput1, 'minutes');
    expect(diffInMinutes).toBe(expectedDiff);
  });

  it('should calculate difference in seconds correctly', () => {
    const dateInput1 = '2023-10-01T12:00:00';
    const dateInput2 = '2023-10-01T12:00:30';
    const diffInSeconds = chain(dateInput2).diff(chain(dateInput1), 'seconds');
    const expectedDiff = moment(dateInput2).diff(dateInput1, 'seconds');
    expect(diffInSeconds).toBe(expectedDiff);
  });

  it('should calculate difference in milliseconds correctly', () => {
    const dateInput1 = '2023-10-01T12:00:00.000';
    const dateInput2 = '2023-10-01T12:00:00.500';
    const diffInMilliseconds = chain(dateInput2).diff(chain(dateInput1), 'milliseconds');
    const expectedDiff = moment(dateInput2).diff(dateInput1, 'milliseconds');
    expect(diffInMilliseconds).toBe(expectedDiff);
  });

  it('should calculate difference in years correctly', () => {
    const dateInput1 = '2022-10-01';
    const dateInput2 = '2023-10-01';
    const diffInYears = chain(dateInput2).diff(chain(dateInput1), 'years');
    const expectedDiff = moment(dateInput2).diff(dateInput1, 'years');
    expect(diffInYears).toBe(expectedDiff);
  });

  it('should subtract years correctly', () => {
    const dateInput = '2023-10-01';
    const yearsToSubtract = 1;
    const dateChain = chain(dateInput).subYears(yearsToSubtract);
    const expectedMoment = moment(dateInput).subtract(yearsToSubtract, 'years');
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should subtract hours correctly', () => {
    const dateInput = '2023-10-01T12:00:00';
    const hoursToSubtract = 2;
    const dateChain = chain(dateInput).subHours(hoursToSubtract);
    const expectedMoment = moment(dateInput).subtract(hoursToSubtract, 'hours');
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should subtract minutes correctly', () => {
    const dateInput = '2023-10-01T12:00:00';
    const minutesToSubtract = 30;
    const dateChain = chain(dateInput).subMinutes(minutesToSubtract);
    const expectedMoment = moment(dateInput).subtract(minutesToSubtract, 'minutes');
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should subtract seconds correctly', () => {
    const dateInput = '2023-10-01T12:00:00';
    const secondsToSubtract = 30;
    const dateChain = chain(dateInput).subSeconds(secondsToSubtract);
    const expectedMoment = moment(dateInput).subtract(secondsToSubtract, 'seconds');
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should subtract milliseconds correctly', () => {
    const dateInput = '2023-10-01T12:00:00.000';
    const millisecondsToSubtract = 500;
    const dateChain = chain(dateInput).subMilliseconds(millisecondsToSubtract);
    const expectedMoment = moment(dateInput).subtract(millisecondsToSubtract, 'milliseconds');
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should clone date chain correctly', () => {
    const dateInput = '2023-10-01';
    const dateChain = chain(dateInput);
    const clonedDateChain = dateChain.clone();
    expect(clonedDateChain.toDate()).toEqual(dateChain.toDate());
    expect(clonedDateChain).not.toBe(dateChain);
  });

  it('should convert to array correctly', () => {
    const dateInput = '2023-10-01T12:30:45.678';
    const dateChain = chain(dateInput);
    const dateArray = dateChain.toArray();
    const expectedArray = moment(dateInput).toArray();
    expect(dateArray).toEqual(expectedArray);
  });

  it('should convert to date object correctly', () => {
    const dateInput = '2023-10-01';
    const dateChain = chain(dateInput);
    const dateObject = dateChain;
    const expectedDateObject = moment(dateInput);
    expect(dateObject.toDate()).toEqual(expectedDateObject.toDate());
  });

  it('should convert to JSON correctly', () => {
    const dateInput = '2023-10-01';
    const dateChain = chain(dateInput);
    const json = dateChain.toJSON();
    const expectedJson = moment(dateInput).toJSON();
    expect(json).toBe(expectedJson);
  });

  it('should convert to string correctly', () => {
    const dateInput = '2023-10-01';
    const dateChain = chain(dateInput);
    const dateString = dateChain.toString();
    const expectedDateString = moment(dateInput).toString();
    expect(dateString).toMatch(expectedDateString);
  });

  it('should get value of correctly', () => {
    const dateInput = '2023-10-01';
    const dateChain = chain(dateInput);
    const valueOf = dateChain.valueOf();
    const expectedValueOf = moment(dateInput).valueOf();
    expect(valueOf).toBe(expectedValueOf);
  });

  it('should set day of year correctly', () => {
    const dateInput = '2023-01-01';
    const dayOfYear = 300;
    const dateChain = chain(dateInput).dayOfYear(dayOfYear);
    const expectedMoment = moment(dateInput).dayOfYear(dayOfYear);
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set day of month correctly', () => {
    const dateInput = '2023-10-01';
    const dayOfMonth = 15;
    const dateChain = chain(dateInput).set('date', dayOfMonth);
    const expectedMoment = moment(dateInput).set('date', dayOfMonth);
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set month correctly', () => {
    const dateInput = '2023-10-01';
    const month = 11; // December (0-based index)
    const dateChain = chain(dateInput).set('month', month);
    const expectedMoment = moment(dateInput).set('month', month);
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set year correctly', () => {
    const dateInput = '2023-10-01';
    const year = 2024;
    const dateChain = chain(dateInput).set('year', year);
    const expectedMoment = moment(dateInput).set('year', year);
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set hours correctly', () => {
    const dateInput = '2023-10-01T12:00:00';
    const hours = 14;
    const dateChain = chain(dateInput).set('hours', hours);
    const expectedMoment = moment(dateInput).set('hours', hours);
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set minutes correctly', () => {
    const dateInput = '2023-10-01T12:00:00';
    const minutes = 30;
    const dateChain = chain(dateInput).set('minutes', minutes);
    const expectedMoment = moment(dateInput).set('minutes', minutes);
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set seconds correctly', () => {
    const dateInput = '2023-10-01T12:00:00';
    const seconds = 45;
    const dateChain = chain(dateInput).set('seconds', seconds);
    const expectedMoment = moment(dateInput).set('seconds', seconds);
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set milliseconds correctly', () => {
    const dateInput = '2023-10-01T12:00:00.000';
    const milliseconds = 500;
    const dateChain = chain(dateInput).set('milliseconds', milliseconds);
    const expectedMoment = moment(dateInput).set('milliseconds', milliseconds);
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should check if date is same or before another date correctly', () => {
    const dateInput1 = '2023-10-01';
    const dateInput2 = '2023-10-01';
    const isSameOrBefore = chain(dateInput1).isSameOrBefore(dateInput2, 'day');
    const expectedIsSameOrBefore = moment(dateInput1).isSameOrBefore(dateInput2, 'day');
    expect(isSameOrBefore).toBe(expectedIsSameOrBefore);
  });

  it('should check if date is same or after another date correctly', () => {
    const dateInput1 = '2023-10-01';
    const dateInput2 = '2023-10-01';
    const isSameOrAfter = chain(dateInput1).isSameOrAfter(dateInput2, 'day');
    const expectedIsSameOrAfter = moment(dateInput1).isSameOrAfter(dateInput2, 'day');
    expect(isSameOrAfter).toBe(expectedIsSameOrAfter);
  });

  it('should get unit value correctly', () => {
    const dateInput = '2023-10-01T12:30:45.678';
    const unit = 'year';
    const unitValue = chain(dateInput).get(unit);
    const expectedUnitValue = moment(dateInput).get(unit);
    expect(unitValue).toBe(expectedUnitValue);
  });

  it('should add using DateAddingObject correctly', () => {
    const dateInput = '2023-10-01';
    const addingObject = { days: 5, months: 2, years: 1 };
    const dateChain = chain(dateInput).add(addingObject);
    const expectedMoment = moment(dateInput).add(addingObject);
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should subtract using DateAddingObject correctly', () => {
    const dateInput = '2023-10-01';
    const subtractingObject = { days: 5, months: 2, years: 1 };
    const dateChain = chain(dateInput).subtract(subtractingObject);
    const expectedMoment = moment(dateInput).subtract(subtractingObject);
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should calculate difference in days as float correctly', () => {
    const dateInput1 = '2023-10-01T12:00:00';
    const dateInput2 = '2023-10-02T12:00:00';
    const diffInDays = chain(dateInput2).diff(chain(dateInput1), 'days', true);
    const expectedDiff = moment(dateInput2).diff(dateInput1, 'days', true);
    expect(diffInDays).toBe(expectedDiff);
  });

  it('should calculate difference in hours as float correctly', () => {
    const dateInput1 = '2023-10-01T12:00:00';
    const dateInput2 = '2023-10-01T14:30:00';
    const diffInHours = chain(dateInput2).diff(chain(dateInput1), 'hours', true);
    const expectedDiff = moment(dateInput2).diff(dateInput1, 'hours', true);
    expect(diffInHours).toBe(expectedDiff);
  });

  it('should calculate difference in minutes as float correctly', () => {
    const dateInput1 = '2023-10-01T12:00:00';
    const dateInput2 = '2023-10-01T12:30:30';
    const diffInMinutes = chain(dateInput2).diff(chain(dateInput1), 'minutes', true);
    const expectedDiff = moment(dateInput2).diff(dateInput1, 'minutes', true);
    expect(diffInMinutes).toBe(expectedDiff);
  });

  it('should calculate difference in seconds as float correctly', () => {
    const dateInput1 = '2023-10-01T12:00:00';
    const dateInput2 = '2023-10-01T12:00:30.5';
    const diffInSeconds = chain(dateInput2).diff(dateInput1, 'seconds', true);
    const expectedDiff = moment(dateInput2).diff(dateInput1, 'seconds', true);
    expect(diffInSeconds).toBe(expectedDiff);
  });

  it('should calculate difference in milliseconds as float correctly', () => {
    const dateInput1 = '2023-10-01T12:00:00.000';
    const dateInput2 = '2023-10-01T12:00:00.500';
    const diffInMilliseconds = chain(dateInput2).diff(chain(dateInput1), 'milliseconds', true);
    const expectedDiff = moment(dateInput2).diff(dateInput1, 'milliseconds', true);
    expect(diffInMilliseconds).toBe(expectedDiff);
  });

  it('should calculate difference in years as float correctly', () => {
    const dateInput1 = '2023-10-01';
    const dateInput2 = '2024-04-01';
    const diffInYears = chain(dateInput2).diff(chain(dateInput1), 'years', true);
    const expectedDiff = moment(dateInput2).diff(dateInput1, 'years', true);
    expect(diffInYears).toBe(expectedDiff);
  });

  it('should calculate difference in months as float correctly', () => {
    const dateInput1 = '2023-10-01';
    const dateInput2 = '2023-12-15';
    const diffInMonths = chain(dateInput2).diff(chain(dateInput1), 'months', true);
    const expectedDiff = moment(dateInput2).diff(dateInput1, 'months', true);
    expect(diffInMonths).toBe(expectedDiff);
  });

  it('should set date to start of year correctly', () => {
    const dateInput = '2023-10-15';
    const dateChain = chain(dateInput).startOf('year');
    const expectedMoment = moment(dateInput).startOf('year');
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set date to end of year correctly', () => {
    const dateInput = '2023-10-15';
    const dateChain = chain(dateInput).endOf('year');
    const expectedMoment = moment(dateInput).endOf('year');
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set date to start of day correctly', () => {
    const dateInput = '2023-10-15T12:30:45.678';
    const dateChain = chain(dateInput).startOf('day');
    const expectedMoment = moment(dateInput).startOf('day');
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set date to end of day correctly', () => {
    const dateInput = '2023-10-15T12:30:45.678';
    const dateChain = chain(dateInput).endOf('day');
    const expectedMoment = moment(dateInput).endOf('day');
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set date to start of hour correctly', () => {
    const dateInput = '2023-10-15T12:30:45.678';
    const dateChain = chain(dateInput).startOf('hour');
    const expectedMoment = moment(dateInput).startOf('hour');
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set date to end of hour correctly', () => {
    const dateInput = '2023-10-15T12:30:45.678';
    const dateChain = chain(dateInput).endOf('hour');
    const expectedMoment = moment(dateInput).endOf('hour');
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set date to start of minute correctly', () => {
    const dateInput = '2023-10-15T12:30:45.678';
    const dateChain = chain(dateInput).startOf('minute');
    const expectedMoment = moment(dateInput).startOf('minute');
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set date to end of minute correctly', () => {
    const dateInput = '2023-10-15T12:30:45.678';
    const dateChain = chain(dateInput).endOf('minute');
    const expectedMoment = moment(dateInput).endOf('minute');
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set date to start of second correctly', () => {
    const dateInput = '2023-10-15T12:30:45.678';
    const dateChain = chain(dateInput).startOf('second');
    const expectedMoment = moment(dateInput).startOf('second');
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set date to end of second correctly', () => {
    const dateInput = '2023-10-15T12:30:45.678';
    const dateChain = chain(dateInput).endOf('second');
    const expectedMoment = moment(dateInput).endOf('second');
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should get year correctly', () => {
    const dateInput = '2023-10-01';
    const year = chain(dateInput).year();
    const expectedYear = moment(dateInput).year();
    expect(year).toBe(expectedYear);
  });

  it('should get month correctly', () => {
    const dateInput = '2023-10-01';
    const month = chain(dateInput).month();
    const expectedMonth = moment(dateInput).month();
    expect(month).toBe(expectedMonth);
  });

  it('should get day of month correctly', () => {
    const dateInput = '2023-10-01';
    const dayOfMonth = chain(dateInput).date();
    const expectedDayOfMonth = moment(dateInput).date();
    expect(dayOfMonth).toBe(expectedDayOfMonth);
  });

  it('should get hours correctly', () => {
    const dateInput = '2023-10-01T12:30:45.678';
    const hours = chain(dateInput).hours();
    const expectedHours = moment(dateInput).hours();
    expect(hours).toBe(expectedHours);
  });

  it('should get minutes correctly', () => {
    const dateInput = '2023-10-01T12:30:45.678';
    const minutes = chain(dateInput).minutes();
    const expectedMinutes = moment(dateInput).minutes();
    expect(minutes).toBe(expectedMinutes);
  });

  it('should get seconds correctly', () => {
    const dateInput = '2023-10-01T12:30:45.678';
    const seconds = chain(dateInput).seconds();
    const expectedSeconds = moment(dateInput).seconds();
    expect(seconds).toBe(expectedSeconds);
  });

  it('should get milliseconds correctly', () => {
    const dateInput = '2023-10-01T12:30:45.678';
    const milliseconds = chain(dateInput).milliseconds();
    const expectedMilliseconds = moment(dateInput).milliseconds();
    expect(milliseconds).toBe(expectedMilliseconds);
  });

  it('should get time correctly', () => {
    const dateInput = '2023-10-01T12:30:45.678';
    const milliseconds = chain(dateInput).time();
    const expectedMilliseconds = moment(dateInput).valueOf();
    expect(milliseconds).toBe(expectedMilliseconds);
  });

  it('should set year using year method correctly', () => {
    const dateInput = '2023-10-01';
    const year = 2024;
    const dateChain = chain(dateInput).year(year);
    const expectedMoment = moment(dateInput).year(year);
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set month using month method correctly', () => {
    const dateInput = '2023-10-01';
    const month = 11; // December (0-based index)
    const dateChain = chain(dateInput).month(month);
    const expectedMoment = moment(dateInput).month(month);
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set day of month using date method correctly', () => {
    const dateInput = '2023-10-01';
    const dayOfMonth = 15;
    const dateChain = chain(dateInput).date(dayOfMonth);
    const expectedMoment = moment(dateInput).date(dayOfMonth);
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set hours using hours method correctly', () => {
    const dateInput = '2023-10-01T12:30:45.678';
    const hours = 14;
    const dateChain = chain(dateInput).hours(hours);
    const expectedMoment = moment(dateInput).hours(hours);
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set minutes using minutes method correctly', () => {
    const dateInput = '2023-10-01T12:30:45.678';
    const minutes = 30;
    const dateChain = chain(dateInput).minutes(minutes);
    const expectedMoment = moment(dateInput).minutes(minutes);
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set seconds using seconds method correctly', () => {
    const dateInput = '2023-10-01T12:30:45.678';
    const seconds = 45;
    const dateChain = chain(dateInput).seconds(seconds);
    const expectedMoment = moment(dateInput).seconds(seconds);
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });

  it('should set milliseconds using milliseconds method correctly', () => {
    const dateInput = '2023-10-01T12:30:45.678';
    const milliseconds = 500;
    const dateChain = chain(dateInput).milliseconds(milliseconds);
    const expectedMoment = moment(dateInput).milliseconds(milliseconds);
    expect(dateChain.toDate()).toEqual(expectedMoment.toDate());
  });
});
