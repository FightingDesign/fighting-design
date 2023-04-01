import Dialog from './src/dialog.vue'

import { install } from '../_utils'

export const FDialog = install(Dialog)

/** dialog 组件实例类型 */
export type DialogInstance = InstanceType<typeof Dialog>

export * from './src/interface'

export default FDialog
