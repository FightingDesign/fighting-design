import LoadingBarVue from './loading-bar.vue'
import { render, h } from 'vue'
import type { ordinaryFunctionInterface as a } from '../../_interface'
import type {
  useLoadingBarInterface as b,
  useLoadingBarReturnInterface as c
} from './interface'
import type { VNode } from 'vue'

export const useLoadingBar: b = (): c => {
  const start: a = (): void => {
    const node: VNode = h(LoadingBarVue)
    render(node, document.body)
  }

  const finish: a = (): void => {
    const node: VNode = h(LoadingBarVue, { type: 'finish' })
    render(node, document.body)
  }

  const error: a = (): void => {
    const node: VNode = h(LoadingBarVue, { type: 'error' })
    render(node, document.body)
  }

  return {
    start,
    finish,
    error
  } as const
}
