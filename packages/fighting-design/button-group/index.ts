import ButtonGroup from './src/button-group.vue'

import { install } from '../_utils'

export const FButtonGroup = install(ButtonGroup)

export type ButtonGroupInstance = InstanceType<typeof ButtonGroup>

export type { ButtonGroupPropsType } from './src/button-group'

export type { ButtonGroupSizeType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FButtonGroup: typeof FButtonGroup
  }
}
