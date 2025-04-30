# API Documentation

## add Function

### Function Description
Adds a specified number of time units or an object with multiple time units to a date.

### Parameter Types
- `date`: `Date` - The date to which time will be added.
- `num`: `number | DateAddingObject` - The number of time units to add, or an object where keys are time units and values are the number of units to add.
- `unit`: `Unit` - The unit of time to add, such as 'year', 'month', 'day', etc. This parameter is required if `num` is a number.

### Return Value
- `Date`: A new date after adding the specified time.

### Example Code
```typescript
import add from 'date-manip/add';

// Adding 5 days
const newDate1 = add(new Date(), 5, 'day');
console.log(newDate1); // Output: the date after 5 days

// Adding multiple time units using an object
const newDate2 = add(new Date(), { year: 1, month: 2, day: 3 });
console.log(newDate2); // Output: the date after 1 year, 2 months, and 3 days
```

## addDays Function

### Function Description
Adds a specified number of days to a date.

### Parameter Types
- `date`: `Date` - The date to which days will be added.
- `days`: `number` - The number of days to add.

### Return Value
- `Date`: A new date after adding the specified number of days.

### Example Code
```typescript
import addDays from 'date-manip/addDays';

const newDate = addDays(new Date(), 5);
console.log(newDate); // Output: the date after 5 days
```

## addHours Function

### Function Description
Adds a specified number of hours to a date.

### Parameter Types
- `date`: `Date` - The date to which hours will be added.
- `hours`: `number` - The number of hours to add.

### Return Value
- `Date`: A new date after adding the specified number of hours.

### Example Code
```typescript
import addHours from 'date-manip/addHours';

const newDate = addHours(new Date('2023-10-01T12:00:00'), 3);
console.log(newDate.toISOString()); // Output: '2023-10-01T15:00:00.000Z'
```

## addMilliseconds Function

### Function Description
Adds a specified number of milliseconds to a date.

### Parameter Types
- `date`: `Date` - The date to which milliseconds will be added.
- `ms`: `number` - The number of milliseconds to add.

### Return Value
- `Date`: A new date after adding the specified number of milliseconds.

### Example Code
```typescript
import addMilliseconds from 'date-manip/addMilliseconds';

const newDate = addMilliseconds(new Date('2023-10-01T12:00:00'), 5000);
console.log(newDate.toISOString()); // Output: '2023-10-01T12:00:05.000Z'
```

## addMonths Function

### Function Description
Adds a specified number of months to a date.

### Parameter Types
- `date`: `Date` - The date to which months will be added.
- `months`: `number` - The number of months to add.

### Return Value
- `Date`: A new date after adding the specified number of months.

### Example Code
```typescript
import addMonths from 'date-manip/addMonths';

const newDate = addMonths(new Date('2023-10-31T12:00:00'), 2);
console.log(newDate.toISOString()); // Output: '2023-12-31T12:00:00.000Z'
```

## addYears Function

### Function Description
Adds a specified number of years to a date.

### Parameter Types
- `date`: `Date` - The date to which years will be added.
- `years`: `number` - The number of years to add.

### Return Value
- `Date`: A new date after adding the specified number of years.

### Example Code
```typescript
import addYears from 'date-manip/addYears';

const newDate = addYears(new Date('2023-10-01T12:00:00'), 2);
console.log(newDate.toISOString()); // Output: '2025-10-01T12:00:00.000Z'
```

## chain Function

### Function Description
Provides a fluent API for date manipulation.

### Parameter Types
- `input`: `ChainInput` - Date input, which can be a string, number, Date object, numeric array, or DateParsingObject.
- `format`: `string` - An optional format string specifying the format of the input string.

### Return Value
- `IDateChain`: An object for date manipulation with a fluent API.

### Example Code
```typescript
import { chain } from 'date-manip/chain';

const date = chain('2023-10-01', 'YYYY-MM-DD')
  .addDays(5)
  .addHours(3)
  .toDate();
console.log(date.toISOString()); // Output: the processed date
```

## compile Function

### Function Description
Compiles a format string, generating a regular expression and extracting date parts.

### Parameter Types
- `formatString`: `string` - The format string to be compiled.

### Return Value
- `CompileResult`: A compile result object containing the regular expression pattern and extracted date parts.

### Example Code
```typescript
import { compile } from 'date-manip';

const result = compile('YYYY-MM-DD HH:mm:ss.SSS');
console.log(result.pattern); // Output: regular expression pattern
console.log(result.tokens); // Output: extracted date parts
```

## dayOfYear Function

### Function Description
Gets or sets the day of the year for a given date.

### Parameter Types
- `date`: `Date` - The date for which to get or set the day of the year.
- `val`: `number` - The day of the year to set.

### Return Value
- `number | Date`: If `val` is provided, returns a new date with the updated day of the year; otherwise, returns the day of the year for the given date.

### Example Code
```typescript
import { dayOfYear } from 'date-manip';

// Getting the day of the year
const date = new Date('2023-10-01');
const day = dayOfYear(date);
console.log(day); // Output: 274

// Setting the day of the year
const newDate = dayOfYear(new Date('2023-01-01'), 274);
console.log(newDate.toISOString()); // Output: '2023-10-01T00:00:00.000Z'
```

## daysInMonth Function

### Function Description
Gets the number of days in the month for a given date.

### Parameter Types
- `date`: `Date` - The date for which to get the number of days in the month.

### Return Value
- `number`: The number of days in the month.

### Example Code
```typescript
import { daysInMonth } from 'date-manip';

// Getting the number of days in October 2023
const days = daysInMonth(new Date('2023-10-01'));
console.log(days); // Output: 31

// Getting the number of days in February 2024
const days2 = daysInMonth(new Date('2024-02-01'));
console.log(days2); // Output: 29
```

## diff Function

### Function Description
Calculates the difference between two dates in specified time units.

### Parameter Types
- `date`: `Date` - The first date.
- `input`: `DateInput` - The second date.
- `unit`: `Unit` - The unit of time to calculate the difference in, such as 'year', 'month', 'day', etc.
- `asFloat`: `boolean` - Whether to return the difference as a floating-point number.

### Return Value
- `number`: The difference between the two dates in the specified time units.

### Example Code
```typescript
import { diff } from 'date-manip';

// Calculating the difference in years
const yearsDiff = diff(new Date('2023-01-01'), new Date('2024-01-01'), 'year');
console.log(yearsDiff); // Output: 1

// Calculating the difference in months
const monthsDiff = diff(new Date('2023-01-01'), new Date('2024-01-01'), 'month');
console.log(monthsDiff); // Output: 12
```

## diffInDays Function

### Function Description
Calculates the difference in days between two dates.

### Parameter Types
- `date`: `Date` - The first date.
- `input`: `DateInput` - The second date.
- `asFloat`: `boolean` - Whether to return the result as a float.

### Return Value
- `number`: The difference in days between the two dates.

### Example Code
```typescript
import { diffInDays } from 'date-manip';

const daysDiff = diffInDays(new Date(2023, 0, 1), new Date(2023, 0, 2));
console.log(daysDiff); // Output: 1
```

## diffInHours Function

### Function Description
Calculates the difference in hours between two dates.

### Parameter Types
- `date`: `Date` - The first date.
- `input`: `DateInput` - The second date.
- `asFloat`: `boolean` - Whether to return the result as a float.

### Return Value
- `number`: The difference in hours between the two dates.

### Example Code
```typescript
import { diffInHours } from 'date-manip';

const hoursDiff = diffInHours(new Date(2023, 0, 1), new Date(2023, 0, 2));
console.log(hoursDiff); // Output: 24
```

## diffInMilliseconds Function

### Function Description
Calculates the difference in milliseconds between two dates.

### Parameter Types
- `date`: `Date` - The first date.
- `input`: `DateInput` - The second date.
- `asFloat`: `boolean` - Whether to return the result as a float.

### Return Value
- `number`: The difference in milliseconds between the two dates.

### Example Code
```typescript
import { diffInMilliseconds } from 'date-manip';

console.log(diffInMilliseconds(new Date(), new Date())); // Output: 0
console.log(diffInMilliseconds(new Date(), new Date(Date.now() + 1000))); // Output: 1000
```

## diffInMinutes Function

### Function Description
Calculates the difference in minutes between two dates.

### Parameter Types
- `date`: `Date` - The first date.
- `input`: `DateInput` - The second date.
- `asFloat`: `boolean` - Whether to return the result as a float.

### Return Value
- `number`: The difference in minutes between the two dates.

### Example Code
```typescript
import { diffInMinutes } from 'date-manip';

console.log(diffInMinutes(new Date(), new Date())); // Output: 0
console.log(diffInMinutes(new Date(), new Date(Date.now() + 1000 * 60))); // Output: 1
```

## diffInMonths Function

### Function Description
Calculates the difference in months between two dates.

### Parameter Types
- `date`: `Date` - The first date.
- `input`: `DateInput` - The second date.
- `asFloat`: `boolean` - Whether to return the result as a float.

### Return Value
- `number`: The difference in months between the two dates.

### Example Code
```typescript
import { diffInMonths } from 'date-manip';

console.log(diffInMonths(new Date(), new Date(Date.now() + 1000 * 60 * 60 * 24 * 30))); // Output: 1
```

## diffInSeconds Function

### Function Description
Calculates the difference in seconds between two dates.

### Parameter Types
- `date`: `Date` - The first date.
- `input`: `DateInput` - The second date.
- `asFloat`: `boolean` - Whether to return the result as a float.

### Return Value
- `number`: The difference in seconds between the two dates.

### Example Code
```typescript
import { diffInSeconds } from 'date-manip';

console.log(diffInSeconds(new Date(), new Date())); // Output: 0
console.log(diffInSeconds(new Date(), new Date(Date.now() + 1000))); // Output: 1
```

## diffInYears Function

### Function Description
Calculates the difference in years between two dates.

### Parameter Types
- `date`: `Date` - The first date.
- `input`: `DateInput` - The second date.
- `asFloat`: `boolean` - Whether to return the result as a float.

### Return Value
- `number`: The difference in years between the two dates.

### Example Code
```typescript
import { diffInYears } from 'date-manip';

console.log(diffInYears(new Date(), new Date(Date.now() + 1000 * 60 * 60 * 24 * 30))); // Output: 1
```

## endOf Function

### Function Description
Sets the date to the end of the specified unit of time.

### Parameter Types
- `date`: `Date` - The date to be set to the end of the specified time unit.
- `unit`: `Unit` - The unit of time to set the end of, such as 'year', 'month', 'day', etc.

### Return Value
- `Date`: A new date set to the end of the specified time unit.

### Example Code
```typescript
import { endOf } from 'date-manip';

// Setting the end of the year
const endOfYear = endOf(new Date('2023-01-01'), 'year');
console.log(endOfYear.toISOString()); // Output: '2023-12-31T23:59:59.999Z'

// Setting the end of the month
const endOfMonth = endOf(new Date('2023-10-01'), 'month');
console.log(endOfMonth.toISOString()); // Output: '2023-10-31T23:59:59.999Z'
```

## format Function

### Function Description
Formats a date according to a specified format string.

### Parameter Types
- `date`: `Date` - The date to be formatted.
- `formatString`: `string` - The format string to be used.

### Return Value
- `string`: The formatted date string.

### Example Code
```typescript
import { format } from 'date-manip';

// Formatting a date using the 'YYYY-MM-DD' format
const formattedDate1 = format(new Date('2023-10-01T12:00:00'), 'YYYY-MM-DD');
console.log(formattedDate1); // Output: '2023-10-01'

// Formatting a date using the 'YYYY-MM-DD HH:mm:ss' format
const formattedDate2 = format(new Date('2023-10-01T12:30:45'), 'YYYY-MM-DD HH:mm:ss');
console.log(formattedDate2); // Output: '2023-10-01 12:30:45'
```

## get Function

### Function Description
Gets the value of a specific time unit of a date.

### Parameter Types
- `date`: `Date` - The date from which to get the time unit value.
- `unit`: `Unit` - The time unit to get, such as 'year', 'month', 'day', etc.

### Return Value
- `number`: The value of the specified time unit.

### Example Code
```typescript
import { get } from 'date-manip';

const date = new Date('2023-10-01T12:30:45');
console.log(get(date, 'year')); // Output: 2023
console.log(get(date, 'month')); // Output: 9 (months are zero-based)
console.log(get(date, 'date')); // Output: 1
console.log(get(date, 'hour')); // Output: 12
console.log(get(date, 'minute')); // Output: 30
console.log(get(date, 'second')); // Output: 45
```

## isAfter Function

### Function Description
Checks if a date is after another date or a specified unit of time.

### Parameter Types
- `date`: `Date` - The date to compare.
- `input`: `DateInput` - The date or time unit to compare against.
- `unit`: `Unit` - The unit of time to compare, such as 'year', 'month', 'day', etc.

### Return Value
- `boolean`: Whether the first date is after the second date or time unit.

### Example Code
```typescript
import { isAfter } from 'date-manip';

// Checking if a date is after another date
const isAfterDate = isAfter(new Date('2023-10-01'), new Date('2023-09-01'), 'day');
console.log(isAfterDate); // Output: true

// Checking if a date is after a specific year
const isAfterYear = isAfter(new Date('2024-01-01'), 2023, 'year');
console.log(isAfterYear); // Output: true
```

## isBefore Function

### Function Description
Checks if a date is before another date or a specified unit of time.

### Parameter Types
- `date`: `Date` - The date to compare.
- `input`: `DateInput` - The date or time unit to compare against.
- `unit`: `Unit` - The unit of time to compare, such as 'year', 'month', 'day', etc.

### Return Value
- `boolean`: Whether the first date is before the second date or time unit.

### Example Code
```typescript
import { isBefore } from 'date-manip';

// Checking if a date is before another date
const isBeforeDate = isBefore(new Date('2023-09-01'), new Date('2023-10-01'), 'day');
console.log(isBeforeDate); // Output: true

// Checking if a date is before a specific year
const isBeforeYear = isBefore(new Date('2022-12-31'), 2023, 'year');
console.log(isBeforeYear); // Output: true
```

## isBetween Function

### Function Description
Checks if a date is between two other dates or specified units of time.

### Parameter Types
- `date`: `Date` - The date to check.
- `from`: `DateInput` - The start date or time unit.
- `to`: `DateInput` - The end date or time unit.
- `unit`: `Unit` - The unit of time to compare, such as 'year', 'month', 'day', etc.
- `inclusivity`: `string` - A string indicating whether the comparison is inclusive or exclusive.

### Return Value
- `boolean`: Whether the date is between the two specified dates or time units.

### Example Code
```typescript
import { isBetween } from 'date-manip';

// Checking if a date is between two dates
const isBetweenDates = isBetween(new Date('2023-10-01'), new Date('2023-09-01'), new Date('2023-11-01'), 'day');
console.log(isBetweenDates); // Output: true

// Checking if a date is between two years
const isBetweenYears = isBetween(new Date('2023-01-01'), 2022, 2024, 'year');
console.log(isBetweenYears); // Output: true
```

## isLeapYear Function

### Function Description
Checks if a given date is in a leap year.

### Parameter Types
- `date`: `Date` - The date to check.

### Return Value
- `boolean`: Whether the given date is in a leap year.

### Example Code
```typescript
import { isLeapYear } from 'date-manip';

const isLeap = isLeapYear(new Date('2024-01-01'));
console.log(isLeap); // Output: true

const isNotLeap = isLeapYear(new Date('2023-01-01'));
console.log(isNotLeap); // Output: false
```

## isSame Function

### Function Description
Checks if a date is the same as another date or a specified unit of time.

### Parameter Types
- `date`: `Date` - The date to compare.
- `input`: `DateInput` - The date or time unit to compare against.
- `unit`: `Unit` - The unit of time to compare, such as 'year', 'month', 'day', etc.

### Return Value
- `boolean`: Whether the first date is the same as the second date or time unit.

### Example Code
```typescript
import { isSame } from 'date-manip';

// Checking if a date is the same as another date
const isSameDate = isSame(new Date('2023-10-01'), new Date('2023-10-01'), 'day');
console.log(isSameDate); // Output: true

// Checking if a date is the same as a specific year
const isSameYear = isSame(new Date('2023-10-01'), 2023, 'year');
console.log(isSameYear); // Output: true
```

## isSameOrAfter Function

### Function Description
Checks if a date is the same as or after another date or a specified unit of time.

### Parameter Types
- `date`: `Date` - The date to compare.
- `input`: `DateInput` - The date or time unit to compare against.
- `unit`: `Unit` - The unit of time to compare, such as 'year', 'month', 'day', etc.

### Return Value
- `boolean`: Whether the first date is the same as or after the second date or time unit.

### Example Code
```typescript
import { isSameOrAfter } from 'date-manip';

// Checking if a date is the same as or after another date
const isSameOrAfterDate = isSameOrAfter(new Date('2023-10-01'), new Date('2023-10-01'), 'day');
console.log(isSameOrAfterDate); // Output: true

// Checking if a date is after another date
const isSameOrAfterDate2 = isSameOrAfter(new Date('2023-10-02'), new Date('2023-10-01'), 'day');
console.log(isSameOrAfterDate2); // Output: true
```

## isSameOrBefore Function

### Function Description
Checks if a date is the same as or before another date or a specified unit of time.

### Parameter Types
- `date`: `Date` - The date to compare.
- `input`: `DateInput` - The date or time unit to compare against.
- `unit`: `Unit` - The unit of time to compare, such as 'year', 'month', 'day', etc.

### Return Value
- `boolean`: Whether the first date is the same as or before the second date or time unit.

### Example Code
```typescript
import { isSameOrBefore } from 'date-manip';

// Checking if a date is the same as or before another date
const isSameOrBeforeDate = isSameOrBefore(new Date('2023-10-01'), new Date('2023-10-01'), 'day');
console.log(isSameOrBeforeDate); // Output: true

// Checking if a date is before another date
const isSameOrBeforeDate2 = isSameOrBefore(new Date('2023-09-30'), new Date('2023-10-01'), 'day');
console.log(isSameOrBeforeDate2); // Output: true
```

## isValid Function

### Function Description
Checks if a given date is valid.

### Parameter Types
- `date`: `Date` - The date to check.

### Return Value
- `boolean`: Whether the given date is valid.

### Example Code
```typescript
import { isValid } from 'date-manip';

const isValidDate1 = isValid(new Date('2023-10-01'));
console.log(isValidDate1); // Output: true

const isValidDate2 = isValid(new Date('invalid-date'));
console.log(isValidDate2); // Output: false
```

## parse Function

### Function Description
Parses a date from various input types.

### Parameter Types
- `input`: `DateInput` - The input to parse, which can be a string, number, Date object, numeric array, or DateParsingObject.
- `format`: `string` - An optional format string specifying the format of the input string.

### Return Value
- `Date`: A Date object representing the parsed date.

### Example Code
```typescript
import { parse } from 'date-manip';

// Parsing a date from a string
const result = parse('20231001123456', 'YYYYMMDDHHmmss');
console.log(result.toISOString()); // Output: '2023-10-01T12:34:56.000Z'

// Parsing a date from an ISO 8601 string
const isoResult = parse('2023-10-01T12:34:56Z');
console.log(isoResult.toISOString()); // Output: '2023-10-01T12:34:56.000Z'
```

## set Function

### Function Description
Sets the value of a specific time unit of a date.

### Parameter Types
- `date`: `Date` - The date whose time unit value will be set.
- `unit`: `Unit` - The time unit to set, such as 'year', 'month', 'day', etc.
- `val`: `number` - The value to set for the time unit.

### Return Value
- `Date`: The updated new date.

### Example Code
```typescript
import { set } from 'date-manip';

const date = new Date('2023-10-01T12:30:45');
const newDate = set(date, 'year', 2024);
console.log(newDate.toISOString()); // Output: '2024-10-01T12:30:45.000Z'
```

## startOf Function

### Function Description
Sets the date to the start of the specified unit of time.

### Parameter Types
- `date`: `Date` - The date to be set to the start of the specified time unit.
- `unit`: `Unit` - The unit of time to set the start of, such as 'year', 'month', 'day', etc.

### Return Value
- `Date`: A new date set to the start of the specified time unit.

### Example Code
```typescript
import { startOf } from 'date-manip';

// Setting the start of the year
const startOfYear = startOf(new Date('2023-10-01'), 'year');
console.log(startOfYear.toISOString()); // Output: '2023-01-01T00:00:00.000Z'

// Setting the start of the month
const startOfMonth = startOf(new Date('2023-10-01'), 'month');
console.log(startOfMonth.toISOString()); // Output: '2023-10-01T00:00:00.000Z'
```

## subDays Function

### Function Description
Subtracts a specified number of days from a date.

### Parameter Types
- `date`: `Date` - The date from which days will be subtracted.
- `days`: `number` - The number of days to subtract.

### Return Value
- `Date`: A new date after subtracting the specified number of days.

### Example Code
```typescript
import { subDays } from 'date-manip';

const newDate = subDays(new Date(), 5);
console.log(newDate); // Output: the date 5 days ago
```

## subHours Function

### Function Description
Subtracts a specified number of hours from a date.

### Parameter Types
- `date`: `Date` - The date from which hours will be subtracted.
- `hours`: `number` - The number of hours to subtract.

### Return Value
- `Date`: A new date after subtracting the specified number of hours.

### Example Code
```typescript
import { subHours } from 'date-manip';

const newDate = subHours(new Date(2014, 6, 2, 11, 55), 3);
console.log(newDate.toISOString()); // Output: '2014-07-02T08:55:00.000Z'
```

## subMilliseconds Function

### Function Description
Subtracts a specified number of milliseconds from a date.

### Parameter Types
- `date`: `Date` - The date from which milliseconds will be subtracted.
- `ms`: `number` - The number of milliseconds to subtract.

### Return Value
- `Date`: A new date after subtracting the specified number of milliseconds.

### Example Code
```typescript
import { subMilliseconds } from 'date-manip';

const newDate = subMilliseconds(new Date(2021, 9, 31, 17, 45, 50, 500), 500);
console.log(newDate.toISOString()); // Output: '2021-10-31T17:45:49.000Z'
```

## subMinutes Function

### Function Description
Subtracts a specified number of minutes from a date.

### Parameter Types
- `date`: `Date` - The date from which minutes will be subtracted.
- `minutes`: `number` - The number of minutes to subtract.

### Return Value
- `Date`: A new date after subtracting the specified number of minutes.

### Example Code
```typescript
import { subMinutes } from 'date-manip';

const newDate = subMinutes(new Date(2014, 1, 28, 0, 30, 40), 30);
console.log(newDate.toISOString()); // Output: '2014-02-27T23:59:10.000Z'
```

## subMonths Function

### Function Description
Subtracts a specified number of months from a date.

### Parameter Types
- `date`: `Date` - The date from which months will be subtracted.
- `months`: `number` - The number of months to subtract.

### Return Value
- `Date`: A new date after subtracting the specified number of months.

### Example Code
```typescript
import { subMonths } from 'date-manip';

const newDate = subMonths(new Date('2023-10-31T12:00:00Z'), 2);
console.log(newDate.toISOString()); // Output: '2023-08-31T12:00:00.000Z'
```

## subSeconds Function

### Function Description
Subtracts a specified number of seconds from a date.

### Parameter Types
- `date`: `Date` - The date from which seconds will be subtracted.
- `seconds`: `number` - The number of seconds to subtract.

### Return Value
- `Date`: A new date after subtracting the specified number of seconds.

### Example Code
```typescript
import { subSeconds } from 'date-manip';

const newDate = subSeconds(new Date(2014, 1, 28, 0, 30, 40), 30);
console.log(newDate.toISOString()); // Output: '2014-02-28T00:29:10.000Z'
```

## subtract Function

### Function Description
Subtracts a specified number of time units from a date.

### Parameter Types
- `date`: `Date` - The date from which time will be subtracted.
- `num`: `number | DateAddingObject` - The number of time units to subtract, or an object where keys are time units and values are the number of units to subtract.
- `unit`: `Unit` - The unit of time to subtract, such as 'year', 'month', 'day', etc. This parameter is required if `num` is a number.

### Return Value
- `Date`: A new date after subtracting the specified time units.

### Example Code
```typescript
import { subtract } from 'date-manip';

// Subtracting 5 days
const newDate1 = subtract(new Date('2023-10-01'), 5, 'day');
console.log(newDate1.toISOString()); // Output: '2023-09-26T00:00:00.000Z'

// Subtracting multiple time units using an object
const newDate2 = subtract(new Date('2023-10-01T12:00:00'), { year: 1, month: 2, day: 3, hour: 4, minute: 5, second: 6, millisecond: 7 });
console.log(newDate2.toISOString()); // Output: '2022-07-28T07:54:53.993Z'
```

## subYears Function

### Function Description
Subtracts a specified number of years from a date.

### Parameter Types
- `date`: `Date` - The date from which years will be subtracted.
- `years`: `number` - The number of years to subtract.

### Return Value
- `Date`: A new date after subtracting the specified number of years.

### Example Code
```typescript
import { subYears } from 'date-manip';

const newDate = subYears(new Date('2023-10-01T12:00:00Z'), 2);
console.log(newDate.toISOString()); // Output: '2021-10-01T12:00:00.000Z'
```