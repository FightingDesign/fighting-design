import {
  setBooleanProp,
  setStringProp,
  setStringNumberProp,
  setNumberProp
} from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { BackTopBehavior } from './interface'

export const Props = {
  /** 是否为圆角 */
  round: setBooleanProp(),
  /**
   * 滚动模式
   *
   * @values smooth auto
   * @default smooth
   * @see scrollTo https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollTo
   */
  behavior: setStringProp<BackTopBehavior>('smooth', (val: BackTopBehavior): boolean => {
    return (['smooth', 'auto'] as const).includes(val)
  }),
  /** 滚动超出多少距离展示 */
  visibleHeight: setNumberProp(200),
  /** 距离右侧的距离 */
  right: setStringNumberProp(),
  /** 距离底部的距离 */
  bottom: setStringNumberProp(),
  /**
   * 原生 z-index 属性
   *
   * @see z-index https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index
   */
  zIndex: setNumberProp(),
  /** 点击返回距离顶部的距离 */
  top: setNumberProp(0),
  /** 监视指定元素，需要传入指定的 class 或 id，如：.box #app */
  listenEl: setStringProp(),
  /** 自定义背景色 */
  background: setStringProp(),
  /** 自定义文字颜色 */
  color: setStringProp()
} as const

/** back-top 组件 props 类型 */
export type BackTopProps = ExtractPropTypes<typeof Props>
