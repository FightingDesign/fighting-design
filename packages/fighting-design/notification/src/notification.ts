import { notificationPlacements, notificationTypes } from '../../_model/notification/type'
import type { VNode, PropType, ExtractPropTypes } from 'vue'
import type { NotificationType, NotificationPlacementType } from './interface'

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
    required: true
  },
  type: {
    type: String as PropType<NotificationType>,
    default: (): NotificationType => 'default',
    validator: (val: NotificationType): boolean => {
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
    type: Object as PropType<VNode>,
    default: (): null => null
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
    type: String as PropType<NotificationPlacementType>,
    default: (): NotificationPlacementType => 'top-right',
    validator: (val: NotificationPlacementType): boolean => {
      return notificationPlacements.includes(val)
    }
  },
  zIndex: {
    type: Number,
    default: (): number => 1000
  },
  closeBtn: {
    type: [String, Object] as PropType<VNode | string>,
    default: (): null => null
  },
  closeEnd: {
    type: Function,
    default: (): null => null
  }
} as const

export const Emits = ['destroy']

export type NotificationPropsType = ExtractPropTypes<typeof Props>
