# **ajax**

## **Quick Start**
### Basic GET Request
```javascript
import { ajax } from 'xhr-promisify';

ajax({
  url: 'https://api.example.com/data',
  method: 'GET'
})
.then(response => {
  console.log('Response data:', response.data);
})
.catch(error => {
  console.error('Request failed:', error);
});
```

### async/await Syntax
```javascript
import { ajax } from 'xhr-promisify';

async function fetchData() {
  try {
    const response = await ajax({ url: '/api/data' });
    console.log(response.data);
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

// Manually abort the request
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