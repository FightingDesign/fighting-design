import CloseBtn from './src/close-btn.vue'

import { install } from '../_utils'

export const FCloseBtn = install(CloseBtn)

export type CloseBtnInstance = InstanceType<typeof CloseBtn>

export type { CloseBtnPropsType } from './src/close-btn'

declare module 'vue' {
  export interface GlobalComponents {
    FCloseBtn: typeof FCloseBtn
  }
}
