import Loading from './src/loading.vue'

import style from '../../fighting-theme/src/loading.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FLoading: ComponentPublicInstance = installWebComponent(Loading, style)

export * from './src/interface.d'

export default FLoading
