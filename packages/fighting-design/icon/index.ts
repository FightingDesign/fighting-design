import Icon from './src/icon.vue'

import { install } from '../_utils'

export const FIcon = install(Icon)

export type IconInstance = InstanceType<typeof Icon>

export type { IconPropsType } from './src/icon'

declare module 'vue' {
  export interface GlobalComponents {
    FIcon: typeof FIcon
  }
}
