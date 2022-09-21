import Button from './src/button.vue'

import { install } from '../_utils'

export const FButton = install(Button)

export type FButtonInstance = InstanceType<typeof FButton>

declare module 'vue' {
  export interface GlobalComponents {
    FButton: typeof FButton
  }
}

export type {
  buttonSize,
  buttonTarget,
  buttonType,
  buttonNativeType
} from './src/interface'
