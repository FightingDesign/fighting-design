import type {tagSize, tagTheme } from '@fighting-design/fighting-type'
import type { PropType } from 'vue'

export const Props = {
  closable: {
    type: Boolean,
    default: (): boolean => false
  },
  color: {
    type: String,
    default: (): string => '#bdc3c7'
  },
  size: {
    type: String as PropType<tagSize>,
    default: (): tagSize => 'middle',
    validator: (val: tagSize): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  theme: {
    type: String as PropType<tagTheme>,
    default: (): tagTheme => 'dark',
    validator: (val: tagTheme): boolean => {
      return (['light', 'dark'] as const).includes(val)
    }
  }
} as const


export const Emits = {
  close: (evt: Event): Event => evt
} as const
