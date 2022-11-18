import type { ExtractPropTypes, PropType } from 'vue'
import type { TextareaChangeInterface, TextareaResizeType } from './interface'
import type { HandleFocusEventInterface } from '../../_interface'

export const Props = {
  /**
   * 绑定值
   */
  modelValue: {
    type: String,
    default: (): null => null
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
  /**
   * 是否禁用
   *
   * https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-disabled
   */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 最大输入长度
   *
   * https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-maxlength
   */
  maxLength: {
    type: Number,
    default: (): null => null,
    validator: (val: number): boolean => val >= 0
  },
  /**
   * 是否自动获取焦点
   *
   * https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-autofocus
   */
  autofocus: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 原生 name 属性
   *
   * https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-name
   */
  name: {
    type: String,
    default: (): string => 'f-textarea'
  },
  /**
   * 占位符
   *
   * https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-placeholder
   */
  placeholder: {
    type: String,
    default: (): null => null
  },
  /**
   * 是否只读
   *
   * https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-readonly
   */
  readonly: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 绑定值发生变化时触发的回调
   */
  onChange: {
    type: Function as PropType<TextareaChangeInterface>,
    default: (): null => null
  },
  /**
   * 失去焦点时触发的回调
   */
  onBlur: {
    type: Function as PropType<HandleFocusEventInterface>,
    default: (): null => null
  },
  /**
   * 获取焦点时触发的回调
   */
  onFocus: {
    type: Function as PropType<HandleFocusEventInterface>,
    default: (): null => null
  },
  /**
   * 拉伸方式
   *
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/resize
   */
  resize: {
    type: String as PropType<TextareaResizeType>,
    default: (): TextareaResizeType => 'none',
    validator: (val: TextareaResizeType): boolean => {
      return (['none', 'both', 'horizontal', 'vertical'] as const).includes(val)
    }
  },
  /**
   * 是否可清空
   */
  clear: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export type TextareaPropsType = ExtractPropTypes<typeof Props>
