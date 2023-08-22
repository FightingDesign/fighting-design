import { setBooleanProp, setFunctionProp, setNumberProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { DialogCallback } from '../../dialog'

export const Props = {
  /** 是否展开 */
  opened: setBooleanProp(),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 是否开启高度过度动画 */
  heightAnimation: setBooleanProp(true),
  /** 是否开启宽度过度动画 */
  widthAnimation: setBooleanProp(),
  /** 过度动画时间 */
  animationTime: setNumberProp(),
  /** 打开动画开始的回调 */
  onOpen: setFunctionProp<DialogCallback>(),
  /** 关闭动画开始的回调 */
  onClose: setFunctionProp<DialogCallback>(),
  /** 打开动画结束的回调 */
  onOpenEnd: setFunctionProp<DialogCallback>(),
  /** 关闭动画结束的回调 */
  onCloseEnd: setFunctionProp<DialogCallback>()
} as const

/** collapse-animation 组件 props 类型 */
export type CollapseAnimationProps = ExtractPropTypes<typeof Props>
