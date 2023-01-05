import type { PropType, ExtractPropTypes } from 'vue'
import type { LinkTarget, LinkState } from './interface'
import type { HandleEvent, FightingType, FightingIcon } from '../../_interface'

export const Props = {
  /**
   * link 的类型
   *
   * @values default primary success danger warning
   * @defaultValue primary
   */
  type: {
    type: String as PropType<FightingType>,
    default: (): null => null,
    validator: (val: FightingType): boolean => {
      return (['default', 'primary', 'success', 'danger', 'warning'] as const).includes(val)
    }
  },
  /**
   * 链接的地址
   *
   * @see href https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a?qs=%3Ca%3E#attr-href
   */
  href: {
    type: String,
    default: (): null => null
  },
  /** 的文字大小 */
  size: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 状态的样式状态
   *
   * @values line bag
   */
  state: {
    type: String as PropType<LinkState>,
    default: (): null => null,
    validator: (val: LinkState): boolean => {
      return (['line', 'bag'] as const).includes(val)
    }
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 原生 target 属性
   *
   * @values _blank _self _parent _top
   * @defaultValue _self
   * @see target https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target
   */
  target: {
    type: String as PropType<LinkTarget>,
    default: (): null => null,
    validator: (val: LinkTarget): boolean => {
      return (['_self', '_blank', '_parent', '_top'] as const).includes(val)
    }
  },
  /** 自定义颜色 */
  color: {
    type: String,
    default: (): null => null
  },
  /** 是否禁止 copy */
  noCopy: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 是否禁止链接跳转及重新加载（取消默认事件） */
  noLink: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 之前的 icon */
  beforeIcon: {
    type: Object as PropType<FightingIcon>,
    default: (): null => null
  },
  /** 之后的 icon */
  afterIcon: {
    type: Object as PropType<FightingIcon>,
    default: (): null => null
  },
  /** 点击执行的回调 */
  onClick: {
    type: Function as PropType<HandleEvent>,
    default: (): null => null
  }
} as const

export type LinkProps = ExtractPropTypes<typeof Props>
