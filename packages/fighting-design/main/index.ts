import Main from './src/main.vue'

import { install } from '../_utils'

export const FMain = install(Main)

export type MainInstance = InstanceType<typeof Main>

export type { MainPropsType } from './src/main'

declare module 'vue' {
  export interface GlobalComponents {
    FMain: typeof FMain
  }
}
