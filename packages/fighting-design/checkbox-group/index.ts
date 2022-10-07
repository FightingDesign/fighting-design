import CheckboxGroup from './src/checkbox-group.vue'

import { install } from '../_utils'

export const FCheckboxGroup = install(CheckboxGroup)

export type CheckboxGroupInstance = InstanceType<typeof CheckboxGroup>

export type { CheckboxGroupTypes, CheckboxLabelType } from './src/checkbox-group'

declare module 'vue' {
  export interface GlobalComponents {
    FRadioGroup: typeof FCheckboxGroup
  }
}
