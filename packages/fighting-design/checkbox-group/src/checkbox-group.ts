import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import type { CheckboxLabelType, CheckboxGroupSizeType } from './interface'

export const Props = {
  modelValue: {
    type: [String, Number, Array] as PropType<CheckboxLabelType>,
    default: (): [] => []
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  label: {
    type: String,
    default: (): string => ''
  },
  changeEvent: {
    type: Function
  },
  border: {
    type: Boolean,
    default: (): boolean => false
  },
  size: {
    type: String,
    default: (): string => 'middle',
    validator: (val: CheckboxGroupSizeType): boolean => {
      return (['large', 'middle', 'small'] as const).includes(val)
    }
  }
} as const

export const Emits = {
  'update:modelValue': (val: CheckboxLabelType): boolean => Array.isArray(val),
  change: (val: CheckboxLabelType): boolean => typeof val === 'object'
} as const

export type CheckboxGroupProps = ExtractPropTypes<typeof Props>

export const checkboxGroupCtxKey: InjectionKey<CheckboxGroupProps> = Symbol('')
