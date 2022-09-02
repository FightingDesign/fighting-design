import type { ExtractPropTypes, PropType } from 'vue'

export const Props = {
  type: {
    type: String as PropType<string>,
    default: (): string => ''
  }
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
