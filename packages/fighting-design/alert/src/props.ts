import {
  setBooleanProp,
  setStringProp,
  setStringNumberProp,
  setObjectProp,
  setNumberProp,
  setFunctionProp,
  setArrayProp
} from '../../_utils'
import { FIGHTING_TYPE } from '../../_tokens'
import type { ExtractPropTypes } from 'vue'
import type { HandleMouse, FightingType, FightingIcon } from '../../_interface'

export const Props = {
  /**
   * 类型
   *
   * @values default primary success danger warning info
   * @default undefined
   */
  type: setStringProp<FightingType>(undefined, (val: FightingType): boolean => {
    return FIGHTING_TYPE.includes(val)
  }),
  /** 文字大小 */
  fontSize: setStringNumberProp(),
  /** title 大小 */
  titleSize: setStringNumberProp(),
  /** 是否加粗 */
  bold: setBooleanProp(),
  /** 是否居中 */
  center: setBooleanProp(),
  /** 是否可关闭 */
  close: setBooleanProp(),
  /** 是否为简约的 */
  simple: setBooleanProp(),
  /** 自定义标题 */
  title: setStringProp(),
  /** 是否为圆角 */
  round: setBooleanProp(),
  /** 自定义背景色 */
  background: setStringProp(),
  /** 自定义颜色 */
  color: setStringProp(),
  /** 自定义 title 颜色 */
  titleColor: setStringProp(),
  /** 是否为固定定位 */
  fixed: setBooleanProp(),
  /** 自定义关闭 icon */
  closeIcon: setObjectProp<FightingIcon>(),
  /** 自定义之前的 icon */
  beforeIcon: setObjectProp<FightingIcon>(),
  /** 滚动列表 */
  alertList: setArrayProp<string[]>([]),
  /** 滚动列表动画间隔 */
  duration: setNumberProp(),
  /** 点击关闭之后执行的回调 */
  onClose: setFunctionProp<HandleMouse>()
} as const

/** alert 组件 props 类型 */
export type AlertProps = ExtractPropTypes<typeof Props>
