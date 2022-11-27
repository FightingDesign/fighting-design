import type { ButtonType } from '../../button/src/interface'

/**
 * Ripples 类所需要的 props 参数类型接口
 *
 * @param duration 动画时长
 * @param component 组件类型 目前仅有 button 和 ripple 组件两种类型
 * @param className 涟漪节点类名
 * @param ripplesColor 自定义涟漪背景色
 * @param type 组件 type
 * @param simple 是否为简约按钮（仅适用于按钮组件）
 * @param text 是否为文字按钮（仅适用于按钮组件）
 */
export interface RipplesOptionInterface {
  duration: number
  component: 'f-ripple' | 'f-button'
  className: string
  ripplesColor: string
  type: ButtonType
  simple?: boolean
  text?: boolean
}

/**
 * Ripples 类的类型接口
 *
 * @param evt 事件对象
 * @param node 需要添加涟漪的节点
 * @param option 其它 props 配置项参数对象
 * @param clickRipples 点击生成涟漪效果方法
 * @param computedRipplesColor 计算涟漪颜色
 * @param renderElement 渲染涟漪节点
 * @param removeElement 移除涟漪节点
 */
export interface RipplesInterface {
  evt: RipplesMouseEventInterface
  node: HTMLElement
  option: RipplesOptionInterface
  clickRipples(): void
  computedRipplesColor(): string
  renderElement(x: number, y: number): HTMLSpanElement
  removeElement(node: HTMLElement): void
}

/**
 * 给 MouseEvent 对象添加新属性类型接口
 *
 * @param layerX 点击元素的 x 轴坐标
 * @param layerY 点击元素的 y 轴坐标
 */
export interface RipplesMouseEventInterface extends MouseEvent {
  layerX: number
  layerY: number
}
