import type {
  RipplesInterface,
  RipplesOptionInterface as b
} from '../_interface'

/**
 * 按钮点击涟漪效果
 */
export class Ripples implements RipplesInterface {
  evt: MouseEvent
  node: HTMLElement
  option: b

  constructor (evt: MouseEvent, node: HTMLElement, option: b) {
    this.evt = evt
    this.node = node
    this.option = option
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
    const { layerX, layerY }: { layerX: number, layerY: number } = this.evt as any

    const ripples: HTMLSpanElement = this.renderElement(layerX, layerY)

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
    if (this.option.ripplesColor) {
      return this.option.ripplesColor
    }

    const COLOR_LIST = {
      default: '#f0f0f0',
      primary: '#2d5af1',
      success: '#52b35e',
      danger: '#ff0200',
      warning: '#fcc202'
    } as const

    /**
     * 如果是按钮组件
     * 如果 simple, text 存在其中一个，那么就返回指定的色号，否则返回空字符串
     */
    if (this.option.component === 'f-button') {
      const { simple, text } = this.option

      return simple || text ? COLOR_LIST[this.option.type] : ''
    }

    // 如果不是按钮组件，则可以直接返回指定色号
    return COLOR_LIST[this.option.type]
  }
  /**
   * 渲染节点
   * @param x 坐标 x
   * @param y 坐标 y
   */
  renderElement = (x: number, y: number): HTMLSpanElement => {
    const ripples: HTMLSpanElement = document.createElement(
      'span'
    ) as HTMLSpanElement

    ripples.className = this.option.className
    ripples.style.background = this.computedRipplesColor()
    ripples.style.left = `${x}px`

    // 只有在按钮组件的时候，才作用 y 轴的坐标
    if (this.option.component === 'f-button') {
      ripples.style.top = `${y}px`
    }

    return ripples
  }
  /**
   * 删除涟漪节点
   * @param node dom
   */
  removeElement = (node: HTMLElement): void => {
    setTimeout((): void => {
      node.remove()
    }, this.option.duration || 400)
  }
}
