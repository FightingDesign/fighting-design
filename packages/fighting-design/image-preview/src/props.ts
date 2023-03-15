import {
  setBooleanProp,
  setStringProp,
  setNumberProp,
  setFunctionProp,
  setArrayProp
} from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { HandleMouse } from '../../_interface'

export const Props = {
  /** 是否展示预览框 */
  visible: setBooleanProp(),
  /** 图片集合 */
  imgList: setArrayProp<string[]>([]),
  /** 是否点击遮罩层关闭预览窗 */
  modalClose: setBooleanProp(true),
  /** 是覅追加到  body */
  appendToBody: setBooleanProp(),
  /** 是否展示关闭按钮 */
  isCloseBtn: setBooleanProp(true),
  /** 图片预览展示的首张图的索引，从 0 开始 */
  showIndex: setNumberProp(0),
  /**
   * 图片预览展示的 z-index
   *
   * @see z-index https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index
   */
  zIndex: setNumberProp(),
  /** 是否展示图片预览下面的操作栏 */
  isOption: setBooleanProp(true),
  /** 预览图的圆角，传入一个单位 */
  round: setStringProp(),
  /** 关闭之后的回调 */
  onClose: setFunctionProp<HandleMouse>()
} as const

/** image-preview 组件 props 类型 */
export type ImagePreviewProps = ExtractPropTypes<typeof Props>
