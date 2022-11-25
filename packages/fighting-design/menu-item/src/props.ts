import type { ExtractPropTypes } from 'vue'

export const Props = {} as const

export type MenuItemPropsType = ExtractPropTypes<typeof Props>
