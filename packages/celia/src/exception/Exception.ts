
import isObject from '../is/isObject';

/**
 * Exception 基类
 */
export default class Exception extends Error {
  [key: string]: any;

  /**
   * Exception 构造函数
   *
   * @param message 错误信息
   * @param name 错误名称
   * @param extra 附加信息
   */
  constructor(message: string, name?: string, extra?: Record<string, any>) {
    super(message);

    if (isObject(name)) {
      extra = name as any;
      name = 'Exception';
    }

    if ((Error as any).captureStackTrace) {
      (Error as any).captureStackTrace(this, this.constructor);
    }
    else {
      this.stack = (new Error()).stack;
    }

    this.name = name || 'Exception';
    Object.assign(this, extra);
  }
}
