import { setStringProp, setStringNumberProp, setObjectProp, setFunctionProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { FightingIcon, HandleMouse } from '../../_interface'

export const Props = {
  /** icon 内容 */
  icon: setObjectProp<FightingIcon>(),
  /** icon 颜色 */
  color: setStringProp(),
  /** icon 大小 */
  size: setStringNumberProp(),
  /** 点击之后触发的回调 */
  onClick: setFunctionProp<HandleMouse>()
} as const

export type SvgIconProps = ExtractPropTypes<typeof Props>
