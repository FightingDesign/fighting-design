import type { PropType } from 'vue'

export const Props = {
  count: {
    type: Number as PropType<number>,
    default: (): number => 5
  },
  readonly: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  modelValue: {
    type: Number as PropType<number>,
    default: (): number => 0
  }
} as const

export const Emits = {
  'update:modelValue': (index: number) => index
} as const
