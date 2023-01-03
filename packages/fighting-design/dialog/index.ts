import Dialog from './src/dialog.vue'

import { install } from '../_utils'

export const FDialog = install(Dialog)

export type DialogInstance = InstanceType<typeof Dialog>

export * from './src/interface.d'

export default FDialog
