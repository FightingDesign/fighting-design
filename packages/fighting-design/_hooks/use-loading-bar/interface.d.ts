export type { OrdinaryFunctionInterface } from '../../_interface'

/**
 * loading-bar 加载条组件 hook 方法返回值类型接口
 *
 * 返回 开始、结束、失败的方法
 *
 * @param start 开始加载
 * @param finish 结束加载
 * @param error 加载失败
 */
export interface UseLoadingBarReturnInterface {
  start: OrdinaryFunctionInterface
  finish: OrdinaryFunctionInterface
  error: OrdinaryFunctionInterface
}
