import Space from './src/space.vue'

import style from '../../fighting-theme/src/space.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FSpace: ComponentPublicInstance = installWebComponent(Space, style)

export * from './src/interface.d'

export default FSpace
