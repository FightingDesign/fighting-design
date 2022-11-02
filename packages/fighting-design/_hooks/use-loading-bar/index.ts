import { render, h } from 'vue'
import LoadingBarVue from '../../loading-bar/src/loading-bar.vue'
import type {
  OrdinaryFunctionInterface as a,
  UseLoadingBarInterface as b,
  UseLoadingBarReturnInterface as c
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
