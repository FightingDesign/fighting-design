import Empty from './src/empty.vue'

import style from '../../fighting-theme/src/empty.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FEmpty: ComponentPublicInstance = installWebComponent(Empty, style)

export * from './src/interface'

export default FEmpty
