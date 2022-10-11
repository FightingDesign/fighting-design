import Header from './src/header.vue'

import { install } from '../_utils'

export const FHeader = install(Header)

export type HeaderInstance = InstanceType<typeof Header>

export type { HeaderPropsType } from './src/header'

declare module 'vue' {
  export interface GlobalComponents {
    FHeader: typeof FHeader
  }
}
