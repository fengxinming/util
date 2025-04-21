# xhr-promisify

[![npm package](https://nodei.co/npm/xhr-promisify.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/xhr-promisify)

[![NPM version](https://img.shields.io/npm/v/xhr-promisify.svg?style=flat)](https://npmjs.org/package/xhr-promisify)
[![NPM Downloads](https://img.shields.io/npm/dm/xhr-promisify.svg?style=flat)](https://npmjs.org/package/xhr-promisify)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/xhr-promisify/badge)](https://www.jsdelivr.com/package/npm/xhr-promisify)

以下是为 `xhr-promisify` 项目生成的 Markdown 文档模板，结合 GitHub 常见规范设计：

---

```markdown
# XHR-Promisify

[![npm package](https://nodei.co/npm/xhr-promisify.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/xhr-promisify)

[![NPM version](https://img.shields.io/npm/v/xhr-promisify.svg?style=flat)](https://npmjs.org/package/xhr-promisify)
[![NPM Downloads](https://img.shields.io/npm/dm/xhr-promisify.svg?style=flat)](https://npmjs.org/package/xhr-promisify)

**轻量级的 Promise 化 XHR 工具库**，将传统的 `XMLHttpRequest` 封装为 Promise 接口，简化异步请求开发。

---

## **特性**
- **Promise 接口**：支持 `async/await` 和 `.then()` 链式调用
- **错误处理**：标准化错误类型（如超时、网络错误、HTTP 状态码异常）
- **零依赖**：仅需 ~2KB（gzip 压缩后）
- **浏览器兼容**：支持 IE11+ 及现代浏览器

---

## **安装**
```bash
npm install xhr-promisify
# 或
yarn add xhr-promisify
# 或
pnpm add xhr-promisify
```

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
### `ajax(options: XhrOptions): Promise<XhrResponse>`
发送 HTTP 请求并返回 Promise。

#### 参数
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| `url` | `string` | 是 | 请求地址 |
| `method` | `string` | 否 | 请求方法（默认 `GET`） |
| `data` | `object` | 否 | POST/PUT 等请求的请求体（自动序列化为 JSON） |
| `timeout` | `number` | 否 | 超时时间（毫秒，默认 `30000`） |
| `headers` | `object` | 否 | 自定义请求头 |

#### 返回值
成功时返回 `XhrResponse` 对象：
```typescript
interface XhrResponse {
  status: number; // HTTP 状态码
  statusText: string;
  headers: Record<string, string>;
  data: any; // 解析后的响应数据（自动 JSON 解析）
}
```

#### 错误类型
| 错误代码 | 类型 | 描述 |
|----------|------|------|
| `ABORT_ERR` | `XhrError` | 请求被手动中止 |
| `ERR_NETWORK` | `XhrError` | 网络错误（如 DNS 解析失败） |
| `ERR_HTTP_REQUEST_TIMEOUT` | `XhrError` | 请求超时 |
| `ERR_BAD_REQUEST` | `XhrError` | HTTP 状态码 4xx 错误 |
| `ERR_BAD_RESPONSE` | `XhrError` | HTTP 状态码 5xx 错误 |

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

---

## **错误处理**
所有异常均抛出 `XhrError` 对象，包含以下属性：
```typescript
class XhrError extends Error {
  code: string; // 错误代码（如 `ERR_NETWORK`）
  status?: number; // HTTP 状态码（若适用）
  response?: XhrResponse; // 原始响应对象（若适用）
}
```

---

## **浏览器支持**
| 浏览器 | 支持版本 |
|--------|----------|
| Chrome | 最新版本 ✔ |
| Firefox | 最新版本 ✔ |
| Safari | 最新版本 ✔ |
| Edge | 最新版本 ✔ |
| IE | IE11+ ✔ |

---

## **贡献指南**
1. Fork 本仓库并创建新分支
2. 实现新功能或修复问题
3. 确保通过所有单元测试
4. 提交 Pull Request

---

## **许可证**
MIT License
