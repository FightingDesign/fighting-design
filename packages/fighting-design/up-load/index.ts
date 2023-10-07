import UpLoad from './src/up-load.vue'

import style from '../../fighting-theme/src/up-load.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FUpLoad: ComponentPublicInstance = installWebComponent(UpLoad, style)

export * from './src/interface'

export default FUpLoad
