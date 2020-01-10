export enum ERequestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
  HEAD = 'HEAD',
  COMMON = 'COMMON',
}

export enum EResponseType {
  arraybuffer = 'arraybuffer',
  blob = 'blob',
  json = 'json',
  text = 'text',
  formData = 'formData',
}

export interface IFetchConfig extends RequestInit {
  /**
   * @description `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
   * @description 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
   */
  baseURL?: string;

  /**
   * @description `url` 是用于请求的服务器 URL
   */
  url?: string;

  /**
   * @description `method` 是创建请求时使用的方法,默认是 get
   */
  method?: ERequestMethod;

  /**
   * @description `transformRequest` 允许在向服务器发送前，修改请求数据
   * @description 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
   * @description 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
   */
  transformRequest?: Function[];

  /**
   * @description `transformResponse` 在传递给 then/catch 前，允许修改响应数据
   * @description 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
   * @description 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
   */
  transformResponse?: Function[];

  /**
   * @description `params` 是即将与请求一起发送的 URL 参数
   * @description 必须是一个无格式对象(plain object) 对象
   */
  params?: {
    [key: string]: any
  };

  /**
   * @description `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
   * @description 如果请求话费了超过 `timeout` 的时间，请求将被中断
   * @default timeout = 1000 * 5
   */
  timeout?: number;

  /**
   * @description `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
   */
  responseType?: EResponseType;

  /**
   * @description `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
   */
  xsrfCookieName?: string;

  /**
   * @description `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
   */
  xsrfHeaderName?: string;

  /**
   * @description `onUploadProgress` 允许为上传处理进度事件
   */
  onUploadProgress?: Function;

  /**
   * @description `onDownloadProgress` 允许为下载处理进度事件
   */
  onDownloadProgress?: Function;

  /**
   * @description `maxContentLength` 定义允许的响应内容的最大尺寸
   */
  maxContentLength?: number;

  /**
   * @description `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
   */
  validateStatus?: Function;

  /**
   * @description `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
   * @description 如果设置为0，将不会 follow 任何重定向
   */
  maxRedirects?: number;
}

export type THandlers = {
  fulfilled: Function,
  rejected: Function
} | null;