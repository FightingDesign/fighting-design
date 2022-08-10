import type { tagSize, tagType } from './interface'
import type { PropType, ExtractPropTypes } from 'vue'

export const Props = {
  type: {
    type: String as PropType<tagType>,
    default: (): tagType => 'default',
    validator: (val: tagType): boolean => {
      return (
        ['default', 'primary', 'success', 'danger', 'warning'] as const
      ).includes(val)
    }
  },
  close: {
    type: Boolean,
    default: (): boolean => false
  },
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  background: {
    type: String,
    default: (): string => ''
  },
  color: {
    type: String,
    default: (): string => ''
  },
  leftIcon: {
    type: String,
    default: (): string => ''
  },
  rightIcon: {
    type: String,
    default: (): string => ''
  },
  size: {
    type: String as PropType<tagSize>,
    default: (): tagSize => 'middle',
    validator: (val: tagSize): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  simple: {
    type: Boolean,
    default: (): boolean => false
  },
  block: {
    type: Boolean,
    default: (): boolean => false
  },
  line: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export const Emits = {
  'close-end': (evt: Event): Event => evt
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
