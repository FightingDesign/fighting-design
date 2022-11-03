import type { ExtractPropTypes, PropType } from 'vue'

export const Props = {
  files: {
    type: Array as PropType<File[]>,
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
  },
  maxLength: {
    type: Number,
    default: (): null => null
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  load: {
    type: Function,
    default: (): null => null
  }
} as const

export type UpLoadPropsType = ExtractPropTypes<typeof Props>

export const Emits = {
  'update:files': (files: File[]): File[] => files
}
