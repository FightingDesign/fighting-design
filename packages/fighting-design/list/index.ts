import List from './src/list.vue'

import { install } from '../_utils'

export const FList =  install(List)

export type FListInstance = InstanceType<typeof List>

declare module 'vue' {
  export interface GlobalComponents {
    FList: typeof FList
  }
}
