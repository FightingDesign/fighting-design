import type { PropType, ExtractPropTypes, VNode } from 'vue'
import type { SwapSizeType, SwapType } from './interface'

export const Props = {
  modelValue: {
    type: Boolean,
    default: (): boolean => false,
    require: true
  },
  size: {
    type: String as PropType<SwapSizeType>,
    default: (): SwapSizeType => 'small',
    validator: (val: SwapSizeType): boolean => {
      return (['large', 'middle', 'small'] as const).includes(val)
    }
  },
  type: {
    type: String as PropType<SwapType>,
    default: (): SwapType => 'f--default',
    validator: (val: SwapType): boolean => {
      return (
        ['f--sound', 'f--swap', 'f--default'] as const
      ).includes(val)
    }
  },
  iconOn: {
    type: Object as PropType<VNode>,
    default: (): null => null
  },
  iconOff: {
    type: Object as PropType<VNode>,
    default: (): null => null
  }
} as const

export const Emits = {
  'update:modelValue': (target: boolean): boolean => target,
  change: (target: boolean): boolean => target
} as const

export type SwapPropsType = ExtractPropTypes<typeof Props>
