import Space from './src/space.vue'

import { install } from '../_utils'

export const FSpace = install(Space)

export type SpaceInstance = InstanceType<typeof Space>

export type { SpacePropsType } from './src/space'

export type { SpaceSizeType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FSpace: typeof FSpace
  }
}
