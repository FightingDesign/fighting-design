import { notificationPlacements, notificationTypes } from '../../_model/notification/type'
import type { VNode, PropType, ExtractPropTypes } from 'vue'
import type { notificationType, notificationPlacementType } from './interface'

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
    type: String as PropType<notificationType>,
    default: (): notificationType => 'default',
    validator: (val: notificationType): boolean => {
      return notificationTypes.includes(val)
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
    type: String as PropType<notificationPlacementType>,
    default: (): notificationPlacementType => 'top-right',
    validator: (val: notificationPlacementType): boolean => {
      return notificationPlacements.includes(val)
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

export type NotificationPropsType = ExtractPropTypes<typeof Props>
