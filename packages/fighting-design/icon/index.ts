import Icon from './src/icon.vue'

import { install } from '../_utils'

export const FIcon = install(Icon)

export type FIconInstance = InstanceType<typeof Icon>

declare module 'vue' {
  export interface GlobalComponents {
    FIcon: typeof FIcon
  }
}
