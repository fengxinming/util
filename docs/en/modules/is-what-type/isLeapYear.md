# isLeapYear

> Check if the year is a leap year

## Example

```js
import { isLeapYear } from 'is-what-type';

isLeapYear(2000); // true
isLeapYear(2020); // true
isLeapYear(1900); // false
isLeapYear(2021); // false
isLeapYear(new Date(2000, 0, 1)); // true
isLeapYear(new Date(2020, 0, 1)); // true
isLeapYear(new Date(1900, 0, 1)); // false
isLeapYear(new Date(2021, 0, 1)); // false
isLeapYear('2000'); // false
isLeapYear(null); // false
isLeapYear(undefined); // false
```
