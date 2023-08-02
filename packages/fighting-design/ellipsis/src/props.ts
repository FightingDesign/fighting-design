import { setBooleanProp, setNumberProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const Props = {
  /** 几行开始省略... */
  lineClamp: setNumberProp(1),
  /** 显示的最大宽度 */
  maxWidth: setNumberProp(undefined),
  /** 是否开启toolTip */
  toolTip: setBooleanProp(true),
  /** 是否开启点击展开收缩 */
  toggleClick: setBooleanProp(false)
} as const

export type EllipsisProps = ExtractPropTypes<typeof Props>
