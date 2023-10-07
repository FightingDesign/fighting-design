import {
  setBooleanProp,
  setFunctionProp,
  setStringNumberProp,
  setStringProp
} from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { CardShadow, CardClose } from './interface'

export const Props = {
  /** 卡片标题 */
  title: setStringProp(),
  /** 是否为圆角卡片 */
  round: setBooleanProp(),
  /** 卡片内边距 */
  padding: setStringNumberProp(),
  /**
   * 阴影样式
   *
   * @values hover always
   */
  shadow: setStringProp<CardShadow>(undefined, (val: CardShadow): boolean => {
    return (['hover', 'always'] as const).includes(val)
  }),
  /** 自定义边框颜色 */
  borderColor: setStringProp(),
  /** 自定义背景色 */
  background: setStringProp(),
  /** 自定义标题颜色 */
  titleColor: setStringProp(),
  /** 标题是否加粗 */
  titleBold: setBooleanProp(),
  /** 是否可关闭 */
  close: setBooleanProp(),
  /** 关闭之后的回调 */
  onClose: setFunctionProp<CardClose>()
} as const

/** card 组件 props 类型 */
export type CardProps = ExtractPropTypes<typeof Props>
