import { setStringProp, setStringNumberProp, setObjectProp } from '../../_utils'
import type { PropType, ExtractPropTypes } from 'vue'
import type { HandleMouse, FightingIcon } from '../../_interface'

export const Props = {
  /** 自定义文字颜色 */
  color: setStringProp(),
  /** 自定义 icon */
  icon: setObjectProp<FightingIcon>(),
  /** 自定义 icon 大小 */
  iconSize: setStringNumberProp(16),
  /** 唯一值 */
  index: setStringNumberProp(),
  /** 点击之后触发的回调 */
  onClick: {
    type: Function as PropType<HandleMouse>,
    default: (): null => null
  }
} as const

export type ToolbarItemProps = ExtractPropTypes<typeof Props>
