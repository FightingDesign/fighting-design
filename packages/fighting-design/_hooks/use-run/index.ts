import { isFunction } from '../../_utils'
import type { UseRunReturn } from './interface'

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
    ...params: unknown[]
  ): void => {
    isFunction(callback) && callback(...params)
  }

  return { run }
}
