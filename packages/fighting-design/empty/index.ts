import Empty from './src/empty.vue'

import { install } from '../_utils'

export const FEmpty = install(Empty)

export type EmptyInstance = InstanceType<typeof Empty>

export type { EmptyPropsType } from './src/empty'

declare module 'vue' {
  export interface GlobalComponents {
    FEmpty: typeof FEmpty
  }
}
