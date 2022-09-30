import type FAlert from './alert.vue'
import type { Props } from './alert'
import type { ExtractPropTypes } from 'vue'

export type AlertType = 'primary' | 'success' | 'danger' | 'warning' | 'default'

export type AlertOverflowType = 'hidden' | ''

export type AlertInstance = InstanceType<typeof FAlert>

export type AlertPropsType = ExtractPropTypes<typeof Props>

declare module 'vue' {
  export interface GlobalComponents {
    FAlert: typeof FAlert
  }
}
