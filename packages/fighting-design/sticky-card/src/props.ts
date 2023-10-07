import { setBooleanProp, setStringProp, setFunctionProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { HandleChange } from '../../_interface'

export const Props = {
  /** 是否展开 */
  open: setBooleanProp(),
  /** 操作栏展开时的文字 */
  openText: setStringProp(),
  /**操作栏关闭时的文字 */
  closeText: setStringProp(),
  /** 自定义边框颜色 */
  borderColor: setStringProp(),
  /** 打开时的回调 */
  onOpen: setFunctionProp<HandleChange>(),
  /** 关闭时的回调 */
  onClose: setFunctionProp<HandleChange>()
} as const

/** sticky-card 组件 props 类型 */
export type StickyCardProps = ExtractPropTypes<typeof Props>
