import type { ExtractPropTypes, PropType, VNode, Component } from 'vue'
import type { HandleMouseEventInterface } from '../../_interface'

export const Props = {
  size: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  color: {
    type: String,
    default: (): string => ''
  },
  icon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  click: {
    type: Function as PropType<HandleMouseEventInterface>,
    default: (): null => null
  },
  noHover: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export type CloseBtnPropsType = ExtractPropTypes<typeof Props>
