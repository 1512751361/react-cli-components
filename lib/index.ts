export { default as ReactDemo } from './components/demo';
// 非常简单的加法函数
export function add(a: number, b: number): number {
  return a + b;
}

export { default as FetchUtil } from './fetch/FetchUtil';
export { default as InterceptorManager } from './fetch/InterceptorManager';
