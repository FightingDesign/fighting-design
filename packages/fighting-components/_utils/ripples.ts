import type { RipplesInterface, buttonEventInterface } from '../_interface'
import type { buttonType } from '../button/src/interface'

const colorList = {
  default: '#f0f0f0',
  primary: '#2d5af1',
  success: '#52b35e',
  danger: '#ff0200',
  warning: '#fcc202'
} as const

/**
 * 按钮点击涟漪效果
 */
export class Ripples implements RipplesInterface {
  evt: buttonEventInterface
  node: HTMLElement
  ripplesColor: string
  type: buttonType
  simple: boolean
  text: boolean

  constructor (
    evt: buttonEventInterface,
    node: HTMLElement,
    ripplesColor: string,
    type: buttonType,
    simple: boolean,
    text: boolean
  ) {
    this.evt = evt
    this.node = node
    this.ripplesColor = ripplesColor
    this.type = type
    this.simple = simple
    this.text = text
  }
  /**
   * 点击生成涟漪效果
   */
  clickRipples = (): void => {
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
  /**
   * 计算涟漪颜色
   */
  computedRipplesColor = (): string => {
    return this.ripplesColor
      ? this.ripplesColor
      : this.simple || this.text
        ? colorList[this.type]
        : '#fff'
  }
  /**
   * 渲染节点
   * @param x 坐标 x
   * @param y 坐标 y
   */
  renderElement = (x: number, y: number): HTMLSpanElement => {
    const ripples: HTMLSpanElement = document.createElement('span')

    ripples.className = 'f-design-ripples'
    ripples.style.background = this.computedRipplesColor()
    ripples.style.left = `${x}px`
    ripples.style.top = `${y}px`

    return ripples
  }
  /**
   * 删除节点
   * @param node dom
   */
  removeElement = (node: HTMLElement): void => {
    setTimeout((): void => {
      node.remove()
    }, 600)
  }
}
