import { setStringProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const Props = {
  /** 标题 */
  title: setStringProp()
} as const

/** menu-item-group 组件 props 类型 */
export type MenuItemGroupProps = ExtractPropTypes<typeof Props>
