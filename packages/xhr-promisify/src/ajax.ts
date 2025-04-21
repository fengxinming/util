import { append } from 'fast-qs';

import {
  ABORT_ERR,
  AjaxError,
  ERR_BAD_REQUEST,
  ERR_BAD_RESPONSE,
  ERR_HTTP_REQUEST_TIMEOUT,
  ERR_NETWORK
} from './error';
import { AjaxRequestOptions, AjaxResponse } from './types';

function _validateStatus(status: number): boolean {
  return (status >= 200 && status < 300) || status === 304;
}

/**
 * Ajax 请求
 *
 * @example
 * ```js
 * ajax({
 *   url: '/api/test',
 *   method: 'POST'
 * }).then(()=> {
 *   // 状态码 200
 * })
 * .catch(()=> {
 *   // 异常
 * })
 * ```
 *
 * @param options 请求参数
 * @returns 在 `then` 回调函数中获取结果
 */
export function ajax(options: AjaxRequestOptions | string): Promise<AjaxResponse> {
  if (typeof options === 'string') {
    options = { url: options };
  }
  return new Promise((resolve, reject) => {
    const {
      method,
      headers,
      signal,
      timeout,
      query,
      body,
      auth,
      withCredentials,
      responseType,
      validateStatus,
      onDownloadProgress,
      onUploadProgress
    } = options;
    let onCanceled: () => void;

    let { url } = options;
    if (query) {
      url = append(url, query);
    }

    const requestHeaders = Object.assign({
      'X-Requested-With': 'XMLHttpRequest'
    }, headers);

    if (auth) {
      const username = auth.username || '';
      const password = auth.password ? unescape(encodeURIComponent(auth.password)) : '';
      requestHeaders.Authorization = `Basic ${btoa(`${username}:${password}`)}`;
    }

    let request = new XMLHttpRequest();
    request.open(method ? method.toUpperCase() : 'GET', url, true);

    // 设置超时单位毫秒
    if (timeout !== void 0) {
      request.timeout = timeout;
    }

    const onloadend = () => {
      if (!request) {
        return;
      }

      const { status } = request;
      let _headers;
      const response: AjaxResponse = {
        get headers() {
          if (!_headers) {
            _headers = request.getAllResponseHeaders().trim().split(/[\r\n]+/).reduce((acc, line) => {
              const parts = line.split(': ');
              const header = parts.shift();
              const value = parts.join(': ');
              if (header) {
                acc[header] = value;
              }
              return acc;
            }, {});
          }
          return _headers;
        },
        data: request.response,
        statusText: request.statusText,
        status,
        request
      };

      if ((validateStatus || _validateStatus)(status)) {
        resolve(response);
      }
      else {
        const err = new AjaxError(
          `Request failed with status code ${status}`,
          Math.floor(response.status / 100) - 4 > 0 ? ERR_BAD_RESPONSE : ERR_BAD_REQUEST,
          response
        );
        reject(err);
      }
      if (signal) {
        signal.removeEventListener('abort', onCanceled);
      }

      request = null as any;
    };

    const onloadendSupported = 'onloadend' in request;
    if (onloadendSupported) {
      request.onloadend = onloadend;
    }
    else {
      request.onreadystatechange = function () {
        if (!request || request.readyState !== 4) {
          return;
        }
        const { responseURL } = request;
        if (
          request.status === 0
          && !(responseURL && responseURL.startsWith('file:'))
        ) {
          return;
        }

        setTimeout(onloadend);
      };
    }

    // 处理请求中断情况
    request.onabort = function (ev) {
      if (!request) {
        return;
      }
      reject(
        new AjaxError('Request aborted', ABORT_ERR, {
          nativeEvent: ev,
          request
        }),
      );
      request = null as any;
    };

    // 处理低级别的网络错误
    request.onerror = function (ev) {
      reject(
        new AjaxError('Network Error', ERR_NETWORK, {
          nativeEvent: ev,
          request
        }),
      );
      request = null as any;
    };

    // 处理超时
    request.ontimeout = function (ev) {
      const timeoutErrorMessage = timeout ? `timeout of ${timeout}ms exceeded` : 'timeout exceeded';
      reject(
        new AjaxError(timeoutErrorMessage, ERR_HTTP_REQUEST_TIMEOUT, {
          nativeEvent: ev,
          request
        }),
      );
      request = null as any;
    };

    if (body === void 0) {
      delete requestHeaders['Content-Type'];
    }

    if (requestHeaders) {
      Object.entries(requestHeaders).forEach(([key, val]) => {
        request.setRequestHeader(key, val);
      });
    }

    if (withCredentials !== void 0) {
      request.withCredentials = !!withCredentials;
    }

    if (responseType) {
      request.responseType = responseType;
    }

    // 下载进度
    if (onDownloadProgress) {
      request.onprogress = onDownloadProgress;
    }

    // 上传进度
    if (onUploadProgress) {
      // progress = e.loaded / e.total
      request.upload.onprogress = onUploadProgress;
    }

    if (signal) {
      onCanceled = () => {
        (request.onabort as any)();
      };

      if (signal.aborted) {
        onCanceled();
      }
      else {
        signal.addEventListener('abort', onCanceled);
      }
    }

    request.send(body);
  });
}
