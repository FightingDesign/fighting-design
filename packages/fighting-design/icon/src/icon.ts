import type { PropType, ExtractPropTypes } from 'vue'

export const Props = {
  icon: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  fontClass: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  color: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  size: {
    type: String as PropType<string>,
    default: (): string => ''
  }
} as const

export type FPropsType = ExtractPropTypes<typeof Props>

export const Emits = {
  click: (evt: Event): Event => evt
} as const
