import type { PropType, ExtractPropTypes } from 'vue'

export const Props = {
  visible: {
    type: Boolean,
    default: (): boolean => false
  },
  imgList: {
    type: Array as PropType<string[]>,
    default: (): string[] => []
  },
  modalClose: {
    type: Boolean,
    default: (): boolean => true
  },
  isCloseBtn: {
    type: Boolean,
    default: (): boolean => true
  },
  showIndex: {
    type: Number,
    default: (): number => 0,
    validator: (val: number): boolean => {
      return val >= 0
    }
  },
  zIndex: {
    type: Number,
    default: (): number => 999,
    validator: (val: number): boolean => {
      return val >= 0
    }
  },
  isOption: {
    type: Boolean,
    default: (): boolean => true
  },
  round: {
    type: String,
    default: (): string => ''
  },
  close: {
    type: Function,
    default: (): null => null
  }
} as const

export const Emits = {
  'update:visible': (visible: boolean): boolean => typeof visible === 'boolean',
  close: (evt: MouseEvent): MouseEvent => evt
} as const

export type ImagePreviewPropsType = ExtractPropTypes<typeof Props>
