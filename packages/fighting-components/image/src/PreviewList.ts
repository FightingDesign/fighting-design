import { PropType } from 'vue'

export const Props = {
  previewList: {
    type: Array as PropType<string[]>,
    default: (): [] => []
  },
  previewShowIndex: {
    type: Number,
    default: (): number => 0
  }
} as const
