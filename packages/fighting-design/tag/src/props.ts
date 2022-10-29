import type { PropType, ExtractPropTypes, VNode } from 'vue'
import type { TagSizeType, TagType } from './interface'

export const Props = {
  type: {
    type: String as PropType<TagType>,
    default: (): TagType => 'default',
    validator: (val: TagType): boolean => {
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
    type: Object as PropType<VNode>,
    default: (): null => null
  },
  afterIcon: {
    type: Object as PropType<VNode>,
    default: (): null => null
  },
  size: {
    type: String as PropType<TagSizeType>,
    default: (): TagSizeType => 'middle',
    validator: (val: TagSizeType): boolean => {
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

export type TagPropsType = ExtractPropTypes<typeof Props>
