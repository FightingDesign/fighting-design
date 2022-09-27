import Progress from './src/progress.vue'

import { install } from '../_utils'

export const FProgress = install(Progress)

export type ProgressInstance = InstanceType<typeof Progress>

export type { ProgressPropsType } from './src/progress'

export type { ProgressType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FProgress: typeof FProgress
  }
}
