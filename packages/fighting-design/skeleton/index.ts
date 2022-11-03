import Skeleton from './src/skeleton.vue'

import style from '../../fighting-theme/src/skeleton.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FSkeleton: ComponentPublicInstance = installWebComponent(Skeleton, style)

export * from './src/interface.d'

export default FSkeleton
