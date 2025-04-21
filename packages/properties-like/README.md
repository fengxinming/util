# properties-like

[![npm package](https://nodei.co/npm/properties-like.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/properties-like)

[![NPM version](https://img.shields.io/npm/v/properties-like.svg?style=flat)](https://npmjs.org/package/properties-like)
[![NPM Downloads](https://img.shields.io/npm/dm/properties-like.svg?style=flat)](https://npmjs.org/package/properties-like)
[![](https://data.jsdelivr.com/v1/package/npm/properties-like/badge)](https://www.jsdelivr.com/package/npm/properties-like)

> A TypeScript implementation of the Java [`.properties` specification](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Properties.html#load(java.io.Reader)), supporting configuration parsing, serialization, and advanced features like variable interpolation and Unicode handling.

---

## Features
- 🛠️ **TypeScript First**: Full type safety and autocompletion
- 🔄 **Bidirectional**: Parse files and generate `.properties` formatted strings
- 🔍 **Variable Replacement**: Use `${variable}` placeholders for dynamic values
- 🌐 **Unicode Support**: Handle `\uxxxx` escape sequences
- 📄 **Comment Preservation**: Retain and serialize comment lines
- 🚀 **Cross-Platform**: Works in Node.js, browsers, and Deno

---

## Documentation

For detailed usage instructions and API references, please visit the official documentation:

👉 [View Full Documentation](https://fengxinming.github.io/util/modules/properties-like/)

---

## Quick Start

**Create a `test.properties` file**

```
# Backslash handling
jdbc.mysql.driver     = com.mysql.jdbc.Driver
jdbc.mysql.url        = jdbc\:mysql\://localhost\:3306/test?useUnicode\=true&characterEncoding\=gbk
jdbc .mysql\ .username= test\
123456789
jdbc\:mysql.password   = ~\ !@#$%^&*
jdbc.mysql\=maxActive  = \ \ 50\ 

# Unicode support
username=\u7528 \u6237 \u540d
\u8d26 \u53f7=test123
\u663a \u540d=\u540a \u70b8 \u5929
p

int=1
bool=true
```

### **Properties Class Example**

```javascript
import { readFileSync } from 'node:fs';
import { Properties } from 'properties-like';

const props = new Properties();
props.parse(readFileSync('./test.properties', 'utf8'));

props.get('jdbc.mysql.driver'); // ==> 'com.mysql.jdbc.Driver'
props.getProperty('jdbc.mysql.driver     '); // ==> undefined
props.getProperty('jdbc.mysql.url'); // ==> 'jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=gbk'
props.getProperty('jdbc.mysql .username'); // ==> 'test123456789'
props.getProperty('jdbc:mysql.password'); // ==> '~ !@#$%^&*'
props.getProperty('jdbc.mysql=maxActive'); // ==> '  50 '
props.getProperty('username'); // ==> '用户名'
props.getProperty('账号'); // ==> 'test123'
props.getProperty('昵称'); // ==> '吊炸天'
props.getProperty('p'); // ==> ''
props.getNumber('int'); // ==> 1
props.getBoolean('bool'); // ==> true

props.forEach((value, key) => {

});

for (let [value, key] of props) {

}
```

### **parse Function Example**
```typescript
import { parse } from 'properties-like';

parse('key=value\n# comment', {
  onData(key, value, lineno) {
    console.log(`Line ${lineno}: ${key} = ${value}`);
  },
  onComment(comment, lineno) {
    console.log(`Line ${lineno}: COMMENT: ${comment}`);
  }
});
// Output:
// Line 1: key = value
// Line 2: COMMENT: # comment
```

---

## Contributing

We welcome contributions from the community! If you find a bug or want to suggest an improvement, feel free to open an issue or submit a pull request.

### How to Contribute
1. Fork the repository.
2. Create a new branch for your changes.
3. Submit a pull request with a clear description of your changes.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |