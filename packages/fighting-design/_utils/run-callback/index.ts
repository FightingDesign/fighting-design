/**
 * 执行组件 prop 的回调函数
 * 
 * @param callback 回调函数
 * @param params 回调参数
 * @return { void } 没有返回值
 */
export const runCallback = <T extends Function, F>(
  callback: T | null,
  params: F | null
): void => {
  callback && callback(params)
}
