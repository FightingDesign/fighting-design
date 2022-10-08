import Checkbox from './src/checkbox.vue'

import { install } from '../_utils'

export const FCheckbox = install(Checkbox)

export type CheckboxInstance = InstanceType<typeof FCheckbox>

export type { CheckboxPropsType } from './src/checkbox'

export type { CheckboxLabelType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FCheckbox: typeof FCheckbox
  }
}
