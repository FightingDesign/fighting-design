import CheckboxGroup from './src/checkbox-group.vue'

import { install } from '../_utils'

export const FCheckboxGroup = install(CheckboxGroup)

export type CheckboxGroupInstance = InstanceType<typeof CheckboxGroup>

export type { CheckboxGroupPropsType } from './src/checkbox-group'

export type { CheckboxGroupLabelType, CheckboxGroupSizeType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FCheckboxGroup: typeof FCheckboxGroup
  }
}
