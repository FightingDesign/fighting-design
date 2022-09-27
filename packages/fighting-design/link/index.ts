import Link from './src/link.vue'

import { install } from '../_utils'

export const FLink = install(Link)

export type LinkInstance = InstanceType<typeof Link>

export type { LinkPropsType } from './src/link'

export type { LinkType, LinkTargetType, LinkHoverType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FLink: typeof FLink
  }
}
