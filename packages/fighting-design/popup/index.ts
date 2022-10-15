import Popup from './src/popup.vue'

import { install } from '../_utils'

export const FPopup = install(Popup)

export type PopupInstance = InstanceType<typeof Popup>

export type { PopupPropsType } from './src/popup'

export type { PopupDirectionType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FPopup: typeof FPopup
  }
}
