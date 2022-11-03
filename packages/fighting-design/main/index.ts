import Main from './src/main.vue'

import style from '../../fighting-theme/src/main.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FMain: ComponentPublicInstance = installWebComponent(Main, style)

export * from './src/interface.d'

export default FMain
