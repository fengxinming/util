# **properties-like**

[![npm package](https://nodei.co/npm/properties-like.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/properties-like)

[![NPM version](https://img.shields.io/npm/v/properties-like.svg?style=flat)](https://npmjs.org/package/properties-like)
[![NPM Downloads](https://img.shields.io/npm/dm/properties-like.svg?style=flat)](https://npmjs.org/package/properties-like)
[![](https://data.jsdelivr.com/v1/package/npm/properties-like/badge)](https://www.jsdelivr.com/package/npm/properties-like)

> 一个 Java [.properties规范](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Properties.html#load(java.io.Reader)) 的 TypeScript 实现，支持配置解析、序列化、高级特性如变量替换和 Unicode 处理。

---

## **安装**

::: code-group

```bash [npm]
npm add properties-like
```
```bash [pnpm]
pnpm add properties-like
```
```bash [yarn]
yarn add properties-like
```
```html [html]
<script src="https://cdn.jsdelivr.net/npm/properties-like/dist/index.umd.min.js"></script>
<script>
  const { Properties } = PropertiesLike;
  const props = new Properties();
  props.load('key=value\nkey2=value2');
  props.getProperty('key'); // ==> 'value'
  props.getProperty('key2'); // ==> 'value2'
</script>
```

:::

---

## **使用示例**

**创建一个 `test.properties` 文件**

```
# backslash
jdbc.mysql.driver     = com.mysql.jdbc.Driver
jdbc.mysql.url        = jdbc\:mysql\://localhost\:3306/test?useUnicode\=true&characterEncoding\=gbk
jdbc .mysql\ .username= test\
123456789
jdbc\:mysql.password   = ~\ !@#$%^&*
jdbc.mysql\=maxActive  = \ \ 50\ 

# Unicode
username=\u7528 \u6237 \u540d
\u8d26 \u53f7=test123
\u6635 \u79f0=\u540a \u70b8 \u5929
p

int=1
bool=true

```

### **Properties 使用示例**

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

---

### **parse 使用示例**
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
// 输出：
// Line 1: key = value
// Line 2: COMMENT: # comment
```

---

## **浏览器支持**

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |