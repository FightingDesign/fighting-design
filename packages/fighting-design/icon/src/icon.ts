import type { PropType } from 'vue'

export const Props = {
  icon: {
    type: String,
    default: (): string => ''
  },
  fontClass: {
    type: String,
    default: (): string => ''
  },
  color: {
    type: String,
    default: (): string => ''
  },
  size: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  }
} as const

export const Emits = {
  click: (evt: Event): Event => evt
} as const
