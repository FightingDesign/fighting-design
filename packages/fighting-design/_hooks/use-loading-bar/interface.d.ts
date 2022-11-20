export type { OrdinaryFunctionInterface } from '../../_interface'

/**
 * loading-bar 加载条组件 hook 方法返回值类型接口
 *
 * 返回 开始、结束、失败的方法
 */
export interface UseLoadingBarReturnInterface {
  start: OrdinaryFunctionInterface
  finish: OrdinaryFunctionInterface
  error: OrdinaryFunctionInterface
}

/**
 * loading-bar 加载条组件方法类型
 *
 * 返回 UseLoadingBarReturnInterface 类型对象
 */
export interface UseLoadingBarInterface {
  (): UseLoadingBarReturnInterface
}
