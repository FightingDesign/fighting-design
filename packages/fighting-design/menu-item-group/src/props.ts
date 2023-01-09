import { setStringProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const Props = {
  /** 标题 */
  title: setStringProp()
} as const

export type MenuItemGroupProps = ExtractPropTypes<typeof Props>
