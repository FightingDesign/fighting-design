import type { PropType } from 'vue'

export const Props = {
  width: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  padding: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  }
} as const
