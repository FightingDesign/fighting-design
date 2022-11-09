import type { ExtractPropTypes, PropType } from 'vue'
import type { TextareaChangeInterface } from './interface'
import type { HandleFocusEventInterface } from '../../_interface'

export const Props = {
  /**
   * 绑定值
   */
  modelValue: {
    type: String,
    default: (): string => ''
  },
  /**
   * 可视宽度
   * 
   * https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-cols
   */
  cols: {
    type: [String, Number] as PropType<string | number>,
    default: (): number => 50
  },
  /**
   * 元素的输入文本的行数
   * 
   * https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-rows
   */
  rows: {
    type: [String, Number] as PropType<string | number>,
    default: (): number => 3
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  max: {
    type: Number,
    default: (): null => null
  },
  min: {
    type: Number,
    default: (): null => null
  },
  maxLength: {
    type: Number,
    default: (): null => null,
    validator: (val: number): boolean => val >= 0
  },
  autofocus: {
    type: Boolean,
    default: (): boolean => false
  },
  name: {
    type: String,
    default: (): string => 'f-textarea'
  },
  placeholder: {
    type: String,
    default: (): string => ''
  },
  readonly: {
    type: Boolean,
    default: (): boolean => false
  },
  onChange: {
    type: Function as PropType<TextareaChangeInterface>,
    default: (): null => null
  },
  onBlur: {
    type: Function as PropType<HandleFocusEventInterface>,
    default: (): null => null
  },
  onFocus: {
    type: Function as PropType<HandleFocusEventInterface>,
    default: (): null => null
  }
} as const

export const Emits = {
  'update:modelValue': (val: string): string => val
} as const

export type TextareaPropsType = ExtractPropTypes<typeof Props>
