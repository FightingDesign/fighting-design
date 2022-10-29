import Popup from './src/popup.vue'

import { install } from '../_utils'

export const FPopup = install(Popup)

export type PopupInstance = InstanceType<typeof Popup>

export * from './src/interface.d'

export default Popup
