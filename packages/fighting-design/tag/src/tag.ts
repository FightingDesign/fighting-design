import type { tagSizeType, tagTypeType } from './interface'
import type { PropType } from 'vue'

export const Props = {
  type: {
    type: String as PropType<tagTypeType>,
    default: (): tagTypeType => 'default',
    validator: (val: tagTypeType): boolean => {
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
  beforeIcon: {
    type: String,
    default: (): string => ''
  },
  afterIcon: {
    type: String,
    default: (): string => ''
  },
  size: {
    type: String as PropType<tagSizeType>,
    default: (): tagSizeType => 'middle',
    validator: (val: tagSizeType): boolean => {
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
