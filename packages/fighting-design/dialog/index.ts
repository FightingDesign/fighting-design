import Dialog from './src/dialog.vue'

import { install } from '../_utils'

export const FDialog = /* @__PURE__ */ () => install(Dialog)

export type FDialogInstance = InstanceType<typeof Dialog>
