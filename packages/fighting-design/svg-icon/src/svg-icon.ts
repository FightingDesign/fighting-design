import type { ExtractPropTypes, PropType, VNode, Component } from 'vue'

export const Props = {
  icon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  color: {
    type: String,
    default: (): string => ''
  },
  size: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  }
} as const

export const Emits = {
  click: (evt: MouseEvent): MouseEvent => evt
} as const

export type SvgIconPropsType = ExtractPropTypes<typeof Props>
