/** ajax 请求参数 */
export interface AjaxRequestOptions {
  /** 请求地址 */
  url: string;

  /** 请求方法 GET, POST, PUT, DELETE, HEAD, OPTIONS 等 */
  method?: string;

  /** 请求头 */
  headers?: Record<string, any>;

  /** 连接超时时间，单位毫秒 */
  timeout?: number;

  /** 用于取消请求 */
  signal?: AbortSignal;

  /** GET 请求参数 */
  query?: string | Record<string, any>;

  /** POST 请求参数 */
  body?: Document | XMLHttpRequestBodyInit | null;

  /** 请求凭证 */
  auth?: {
    username: string;
    password: string;
  };

  /** 是否允许携带 cookie */
  withCredentials?: boolean;

  /** 响应结果类型 */
  responseType?: XMLHttpRequestResponseType;

  /** 响应状态码验证器 */
  validateStatus?: (status: number) => boolean;

  /** 响应结果转换器 */
  onDownloadProgress?: ((this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => any) | null;

  /** 上传进度回调 */
  onUploadProgress?: ((this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => any) | null;
}

/** ajax 响应结果 */
export interface AjaxResponse {
  /** 响应头 */
  headers: Record<string, string>;
  /** 响应数据 */
  data: any;

  /** 响应状态内容 */
  statusText: string;

  /** 响应状态码 */
  status: number;

  /** XMLHttpRequest实例 */
  request: XMLHttpRequest;
}

