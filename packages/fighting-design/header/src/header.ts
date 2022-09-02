import type { PropType, ExtractPropTypes } from 'vue'

export const Props = {
  height: {
    type: String as PropType<string>,
    default: (): string => ''
  }
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
