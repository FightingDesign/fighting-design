import { setStringNumberProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const Props = {
  /** 自定义宽度 */
  width: setStringNumberProp(),
  /** 自定义内边距 */
  padding: setStringNumberProp()
} as const

export type AsideProps = ExtractPropTypes<typeof Props>
