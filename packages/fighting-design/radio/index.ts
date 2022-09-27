import Radio from './src/radio.vue'

import { install } from '../_utils'

export const FRadio = install(Radio)

export type RadioInstance = InstanceType<typeof FRadio>

export type { RadioPropsType } from './src/radio'

declare module 'vue' {
  export interface GlobalComponents {
    FRadio: typeof FRadio
  }
}
