import { isFunction } from '../../_utils'

/**
 * useRun 返回值类型接口
 *
 * @param { Function } run 执行方法
 */
export interface UseRunReturn {
  run: <T extends Function>(callback: T | null | undefined, ...params: any[]) => void
}

/**
 * 执行方法
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 */
export const useRun = (): UseRunReturn => {
  /**
   * 执行方法函数
   *
   * @param { Function } callback 回调函数
   * @param { string } params 回调参数
   */
  const run = <T extends Function>(
    callback: T | null | undefined,
    ...params: any[]
  ): void => {
    isFunction(callback) && callback(...params)
  }

  return { run }
}
