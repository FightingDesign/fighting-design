import type { PropType, ExtractPropTypes } from 'vue'
import type { OrdinaryFunctionInterface } from '../../_interface'

export const Props = {
  /**
   * @zh 是否展示预览框
   */
  visible: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * @zh 图片集合
   */
  imgList: {
    type: Array as PropType<string[]>,
    default: (): string[] => []
  },
  /**
   * @zh 是否点击遮罩层关闭预览窗
   */
  modalClose: {
    type: Boolean,
    default: (): boolean => true
  },
  /**
   * @zh 是否展示关闭按钮
   */
  isCloseBtn: {
    type: Boolean,
    default: (): boolean => true
  },
  /**
   * @zh 图片预览展示的首张图的索引，从 0 开始
   */
  showIndex: {
    type: Number,
    default: (): number => 0,
    validator: (val: number): boolean => {
      return val >= 0
    }
  },
  /**
   * @zh 图片预览展示的 z-index
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index
   */
  zIndex: {
    type: Number,
    default: (): number => 999,
    validator: (val: number): boolean => {
      return val >= 0
    }
  },
  /**
   * @zh 是否展示图片预览下面的操作栏
   */
  isOption: {
    type: Boolean,
    default: (): boolean => true
  },
  /**
   * @zh 预览图的圆角，传入一个单位
   */
  round: {
    type: String,
    default: (): null => null
  },
  /**
   * @zh 关闭之后的回调
   */
  onClose: {
    type: Function as PropType<OrdinaryFunctionInterface>,
    default: (): null => null
  }
} as const

export type ImagePreviewPropsType = ExtractPropTypes<typeof Props>
