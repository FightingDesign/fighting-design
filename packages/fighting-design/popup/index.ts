import Popup from './src/popup.vue'

import { install } from '../_utils'

export const FPopup = install(Popup)

export type popupInstance = InstanceType<typeof Popup>

export type { PopupPropsType } from './src/popup'

declare module 'vue' {
  export interface GlobalComponents {
    FPopup: typeof FPopup
  }
}
