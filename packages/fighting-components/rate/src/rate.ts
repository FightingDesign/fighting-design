import type { PropType } from 'vue'

export const Props = {
  count: {
    type: Number as PropType<Number>,
    default: 5
  },
  readonly: {
    type: Boolean as PropType<Boolean>,
    default: false
  },
  modelValue: {
    type: Number as PropType<Number>,
    default: 0
  }
} as const

export const Emits = ['update:modelValue']
