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
      return (['hover', 'active'] as const).includes(val)
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
  background: {
    type: String,
    default: (): string => '#333'
  },
  color: {
    type: String,
    default: (): string => '#fff'
  },
  zIndex: {
    type: Number,
    default: (): number => 300,
    validator: (val: number): boolean => val >= 0
  },
  width: {
    type: String,
    default: (): string => ''
  },
  height: {
    type: String,
    default: (): string => ''
  },
  fontSize: {
    type: String,
    default: (): string => ''
  }
} as const
