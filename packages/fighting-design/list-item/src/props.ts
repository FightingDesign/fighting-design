import { setStringProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const Props = {
  /** 自定义背景色 */
  background: setStringProp(),
  /** 自定义文字颜色 */
  color: setStringProp()
} as const

/** list-item 组件 props 类型 */
export type ListItemProps = ExtractPropTypes<typeof Props>
