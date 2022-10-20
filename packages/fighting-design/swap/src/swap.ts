import type { PropType, ExtractPropTypes } from 'vue'
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
    default: (): SwapType => 'sound',
    validator: (val: SwapType): boolean => {
      return (
        ['sound', 'theme', 'rotate', 'flip', 'favorites'] as const
      ).includes(val)
    }
  },
  sound: {
    type: String,
    default: (): string => ''
  },
  theme: {
    type: String,
    default: (): string => ''
  },
  unfold: {
    type: String,
    default: (): string => ''
  },
  favorites: {
    type: String,
    default: (): string => ''
  }
} as const

export const Emits = {
  'update:modelValue': (target: boolean): boolean => target,
  change: (target: boolean): boolean => target
} as const

export type SwapPropsType = ExtractPropTypes<typeof Props>
