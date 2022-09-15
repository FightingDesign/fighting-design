import Empty from './src/empty.vue'

import { install } from '../_utils'

export const FEmpty = install(Empty)

export type FEmptyInstance = InstanceType<typeof Empty>

declare module 'vue' {
  export interface GlobalComponents {
    FEmpty: typeof FEmpty
  }
}
