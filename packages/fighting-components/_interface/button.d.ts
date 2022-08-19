import type { buttonType } from '../button/src/interface'

/**
 * Ripples 类所需要的 props 参数
 */
export interface RipplesNeedButtonPropsInterface {
  ripplesColor: string
  type: buttonType
  simple: boolean
  text: boolean
}

export interface RipplesInterface {
  evt: MouseEvent
  node: HTMLElement
  props: buttonPropsInterface
  clickRipples(): void
  computedRipplesColor(): string
  renderElement(x: number, y: number): HTMLSpanElement
  removeElement(node: HTMLElement): void
}
