import type { ExtractPropTypes } from 'vue'

export const Props = {
  visible: {
    type: Boolean,
    default: (): boolean => false,
    required: true
  },
  appendToBody: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export const Emits = {} as const

export type MaskPropsType = ExtractPropTypes<typeof Props>
