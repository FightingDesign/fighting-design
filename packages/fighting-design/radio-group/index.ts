import RadioGroup from './src/radio-group.vue'

import { install } from '../_utils'

export const FRadioGroup = install(RadioGroup)

export type RadioGroupInstance = InstanceType<typeof RadioGroup>

declare module 'vue' {
  export interface GlobalComponents {
    FRadioGroup: typeof FRadioGroup
  }
}

export type { radioGroupSizeType } from './src/interface'
