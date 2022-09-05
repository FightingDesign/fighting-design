import FDialog from './src/dialog.vue'

import { install } from '../_utils'

export type FDialogInstance = InstanceType<typeof FDialog>

export default install(FDialog, FDialog.name)
