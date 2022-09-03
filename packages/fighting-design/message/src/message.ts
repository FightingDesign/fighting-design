import type { VNode, PropType, ExtractPropTypes } from 'vue'

export const messageTypes = [
  'default',
  'primary',
  'success',
  'danger',
  'warning'
] as const

export type messageType = typeof messageTypes[number]

const messagePlacement = [
  'top',
  'top-left',
  'top-right',
  'bottom',
  'bottom-left',
  'bottom-right'
] as const

export type messagePlacementType = typeof messagePlacement[number]

export const Props = {
  id: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  message: {
    type: [String, Object] as PropType<VNode | String>,
    default: (): string => '',
    require: true
  },
  type: {
    type: String as PropType<messageType>,
    default: (): messageType => 'default',
    validator: (val: messageType): boolean => {
      return messageTypes.includes(val)
    }
  },
  close: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  duration: {
    type: Number as PropType<number>,
    default: (): number => 3000
  },
  round: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  icon: {
    type: [String, Object] as PropType<VNode | String>,
    default: (): string => ''
  },
  color: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  background: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  offset: {
    type: Number as PropType<number>,
    default: (): number => 20
  },
  placement: {
    type: String as PropType<messagePlacementType>,
    default: (): messagePlacementType => 'top',
    validator: (val: messagePlacementType): boolean => {
      return messagePlacement.includes(val)
    }
  },
  zIndex: {
    type: Number as PropType<number>,
    default: (): number => 1000
  },
  closeBtn: {
    type: [String, Object] as PropType<VNode | String>,
    default: (): string => ''
  },
  closeEnd: {
    type: Function as PropType<Function>
  }
} as const

export const Emits = ['destroy']

export type FPropsType = ExtractPropTypes<typeof Props>
