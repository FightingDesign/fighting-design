import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import type { SelectProvideInterface, SelectModelValueType } from './interface'

export const Props = {
  /**
   * 绑定值
   */
  modelValue: {
    type: [String, Number, Boolean] as PropType<SelectModelValueType>,
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
   * https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-name
   */
  name: {
    type: String,
    default: (): string => 'f-select'
  },
  /**
   * 占位符
   * 
   * https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-placeholder
   */
  placeholder: {
    type: String,
    default: (): string => ''
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
   * https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-disabled
   */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export type SelectPropsType = ExtractPropTypes<typeof Props>

export const SELECT_PROPS_TOKEN: InjectionKey<SelectProvideInterface> = Symbol('f-select-props-key')
