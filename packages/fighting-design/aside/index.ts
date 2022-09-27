import Aside from './src/aside.vue'

import { install } from '../_utils'

export const FAside = install(Aside)

export type AsideInstance = InstanceType<typeof Aside>

export type { AsideProps } from './src/aside'

declare module 'vue' {
  export interface GlobalComponents {
    FAside: typeof FAside
  }
}
