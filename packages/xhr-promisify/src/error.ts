export const ABORT_ERR = 'ABORT_ERR';
export const ERR_NETWORK = 'ERR_NETWORK';
export const ERR_HTTP_REQUEST_TIMEOUT = 'ERR_HTTP_REQUEST_TIMEOUT';
export const ERR_BAD_REQUEST = 'ERR_BAD_REQUEST';
export const ERR_BAD_RESPONSE = 'ERR_BAD_RESPONSE';

export class AjaxError extends Error {
  /** 错误代码 */
  code: string;

  /** XMLHttpRequest实例 */
  request?: XMLHttpRequest;

  /** 相应数据 */
  data?: any;

  /** 响应状态码 */
  status?: number;

  /** 响应状态内容 */
  statusText?: string;

  constructor(message: string, code: string, extra?: Record<string, any>) {
    super(message);

    this.code = code;

    if ((Error as any).captureStackTrace) {
      (Error as any).captureStackTrace(this, this.constructor);
    }
    else {
      this.stack = (new Error()).stack;
    }

    Object.assign(this, extra);
  }
}
