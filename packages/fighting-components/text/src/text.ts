import type { PropType, ExtractPropTypes } from 'vue'
import type { textType } from './interface'

export const Props = {
  type: {
    type: String as PropType<textType>,
    default: (): textType => 'default',
    validator: (val: textType): boolean => {
      return (
        ['default', 'primary', 'success', 'danger', 'warning'] as const
      ).includes(val)
    }
  },
  size: {
    type: String,
    default: (): string => ''
  },
  color: {
    type: String,
    default: (): string => ''
  },
  background: {
    type: String,
    default: (): string => ''
  },
  block: {
    type: Boolean,
    default: (): boolean => false
  },
  spacing: {
    type: String,
    default: (): string => ''
  },
  lineHeight: {
    type: String,
    default: (): string => ''
  },
  textIndent: {
    type: String,
    default: (): string => ''
  },
  bold: {
    type: Boolean,
    default: (): boolean => false
  },
  decoration: {
    type: String,
    default: (): string => ''
  },
  padding: {
    type: String,
    default: (): string => ''
  },
  width: {
    type: String,
    default: (): string => ''
  },
  ellipsis: {
    type: Boolean,
    default: (): boolean => false
  },
  center: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
