import BackTop from './src/back-top.vue'

import style from '../../fighting-theme/src/back-top.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FBackTop: ComponentPublicInstance = installWebComponent(BackTop, style)

export * from './src/interface.d'

export default FBackTop
