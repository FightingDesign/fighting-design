import { setBooleanProp, setStringProp } from '../../_utils'
import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import type { SelectProvide, SelectModelValue } from './interface'

export const Props = {
  /** 绑定值 */
  modelValue: {
    type: [String, Number, Boolean] as PropType<SelectModelValue>,
    default: (): null => null,
    required: true
  },
  /** 自定义宽度 */
  width: {
    type: [Number, String] as PropType<number | string>,
    default: (): null => null
  },
  /**
   * 原生 name 属性
   *
   * @see name https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-name
   */
  name: setStringProp<string>('f-select'),
  /**
   * 占位符
   *
   * @see placeholder https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-placeholder
   */
  placeholder: setStringProp(),
  /** 是否可清除 */
  clear: setBooleanProp(),
  /**
   * 是否禁用
   *
   * @see disabled https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-disabled
   */
  disabled: setBooleanProp()
} as const

/** select 组件 props 类型 */
export type SelectProps = ExtractPropTypes<typeof Props>

/** select 组件注入的依赖项 */
export const SELECT_PROPS_TOKEN: InjectionKey<SelectProvide> = Symbol('f-select-props-key')
