import type { ExtractPropTypes } from 'vue'

export const Props = {} as const

export type FormProps = ExtractPropTypes<typeof Props>
