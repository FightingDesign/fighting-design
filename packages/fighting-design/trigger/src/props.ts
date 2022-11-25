import type { ExtractPropTypes } from 'vue'

export const Props = {} as const

export type TriggerPropsType = ExtractPropTypes<typeof Props>
