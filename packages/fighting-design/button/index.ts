import Button from './src/button.vue'

import { install } from '../_utils'

export const FButton = install(Button)

export type ButtonInstance = InstanceType<typeof FButton>

export type { ButtonPropsType } from './src/button'

export type {
  ButtonSizeType,
  ButtonTargetType,
  ButtonType,
  ButtonNativeType
} from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FButton: typeof FButton
  }
}
