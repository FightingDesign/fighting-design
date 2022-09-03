import { PropType } from 'vue'

export const Props = {
  color: {
    type: String as PropType<string>,
    default: (): string => ''
  }
} as const

export const Emits = {
  click: (evt: MouseEvent): MouseEvent => evt
} as const
