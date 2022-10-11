import Divider from './src/divider.vue'

import { install } from '../_utils'

export const FDivider = install(Divider)

export type DividerInstance = InstanceType<typeof Divider>

export type { DividerPropsType } from './src/divider'

export type { DividerPositionType, DividerType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FDivider: typeof FDivider
  }
}
