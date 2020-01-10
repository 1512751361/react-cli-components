import { IFetchConfig, ERequestMethod } from './typings';
import InterceptorManager from './InterceptorManager';
export default class FetchUtil {
    private defaults;
    /**
     * @description 请求方法
     */
    RequestMethod: typeof ERequestMethod;
    /**
     * @description 拦截器
     */
    interceptors: {
        request: InterceptorManager;
        response: InterceptorManager;
    };
    constructor(config: IFetchConfig);
    /**
     * @description init config
     */
    private initConfig;
    /**
     * @description URL参数编码
     */
    parseParamKey(param: any, key?: string): string;
    /**
     * @description feth request请求
     */
    request(config: IFetchConfig): Promise<unknown>;
    private dispatchRequest;
}
