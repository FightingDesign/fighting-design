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
  'update:visible': (visible: boolean): boolean => typeof visible === 'boolean',
  open: (event: MouseEvent): MouseEvent => event,
  close: (event: MouseEvent): MouseEvent => event,
  'open-end': (event: MouseEvent): MouseEvent => event,
  'close-end': (event: MouseEvent): MouseEvent => event
} as const

export type MaskPropsType = ExtractPropTypes<typeof Props>
