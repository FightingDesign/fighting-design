import type { ExtractPropTypes, PropType } from 'vue'

type buttonType = 'default' | 'primary' | 'success' | 'danger' | 'warning'

export const Props = {
  message: {
    type: String,
    default: (): string => '',
    require: true
  },
  type: {
    type: String as PropType<buttonType>,
    default: (): buttonType => 'default',
    validator: (val: buttonType): boolean => {
      return (
        ['default', 'primary', 'success', 'danger', 'warning'] as const
      ).includes(val)
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
  }
} as const

export const Emits = ['close-end']

export type MessageProps = Partial<ExtractPropTypes<typeof Props>>
