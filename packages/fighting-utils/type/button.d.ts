export interface RipplesInterface {
  evt: PointerEvent
  node: HTMLElement
  time: number
  ripplesColor: string
  clickRipples(): void
  renderElement(x: number, y: number): HTMLSpanElement
  removeElement(node: HTMLElement): void
}
