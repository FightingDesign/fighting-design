import Dialog from './src/dialog.vue'

import { install } from '../_utils'

export const FDialog = install(Dialog)

export type DialogInstance = InstanceType<typeof Dialog>

export type { DialogPropsType } from './src/dialog'

export type { DialogCallBackInterface } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FDialog: typeof FDialog
  }
}
