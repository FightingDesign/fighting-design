import Link from './src/link.vue'

import style from '../../fighting-theme/src/link.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FLink: ComponentPublicInstance = installWebComponent(Link, style)

export * from './src/interface.d'

export default FLink
