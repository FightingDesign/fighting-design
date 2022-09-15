import type { PropType } from 'vue'

export const Props = {
  width: {
    type: String as PropType<string>,
    default: (): string => ''
  }
} as const
