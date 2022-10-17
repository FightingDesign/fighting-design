import type { ExtractPropTypes, PropType } from 'vue'

export const Props = {
  size: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => ''
  }
} as const

export const Emits = {} as const

export type CloseBtnPropsType = ExtractPropTypes<typeof Props>
