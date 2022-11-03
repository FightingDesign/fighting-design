import Progress from './src/progress.vue'

import style from '../../fighting-theme/src/progress.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FProgress: ComponentPublicInstance = installWebComponent(Progress, style)

export * from './src/interface.d'

export default FProgress
