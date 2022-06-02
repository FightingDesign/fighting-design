import type { RipplesInterface } from '@fighting-design/fighting-type'

/**
 * 按钮点击涟漪效果
 */
export class Ripples implements RipplesInterface {
  evt: PointerEvent
  node: HTMLElement
  time: number
  constructor(evt: PointerEvent, node: HTMLElement, time: number) {
    this.evt = evt
    this.node = node
    this.time = time
  }
  clickRipples(): void {
    const target: HTMLSpanElement | HTMLButtonElement =
      (this.evt.target as HTMLButtonElement).className === 'f-text'
        ? ((this.evt.target as HTMLButtonElement)
            .parentNode as HTMLButtonElement)
        : (this.evt.target as HTMLButtonElement)

    const x: number = this.evt.clientX - target.offsetLeft
    const y: number = this.evt.clientY - target.offsetTop
    const ripples = this.renderElement(x, y)

    this.node.appendChild(ripples)
    this.removeElement(ripples)
  }
  renderElement(x: number, y: number): HTMLSpanElement {
    const ripples: HTMLSpanElement = document.createElement('span')

    ripples.className = 'f-design-ripples'
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
