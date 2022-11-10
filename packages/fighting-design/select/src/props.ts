import type { ExtractPropTypes, InjectionKey } from 'vue'
import type { SelectProvideInterface } from './interface'

export const Props = {
  /**
   * 绑定值
   */
  modelValue: {
    type: String,
    default: (): string => ''
  }
} as const

export type SelectPropsType = ExtractPropTypes<typeof Props>

export const SELECT_PROPS_TOKEN: InjectionKey<SelectProvideInterface> = Symbol('f-select-props-key')
