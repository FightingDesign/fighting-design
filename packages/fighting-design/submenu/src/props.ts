import { setBooleanProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const Props = {
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 是否展开 */
  opened: setBooleanProp()
} as const

export type SubmenuProps = ExtractPropTypes<typeof Props>
