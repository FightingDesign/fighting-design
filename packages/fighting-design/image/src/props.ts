import {
  setBooleanProp,
  setStringNumberProp,
  setStringProp,
  setFunctionProp
} from '../../_utils'
import { FIGHTING_FIT } from '../../_tokens'
import type { ExtractPropTypes } from 'vue'
import type { HandleEvent, FightingFit } from '../../_interface'

export const Props = {
  /** 图片路径 */
  src: setStringProp(),
  /**
   * 原生 alt 属性
   *
   * @see alt https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-alt
   */
  alt: setStringProp(),
  /** 是否可以拖动 */
  draggable: setBooleanProp(true),
  /** 是否懒加载图片 */
  lazy: setBooleanProp(),
  /** 触发懒加载的距离 */
  rootMargin: setStringNumberProp('100px'),
  /** 图片的宽度 */
  width: setStringNumberProp(),
  /** 图片的高度 */
  height: setStringNumberProp(),
  /** 是否为块级元素 */
  block: setBooleanProp(),
  /**
   * 如何适应容器，原生 object-fit 属性
   *
   * @values fill contain cover none scale-down
   * @see object-fit https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it
   */
  fit: setStringProp<FightingFit>(undefined, (val: FightingFit): boolean => {
    return FIGHTING_FIT.includes(val)
  }),
  /** 是否可以选中 */
  select: setBooleanProp(),
  /**
   * 原生 referrerPolicy 属性
   *
   * @see Referrer-Policy https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy#syntax
   */
  referrerPolicy: setStringProp(),
  /** 配置圆角，传入一个数值 */
  round: setStringNumberProp(),
  /** 加载失败时要显示的地址 */
  errSrc: setStringProp(),
  /** img 的 title */
  title: setStringProp(),
  /** 图片加载成功触发的回调 */
  onLoad: setFunctionProp<HandleEvent>(),
  /** 图片加载失败触发的回调 */
  onError: setFunctionProp<HandleEvent>()
} as const

/** image 组件 props 类型 */
export type ImageProps = ExtractPropTypes<typeof Props>
