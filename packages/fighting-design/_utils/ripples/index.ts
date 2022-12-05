import type {
  RipplesInterface,
  RipplesOptionInterface,
  RipplesMouseEventInterface
} from './interface'

/**
 * 按钮点击涟漪效果
 */
export class Ripples implements RipplesInterface {
  evt: RipplesMouseEventInterface
  node: HTMLElement
  option: RipplesOptionInterface

  constructor (
    evt: RipplesMouseEventInterface,
    node: HTMLElement,
    option: RipplesOptionInterface
  ) {
    this.evt = evt
    this.node = node
    this.option = option
  }
  /**
   * 点击生成涟漪效果
   */
  clickRipples = (): void => {

    console.log('123')

    /**
     * clientX clientY 可获取到点击相对于页面的坐标
     *
     * 其它写法
     * const x: number = this.evt.clientX - (this.evt.target as HTMLElement).offsetLeft
     * const y: number = this.evt.clientY - (this.evt.target as HTMLElement).offsetTop
     *
     * @see clientX https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX
     * @see clientY https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientY
     */
    const { layerX, layerY } = this.evt

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
   * @return { String }
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
   *
   * @param x 坐标 x
   * @param y 坐标 y
   * @return { HTMLSpanElement }
   */
  renderElement = (x: number, y: number): HTMLSpanElement => {
    /**
     * 新建个 span 元素
     */
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
   *
   * @param node dom 元素
   */
  removeElement = (node: HTMLElement): void => {
    setTimeout((): void => {
      node.remove()
    }, this.option.duration || 400)
  }
}
