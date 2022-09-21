import Layout from './src/layout.vue'

import { install } from '../_utils'

export const FLayout = install(Layout)

export type FLayoutInstance = InstanceType<typeof Layout>

declare module 'vue' {
  export interface GlobalComponents {
    FLayout: typeof FLayout
  }
}

export type { layoutDirectionType } from './src/interface'
