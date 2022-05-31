import { PropType } from 'vue'

export const Props = {
  previewList: {
    type: Array as PropType<Array<string>>,
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
  },
  modalClose: {
    type: Boolean,
    default: (): boolean => true
  },
  showCloseBtn: {
    type: Boolean,
    default: (): boolean => true
  },
  previewRound: {
    type: String,
    default: (): string => ''
  }
} as const

export const Emits = {
  close: (): boolean => true
} as const
