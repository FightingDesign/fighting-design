import type { PropType } from 'vue'
import type { tooltipPositionType, tooltipStateType } from './interface'

export const Props = {
  content: {
    type: String,
    default: (): string => ''
  },
  position: {
    type: String as PropType<tooltipPositionType>,
    default: (): tooltipPositionType => 'bottom',
    validator: (val: tooltipPositionType): boolean => {
      return (['top', 'bottom', 'right', 'left'] as const).includes(val)
    }
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  state: {
    type: String,
    default: (): tooltipStateType => 'hover',
    validator: (val: tooltipStateType): boolean => {
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
  },
  background: {
    type: String,
    default: (): string => ''
  },
  fontColor: {
    type: String,
    default: (): string => ''
  }
} as const
