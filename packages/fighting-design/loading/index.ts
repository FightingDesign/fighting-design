import Loading from './src/loading.vue'

import { install } from '../_utils'

export const FLoading = install(Loading)

export type FLoadingInstance = InstanceType<typeof Loading>

declare module 'vue' {
  export interface GlobalComponents {
    FLoading: typeof FLoading
  }
}
