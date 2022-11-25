import type { ExtractPropTypes } from 'vue'

export const Props = {} as const

export type MenuPropsType = ExtractPropTypes<typeof Props>
