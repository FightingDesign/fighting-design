import type { PropType } from 'vue'

export const Props = {
  color: {
    type: String,
    default: (): string => ''
  },
  dataKey: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  }
} as const

export const Emits = {
  click: (evt: MouseEvent): MouseEvent => evt
} as const
