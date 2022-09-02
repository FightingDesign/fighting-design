import type { PropType } from 'vue'

export const Props = {
  height: {
    type: String as PropType<string>,
    default: (): string => ''
  }
} as const
