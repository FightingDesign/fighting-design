import RadioGroup from './src/radio-group.vue'

import { install } from '../_utils'

export const FRadioGroup = install(RadioGroup)

export type RadioGroupInstance = InstanceType<typeof RadioGroup>

export type { RadioGroundPropsType } from './src/radio-group'

export type { RadioGroupSizeType, RadioLabelType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FRadioGroup: typeof FRadioGroup
  }
}
