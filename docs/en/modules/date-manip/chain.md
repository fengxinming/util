# chain

## Overview
The `chain()` function provides a **fluent API** for manipulating dates, encapsulating core functionalities of the `date-manip` library. It supports **chaining operations** and intuitive date manipulation.

## Quick Start
```typescript
import { chain } from 'date-manip';

// Create a DateChain instance
const now = chain(new Date());
const tomorrow = now.addDays(1);
console.log(tomorrow.format('YYYY-MM-DD')); // Output: the next day's date
```

## Core Features
### 1. Chaining Operations
```typescript
chain(new Date())
  .addMonths(2)
  .set('date', 15)
  .format('YYYY-MM-DD HH:mm:ss');
```

### 2. Time Unit Manipulation
Supports adding/subtracting years, months, days, hours, minutes, seconds, and milliseconds:
```typescript
chain('2023-01-01')
  .addYears(1)       // 2024-01-01
  .addMonths(3)      // 2024-04-01
  .addDays(5)        // 2024-04-06
  .addHours(8);      // Add 8 hours to the time
```

### 3. Date Comparison
```typescript
const date1 = chain('2023-01-01');
const date2 = chain('2023-01-02');

date1.isBefore(date2); // true
date1.isSameOrAfter(date2); // false
```

## API Reference

### Class Methods
#### `chain(input: ChainInput | IDateChain, format?: string): IDateChain`
Creates a new `DateChain` instance.

**Parameters**:
- `input`: Date source (`Date`, `string`, `number`, or another `DateChain` instance)
- `format` (optional): Input string format (e.g., `'YYYY-MM-DD'`)

### Properties and Methods List

#### **Time Unit Manipulation**
| Method Name               | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| `add(unit: Unit, val)`    | Add any time unit (e.g., `'year'`, `'month'`).                             |
| `addDays(val: number)`    | Add days.                                                                  |
| `addHours(val: number)`   | Add hours.                                                                 |
| `addMilliseconds(val: number)` | Add milliseconds.                                                       |
| `addMinutes(val: number)` | Add minutes.                                                               |
| `addMonths(val: number)`  | Add months.                                                                |
| `addYears(val: number)`   | Add years.                                                                 |
| `subtract(unit: Unit, val)` | Subtract any time unit.                                                 |
| `subDays(val: number)`    | Subtract days.                                                             |
| `subHours(val: number)`   | Subtract hours.                                                            |
| `subMilliseconds(val: number)` | Subtract milliseconds.                                                 |
| `subMinutes(val: number)` | Subtract minutes.                                                          |
| `subMonths(val: number)`  | Subtract months.                                                           |
| `subYears(val: number)`   | Subtract years.                                                            |

#### **Date Accessors & Setters**
| Method Name               | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| `year([val: number])`     | Get/set the year.                                                          |
| `month([val: number])`    | Get/set the month (0-11).                                                  |
| `date([val: number])`     | Get/set the day of the month.                                              |
| `hour([val: number])`     | Get/set the hour.                                                          |
| `minute([val: number])`   | Get/set the minute.                                                        |
| `second([val: number])`   | Get/set the second.                                                        |
| `millisecond([val: number])` | Get/set the millisecond.                                               |
| `time()`                  | Get the timestamp in milliseconds.                                         |

#### **Date Comparison**
| Method Name               | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| `isAfter(date: DateInput)` | Check if the date is after another date.                                   |
| `isBefore(date: DateInput)` | Check if the date is before another date.                                 |
| `isSame(date: DateInput)`  | Check if the date is equal to another date.                               |
| `isSameOrAfter(date: DateInput)` | Check if the date is equal to or after another date.                |
| `isSameOrBefore(date: DateInput)` | Check if the date is equal to or before another date.              |
| `isBetween(start: DateInput, end: DateInput)` | Check if the date is between two dates.                  |
| `isValid()`               | Check if the date is valid (not `Invalid Date`).                           |

#### **Formatting & Conversion**
| Method Name               | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| `format(pattern: string)` | Format the date as a string (e.g., `'YYYY-MM-DD HH:mm:ss'`).                |
| `toISOString()`           | Convert to an ISO 8601 format string.                                       |
| `toDate()`                | Convert to a native `Date` object.                                         |
| `clone()`                 | Create a copy of the current date.                                         |

#### **Date Range Operations**
| Method Name               | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| `startOf(unit: Unit)`     | Set the date to the start of a specified time unit (e.g., `startOf('day')`). |
| `endOf(unit: Unit)`       | Set the date to the end of a specified time unit (e.g., `endOf('month')`).   |
| `diff(date: DateInput, unit?: Unit)` | Calculate the difference between dates (returns a number, specify unit). |
| `diffInDays()`            | Calculate the difference in days between dates.                            |
| `diffInMonths()`          | Calculate the difference in months between dates.                          |
| `diffInYears()`           | Calculate the difference in years between dates.                           |

#### **Utility Methods**
| Method Name               | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| `dayOfYear()`            | Get the day of the year (1-366).                                           |
| `daysInMonth()`          | Get the number of days in the current month (e.g., 28-31).                 |
| `isLeapYear()`           | Check if the year is a leap year.                                          |
| `toArray()`              | Convert to an array `[year, month, date, hours, minutes, seconds, milliseconds]`. |

## Usage Examples
### Example 1: Date Manipulation & Formatting
```typescript
const date = chain('2023-01-01');
const result = date
  .addMonths(2)       // 2023-03-01
  .addDays(5)         // 2023-03-06
  .format('YYYY-MM-DD');
console.log(result); // Output: 2023-03-06
```

### Example 2: Date Comparison
```typescript
const dateA = chain('2023-01-01');
const dateB = chain('2023-01-02');

dateA.isBefore(dateB); // true
dateB.isAfter(dateA);  // true
```

### Example 3: Accessing Date Values
```typescript
const now = chain();
console.log(now.year());     // Current year
console.log(now.hour());     // Current hour
```

### Example 4: Date Difference Calculation
```typescript
const start = chain('2023-01-01');
const end = chain('2023-01-10');
console.log(end.diffInDays(start)); // Output: 9
```

### Example 5: Date Range Operations
```typescript
const date = chain('2023-01-15');
date.startOf('month'); // 2023-01-01 00:00:00
date.endOf('month');   // 2023-01-31 23:59:59.999
```
