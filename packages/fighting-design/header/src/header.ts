import type { PropType } from 'vue'

export const Props = {
  height: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  padding: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  }
} as const
