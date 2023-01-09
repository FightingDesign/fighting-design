import { setBooleanProp } from '../../_utils'
import type { PropType, ExtractPropTypes } from 'vue'
import type { BackTopBehavior } from './interface'

export const Props = {
  /** 是否为圆角 */
  round: setBooleanProp(),
  /**
   * 滚动模式
   *
   * @values smooth auto
   * @defaultValue smooth
   * @see scrollTo https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollTo
   */
  behavior: {
    type: String as PropType<BackTopBehavior>,
    default: (): BackTopBehavior => 'smooth',
    validator: (val: BackTopBehavior): boolean => {
      return (['smooth', 'auto'] as const).includes(val)
    }
  },
  /** 滚动超出多少距离展示 */
  visibleHeight: {
    type: Number,
    default: (): number => 200,
    validator: (val: number): boolean => val >= 0
  },
  /** 距离右侧的距离 */
  right: {
    type: [String, Number] as PropType<string | number>,
    default: (): number => 40
  },
  /** 距离底部的距离 */
  bottom: {
    type: [String, Number] as PropType<string | number>,
    default: (): number => 40
  },
  /**
   * 原生 z-index 属性
   * @see z-index https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index
   */
  zIndex: {
    type: Number,
    default: (): number => 900,
    validator: (val: number): boolean => val >= 0
  },
  /** 点击返回距离顶部的距离 */
  top: {
    type: Number,
    default: (): number => 0,
    validator: (val: number): boolean => val >= 0
  },
  /** 监视指定元素，需要传入指定的 class 或 id，如：.box #app */
  listenEl: {
    type: String,
    default: (): null => null
  },
  /** 自定义背景色 */
  background: {
    type: String,
    default: (): null => null
  },
  /** 自定义文字颜色 */
  color: {
    type: String,
    default: (): null => null
  }
} as const

export type BackTopProps = ExtractPropTypes<typeof Props>
