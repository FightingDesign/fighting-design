import type { VNode, PropType, ExtractPropTypes } from 'vue'

export const messageTypes = [
  'default',
  'primary',
  'success',
  'danger',
  'warning'
] as const

export const notificationDefaultIcon = {
  default: 'f-icon-prompt-fill',
  primary: 'f-icon-remind-fill',
  success: 'f-icon-success-fill',
  danger: 'f-icon-reeor',
  warning: 'f-icon-warning-fill'
}

export type messageType = typeof messageTypes[number]

const messagePlacement = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right'
] as const

export type messagePlacementType = typeof messagePlacement[number]

export const Props = {
  id: {
    type: String,
    default: (): string => ''
  },
  title: {
    type: [String, Object] as PropType<VNode | string>,
    default: (): string => ''
  },
  message: {
    type: [String, Object] as PropType<VNode | string>,
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
    type: Boolean,
    default: (): boolean => false
  },
  duration: {
    type: Number,
    default: (): number => 3000
  },
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  showIcon: {
    type: Boolean,
    default: (): boolean => true
  },
  icon: {
    type: [String, Object] as PropType<VNode | string>,
    default: (): string => ''
  },
  color: {
    type: String,
    default: (): string => ''
  },
  background: {
    type: String,
    default: (): string => ''
  },
  offset: {
    type: Number,
    default: (): number => 20
  },
  placement: {
    type: String as PropType<messagePlacementType>,
    default: (): messagePlacementType => 'top-right',
    validator: (val: messagePlacementType): boolean => {
      return messagePlacement.includes(val)
    }
  },
  zIndex: {
    type: Number,
    default: (): number => 1000
  },
  closeBtn: {
    type: [String, Object] as PropType<VNode | string>,
    default: (): string => ''
  },
  closeEnd: {
    type: Function
  }
} as const

export const Emits = ['destroy']

export type FPropsType = ExtractPropTypes<typeof Props>
