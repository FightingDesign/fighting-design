import type { PropType } from 'vue'

type opacityType = '0' | '0.1' | '0.2' | '0.3' | '0.4' | '0.5' | '0.6' | '0.7' | '0.8' | '0.9' | '1'

export const props = {
  icon: {
    type: String,
    default: (): string => ''
  },
  fontClass: {
    type: String,
    default: (): string => ''
  },
  color: {
    type: String,
    default: (): string => ''
  },
  size: {
    type: String,
    default: (): string => ''
  },
  opacity: {
    type: String as PropType<opacityType>,
    validator(val: string): boolean {
      return ['0', '0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1', ''].includes(val)
    },
    default: (): string => ''
  }
} as const
