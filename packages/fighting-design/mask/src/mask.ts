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
  },
  maskClose: {
    type: Boolean,
    default: (): boolean => true
  }
} as const

export const Emits = {
  'update:visible': (visible: boolean): boolean => typeof visible === 'boolean'
} as const

export type MaskPropsType = ExtractPropTypes<typeof Props>
