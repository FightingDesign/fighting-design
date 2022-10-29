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
    required: true
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
    type: String as PropType<MessagePlacementType>,
    default: (): MessagePlacementType => 'top',
    validator: (val: MessagePlacementType): boolean => {
      return messagePlacements.includes(val)
    }
  },
  zIndex: {
    type: Number,
    default: (): null => null
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

export type MessagePropsType = ExtractPropTypes<typeof Props>
