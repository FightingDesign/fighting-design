import type { PropType, ExtractPropTypes } from 'vue'
import type { LinkType, LinkTargetType, LinkHoverType } from './interface'

export const Props = {
  type: {
    type: String as PropType<LinkType>,
    default: (): LinkType => 'primary',
    validator: (val: LinkType): boolean => {
      return (
        ['default', 'primary', 'success', 'danger', 'warning'] as const
      ).includes(val)
    }
  },
  href: {
    type: String,
    default: (): string => ''
  },
  size: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  state: {
    type: String as PropType<LinkHoverType>,
    default: (): LinkHoverType => '',
    validator: (val: LinkHoverType): boolean => {
      return (['line', 'bag', ''] as const).includes(val)
    }
  },
  prohibit: {
    type: Boolean,
    default: (): boolean => false
  },
  beforeIcon: {
    type: String,
    default: (): string => ''
  },
  afterIcon: {
    type: String,
    default: (): string => ''
  },
  target: {
    type: String as PropType<LinkTargetType>,
    default: (): LinkTargetType => '',
    validator: (val: LinkTargetType): boolean => {
      return (['_self', '_blank', '_parent', '_top', ''] as const).includes(val)
    }
  },
  color: {
    type: String,
    default: (): string => ''
  },
  noCopy: {
    type: Boolean,
    default: (): boolean => false
  },
  noLink: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export const Emits = {
  click: (evt: Event): Event => evt
} as const

export type LinkPropsType = ExtractPropTypes<typeof Props>
