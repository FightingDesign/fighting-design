import Dialog from './src/dialog.vue'

import { install } from '../_utils'

export const FDialog = install(Dialog)

export type FDialogInstance = InstanceType<typeof Dialog>

declare module 'vue' {
  export interface GlobalComponents {
    FDialog: typeof FDialog
  }
}
