import type { PropType } from 'vue'

export const Props = {
  modalClose: {
    type: Boolean,
    default: (): boolean => true
  },
  showCloseBtn: {
    type: Boolean,
    default: (): boolean => true
  },
  previewList: {
    type: Array as PropType<string[]>,
    default: (): string[] => []
  },
  previewShowIndex: {
    type: Number as PropType<number>,
    default: (): number => 0,
    validator: (val: number): boolean => {
      return val >= 0
    }
  },
  previewZIndex: {
    type: Number as PropType<number>,
    default: (): number => 999,
    validator: (val: number): boolean => {
      return val >= 0
    }
  },
  previewShowOption: {
    type: Boolean,
    default: (): boolean => true
  },
  previewRound: {
    type: String,
    default: (): string => ''
  }
} as const

export const Emits = {
  close: (evt: MouseEvent): MouseEvent => evt
} as const
