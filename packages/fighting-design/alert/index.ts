import Alert from './src/alert.vue'

import { install } from '../_utils'

export const FAlert = install(Alert)

export type AlertInstance = InstanceType<typeof Alert>

export type { AlertProps } from './src/alert'

export type { AlertType, AlertOverflowType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FAlert: typeof FAlert
  }
}
