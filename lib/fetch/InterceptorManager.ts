import { autobind } from 'core-decorators';
import { THandlers } from './typings'

@autobind
export default class InterceptorManager {
  private handlers: THandlers[] = [];

  /**
   * @description 添加路由拦截器
   * @param {Function} fulfilled 成功回调
   * @param {Function} rejected 拦截器失败回调
   */
  use(fulfilled: Function, rejected: Function): number {
    this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected
    });
    return this.handlers.length - 1;
  }

  /**
   * @description 从堆栈中移除拦截器
   * @param {number} id use返回的id
   */
  eject(id: number): void {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * @description 遍历所有注册的拦截器
   * @param {Function} fn 要为每个拦截器调用的函数
   */
  forEach(fn: Function) {
    this.handlers.forEach((h) => {
      if (h !== null) {
        fn(h);
      }
    })
  }
}