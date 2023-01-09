import { setBooleanProp, setStringProp } from '../../_utils'
import type { PropType, ExtractPropTypes } from 'vue'
import type { HandleChange } from '../../_interface'

export const Props = {
  /** 是否展开 */
  open: setBooleanProp(),
  /** 内容背景色 */
  background: setStringProp(),
  /** 操作栏展开时的文字 */
  openText: setStringProp(),
  /**操作栏关闭时的文字 */
  closeText: setStringProp(),
  /** 自定义边框颜色 */
  borderColor: setStringProp(),
  /** 打开时的回调 */
  onOpen: {
    type: Function as PropType<HandleChange>,
    default: (): null => null
  },
  /** 关闭时的回调 */
  onClose: {
    type: Function as PropType<HandleChange>,
    default: (): null => null
  }
} as const

export type StickyCardProps = ExtractPropTypes<typeof Props>
