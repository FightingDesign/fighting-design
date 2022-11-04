import { render, h } from 'vue'
import LoadingBarVue from '../../loading-bar/src/loading-bar.vue'
import type {
  OrdinaryFunctionInterface,
  UseLoadingBarInterface,
  UseLoadingBarReturnInterface
} from './interface'
import type { VNode } from 'vue'

export const useLoadingBar: UseLoadingBarInterface = (): UseLoadingBarReturnInterface => {
  const start: OrdinaryFunctionInterface = (): void => {
    const node: VNode = h(LoadingBarVue)
    render(node, document.body)
  }

  const finish: OrdinaryFunctionInterface = (): void => {
    const node: VNode = h(LoadingBarVue, { type: 'finish' })
    render(node, document.body)
  }

  const error: OrdinaryFunctionInterface = (): void => {
    const node: VNode = h(LoadingBarVue, { type: 'error' })
    render(node, document.body)
  }

  return {
    start,
    finish,
    error
  } as const
}
