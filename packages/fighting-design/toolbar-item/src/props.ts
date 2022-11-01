import type { PropType, ExtractPropTypes, VNode, Component } from 'vue'
import type { HandleEventInterface } from '../../_interface'

export const Props = {
  color: {
    type: String,
    default: (): string => ''
  },
  icon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  iconSize: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '16px'
  },
  dataKey: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  click: {
    type: Function as PropType<HandleEventInterface>,
    default: (): null => null
  }
} as const

export type ToolbarItemPropsType = ExtractPropTypes<typeof Props>
