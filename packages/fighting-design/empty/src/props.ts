import type { PropType, ExtractPropTypes } from 'vue'

export const Props = {
  /**
   * 展示的内容
   */
  content: {
    type: String,
    default: (): string => '暂无数据'
  },
  /**
   * 内容文字大小
   */
  contentSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 内容文字颜色
   */
  contentColor: {
    type: String,
    default: (): null => null
  },
  /**
   * 自定义图片地址
   */
  imageSrc: {
    type: String,
    default: (): null => null
  },
  /**
   * 自定义图片尺寸
   */
  imageSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 自定义背景色
   */
  background: {
    type: String,
    default: (): null => null
  },
  /**
   * 自定义 icon 大小
   */
  iconSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): number => 30
  }
} as const

export type EmptyPropsType = ExtractPropTypes<typeof Props>
