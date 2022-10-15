import SvgIcon from './src/svg-icon.vue'

import { install } from '../_utils'

export const FSvgIcon = install(SvgIcon)

export type SvgIconInstance = InstanceType<typeof SvgIcon>

export type { SvgIconPropsType } from './src/svg-icon'

declare module 'vue' {
  export interface GlobalComponents {
    FSvgIcon: typeof FSvgIcon
  }
}
