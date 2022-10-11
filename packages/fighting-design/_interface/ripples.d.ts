import type { ButtonType } from '../button/src/interface'

/**
 * Ripples 类所需要的 props 参数
 * @param duration 动画时长
 * @param component 组件类型 目前仅有 button 和 ripple 组件两种类型
 * @param className 涟漪节点类名
 * @param ripplesColor 自定义涟漪背景色
 * @param type 组件 type
 * @param simple 是否为简约按钮（仅适用于按钮组件）
 * @param text 是否为文字按钮（仅适用于按钮组件）
 */
export interface RipplesOptionInterface {
  duration: number
  component: 'f-ripple' | 'f-button'
  className: string
  ripplesColor: string
  type: ButtonType
  simple?: boolean
  text?: boolean
}

export interface RipplesInterface {
  evt: MouseEvent
  node: HTMLElement
  option: RipplesOptionInterface
  clickRipples(): void
  computedRipplesColor(): string
  renderElement(x: number, y: number): HTMLSpanElement
  removeElement(node: HTMLElement): void
}
