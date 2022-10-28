import CloseBtn from './src/close-btn.vue'

import { install } from '../_utils'

export const FCloseBtn = install(CloseBtn)

export type CloseBtnInstance = InstanceType<typeof CloseBtn>

export * from './src/interface.d'

export default CloseBtn
