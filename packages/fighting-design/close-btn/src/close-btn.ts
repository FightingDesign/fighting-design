import type { ExtractPropTypes, PropType } from 'vue'

export const Props = {
  size: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  },
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export const Emits = {
  click: (evt: MouseEvent): MouseEvent => evt
} as const

export type CloseBtnPropsType = ExtractPropTypes<typeof Props>
