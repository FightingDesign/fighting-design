import type { PropType, ExtractPropTypes } from 'vue'

export const Props = {
  padding: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '0'
  }
} as const

export type MainPropsType = ExtractPropTypes<typeof Props>
