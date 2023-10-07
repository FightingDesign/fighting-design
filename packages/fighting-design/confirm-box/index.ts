import ConfirmBox from './src/confirm-box.vue'

import style from '../../fighting-theme/src/confirm-box.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FConfirmBox: ComponentPublicInstance = installWebComponent(ConfirmBox, style)

export * from './src/interface'

export default FConfirmBox
