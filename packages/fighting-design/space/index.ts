import Space from './src/space.vue'

import { install } from '../_utils'

export const FSpace = install(Space)

export type FSpaceInstance = InstanceType<typeof Space>

declare module 'vue' {
  export interface GlobalComponents {
    FSpace: typeof FSpace
  }
}
