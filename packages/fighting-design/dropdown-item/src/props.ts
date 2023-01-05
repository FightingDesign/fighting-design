import type { ExtractPropTypes, PropType } from 'vue'
import type { HandleMouse } from '../../_interface'

export const Props = {
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 点击之后的回调函数 */
  onClick: {
    type: Function as PropType<HandleMouse>,
    default: (): null => null
  }
} as const

export type DropdownItemProps = ExtractPropTypes<typeof Props>
