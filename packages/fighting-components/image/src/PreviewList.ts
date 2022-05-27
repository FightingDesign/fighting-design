import { PropType } from 'vue'

export const Props = {
  previewList: {
    type: Array as PropType<string[]>,
    default: (): [] => []
  },
  previewShowIndex: {
    type: Number,
    default: (): number => 0
  },
  previewShowOption: {
    type: Boolean,
    default: (): boolean => true
  },
  previewZIndex: {
    type: Number,
    default: (): number => 999
  }
} as const
