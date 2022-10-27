import type { PropType } from 'vue'

export const Props = {
  height: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '60px'
  },
  padding: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '0'
  }
} as const
