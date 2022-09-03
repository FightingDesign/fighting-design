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
    type: String as PropType<string>,
    default: (): string => ''
  },
  color: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  background: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  block: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  spacing: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  lineHeight: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  textIndent: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  bold: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  decoration: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  padding: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  width: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  ellipsis: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  center: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  }
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
