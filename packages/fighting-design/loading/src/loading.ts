import type { ExtractPropTypes, PropType, VNode, Component } from 'vue'

export const Props = {
  show: {
    type: Boolean,
    default: (): boolean => false
  },
  close: {
    type: Boolean,
    default: (): boolean => false
  },
  text: {
    type: String,
    default: (): string => ''
  },
  fontColor: {
    type: String,
    default: (): string => ''
  },
  iconColor: {
    type: String,
    default: (): string => ''
  },
  fontSize: {
    type: String,
    default: (): string => ''
  },
  background: {
    type: String,
    default: (): string => ''
  },
  opacity: {
    type: Number,
    default: (): number | null => null
  },
  icon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  }
} as const

export const Emits = {
  close: (evt: MouseEvent): MouseEvent => evt
} as const

export type LoadingPropsType = ExtractPropTypes<typeof Props>
