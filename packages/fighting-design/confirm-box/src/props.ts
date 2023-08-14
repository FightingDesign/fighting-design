import type { ExtractPropTypes } from 'vue'
import { setFunctionProp, setStringProp } from '../../_utils'

export const Props = {
  /** 标题内容 */
  title: setStringProp(),
  /** 提示内容 */
  content: setStringProp(),
  /** 点击确定执行的回调方法 */
  onConfirm: setFunctionProp(),
  /** 点击取消执行的回调方法 */
  onCancel: setFunctionProp()
} as const

export type ConfirmBoxProps = ExtractPropTypes<typeof Props>
