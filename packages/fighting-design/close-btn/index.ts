import CloseBtn from './src/close-btn.vue'

import style from '../../fighting-theme/src/close-btn.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FCloseBtn: ComponentPublicInstance = installWebComponent(CloseBtn, style)

export * from './src/interface'

export default FCloseBtn
