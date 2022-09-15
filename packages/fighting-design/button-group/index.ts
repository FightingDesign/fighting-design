import ButtonGroup from './src/button-group.vue'

import { install } from '../_utils'

export const FButtonGroup = install(ButtonGroup)

export type FButtonGroupInstance = InstanceType<typeof ButtonGroup>

declare module 'vue' {
  export interface GlobalComponents {
    FButtonGroup: typeof FButtonGroup
  }
}
