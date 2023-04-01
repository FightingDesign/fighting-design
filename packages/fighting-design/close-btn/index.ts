import CloseBtn from './src/close-btn.vue'

import { install } from '../_utils'

export const FCloseBtn = install(CloseBtn)

/** close-btn 组件实例类型 */
export type CloseBtnInstance = InstanceType<typeof CloseBtn>

export * from './src/interface'

export default FCloseBtn
