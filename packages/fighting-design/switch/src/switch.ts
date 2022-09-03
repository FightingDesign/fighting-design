import type { PropType, ExtractPropTypes } from 'vue'
import type { switchSize } from './interface'

export const Props = {
  modelValue: {
    type: Boolean as PropType<boolean>,
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
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  icon: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  closeColor: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  openColor: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  openText: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  closeText: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  square: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  }
} as const

export const Emits = {
  'update:modelValue': (target: boolean): boolean => target,
  'change': (target: boolean): boolean => target
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
