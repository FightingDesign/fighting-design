import List from './src/list.vue'

import { install } from '../_utils'

export const FList = install(List)

export type ListInstance = InstanceType<typeof List>

export type { ListPropsType } from './src/list'

export type { ListSizeType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FList: typeof FList
  }
}
