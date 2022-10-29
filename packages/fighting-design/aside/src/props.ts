import type { PropType, ExtractPropTypes } from 'vue'

export const Props = {
  width: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '200px'
  },
  padding: {
    type: [String, Number] as PropType<string | number>,
    default: (): number => 0
  }
} as const

export type AsidePropsType = ExtractPropTypes<typeof Props>
