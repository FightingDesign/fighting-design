import type { ComponentPublicInstance, App } from 'vue'

export type { LoadingPropsType } from './props'

/**
 * FLoading 元素节点类型接口
 */
export interface LoadingElInterface extends HTMLElement {
  vm: ComponentPublicInstance
  loadingInstance: App | null
  originalPosition: string
  style: CSSStyleDeclaration
}
