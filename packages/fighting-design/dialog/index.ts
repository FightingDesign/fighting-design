import FDialog from './src/dialog.vue'

import { install } from '../_utils'

install(FDialog, FDialog.name)

export type FDialogInstance = InstanceType<typeof FDialog>

export default FDialog
