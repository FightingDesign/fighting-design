import Breadcrumb from './src/breadcrumb.vue'

import style from '../../fighting-theme/src/breadcrumb.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FBreadcrumb: ComponentPublicInstance = installWebComponent(Breadcrumb, style)

export * from './src/interface.d'

export default FBreadcrumb
