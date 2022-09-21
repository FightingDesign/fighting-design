import type { positionType, dividerType } from './interface'
import type { PropType } from 'vue'

export const Props = {
  position: {
    type: String as PropType<positionType>,
    default: (): positionType => 'center',
    validator: (value: positionType): boolean => {
      return (['left', 'center', 'right'] as const).includes(value)
    }
  },
  vertical: {
    type: Boolean,
    default: (): boolean => false
  },
  color: {
    type: String,
    default: (): string => ''
  },
  fontColor: {
    type: String,
    default: (): string => ''
  },
  margin: {
    type: String,
    default: (): string => ''
  },
  background: {
    type: String,
    default: (): string => ''
  },
  type: {
    type: String as PropType<dividerType>,
    validator: (value: dividerType): boolean => {
      return (['dashed', 'dotted', 'double', 'solid'] as const).includes(value)
    },
    default: (): dividerType => 'solid'
  }
} as const
