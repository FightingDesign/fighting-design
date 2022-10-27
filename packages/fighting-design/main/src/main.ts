import type { PropType } from 'vue'

export const Props = {
  padding: {
    type: [String, Number] as PropType<string | number>,
    default: (): number => 0
  }
} as const
