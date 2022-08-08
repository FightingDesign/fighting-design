import type { buttonType } from '../button/src/interface'

export interface RipplesInterface {
  evt: buttonEventInterface
  node: HTMLElement
  ripplesColor: string
  type: buttonType
  simple: boolean
  text: boolean
  clickRipples(): void
  computedRipplesColor(): string
  renderElement(x: number, y: number): HTMLSpanElement
  removeElement(node: HTMLElement): void
}

export type buttonEventInterface = PointerEvent & {
  layerX: number
  layerY: number
}
