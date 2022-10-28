import type { PropType, ExtractPropTypes, VNode, Component } from 'vue'
import type { SwapType, SwapOnChangeInterface } from './interface'

export const Props = {
  modelValue: {
    type: Boolean,
    default: (): boolean => false,
    require: true
  },
  size: {
    type: [String, Number] as PropType<string | number>,
    default: (): number => 40
  },
  type: {
    type: String as PropType<SwapType>,
    default: (): SwapType => 'default',
    validator: (val: SwapType): boolean => {
      return (['sound', 'swap', 'default'] as const).includes(val)
    }
  },
  iconOn: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  iconOff: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  onChange: {
    type: Function as PropType<SwapOnChangeInterface>,
    default: (): null => null
  }
} as const

export const Emits = {
  'update:modelValue': (target: boolean): boolean => target
} as const

export type SwapPropsType = ExtractPropTypes<typeof Props>
