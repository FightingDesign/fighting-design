import Header from './src/header.vue'

import { install } from '../_utils'

export const FHeader = install(Header)

export type FHeaderInstance = InstanceType<typeof Header>

declare module 'vue' {
  export interface GlobalComponents {
    FHeader: typeof FHeader
  }
}
