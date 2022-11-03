import type { ExtractPropTypes } from 'vue'

export const Props = {
  files: {
    type: Array,
    default: (): [] => []
  },
  accept: {
    type: String,
    default: (): string => ''
  },
  name: {
    type: String,
    default: (): string => ''
  },
  multiple: {
    type: Boolean,
    default: (): boolean => false
  },
  maxSize: {
    type: Number,
    default: (): null => null
  }
} as const

export type UpLoadPropsType = ExtractPropTypes<typeof Props>
