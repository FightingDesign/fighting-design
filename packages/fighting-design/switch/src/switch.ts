import type { PropType, ExtractPropTypes } from 'vue'
import type { switchSize } from './interface'

export const Props = {
  modelValue: {
    type: Boolean,
    default: (): boolean => false,
    require: true
  },
  size: {
    type: String as PropType<switchSize>,
    default: (): switchSize => 'middle',
    validator: (val: switchSize): boolean => {
      return (['large', 'middle', 'small'] as const).includes(val)
    }
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  icon: {
    type: String,
    default: (): string => ''
  },
  closeColor: {
    type: String,
    default: (): string => ''
  },
  openColor: {
    type: String,
    default: (): string => ''
  },
  openText: {
    type: String,
    default: (): string => ''
  },
  closeText: {
    type: String,
    default: (): string => ''
  },
  square: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export const Emits = ['update:modelValue', 'change']

export type FPropsType = ExtractPropTypes<typeof Props>
