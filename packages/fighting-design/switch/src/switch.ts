import type { PropType, ExtractPropTypes } from 'vue'
import type { SwitchSizeType } from './interface'

export const Props = {
  modelValue: {
    type: Boolean,
    default: (): boolean => false,
    require: true
  },
  size: {
    type: String as PropType<SwitchSizeType>,
    default: (): SwitchSizeType => 'middle',
    validator: (val: SwitchSizeType): boolean => {
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

export const Emits = {
  'update:modelValue': (target: boolean): boolean => target,
  'change': (target: boolean): boolean => target
} as const

export type SwitchPropsType = ExtractPropTypes<typeof Props>
