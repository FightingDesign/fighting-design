import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import type { CheckboxLabelType, CheckboxGroupSizeType } from './interface'

export const checkboxGroupProps = {
  modelValue: {
    type: [String, Number, Array] as PropType<CheckboxLabelType>,
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  label: {
    type: String
  },
  changeEvent: {
    type: Function
  },
  border: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: (): string => 'middle',
    validator: (val: CheckboxGroupSizeType): boolean => {
      return (['large', 'middle', 'small'] as const).includes(val)
    }
  }
} as const

export const checkboxGroupEmits = {
  'update:modelValue': (val: CheckboxLabelType): boolean => Array.isArray(val),
  change: (val: CheckboxLabelType): boolean => typeof val === 'object'
}

type checkboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>

export const checkboxGroupCtxKey: InjectionKey<checkboxGroupProps> = Symbol('')
