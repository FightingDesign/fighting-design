import { messageTypes, messagePlacements } from '../../_model/message/type'
import type { VNode, PropType, ExtractPropTypes } from 'vue'
import type { MessageType, MessagePlacementType } from './interface'

export const Props = {
  id: {
    type: String,
    default: (): string => ''
  },
  message: {
    type: [String, Object] as PropType<VNode | string>,
    default: (): string => '',
    require: true
  },
  type: {
    type: String as PropType<MessageType>,
    default: (): MessageType => 'default',
    validator: (val: MessageType): boolean => {
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
    type: String as PropType<MessagePlacementType>,
    default: (): MessagePlacementType => 'top',
    validator: (val: MessagePlacementType): boolean => {
      return messagePlacements.includes(val)
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

export type MessagePropsType = ExtractPropTypes<typeof Props>
