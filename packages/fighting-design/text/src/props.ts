import type { PropType, ExtractPropTypes } from 'vue'
import type { TextType, TextDecorationType } from './interface'

export const Props = {
  type: {
    type: String as PropType<TextType>,
    default: (): TextType => 'default',
    validator: (val: TextType): boolean => {
      return (
        ['default', 'primary', 'success', 'danger', 'warning'] as const
      ).includes(val)
    }
  },
  size: {
    type: [String, Number] as PropType<string | number>,
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
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  lineHeight: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  indent: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  bold: {
    type: Boolean,
    default: (): boolean => false
  },
  decoration: {
    type: String as PropType<TextDecorationType>,
    default: (): string => ''
  },
  padding: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  width: {
    type: [String, Number] as PropType<string | number>,
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

export type TextPropsType = ExtractPropTypes<typeof Props>
