# isAbsoluteURL

> 校验是否是绝对URL

## 示例

```js
import { isAbsoluteURL } from 'is-what-type';

isAbsoluteURL('https://example.com'); // true
isAbsoluteURL('/foo/bar'); // false
isAbsoluteURL('ftp://example.com'); // true
isAbsoluteURL('mailto:foo@bar.com'); // true
isAbsoluteURL('file:///usr/bin/myfile'); // true
isAbsoluteURL('//example.com'); // true
isAbsoluteURL('example.com'); // false
```
