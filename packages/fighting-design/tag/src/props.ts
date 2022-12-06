import type { PropType, ExtractPropTypes, VNode } from 'vue'
import type { TagSize, TagType } from './interface'
import type { HandleMouseEventInterface } from '../../_interface'

export const Props = {
  /**
   * 标签类型
   *
   * @values default primary success danger warning
   * @defaultValue default
   */
  type: {
    type: String as PropType<TagType>,
    default: (): TagType => 'default',
    validator: (val: TagType): boolean => {
      return (
        ['default', 'primary', 'success', 'danger', 'warning'] as const
      ).includes(val)
    }
  },
  /**
   * 是否可关闭
   */
  close: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 圆角
   */
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 自定义背景色
   */
  background: {
    type: String,
    default: (): null => null
  },
  /**
   * 自定义文字颜色
   */
  color: {
    type: String,
    default: (): null => null
  },
  /**
   * 左侧 icon
   */
  beforeIcon: {
    type: Object as PropType<VNode>,
    default: (): null => null
  },
  /**
   * 右侧 icon
   */
  afterIcon: {
    type: Object as PropType<VNode>,
    default: (): null => null
  },
  /**
   * 尺寸
   *
   * @values large middle small mini
   * @defaultValue middle
   */
  size: {
    type: String as PropType<TagSize>,
    default: (): TagSize => 'middle',
    validator: (val: TagSize): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  /**
   * 是否为简约模式
   */
  simple: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否为块级元素
   */
  block: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 线性的
   */
  line: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 点击关闭按钮触发
   */
  onClose: {
    type: Function as PropType<HandleMouseEventInterface>,
    default: (): null => null
  }
} as const

export type TagProps = ExtractPropTypes<typeof Props>
