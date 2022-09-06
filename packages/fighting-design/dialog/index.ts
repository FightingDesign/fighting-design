import Dialog from './src/dialog.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Dialog)

export const FDialog = Dialog

export type FDialogInstance = InstanceType<typeof Dialog>
