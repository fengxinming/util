
import Exception from './Exception';

/**
 * NotImplementedException 未实现异常
 */
export default class NotImplementedException extends Exception {
  /**
   * NotImplementedException 构造函数
   *
   * @param method 未实现的方法名
   * @param instance 未实现的方法所在的实例
   * @param extra 额外信息
   */
  constructor(method: string, instance: any, extra?: Record<string, any>) {
    super(
      `${typeof instance === 'string' ? instance : instance.constructor.name}.${method} not implemented yet.`,
      'NotImplementedException',
      extra
    );
  }
}
