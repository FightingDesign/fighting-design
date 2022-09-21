import Link from './src/link.vue'

import { install } from '../_utils'

export const FLink = install(Link)

export type FLinkInstance = InstanceType<typeof Link>

declare module 'vue' {
  export interface GlobalComponents {
    FLink: typeof FLink
  }
}

export type { linkType, linkTarget, linkHover } from './src/interface'
