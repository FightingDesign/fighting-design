import type { PropType } from 'vue'
import type { positionType, stateType } from './interface'

export const Props = {
  content: {
    type: String,
    default: (): string => ''
  },
  position: {
    type: String as PropType<positionType>,
    default: (): positionType => 'bottom',
    validator: (val: positionType): boolean => {
      return (['top', 'bottom', 'right', 'left'] as const).includes(val)
    }
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  state: {
    type: String,
    default: (): stateType => 'hover',
    validator: (val: stateType): boolean => {
      return (['hover', 'active', 'always'] as const).includes(val)
    }
  },
  noArrow: {
    type: Boolean,
    default: (): boolean => false
  },
  bold: {
    type: Boolean,
    default: (): boolean => false
  },
  bright: {
    type: Boolean,
    default: (): boolean => false
  }
} as const
