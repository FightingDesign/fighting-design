import {
  setBooleanProp,
  setStringNumberProp,
  setStringProp,
  setObjectProp,
  setFunctionProp
} from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { HandleMouse, FightingIcon } from '../../_interface'

export const Props = {
  /** 自定义尺寸 */
  size: setStringNumberProp(),
  /** 是否为圆角的 */
  round: setBooleanProp(),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 自定义颜色 */
  color: setStringProp(),
  /** 鼠标移入的颜色 */
  hoverColor: setStringProp(),
  /** 自定义 icon */
  icon: setObjectProp<FightingIcon>(),
  /** 点击之后执行的回调 */
  onClick: setFunctionProp<HandleMouse>()
} as const

/** close-btn 组件 props 类型 */
export type CloseBtnProps = ExtractPropTypes<typeof Props>
