import type { PropType, ExtractPropTypes } from 'vue'
import type { StickyCardEmitInterface } from './interface'

export const Props = {
  /**
   * 是否展开
   */
  open: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 内容背景色
   */
  background: {
    type: String,
    default: (): null => null
  },
  /**
   * 操作栏展开时的文字
   */
  openText: {
    type: String,
    default: (): string => '关闭'
  },
  /**
   * 操作栏关闭时的文字
   */
  closeText: {
    type: String,
    default: (): string => '开启'
  },
  /**
   * 展开的高度
   */
  openHeight: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '800px'
  },
  /**
   * 自定义边框颜色
   */
  borderColor: {
    type: String,
    default: (): string => '#e5e5e5'
  },
  /**
   * 打开时的回调
   */
  onOpen: {
    type: Function as PropType<StickyCardEmitInterface>,
    default: (): null => null
  },
  /**
   * 关闭时的回调
   */
  onClose: {
    type: Function as PropType<StickyCardEmitInterface>,
    default: (): null => null
  }
} as const

export type StickyCardPropsType = ExtractPropTypes<typeof Props>
