import Popup from './src/popup.vue'

import style from '../../fighting-theme/src/popup.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FPopup: ComponentPublicInstance = installWebComponent(Popup, style)

export * from './src/interface.d'

export default FPopup
