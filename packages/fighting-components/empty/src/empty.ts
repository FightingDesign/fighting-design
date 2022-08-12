export const Props = {
  /**
   * 自定义图片尺寸
   */
  imageSize: {
    type: String,
    default: (): string => ''
  },
  /**
   * 展示的内容
   */
  content: {
    type: String,
    default: (): string => ''
  },
  /**
   * 展示的内容文字大小
   */
  contentSize: {
    type: String,
    default: (): string => ''
  },
  /**
   * 展示的内容文字颜色
   */
  contentColor: {
    type: String,
    default: (): string => ''
  },
  /**
   * 自定义图片地址
   */
  imageSrc: {
    type: String,
    default: (): string => ''
  },
  /**
   * 自定义样式对象
   */
  styleList: {
    type: String,
    default: (): string => ''
  },
  /**
   * 自定义背景色
   */
  background: {
    type: String,
    default: (): string => ''
  }
} as const

export const Emits = {} as const
