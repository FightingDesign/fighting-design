import Popup from './src/popup.vue'

import { install } from '../_utils'

export const FPopup = install(Popup)

/** popup 组件实例类型 */
export type PopupInstance = InstanceType<typeof Popup>

export * from './src/interface.d'

export default FPopup
