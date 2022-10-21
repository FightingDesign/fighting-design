import type { ExtractPropTypes, PropType, VNode } from 'vue'

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
    type: Object as PropType<VNode>,
    default: (): null => null
  }
} as const

export const Emits = {
  click: (evt: MouseEvent): MouseEvent => evt
} as const

export type CloseBtnPropsType = ExtractPropTypes<typeof Props>
