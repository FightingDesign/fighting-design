import type { PropType, ExtractPropTypes, VNode } from 'vue'
import type { SwitchSizeType } from './interface'

export const Props = {
  modelValue: {
    type: Boolean,
    default: (): boolean => false,
    required: true
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
    type: Object as PropType<VNode>,
    default: (): null => null
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
  'update:modelValue': (target: boolean): string => String(target),
  'change': (target: boolean): string => String(target)
} as const

export type SwitchPropsType = ExtractPropTypes<typeof Props>
