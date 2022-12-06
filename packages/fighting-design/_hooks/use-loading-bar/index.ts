import { render, h } from 'vue'
import LoadingBarVue from '../../loading-bar/src/loading-bar.vue'
import type { UseLoadingBarReturnInterface } from './interface'
import type { VNode } from 'vue'

/**
 * loading-bar 加载条组件方法
 *
 * @returns
 */
export const useLoadingBar = (): UseLoadingBarReturnInterface => {
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
