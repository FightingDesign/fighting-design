import { computed } from 'vue'
import type { FightingType } from '../../_interface'

/**
 * useRipples 类所需要的 props 参数类型接口
 *
 * @param { number } duration 动画时长
 * @param { 'f-ripple' | 'f-button' } component 组件类型 目前仅有 button 和 ripple 组件两种类型
 * @param { string } className 涟漪节点类名
 * @param { string } ripplesColor 自定义涟漪背景色
 * @param { string } type 组件 type
 * @param { boolean } [simple] 是否为简约按钮（仅适用于按钮组件）
 * @param { boolean } [text] 是否为文字按钮（仅适用于按钮组件）
 */
export interface RipplesOptions {
  duration: number
  component: 'f-ripple' | 'f-button'
  className: string
  ripplesColor: string
  type: FightingType
  simple?: boolean
  text?: boolean
}

/**
 * ripples 方法事件类型接口
 *
 * @param { number } layerX x 轴坐标
 * @param { number } layerY y 轴坐标
 */
export interface RipplesEvt extends Event {
  layerX: number
  layerY: number
}

/**
 * ripples 返回值类型接口
 *
 * @param { Function } runRipples 生成涟漪方法
 */
export interface UseRipplesReturn {
  runRipples: () => void
}

/**
 * 点击的涟漪效果
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } evt 事件对象
 * @param { Object } node 元素节点
 * @param { Object } options 配置对象
 * @returns { Object }
 */
export const useRipples = (
  evt: MouseEvent,
  node: HTMLElement,
  options: RipplesOptions
): UseRipplesReturn => {
  /**
   * 计算涟漪颜色
   *
   * 如果设置了 ripplesColor 则直接返回
   *
   * 在 simple 和 text 模式下，根据 type 返回颜色
   *
   * 否则返回默认白色
   */
  const ripplesColor = computed((): string => {
    if (options.ripplesColor) {
      return options.ripplesColor
    }

    const COLOR_LIST = {
      default: '#f0f0f0',
      primary: '#2d5af1',
      success: '#52b35e',
      danger: '#ff0200',
      warning: '#fcc202',
      info: '#1d1d1f'
    } as const

    /**
     * 如果是按钮组件
     *
     * 如果 simple, text 存在其中一个，那么就返回指定的色号，否则返回空字符串
     */
    if (options.component === 'f-button') {
      const { simple, text } = options

      return simple || text ? COLOR_LIST[options.type] : ''
    }

    /** 如果不是按钮组件，则可以直接返回指定色号 */
    return COLOR_LIST[options.type]
  })

  /**
   * 删除涟漪节点
   *
   * @param { Object } node dom 元素
   */
  const removeElement = (node: HTMLElement): void => {
    setTimeout((): void => {
      /**
       * @see Element.remove() https://developer.mozilla.org/zh-CN/docs/Web/API/Element/remove
       */
      node.remove()
    }, options.duration || 400)
  }

  /**
   * 渲染节点
   *
   * @param { number } x 坐标 x
   * @param { number } y 坐标 y
   * @returns { Object } 元素节点
   */
  const renderElement = (x: number, y: number): HTMLElement => {
    /** 新建个 span 元素 */
    const ripples: HTMLSpanElement = document.createElement('span')

    ripples.className = options.className
    ripples.style.background = ripplesColor.value
    ripples.style.left = `${x}px`

    // 如果是按钮，则需要添加容器
    if (options.component === 'f-button') {
      /** 创建一个容器元素 */
      const box: HTMLDivElement = document.createElement('div')

      box.className = 'f-button__ripples-box'

      box.appendChild(ripples)

      ripples.style.top = `${y}px`

      return box
    }

    return ripples
  }

  /** 点击生成涟漪效果 */
  const runRipples = (): void => {
    /**
     * clientX clientY 可获取到点击相对于页面的坐标
     *
     * 其它写法
     *
     * const x: number = evt.clientX - (evt.target as HTMLElement).offsetLeft
     * const y: number = evt.clientY - (evt.target as HTMLElement).offsetTop
     *
     * @see clientX https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX
     * @see clientY https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientY
     */
    const { layerX, layerY } = evt as unknown as RipplesEvt

    /** 元素节点 */
    const ripples: HTMLElement = renderElement(layerX, layerY)

    node.appendChild(ripples)

    removeElement(ripples)
  }

  return { runRipples }
}
