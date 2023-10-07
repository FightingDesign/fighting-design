import Aside from './src/aside.vue'

import style from '../../fighting-theme/src/aside.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FAside: ComponentPublicInstance = installWebComponent(Aside, style)

export * from './src/interface'

export default FAside
