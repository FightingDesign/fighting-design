import type { ExtractPropTypes, PropType, InjectionKey } from 'vue'
import type { RadioLabelType, RadioGroupSizeType, RadioChangeInterface } from './interface'

export const Props = {
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  modelValue: {
    type: [String, Number, Boolean] as PropType<RadioLabelType>,
    default: (): string => ''
  },
  vertical: {
    type: Boolean,
    default: (): boolean => false
  },
  columnGap: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  rowGap: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  border: {
    type: Boolean,
    default: (): boolean => false
  },
  size: {
    type: String as PropType<RadioGroupSizeType>,
    default: (): RadioGroupSizeType => 'middle',
    validator: (val: RadioGroupSizeType): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  change: {
    type: Function as PropType<RadioChangeInterface>,
    default: (): null => null
  }
} as const

export type RadioGroundPropsType = ExtractPropTypes<typeof Props>

export const RADIO_GROUP_PROPS_kEY = Symbol('') as InjectionKey<RadioGroundPropsType>
