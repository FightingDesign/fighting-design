import type { ExtractPropTypes } from 'vue'

export const Props = {
  show: {
    type: Boolean,
    default: (): boolean => false
  },
  close: {
    type: Boolean,
    default: (): boolean => false
  },
  text: {
    type: String,
    default: (): string => ''
  },
  icon: {
    type: String,
    default: (): string => ''
  },
  fontColor: {
    type: String,
    default: (): string => ''
  },
  fontSize: {
    type: String,
    default: (): string => ''
  },
  background: {
    type: String,
    default: (): string => ''
  },
  opacity: {
    type: Number,
    default: (): number | null => null
  }
} as const

export const Emits = {
  close: (evt: MouseEvent): MouseEvent => evt
} as const

export type LoadingPropsType = ExtractPropTypes<typeof Props>
