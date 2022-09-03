import type { PropType, ExtractPropTypes } from 'vue'
import type { linkType, linkTarget, linkHover } from './interface'

export const Props = {
  type: {
    type: String as PropType<linkType>,
    default: (): linkType => 'primary',
    validator: (val: linkType): boolean => {
      return (
        ['default', 'primary', 'success', 'danger', 'warning'] as const
      ).includes(val)
    }
  },
  href: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  size: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  state: {
    type: String as PropType<linkHover>,
    default: (): linkHover => '',
    validator: (val: linkHover): boolean => {
      return (['line', 'bag', ''] as const).includes(val)
    }
  },
  prohibit: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  leftIcon: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  rightIcon: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  target: {
    type: String as PropType<linkTarget>,
    default: (): linkTarget => '',
    validator: (val: linkTarget): boolean => {
      return (['_self', '_blank', '_parent', '_top', ''] as const).includes(val)
    }
  },
  color: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  noCopy: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  noLink: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  }
} as const

export const Emits = {
  click: (evt: Event): Event => evt
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
