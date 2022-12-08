import { render, h } from 'vue'
import LoadingBarVue from '../../loading-bar/src/loading-bar.vue'
import type { VNode } from 'vue'

/**
 * loading-bar 加载条组件 hook 方法返回值类型接口
 *
 * 返回 开始、结束、失败的方法
 *
 * @param start 开始加载
 * @param finish 结束加载
 * @param error 加载失败
 */
export interface UseLoadingBarReturn {
  start(): void
  finish(): void
  error(): void
}

/**
 * loading-bar 加载条组件方法
 *
 * @returns
 */
export const useLoadingBar = (): UseLoadingBarReturn => {
  /**
   * 开始加载
   */
  const start = (): void => {
    const node: VNode = h(LoadingBarVue)
    render(node, document.body)
  }

  /**
   * 结束加载
   */
  const finish = (): void => {
    const node: VNode = h(LoadingBarVue, { type: 'finish' })
    render(node, document.body)
  }

  /**
   * 加载失败
   */
  const error = (): void => {
    const node: VNode = h(LoadingBarVue, { type: 'error' })
    render(node, document.body)
  }

  return {
    start,
    finish,
    error
  }
}
