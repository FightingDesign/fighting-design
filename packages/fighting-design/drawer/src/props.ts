import {
  setBooleanProp,
  setObjectProp,
  setStringProp,
  setNumberProp,
  setFunctionProp
} from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { DrawerDirection } from './interface'
import type { FightingIcon } from '../../_interface'
import type { DialogCallback } from '../../dialog'

export const Props = {
  /**绑定值，控制是否展示 */
  visible: setBooleanProp(),
  /** 是否追加到 body */
  appendToBody: setBooleanProp(),
  /** 弹出方向 */
  direction: setStringProp<DrawerDirection>('right', (val: DrawerDirection): boolean => {
    return (['left', 'top', 'right', 'bottom'] as const).includes(val)
  }),
  /** 标题文字内容 */
  title: setStringProp(),
  /** 是否展示遮罩层 */
  showMask: setBooleanProp(true),
  /** 是否展示头部 */
  showHeader: setBooleanProp(true),
  /** 点击遮罩层是否可关闭 */
  maskClose: setBooleanProp(true),
  /** 是否模糊遮罩层 */
  maskBlur: setBooleanProp(),
  /** 遮罩层透明度 */
  maskOpacity: setNumberProp(),
  /** 遮罩层背景色 */
  maskBackground: setStringProp(),
  /**是否展示关闭按钮 */
  showCloseIcon: setBooleanProp(true),
  /** 自定义关闭按钮 icon */
  closeIcon: setObjectProp<FightingIcon>(),
  /**
   * 层级 原生属性
   *
   * @see z-index https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index
   */
  zIndex: setNumberProp(),
  /** 打开动画开始的回调 */
  onOpen: setFunctionProp<DialogCallback>(),
  /** 打开动画结束的回调 */
  onOpenEnd: setFunctionProp<DialogCallback>(),
  /** 关闭动画开始的回调 */
  onClose: setFunctionProp<DialogCallback>(),
  /** 关闭动画结束的回调 */
  onCloseEnd: setFunctionProp<DialogCallback>()
} as const

/** drawer 组件 props 类型 */
export type DrawerProps = ExtractPropTypes<typeof Props>
