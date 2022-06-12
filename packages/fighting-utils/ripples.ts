import type { RipplesInterface } from './type'

/**
 * 按钮点击涟漪效果
 */
export class Ripples implements RipplesInterface {
  evt: any
  node: HTMLElement
  time: number
  ripplesColor: string
  constructor(
    evt: PointerEvent,
    node: HTMLElement,
    time: number,
    ripplesColor: string
  ) {
    this.evt = evt
    this.node = node
    this.time = time
    this.ripplesColor = ripplesColor
  }
  clickRipples(): void {
    /**
     * layerX 和 layerY 属性暂时使用，未来可能会涉及到兼容性的问题
     * https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/layerX
     */
    const x: number = this.evt.layerX
    const y: number = this.evt.layerY
    const ripples: HTMLSpanElement = this.renderElement(x, y)

    this.node.appendChild(ripples)
    this.removeElement(ripples)
  }
  renderElement(x: number, y: number): HTMLSpanElement {
    const ripples: HTMLSpanElement = document.createElement('span')

    ripples.className = 'f-design-ripples'
    ripples.style.background = this.ripplesColor
    ripples.style.left = `${x}px`
    ripples.style.top = `${y}px`

    return ripples
  }
  removeElement(node: HTMLElement): void {
    setTimeout((): void => {
      node.remove()
    }, this.time)
  }
}
