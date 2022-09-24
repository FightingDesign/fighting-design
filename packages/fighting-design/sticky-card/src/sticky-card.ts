import type { PropType } from 'vue'

export const Props = {
  open: {
    type: Boolean,
    default: (): boolean => false
  },
  background: {
    type: String,
    default: (): string => ''
  },
  openText: {
    type: String,
    default: (): string => '关闭'
  },
  closeText: {
    type: String,
    default: (): string => '开启'
  },
  openHeight: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '300px'
  }
} as const

export const Emits = {} as const
