import { setStringProp } from '../../_utils'
import type { PropType, ExtractPropTypes } from 'vue'
import type { HandleMouse, FightingIcon } from '../../_interface'

export const Props = {
  /** 自定义文字颜色 */
  color: setStringProp(),
  /** 自定义 icon */
  icon: {
    type: Object as PropType<FightingIcon>,
    default: (): null => null
  },
  /** 自定义 icon 大小 */
  iconSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): number => 16
  },
  /** 唯一值 */
  index: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /** 点击之后触发的回调 */
  onClick: {
    type: Function as PropType<HandleMouse>,
    default: (): null => null
  }
} as const

export type ToolbarItemProps = ExtractPropTypes<typeof Props>
