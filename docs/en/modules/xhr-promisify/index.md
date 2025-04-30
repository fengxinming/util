# xhr-Promisify

[![npm package](https://nodei.co/npm/xhr-promisify.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/xhr-promisify)

[![NPM version](https://img.shields.io/npm/v/xhr-promisify.svg?style=flat)](https://npmjs.org/package/xhr-promisify)
[![NPM Downloads](https://img.shields.io/npm/dm/xhr-promisify.svg?style=flat)](https://npmjs.org/package/xhr-promisify)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/xhr-promisify/badge)](https://www.jsdelivr.com/package/npm/xhr-promisify)

> **A lightweight Promise-based XHR library** that wraps traditional `XMLHttpRequest` into a Promise interface to simplify asynchronous request development.

---

## **Installation**

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
  // GET request
  ajax({
    url: 'https://api.example.com/data',
    method: 'GET'
  })
  .then(response => {
    console.log('Response data:', response);
  })
  .catch(error => {
    console.error('Request failed:', error);
  });
</script>
```

:::

---

## **Quick Start**
### Basic Usage
```javascript
import { ajax } from 'xhr-promisify';

// GET request
ajax({
  url: 'https://api.example.com/data',
  method: 'GET'
})
.then(response => {
  console.log('Response data:', response);
})
.catch(error => {
  console.error('Request failed:', error);
});

// Simplified syntax (async/await)
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

## **API Documentation**
### `ajax(options: AjaxRequestOptions | string): Promise<AjaxResponse>`
Sends an HTTP request and returns a Promise.

#### Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | `string` | ✔️ | Request URL |
| `method` | `string` | ❌ | Request method (default: `GET`) |
| `data` | `object` | ❌ | Request body (automatically serialized to JSON for POST/PUT methods) |
| `timeout` | `number` | ❌ | Timeout in milliseconds (default: `30000`) |
| `headers` | `object` | ❌ | Custom request headers |
| `signal` | `AbortSignal` | ❌ | Abort the request via `AbortController` |
| `query` | `object` | ❌ | URL query parameters (auto-encoded) |
| `auth` | `object` | ❌ | Basic authentication (`{ username, password }`) |
| `withCredentials` | `boolean` | ❌ | Whether to include credentials (e.g., cookies) |
| `responseType` | `string` | ❌ | Response type (e.g., `json`, `blob`) |
| `validateStatus` | `(status: number) => boolean` | ❌ | Custom logic for determining successful status codes |

#### Return Value (`AjaxResponse`)
```typescript
interface AjaxResponse {
  status: number;        // HTTP status code
  statusText: string;    // Status text
  headers: Record<string, string>; // Response headers
  data: any;             // Parsed response data
  request: XMLHttpRequest; // Native XHR object
}
```

#### Error Type (`AjaxError`)
All errors throw an `AjaxError` object with the following properties:
```typescript
class AjaxError extends Error {
  code: string; // Error code (e.g., `ERR_NETWORK`)
  status?: number; // HTTP status code (if available)
  statusText?: string; // HTTP status text (if available)
  data?: any; // Response data (if available)
  request?: XMLHttpRequest; // Original request object (if available)
}
```

#### Exported Error Codes
| Error Code | Description |
|------------|-------------|
| `ABORT_ERR` | Request was aborted |
| `ERR_NETWORK` | Network error (e.g., DNS resolution failed) |
| `ERR_HTTP_REQUEST_TIMEOUT` | Request timed out |
| `ERR_BAD_REQUEST` | HTTP 4xx status code error |
| `ERR_BAD_RESPONSE` | HTTP 5xx status code error |

---

## **Advanced Usage**
### Abort Requests
```javascript
const controller = new AbortController();
const { signal } = controller;

ajax({
  url: '/api/long-polling',
  signal
}).then(...);

// Abort the request manually
controller.abort();
```

### Custom Headers
```javascript
ajax({
  url: '/api/protected',
  headers: {
    'Authorization': 'Bearer your_token'
  }
});
```

### Handle Progress Events
```javascript
ajax({
  url: '/api/upload',
  onUploadProgress: (event) => {
    console.log(`Upload progress: ${event.loaded}/${event.total}`);
  },
  onDownloadProgress: (event) => {
    console.log(`Download progress: ${event.loaded}/${event.total}`);
  }
});
```

---

## **Error Handling**
All exceptions throw an `AjaxError` object with the following properties:
```typescript
class AjaxError extends Error {
  code: string; // Error code (e.g., `ERR_NETWORK`)
  status?: number; // HTTP status code (if available)
  statusText?: string; // HTTP status text (if available)
  data?: any; // Response data (if available)
  request?: XMLHttpRequest; // Original request object (if available)
}
```

### **Error Types**
| Error Code | Type | Description |
|------------|------|-------------|
| `ABORT_ERR` | `AjaxError` | Request was manually aborted |
| `ERR_NETWORK` | `AjaxError` | Network error (e.g., DNS resolution failure) |
| `ERR_HTTP_REQUEST_TIMEOUT` | `AjaxError` | Request timeout |
| `ERR_BAD_REQUEST` | `AjaxError` | HTTP 4xx status code error |
| `ERR_BAD_RESPONSE` | `AjaxError` | HTTP 5xx status code error |

---

## **Browser Support**

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |
