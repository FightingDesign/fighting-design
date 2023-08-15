import { setBooleanProp, setFunctionProp, setStringProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { HandleMouse, HandleChange } from '../../_interface'

export const Props = {
  /** 是否展示 */
  show: setBooleanProp(false),
  /** 标题内容 */
  title: setStringProp(),
  /** 提示内容 */
  content: setStringProp(),
  /** 点击确定执行的回调方法 */
  onConfirm: setFunctionProp<HandleMouse>(),
  /** 点击取消执行的回调方法 */
  onCancel: setFunctionProp<HandleMouse>(),
  /** 关闭之后执行的回调 */
  onClose: setFunctionProp<HandleChange>(),
  /** 开启之后执行的回调 */
  onOpen: setFunctionProp<HandleChange>()
} as const

export type ConfirmBoxProps = ExtractPropTypes<typeof Props>