import type { tagSize, tagType } from './interface'
import type { PropType } from 'vue'

export const Props = {
  type: {
    type: String as PropType<tagType>,
    default: (): tagType => 'info',
    validator: (val: tagType): boolean => {
      return (
        ['info', 'success', 'danger', 'warning', 'primary'] as const
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
  border: {
    type: Boolean,
    default: (): boolean => true
  }
} as const

export const Emits = {
  onClose: (evt: MouseEvent): MouseEvent => evt
} as const
