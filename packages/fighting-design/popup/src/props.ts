import {
  setBooleanProp,
  setStringProp,
  setStringNumberProp,
  setNumberProp,
  setFunctionProp
} from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { PopupDirection, PopupCallback } from './interface'

export const Props = {
  /** 绑定值，控制是否展示 */
  visible: {
    ...setBooleanProp(),
    required: true
  },
  /** 是否追加到 body */
  appendToBody: setBooleanProp(),
  /** 是否展示遮罩层 */
  showMask: setBooleanProp(true),
  /** 是否点击遮罩层关闭 */
  maskClose: setBooleanProp(true),
  /** 是否模糊遮罩层 */
  maskBlur: setBooleanProp(),
  /**
   * 层级 原生属性
   *
   * @see z-index https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index
   */
  zIndex: setNumberProp(1999),
  /** 自定义遮罩层背景色 */
  maskBackground: setStringProp(),
  /** 遮罩层透明度 */
  maskOpacity: setNumberProp(),
  /**
   * 弹出位置
   *
   * @values left right top bottom center
   * @default center
   */
  direction: setStringProp<PopupDirection>('center', (val: PopupDirection): boolean => {
    return (['left', 'right', 'top', 'bottom', 'center'] as const).includes(val)
  }),
  /** 弹出窗口尺寸 */
  popupSize: setStringNumberProp(),
  /** 是否全屏展示 */
  fullscreen: setBooleanProp(),
  /** 自定义内边距 */
  padding: setStringNumberProp(),
  /** 打开动画开始的回调 */
  onOpen: setFunctionProp<PopupCallback>(),
  /** 关闭动画开始的回调 */
  onClose: setFunctionProp<PopupCallback>(),
  /** 打开动画结束的回调 */
  onOpenEnd: setFunctionProp<PopupCallback>(),
  /** 关闭动画结束的回调 */
  onCloseEnd: setFunctionProp<PopupCallback>()
} as const

/** popup 组件 props 类型 */
export type PopupProps = ExtractPropTypes<typeof Props>
