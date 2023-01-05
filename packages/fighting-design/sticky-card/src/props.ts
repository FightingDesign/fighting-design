import type { PropType, ExtractPropTypes } from 'vue'
import type { HandleChange } from '../../_interface'

export const Props = {
  /** 是否展开 */
  open: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 内容背景色 */
  background: {
    type: String,
    default: (): null => null
  },
  /** 操作栏展开时的文字 */
  openText: {
    type: String,
    default: (): null => null
  },
  /**操作栏关闭时的文字 */
  closeText: {
    type: String,
    default: (): null => null
  },
  /** 自定义边框颜色 */
  borderColor: {
    type: String,
    default: (): null => null
  },
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
