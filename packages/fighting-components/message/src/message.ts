import type { VNode, ExtractPropTypes, PropType } from 'vue'

export const messageTypes = [
  'default',
  'primary',
  'success',
  'danger',
  'warning'
] as const
export type messageType = typeof messageTypes[number]

export const Props = {
  message: {
    type: String as PropType<VNode | String>,
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
  icon: {
    type: String,
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
    type: String,
    default: (): String => '10vh'
  },
  closeBtn: {
    type: String as PropType<VNode | String>,
    default: ''
  },
  closeEnd: {
    type: Function
  }
} as const

export const Emits = ['destroy']

export type MessageProps = Partial<ExtractPropTypes<typeof Props>>

export type MessageOptions = MessageProps & {
  onDestroy?: () => void
}
