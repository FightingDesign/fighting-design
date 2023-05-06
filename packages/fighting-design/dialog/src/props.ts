import {
  setBooleanProp,
  setStringNumberProp,
  setStringProp,
  setObjectProp,
  setNumberProp,
  setFunctionProp
} from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { FightingIcon } from '../../_interface'
import type { PopupCallback } from '../../popup'

export const Props = {
  /** 绑定值，控制是否展示 */
  visible: {
    ...setBooleanProp(),
    required: true
  },
  /** 标题文字内容 */
  title: setStringProp(),
  /** 是否追加到 body */
  appendToBody: setBooleanProp(),
  /** 自定义宽度 */
  width: setStringNumberProp(),
  /** 自定义高度 */
  height: setStringNumberProp(),
  /** 是否全屏展示 */
  fullscreen: setBooleanProp(),
  /** 是否展示遮罩层 */
  showMask: setBooleanProp(true),
  /** 是否点击遮罩层关闭 */
  maskClose: setBooleanProp(true),
  /** 是否模糊遮罩层 */
  maskBlur: setBooleanProp(),
  /** 是否展示关闭图标 */
  showCloseIcon: setBooleanProp(true),
  /** 自定义关闭按钮 icon */
  closeIcon: setObjectProp<FightingIcon>(),
  /**
   * 层级 原生属性
   *
   * @see z-index https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index
   */
  zIndex: setNumberProp(1999),
  /** 打开动画开始的回调 */
  onOpen: setFunctionProp<PopupCallback>(),
  /** 打开动画结束的回调 */
  onOpenEnd: setFunctionProp<PopupCallback>(),
  /** 关闭动画开始的回调 */
  onClose: setFunctionProp<PopupCallback>(),
  /** 关闭动画结束的回调 */
  onCloseEnd: setFunctionProp<PopupCallback>()
} as const

/** dialog 组件 props 类型 */
export type DialogProps = ExtractPropTypes<typeof Props>
