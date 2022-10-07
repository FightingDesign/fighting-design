import Checkbox from './src/checkbox.vue'

import { install } from '../_utils'

export const FCheckbox = install(Checkbox)

export type CheckboxInstance = InstanceType<typeof FCheckbox>

export type { checkboxProps } from './src/checkbox'

declare module 'vue' {
  export interface GlobalComponents {
    FCheckbox: typeof FCheckbox
  }
}
