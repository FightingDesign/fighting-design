import { setBooleanProp, setFunctionProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { HandleMouse } from '../../_interface'

export const Props = {
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 点击之后的回调函数 */
  onClick: setFunctionProp<HandleMouse>()
} as const

export type DropdownItemProps = ExtractPropTypes<typeof Props>
