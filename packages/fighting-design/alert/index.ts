import Alert from './src/alert.vue'

import { install } from '../_utils'

export const FAlert = install(Alert)

export type FAlertInstance = InstanceType<typeof Alert>

declare module 'vue' {
  export interface GlobalComponents {
    FAlert: typeof FAlert
  }
}

export type { alertType, fixedStyleInterface, overflowType } from './src/interface'
