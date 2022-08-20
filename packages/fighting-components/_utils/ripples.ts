import type {
  RipplesInterface,
  RipplesNeedButtonPropsInterface as a
} from '../_interface'

/**
 * 按钮点击涟漪效果
 */
export class Ripples implements RipplesInterface {
  evt: MouseEvent
  node: HTMLElement
  props: a

  constructor (evt: MouseEvent, node: HTMLElement, props: a) {
    this.evt = evt
    this.node = node
    this.props = props
  }
  /**
   * 点击生成涟漪效果
   */
  clickRipples = (): void => {
    /**
     * layerX 和 layerY 属性暂时使用，未来可能会涉及到兼容性的问题
     * 可以直接获取点击元素的坐标
     * const x: number = this.evt.layerX
     * const y: number = this.evt.layerY
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/layerX
     *
     * 出于对浏览器的兼容和稳定，暂时先使用下面 API
     */

    /**
     * clientX clientY 获取到点击相对于页面的坐标
     * https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX
     */
    // const x: number =
    //   this.evt.clientX - (this.evt.target as HTMLElement).offsetLeft
    // const y: number =
    //   this.evt.clientY - (this.evt.target as HTMLElement).offsetTop

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const x: number = (this.evt as any).layerX as number
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const y: number = (this.evt as any).layerY as number

    const ripples: HTMLSpanElement = this.renderElement(x, y)

    this.node.appendChild(ripples)
    this.removeElement(ripples)
  }
  /**
   * 计算涟漪颜色
   *
   * 如果设置了 ripplesColor 则直接返回
   * 在 simple 和 text 模式下，根据 type 返回颜色
   * 否则返回默认白色
   */
  computedRipplesColor = (): string => {
    if (this.props.ripplesColor) return this.props.ripplesColor

    if (this.props.simple || this.props.text) {
      const COLOR_LIST = {
        default: '#f0f0f0',
        primary: '#2d5af1',
        success: '#52b35e',
        danger: '#ff0200',
        warning: '#fcc202'
      } as const

      return COLOR_LIST[this.props.type]
    }
    return '#fff'
  }
  /**
   * 渲染节点
   * @param x 坐标 x
   * @param y 坐标 y
   */
  renderElement = (x: number, y: number): HTMLSpanElement => {
    const ripples: HTMLSpanElement = document.createElement('span')!

    ripples.className = 'f-design-ripples'
    ripples.style.background = this.computedRipplesColor()
    ripples.style.left = `${x}px`
    ripples.style.top = `${y}px`

    return ripples
  }
  /**
   * 删除涟漪节点
   * @param node dom
   */
  removeElement = (node: HTMLElement): void => {
    setTimeout((): void => {
      node.remove()
    }, 600)
  }
}
