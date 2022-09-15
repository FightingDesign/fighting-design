import Radio from './src/radio.vue'

import { install } from '../_utils'

export const FRadio = install(Radio)

export type FRadioInstance = InstanceType<typeof FRadio>

declare module 'vue' {
  export interface GlobalComponents {
    FRadio: typeof FRadio
  }
}
