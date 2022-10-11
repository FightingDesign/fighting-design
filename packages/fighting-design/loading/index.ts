import Loading from './src/loading.vue'

import { install } from '../_utils'

export const FLoading = install(Loading)

export type LoadingInstance = InstanceType<typeof Loading>

export type { LoadingPropsType } from './src/loading'

declare module 'vue' {
  export interface GlobalComponents {
    FLoading: typeof FLoading
  }
}
