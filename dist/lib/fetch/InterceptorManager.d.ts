export default class InterceptorManager {
    private handlers;
    /**
     * @description 添加路由拦截器
     * @param {Function} fulfilled 成功回调
     * @param {Function} rejected 拦截器失败回调
     */
    use(fulfilled: Function, rejected: Function): number;
    /**
     * @description 从堆栈中移除拦截器
     * @param {number} id use返回的id
     */
    eject(id: number): void;
    /**
     * @description 遍历所有注册的拦截器
     * @param {Function} fn 要为每个拦截器调用的函数
     */
    forEach(fn: Function): void;
}
