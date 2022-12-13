import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import type { SelectProvide, SelectModelValue } from './interface'

export const Props = {
  /**
   * 绑定值
   */
  modelValue: {
    type: [String, Number, Boolean] as PropType<SelectModelValue>,
    default: (): null => null,
    required: true
  },
  /**
   * 自定义宽度
   */
  width: {
    type: [Number, String] as PropType<number | string>,
    default: (): null => null
  },
  /**
   * 原生 name 属性
   *
   * @see name https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-name
   */
  name: {
    type: String,
    default: (): string => 'f-select'
  },
  /**
   * 占位符
   *
   * @see placeholder https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-placeholder
   */
  placeholder: {
    type: String,
    default: (): null => null
  },
  /**
   * 是否可清除
   */
  clear: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否禁用
   *
   * @see disabled https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-disabled
   */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export type SelectProps = ExtractPropTypes<typeof Props>

export const SELECT_PROPS_TOKEN: InjectionKey<SelectProvide> = Symbol('f-select-props-key')
