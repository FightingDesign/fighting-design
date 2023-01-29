/**
 * 执行组件 prop 的回调函数
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Function } callback 回调函数
 * @param { String } params 回调参数
 */
export const useRun = <T extends Function>(callback: T | null | undefined, ...params: unknown[]): void => {
  callback && callback(...params)
}
