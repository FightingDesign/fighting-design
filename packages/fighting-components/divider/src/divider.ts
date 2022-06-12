import type { dividerPosition } from '@fighting-design/fighting-type'
import type { PropType } from 'vue'

export const Props = {
  position: {
    type: String as PropType<dividerPosition>,
    default: (): dividerPosition => 'center',
    validator: (value: dividerPosition): boolean => {
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
    type: String,
    default: (): string => ''
  }
} as const
