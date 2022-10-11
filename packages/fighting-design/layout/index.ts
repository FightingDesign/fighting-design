import Layout from './src/layout.vue'

import { install } from '../_utils'

export const FLayout = install(Layout)

export type LayoutInstance = InstanceType<typeof Layout>

export type { LayoutPropsType } from './src/layout'

export type { LayoutDirectionType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FLayout: typeof FLayout
  }
}
