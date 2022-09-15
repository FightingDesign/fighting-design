import type { PropType } from 'vue'

export const Props = {
  background: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  color: {
    type: String as PropType<string>,
    default: (): string => ''
  }
} as const
