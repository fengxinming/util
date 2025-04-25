# xhr-promisify

[![npm package](https://nodei.co/npm/xhr-promisify.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/xhr-promisify)

[![NPM version](https://img.shields.io/npm/v/xhr-promisify.svg?style=flat)](https://npmjs.org/package/xhr-promisify)
[![NPM Downloads](https://img.shields.io/npm/dm/xhr-promisify.svg?style=flat)](https://npmjs.org/package/xhr-promisify)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/xhr-promisify/badge)](https://www.jsdelivr.com/package/npm/xhr-promisify)

> **轻量级的 Promise 化 XHR 工具库**，将传统的 `XMLHttpRequest` 封装为 Promise 接口，简化异步请求开发。

---

## **安装**

::: code-group

```bash [npm]
npm add xhr-promisify
```
```bash [pnpm]
pnpm add xhr-promisify
```
```bash [yarn]
yarn add xhr-promisify
```
```html [html]
<script src="https://cdn.jsdelivr.net/npm/xhr-promisify/dist/index.umd.min.js"></script>
<script>
  const { ajax } = XhrPromisify;
  // GET 请求
  ajax({
    url: 'https://api.example.com/data',
    method: 'GET'
  })
  .then(response => {
    console.log('响应数据:', response);
  })
  .catch(error => {
    console.error('请求失败:', error);
  });
</script>
```

:::

---

## **快速上手**
### 基础用法
```javascript
import { ajax } from 'xhr-promisify';

// GET 请求
ajax({
  url: 'https://api.example.com/data',
  method: 'GET'
})
.then(response => {
  console.log('响应数据:', response);
})
.catch(error => {
  console.error('请求失败:', error);
});

// 简洁写法（async/await）
async function fetchData() {
  try {
    const response = await ajax({ url: '/api/data' });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

---

## **API 文档**
### `ajax(options: AjaxRequestOptions | string): Promise<AjaxResponse>`
发送 HTTP 请求并返回 Promise。

#### 参数
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| `url` | `string` | ✔️ | 请求地址 |
| `method` | `string` | ❌ | 请求方法（默认 `GET`） |
| `data` | `object` | ❌ | 请求体（POST/PUT 等方法自动序列化为 JSON） |
| `timeout` | `number` | ❌ | 超时时间（毫秒，默认 `30000`） |
| `headers` | `object` | ❌ | 自定义请求头 |
| `signal` | `AbortSignal` | ❌ | 通过 `AbortController` 中止请求 |
| `query` | `object` | ❌ | URL 查询参数（自动编码） |
| `auth` | `object` | ❌ | 基础认证（`{ username, password }`） |
| `withCredentials` | `boolean` | ❌ | 是否携带凭证（如 cookies） |
| `responseType` | `string` | ❌ | 响应类型（如 `json`、`blob`） |
| `validateStatus` | `(status: number) => boolean` | ❌ | 自定义成功状态码判断逻辑 |

#### 返回值 (`AjaxResponse`)
```typescript
interface AjaxResponse {
  status: number;        // HTTP 状态码
  statusText: string;    // 状态描述
  headers: Record<string, string>; // 响应头
  data: any;             // 解析后的响应数据
  request: XMLHttpRequest; // 原生 XHR 对象
}
```

#### 错误类型 (`AjaxError`)
所有错误均抛出 `AjaxError` 类型，包含以下属性：
```typescript
class AjaxError extends Error {
  code: string; // 错误代码（如 `ERR_NETWORK`）
  status?: number; // HTTP 状态码（若返回）
  statusText?: string; // HTTP 状态码文本（若返回）
  data?: any; // 响应数据（若返回）
  request?: XMLHttpRequest; // 原始请求对象（若返回）
}
```

#### 导出的错误代码
| 错误代码 | 描述 |
|----------|------|
| `ABORT_ERR` | 请求被中止 |
| `ERR_NETWORK` | 网络错误（如 DNS 失败） |
| `ERR_HTTP_REQUEST_TIMEOUT` | 请求超时 |
| `ERR_BAD_REQUEST` | HTTP 4xx 状态码错误 |
| `ERR_BAD_RESPONSE` | HTTP 5xx 状态码错误 |

---

## **高级用法**
### 中止请求
```javascript
const controller = new AbortController();
const { signal } = controller;

ajax({
  url: '/api/long-polling',
  signal
}).then(...);

// 主动中止请求
controller.abort();
```

### 自定义请求头
```javascript
ajax({
  url: '/api/protected',
  headers: {
    'Authorization': 'Bearer your_token'
  }
});
```

### 处理进度事件
```javascript
ajax({
  url: '/api/upload',
  onUploadProgress: (event) => {
    console.log(`上传进度: ${event.loaded}/${event.total}`);
  },
  onDownloadProgress: (event) => {
    console.log(`下载进度: ${event.loaded}/${event.total}`);
  }
});
```

---

## **错误处理**
所有异常均抛出 `AjaxError` 对象，包含以下属性：
```typescript
class AjaxError extends Error {
  code: string; // 错误代码（如 `ERR_NETWORK`）
  status?: number; // HTTP 状态码（若返回）
  statusText?: string; // HTTP 状态码文本（若返回）
  data?: any; // 响应数据（若返回）
  request?: XMLHttpRequest; // 原始请求对象（若返回）
}
```

### **错误类型**
| 错误代码 | 类型 | 描述 |
|----------|------|------|
| `ABORT_ERR` | `AjaxError` | 请求被手动中止 |
| `ERR_NETWORK` | `AjaxError` | 网络错误（如 DNS 解析失败） |
| `ERR_HTTP_REQUEST_TIMEOUT` | `AjaxError` | 请求超时 |
| `ERR_BAD_REQUEST` | `AjaxError` | HTTP 状态码 4xx 错误 |
| `ERR_BAD_RESPONSE` | `AjaxError` | HTTP 状态码 5xx 错误 |

---

## **浏览器支持**

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |
